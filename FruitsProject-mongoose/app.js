const { mongoose } = require("mongoose")
const log = console.log
 
mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'no name specified']
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

// Fruit will be regarded as singular form of collection name, collection name would be fruits
const Fruit = mongoose.model('Fruit', fruitSchema);

// const apple = new Fruit({
//   name: 'Apple',
//   rating: 10,
//   review: 'Pretty solid as a fruit'
// });

// apple.save()

// const kiwi = new Fruit({
//   name: 'Kiwi',
//   rating: 10,
//   review: 'Too sour'
// });

// const orange = new Fruit({
//   name: 'Orange',
//   rating: 10,
//   review: 'Too sour'
// });

// const banana = new Fruit({
//   name: 'Banana',
//   rating: 3,
//   review: 'Weired texture'
// });

// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if(err){
//     log(err)
//   }else{
//     log('Successfully saved')
//   }
// })

Fruit.find(function(err, fruits){
  if(err){
    log(err)
  }else{

    // mongoose.connection.close();

    fruits.forEach(fruit => {
      log(fruit.name);
    });
  }
})

// Fruit.updateOne({_id: '62c0f0a37de20ba2def48e89'}, {rating: 4}, function(err){
//   if(err){
//     log(err)
//   }else{
//     log('Update Successfully')
//   }
// })

// Fruit.deleteOne({name: 'Apple'}, function(err){
//   if(err){
//     log(err)
//   }else{
//     log('Delete Successfully')
//   }
// })


const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favourFruit: fruitSchema
})

const Person = mongoose.model('Person', personSchema)

const mango = new Fruit({
  name: 'Mango',
  rating: 7,
  review: 'Decent fruit'
})

mango.save()

Person.updateOne({name: 'John'}, {favourFruit: mango}, function(err){
  if(err){
    log(err)
  }else{
    log('Mango updated')
  }
})

// const person = new Person({
//   name: 'Amy',
//   age: 12,
//   favourFruit: pineapple
// })

// person.save()

// Person.deleteMany({name: 'John'}, function(err){
//   if(err){
//     log(err)
//   }else{
//     log('Delete Successfully')
//   }
// })