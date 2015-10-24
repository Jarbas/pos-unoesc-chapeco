var model = require('./model');
var msg = '';

Controller = {

create:function(req, res){

var dados = { name: 'Heineken', description: 'opa'};

var model = new model(dados);

model.save( function(err, data) { 
if (err) { 
    console.log('Erro:' , err );

} else {
console.log('Cerveja inserida:', data); 
msg = 'Cerveja inserida';

}

res.end(msg);    

} );

},
    
update:function(req, res)  {
    
var model = mongoose.model('model', BeerSchema),  query ={name: /skol/i} ;

var mod = {name: 'Brama',description: 'dor de cabeça' };

var optional = {  upsert : false, multi : false };

model.update(query, mod, function(err, data) { 
if (err) { 
    console.log('Erro:' , err );

} else {
console.log('Cerveja Autalizada:', data); 
msg = 'Cerveja Autalizada';
}
res.end(msg);    

} );
},
    
 
delete:function(req, res) {
var model = mongoose.model('model', BeerSchema),  query ={name: /Brama/i} ;

model.remove(query, function(err, data) { 
    
    if (err) { 
    console.log('Erro:' , err );

} else {
console.log('Cerveja excluida', data); 

}
res.end(msg);    

} );
                  
 }

}    
    

module.exports = controller;