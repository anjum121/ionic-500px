/**
 * Created by Anjum | anjum.nawab@mercator.com on 17/11/2015.
 */
(function () {
  'use strict';
  angular.module('coolPhotos')
    .factory('apiFactory', ['$log', 'Restangular', 'API', factoryFunction]);

  function factoryFunction($log, Restangular, API) {
    return {
      getPhotos: function (featureed, pageNum) {
        var param = {
          feature: featureed,
          consumer_key: API.consumerKey,
          page: pageNum,
          image_size: 440

        };

        console.log(param)

        return Restangular.all('')
          .get("photos", param)
          .then(function (data) {
            return data
          }, function (errro) {
            return errro
          });

//https://api.500px.com/v1/photos?feature=popular
        // GET /accounts/123/places?query=param with request header: x-user:mgonto
        // $scope.loggedInPlaces = firstAccount.getList("places", {query: param}, {'x-user': 'mgonto'})
        //https://api.500px.com/v1/photos?feature=user&consumer_key=EWgzL1U9OU6aaWqfvSi3p5Qk2INdPOOwDct5TiF9&username=Basel&page=1
      },

      getMenu: function () {
        return Restangular.all('')
          .get("photos", param)
          .then(function (success) {
            return success;
          }, function (error) {
            return error;
          });
      }
    }
  }


}());

