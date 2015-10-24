var model = require('./model');
var msg = '';

controller = {

create:function(req, res){

var dados = req.body;

var model = new model(dados);

model.save( function(err, data) { 
if (err) { 
    console.log('Erro:' , err );

} else {
console.log('Cerveja inserida:', data); 
msg = data;

}

res.json(msg);    

} );

},
    
update:function(req, res)  {
    
var model = mongoose.model('model', BeerSchema),  query ={_id: rep.params.id} ;

var mod = req.mod;

var optional = {  upsert : false, multi : false };

model.update(query, mod, function(err, data) { 
if (err) { 
    console.log('Erro:' , err );

} else {
console.log('Cerveja Autalizada:', data); 
msg = data;
}
res.json(msg);    

} );
},
    
 
delete:function(req, res) {
var model = mongoose.model('model', BeerSchema),  query ={name: /Brama/i} ;

model.remove(query, function(err, data) { 
    
    if (err) { 
    console.log('Erro:' , err );

} else {
console.log('Cerveja excluida', data); 
msg = data;    

}
res.json(msg);    

} );
                  
 }

}    
    

module.exports = controller;