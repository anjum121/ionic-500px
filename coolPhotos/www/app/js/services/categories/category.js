/**
 * Created by Anjum | anjum.nawab@mercator.com on 17/11/2015.
 */
(function () {
    'use strict';
    angular.module('coolPhotos')
        .factory('apiCategory', ['$log', 'Restangular', 'API', factoryFunction]);

    function factoryFunction($log, Restangular, API) {
        return {

            getCategory: function (only, exclude, pageNum) {
                var param = {
                    only: only,
                    exclude: exclude,
                    consumer_key: API.consumerKey,
                    page: pageNum,
                    image_size: 440
                };
                return Restangular.all('')
                    .get("photos", param)
                    .then(function (data) {
                        return data
                    }, function (errro) {
                        return errro
                    });

            }
        }
    }


}());


