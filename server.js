var express = require('express');
const path = require('path')
app = express();
app.use(express.static(path.join(__dirname , "./dist")));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, './dist'));
  });
var port = process.env.PORT || 5000;
app.listen(port, ()=> 
console.log('server started '+ port)
);