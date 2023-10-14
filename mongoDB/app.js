const mongoose = require('mongoose');

const url = "mongodb://127.0.0.1:27017/MongoDB";



mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,

})
.then(() => console.log('Conectado a MongoDB'))
.catch((err) => console.log('No se pudo conectar a MongoDB', err));

const peliculaSchema = mongoose.Schema({
  nombre: String,
  tipo: String,
  año: Number,
});
 
const peliculaModel = mongoose.model('peliculas', peliculaSchema);

const mostrar = async () => {
  const peliculas = await peliculaModel.find();
  console.log(peliculas);
    
}
//crear

const crear = async () => {
  const pelicula = new peliculaModel({
    nombre: 'No manches Frida',
    tipo: 'Familiar',
    año: 2007,
  });
  const result = await pelicula.save();
  console.log(result);
}
//editar

const actualizar = async (id) => {
  const pelicula = await peliculaModel.updateOne({_id: id}, 
    {
    $set: {
      nombre: 'La Sirenita: En busca de lo perdido',
      tipo: 'Infantil',
      año: 2005,
    }
  });

}
// elimianr
const elimianr = async (id) => { 
  const pelicula =await peliculaModel.deleteOne({_id: id});
  console.log(pelicula);  
}

//elimianr('6529fac095faccef25663f3c')
//crear ()
mostrar()
//actualizar('6529f99a95faccef25663f3b')
