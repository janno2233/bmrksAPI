'use strict';
module.exports = function(app) {
  var bookmark = require('../controllers/bookmarksController');


  // bookmarks Routes
  app.route('/bookmarks')
    .get(bookmark.list_all_bookmarks)
    .post(bookmark.create_a_bookmark);


  app.route('/bookmarks/:bookmarkId')
    .get(bookmark.read_a_bookmark)
    .put(bookmark.update_a_bookmark)
    .delete(bookmark.delete_a_bookmark);
};
