'use strict';

var mongoose = require('mongoose'),
  Bookmarks = mongoose.model('Bookmarks');

exports.list_all_bookmarks = function(req, res) {
  Bookmark.find({}, function(err, bookmark) {
    if (err)
      res.send(err);
    res.json(bookmark);
  });
};

exports.create_a_bookmark = function(req, res) {
  var new_bookmark = new Bookmark(req.body);
  new_bookmark.save(function(err, bookmark) {
    if (err)
      res.send(err);
    res.json(bookmark);
  });
};

exports.read_a_bookmark = function(req, res) {
  Bookmark.findById(req.params.bookmarkId, function(err, bookmark) {
    if (err)
      res.send(err);
    res.json(bookmark);
  });
};

exports.update_a_bookmark = function(req, res) {
  Bookmark.findOneAndUpdate(req.params.bookmarkId, req.body, {new: true}, function(err, bookmark) {
    if (err)
      res.send(err);
    res.json(bookmark);
  });
};

exports.delete_a_bookmark = function(req, res) {
  Bookmark.remove({
    _id: req.params.bookmarkId
  }, function(err, bookmark) {
    if (err)
      res.send(err);
    res.json({ message: 'Bookmark successfully deleted' });
  });
};
