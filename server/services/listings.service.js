var config = require('config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('listings');

var service = {};

service.getAll = getAll;
service.getById = getById;
service.create = create;
service.update = update;
service.delete = _delete;

module.exports = service;

function getAll() {
    var deferred = Q.defer();

    db.listings.find().toArray(function (err, listings) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        // return listings 
        listings = _.map(listings, function (listing) {
            return listing;
        });

        deferred.resolve(listings);
    });

    return deferred.promise;
}

function getById(_id) {
    var deferred = Q.defer();

    db.listings.findById(_id, function (err, listing) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (listing) {
            // return listing (without hashed password)
            deferred.resolve(listing);
        } else {
            // listing not found
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function getByuserIdd(userId) {
    var deferred = Q.defer();

    db.listings.findByuserId(userId, function (err, listing) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (listing) {
            // return listing (without hashed password)
            deferred.resolve(listing);
        } else {
            // listing not found
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function create(listingParam) {
    var deferred = Q.defer();
 
    var listing = listingParam

         db.listings.insert(
            listing,
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
    

    return deferred.promise;
}

function update(_id, listingParam) {
    var deferred = Q.defer();
        
        var set = {
            landlord_username: listingParam.username,
            nickname: listingParam.nickname,
            address: listingParam.address,
            description: listingParam.description,
            rooms: listingParam.rooms,
        };
            
        db.listing.update(
            { _id: mongo.helper.toObjectID(_id) },
            { $set: set },
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
   

    return deferred.promise;
}

function _delete(_id) {
    var deferred = Q.defer();

    db.listing.remove(
        { _id: mongo.helper.toObjectID(_id) },
        function (err) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve();
        });

    return deferred.promise;
}