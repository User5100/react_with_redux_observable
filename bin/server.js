'use strict'
require('dotenv').config()

// Ensure require statements are transpiled through Babel
require('babel-register')

const express = require('express')

// Universal rendering dependencies
// const React = require('react');
// const ReactDOMServer = require('react-dom/server');
// const ReactRouter = require('react-router');
// const StaticRouter = ReactRouter.StaticRouter;
// const _ = require('lodash');
// const fs = require('fs');
// const App = require('../src/app').default;

// Other dependencies
const bodyParser = require('body-parser')
const routes = require('../src/server/controllers/routes')
const config = require('../config')

// const baseTemplate = fs.readFileSync('./index.html');
// Read baseTemplate and create a templating function
// const template = _.template(baseTemplate);

const app = express()

app.set('x-powered-by', false)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use('/dist', express.static('/dist'));

// Server side rendering
// app.use((request, response) => {
// const context = {};
	// body is a long string of html output
// const body = ReactDOMServer.renderToString(
//	React.createElement(StaticRouter, { location: request.url,
//	                                    context: context
//	                                  },
//	                    React.createElement(App)
//	                   )
// );

	/*
	Above same as const body =
		<ServerRouter location={req.url} context={context} >
			<App />
		</ServerRouter>
	*/

	// Send template string 'body' down the wire
// response.write(template({ body: body }));
// response.end();
// })

// Mount application routes
routes(app)

app.listen(config.port, function () {
  console.log(`Listening on port ${config.port}`)
})
