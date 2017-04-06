'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BookmarkSchema = new Schema({
  Url: { 
    type: String,
    Required: 'Lisa artikli nimi'
  },
});

module.exports = mongoose.model('Bookmarks', BookmarkSchema);
