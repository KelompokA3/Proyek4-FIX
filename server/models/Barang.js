const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const barangSchema = mongoose.Schema({
  writer: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    maxlength: 50
  },
  description: {
    type: String
  },
  category: {
    type: Number,
    default: 1
  },
  location: {
    type: Number,
    default: 1
  },
  founder: {
    type: String,
    default: 'Unknown'
  },
  images: {
    type: Array,
    default: []
  },
  date: {
    type: Date
  },
  views: {
    type: Number,
    default: 0
  }
});

barangSchema.index({
  title:'text',
  description:'text',
},{
  weights:{
    name: 5,
    description:1
  }
})

const Barang = mongoose.model('Barang', barangSchema);

module.exports = { Barang };
