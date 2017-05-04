const tflPerf = require('./tflperf')
const tflApi = require('./tflapi')
const cors = require('cors')
var corsOptions

if (process.env.NODE_ENV === 'development') {
  corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
}

module.exports = (app) => {
  app.options('*', cors()) // include before other routes
  app.get('/', cors(corsOptions), tflApi.tflData)
  app.get('/carparks', cors(corsOptions), tflApi.tflCarParkOccupancy)
  app.get('/streets', cors(corsOptions), tflApi.tflDisruptedStreets)
  app.get('/services', cors(corsOptions), tflPerf.getServices)
  app.post('/services', cors(corsOptions), tflPerf.postService)
  app.put('/services/:id', cors(corsOptions), tflPerf.updateService)
  app.delete('/services/:id', tflPerf.deleteService)
}
