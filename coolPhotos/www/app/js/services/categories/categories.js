/**
 * Created by anjum on 1/1/2016.
 */

(function () {
    'use strict';
    angular.module('coolPhotos')
        .factory('apiMenuFactory', ['Restangular', '$http', factoryFunction]);

    function factoryFunction(Restangular, $http) {

        return {
            getCategories: function () {
                console.log('Categories');
                return $http.get('app/js/api/categories.json')
                    .success(function (data) {
                        return data;
                    });

            }
        }

    }
}());

