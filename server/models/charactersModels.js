const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://enixun:ksDe3xB0daa4NVSL@journey.sboomej.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'characters'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

const racesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
});
const Race = mongoose.model('race', racesSchema);

const classesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
});
const Class = mongoose.model('class', classesSchema);

const playerCharactersSchema = new Schema({
  name: {
    type: String,
    required: true
  }, 
  age: {
    type: Number,
    required: true
  },
  class: {
    type: String,
    required: true
  },
  race: {
    type: String,
    required: true
  },
  abilityScores: {
    Strength: {
      type: Number,
      required: true
    },
    Dexterity: {
      type: Number,
      required: true
    },
    Constitution: {
      type: Number,
      required: true
    },
    Intelligence: {
      type: Number,
      required: true
    },
    Wisdom: {
      type: Number,
      required: true
    },
    Charisma: {
      type: Number,
      required: true
    },
  }
});
const PlayerCharacter = mongoose.model('player_character', playerCharactersSchema);

// TODO: create a schema for 'person' and use it to create the model for it below
// const personSchema = new Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   mass: String,
//   hair_color: String,
//   skin_color: String,
//   eye_color: String,
//   birth_year: String,
//   gender: String,
//   species: String,
//   species_id: {
//     type: Schema.Types.ObjectId,
//     ref: 'species'
//   },
//   homeworld: String,
//   homeworld_id: {
//     type: Schema.Types.ObjectId,
//     ref: 'planet'
//   },
//   height: Number,
//   films: [{
//     title: String,
//     id: {
//       type: Schema.Types.ObjectId,
//       ref: 'films'
//     }
//   }],
// });
// const Person = mongoose.model('person', personSchema);

// exports all the models in an object to be used in the controller
module.exports = {
  Class,
  PlayerCharacter,
  Race
};
