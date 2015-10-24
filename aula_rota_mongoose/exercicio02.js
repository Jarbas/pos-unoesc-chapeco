var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pos-unoesc');

var db = mongoose.connection;

db.on('error', function(err){ console.log('Erro de conexao.',err ) ;});
                             
db.on('open', function(){ console.log('Conexão Aberta') });
                             
db.on('conected', function(err){ console.log('Conectado') });
                             
db.on('disconnected', function(){ console.log('Conexão Aberta') });                             
var Cat = mongoose.model('Cat', {name: String});



var Kitty  = new Cat ({name: 'Retard'});

Kitty.save(function (err, data) {
if (err) { console.log('Erro:' , err);  }
    console.log(meow,data);

} );