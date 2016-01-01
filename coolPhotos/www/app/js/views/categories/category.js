/**
 * Created by Anjum on 1/2/2016.
 */
(function () {
    'use strict';
    angular.module('coolPhotos')
        .controller('CategoryCtrl', [
            '$scope',
            '$timeout',
            'preLoader',
            'viewModelHelper',
            'apiCategory',
            '$ionicHistory',
            '$stateParams',
            controllerFun]);

    //Actual function defination comes here
    function controllerFun($scope, $timeout, preLoader, viewModelHelper, apiCategory, $ionicHistory, $stateParams) {
        var vm = this;

        console.log($stateParams.category);

        vm.photos = [];
        vm.currentPage = 1;
        vm.pagesCount = 1;
        vm.pageTitle = $stateParams.category;
        var only = $stateParams.category;
        var exclude = 'null';

        var getPhotos = function () {
            apiCategory.getCategory(only, exclude, vm.currentPage )
                .then(function (result) {
                    vm.pagesCount = result.total_pages;
                    vm.photos = vm.photos.concat(result.photos);
                    vm.currentPage += 1;
                    $scope.$broadcast('scroll.infiniteScrollComplete');
                });
        };

        vm.moreDataCanBeLoaded = function () {
            return vm.currentPage <= vm.pagesCount;
        };

        vm.loadMore = function () {
            getPhotos();
        };

        $scope.goBack = function(){
            $ionicHistory.goBack();
        };







    }


}());
