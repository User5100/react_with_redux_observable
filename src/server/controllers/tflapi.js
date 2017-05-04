const rp = require('request-promise')
const config = require('../../../config')
const Observable = require('rxjs').Observable

exports.tflData = (req, res) => {
  return Observable.fromPromise(rp(config.tflUrl))
	                 .switchMap(data => {
	                 	 let parsedData = JSON.parse(data)
	                 	 let length = parsedData.length
	                 	 let modes
	                   modes = parsedData
                               .map(mode => {
                 	               let { modeName, severityLevel } = mode

                 	               return { modeName, severityLevel }
                               })
	                   return Observable.of({ length, modes })
	                 })
	  							 .subscribe(result => {
	  							 	 		return res.json(result)
						       		},
						       		err => console.log(err)
						       )
}

exports.tflCarParkOccupancy = (req, res) => {
  return Observable.fromPromise(rp(config.tflCarParkOccupancy))

	                 .switchMap(data => {
	                 	 let parsedData = JSON.parse(data)

	                   return Observable.of(parsedData)
	                 })
	                 .map(data => data.map(d => ({ name: d.name,
	                                               bays: d.bays
	                                             })))
	                 .retry(3) // retry 3 times on error
	  							 .subscribe(result => {
	  							 	 	 return res.json(result)
						       	 },
						       	 err => res.json(['Cannot connect to API'])
						       )
}

exports.tflDisruptedStreets = (req, res) => {
  return Observable.fromPromise(rp(config.tflDisruptedStreets))
	                 .switchMap(data => {
	                 	 let parsedData = JSON.parse(data)

	                   return Observable.of(parsedData)
	                 })
	                 .map(data => data.map(d => ({ streetName: d.streetName,
	                                               comments: d.comments,
	                                               startLat: d.startLat,
	                                               startLon: d.startLon,
	                                               endLat: d.endLat,
	                                               endLon: d.endLon
	                                             })))
	                 .retry(3)
	  							 .subscribe(result => {
	  							 	 		return res.send(result)
						       		},
						       	  err => res.json(['Cannot connect to API'])
						       )
}
