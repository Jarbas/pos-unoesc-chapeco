var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pos-unoesc');

var db = mongoose.connection;

db.on('error', function(err){ console.log('Erro de conexao.',err ) ;});
                             
db.on('open', function(){ console.log('Conexão Aberta') });
                             
db.on('conected', function(err){ console.log('Conectado') });
                             
db.on('disconnected', function(){ console.log('Conexão Aberta') });                 

var Schema = mongoose.Schema;


var json_schema = {  name: {type:String, default:''},
                   description: {type :String, default:''} };


var BeerSchema = new Schema(json_schema);

var Beer = mongoose.model('Beer', BeerSchema),  query ={name: /Brama/i} ;

Beer.remove(query, function(err, data) { 
if (err) { 
    console.log('Erro:' , err );

} else {
console.log('Cerveja excluida', data); 

}
process.exit(0); //finaliar o processo do noede
} );

/*
var mod = {

name: 'Brama',
description: 'dor de cabeça' };


var optional = {  upsert : false, multi : false };


Beer.update(query, mod, function(err, data) { 
if (err) { 
    console.log('Erro:' , err );

} else {
console.log('Cerveja Autalizada:', data); 

}
process.exit(0); //finaliar o processo do noede
} ); */

