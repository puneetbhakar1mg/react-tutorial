const Express = require('express');
const doctorsServer = require('./serverBundle.js');

const app = Express();
const port = 3000;

app.use(Express.static('public'));
app.all('/*', doctorsServer.handleRender);

app.listen(port);
