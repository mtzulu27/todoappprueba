var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


app.post('/origamifire/:projectName/DELETE/:index', function(req, res){
  for (var dataObject in req.body) {
    obj = JSON.parse(dataObject);
    var itemToUpdate = Object.keys(obj)[req.params.index];
    deleteItemFromFirebase(req.params.projectName, itemToUpdate)
  }
  res.sendStatus(200)
  var error = function (err, response) {
    res.send(err)
  };
})

function deleteItemFromFirebase(projectName, id){
  var options = {
    headers: {
      'X-HTTP-Method-Override': 'DELETE'
    }
  };
  var url = 'https://'+ projectName + '.firebaseio.com/todos/'+ id +'.json'
  request.get(url,options,function(err,res,body){
    if(err){
      console.log(err)
    }
    if(res.statusCode !== 200 ){
      console.log('success')
    }
  });
}