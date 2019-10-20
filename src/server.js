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

app.get('/load', function(req, res){
  var lists = fs.readdirSync('src/saves');
  res.send({lists: lists});
});

app.post('/load', function(req, res){
  var listName = req.body.listName;
  var list = jsonfile.readFileSync('src/saves/' + listName + '.json');
  res.send({list: list});
});

app.listen(8000, function(){});
