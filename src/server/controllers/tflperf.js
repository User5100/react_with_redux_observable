const Service = require('../models/services')

// Fetch all Services
exports.getServices = (request, response) => {
  Service.findAll({
    limit: 1000,
    order: [ ['createdAt', 'ASC'] ]
  }).then((services) => {
    response.send(services)
  }).catch((error) => {
    response.status(500).send(error)
  })
}

// Create a Service
exports.postService = (request, response) => {
  Service.create({
    name: request.name
  }).then(service => {
    response.send(service)
  }).catch(err => {
    response.status(500).send(err)
  })
}

// Update a Service
exports.updateService = (request, response) => {
  Service.findById(request.param('id')).then(service => {
    if (!service) return response.status(404)
    service.name = request.body.name
    return service.save()
  }).then(service => {
    response.send(service)
  }).catch(err => {
    response.status(500).send(err)
  })
}

// Remove a Service
exports.deleteService = (request, response) => {
  Service.destroy({
    where: {
      id: request.param('id')
    }
  }).then(() => {
    response.send()
  }).catch(err => {
    response.status(500).send(err)
  })
}

// Find service
