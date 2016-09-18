var express = require('express');
var app = express();

app.use(express.static('node_modules/foundation-sites'));

app.set('port', (process.env.PORT || 5000));


app.get('/', function (req, res) {
	  res.send('<!doctype html> <html class="no-js" lang="en">   <head>     <meta charset="utf-8" />     <meta http-equiv="x-ua-compatible" content="ie=edge">     <meta name="viewport" content="width=device-width, initial-scale=1.0" />     <title>Foundation Starter Template</title>     <link rel="stylesheet" href="dist/foundation.css" />    </head>   <body>     <h1>Hello, world!</h1>      <script src="vendor/jquery/dist/jquery.min.js"></script>       <script src="node_modules/what-input/what-input.min.js"></script>     <script src="dist/foundation.min.js"></script>        <script>       $(document).foundation();     </script>    </body> </html>'); 
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});