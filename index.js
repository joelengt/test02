//Modulos y Dependencias
var express = require('express')
var app = express()
var server = require('http').Server(app)

var multer = require('multer')

var path = require('path')
var logger = require('morgan')
var favicon  =require('serve-favicon')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var methodOverride = require('method-override')
var session = require('express-session')


var allowCrossTokenHeader = function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', "GET, POST, PUT, DELETE, OPTIONS")
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization')
	//res.setHeader('Access-Control-Allow-Headers', 'X-ACCESS_TOKEN, Access-Control-Allow-Origin, Authorization, Origin, Content-Length, X-Requested-With, Content-Type, Content-Range, Content-Disposition, Content-Description, token') 
    next()
}

// Configuración del servidor
app.use(allowCrossTokenHeader)

// Prevenir error y mostrar primero en la consola
process.on('uncaughtException', function(err) {
	console.log(err)
})

// middlawares
function middleware (req, res, next) {
  return next()
}

// Configuración del servidor
app.set('port', process.env.PORT || 5000)
app.set('view engine', 'jade')
app.set('views', path.join(__dirname, './views'))

app.use(express.static(path.join(__dirname, './public')))
app.use(express.static(path.join(__dirname, './uploads')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(methodOverride('_method'))


// Session timer estimate Limite: 30 días
app.use(session({ secret: 'usuarioSession', cookie: { maxAge: 15 * 24 * 60 * 60 * 1000 }}))

//app.use(session({ secret: 'usuarioSession'))
app.use(multer({dest: './uploads'}))

// Controllers


// Error 404
app.use(function (req, res) {
	res.statusCode = 404
	res.send('Error 404: Pagina No Encontrada')
})

// Error 500
app.use(function (req, res) {
	res.statusCode = 500
	res.send('Error 500: Error del Servidor, Porfavor intentelo más tarde')
})

//Start server
server.listen(app.set('port'), function (err) {
	if(err) {
		return console.log('Error al iniciar server en el puerto: ' + err)
	}
	console.log('Server iniciado en el puerto: ' + app.set('port'))
})
