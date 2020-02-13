var Book = require('../models/book');
var Author = require('../models/author');
var Genre = require('../models/genre');
var BookInstance = require('../models/bookinstance');

var helpers = require('../lib/helpers');

const { body,validationResult } = require('express-validator');
const { sanitizeBody } = require('express-validator');

var async = require('async');

exports.bootstrap_get = function(req, res, next) {

    // Get all authors and genres, which we can use for adding to our book.
    async.parallel({
        authors: function(callback) {
            Author.find(callback);
        },
        genres: function(callback) {
            Genre.find(callback);
        },
    }, function(err, results) {
        if (err) { return next(err); }
        res.render('testjan/bootstrap', { title: 'Create Book nn', authors: results.authors, genres: results.genres });
    });
};

exports.layout_get = function(req, res) {
    res.render('includes/layout', { title: 'Layout testen' });
};

exports.gridview_get = function(req, res) {

    async.parallel({
        book_count: function(callback) {
            Book.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
        },
        book_instance_count: function(callback) {
            BookInstance.countDocuments({}, callback);
        },
        book_instance_available_countJANBAARS: function(callback) {
            BookInstance.countDocuments({status:'Available'}, callback);
        },
        author_count: function(callback) {
            Author.countDocuments({}, callback);
        },
        genre_count: function(callback) {
            Genre.countDocuments({}, callback);
        }
    }, function(err, results) {
        res.render('testjan/gridview', { title: 'Local Library Home', error: err, data: results });
    });
};

exports.javascript_get = function(req, res) {
    res.render('oefeningen/javascript', { title: 'Javascript testen', som: helpers.test(100) });
};

exports.document_get = function(req, res) {
    res.render('oefeningen/document_upload', { title: 'Document upload' });
};

// Oefeningen
exports.foto_list = function(req, res) {
    res.render('prive/image', { title: 'Fotos laden'} );
};
