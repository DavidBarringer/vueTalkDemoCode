var express = require('express')
var fs = require('fs')
var jsonfile = require ('jsonfile')
const app = express();
app.use(express.json());

app.post('/save', function(req, res){
  var list = req.body.list;
  var name = req.body.name;
  jsonfile.writeFileSync('src/saves/' + name + '.json', list);
  res.send("Saved");
});

app.listen(8000, function(){});
