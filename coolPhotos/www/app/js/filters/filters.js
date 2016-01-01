/**
 * Created by anjum on 2/25/15.
 */
(function(){
    'use strict';
    angular
        .module("coolPhotos")
        .filter('webUrl', function(){
            return function(value){
                return (!value) ? '' : value.replace(/ /g, '-');
            };
        })
        .filter('removeNumber', function(){
            return function(value){
                return (!value) ? '-' : value.replace(/([0-9-]+)/g, '');
            };
        })

        .filter('mySearchFilter', ['$sce', function($sce) {
            return function(label) {

                var html = '<i>' + label + '</i>';

                return $sce.trustAsHtml(html);
            };
        }])

        .filter('myDropdownFilter', ['$sce', function($sce) {
            return function(label, query, option) {

                var html = '<kbd>#' + option.id + '</kbd> ' + label;

                return $sce.trustAsHtml(html);
            };
        }])

        .filter('myListFilter', function() {
            return function (list, query, getLabel) {
                return list;
            };
        })

        .factory('myEditItem', function() {
            return function(removedValue, lastQuery, getLabel) {
                return removedValue ? getLabel(removedValue) + ' :-)' : '';
            };
        })


        .filter('searchFor', function(){
            return function(arr, searchString){
                if(!searchString){
                    return arr;
                }
                var result = [];
                searchString = searchString.toLowerCase();
                // Using the forEach helper method to loop through the array
                angular.forEach(arr, function(item){
                    if(item.title.toLowerCase().indexOf(searchString) !== -1){
                        result.push(item);
                    }
                });

                return result;
            };

        });

}());
