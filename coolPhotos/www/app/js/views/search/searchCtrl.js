/**
 * Created by massi on 12/30/2015.
 */
(function () {
    'use strict';
    angular.module('coolPhotos')
        .controller('settingsCtrl', ['$timeout', 'apiFactory', 'preLoader', '$scope', controllerFun]);

    //Actual function defination comes here
    function controllerFun($timeout, apiFactory, preLoader, $scope) {

        var vm = this;
        vm.photos = [];
        vm.currentPage = 1;
        vm.pagesCount = 1;
        var only = 'People';
        var exclude = 'null';

        var getPhotos = function () {
            apiFactory.getSearchedImages(only, exclude, vm.currentPage )
                .then(function (result) {
                    vm.pagesCount = result.total_pages;
                    vm.photos = vm.photos.concat(result.photos);
                    vm.currentPage += 1;
                    $scope.$broadcast('scroll.infiniteScrollComplete');
                });
        };

        //vm.getPhotos = function(){
        // // preLoader.show('Loading Photos');
        //    apiFactory.getPhotos(featured, vm.currentPage)
        //  viewModelHelper.apiGet('user', vm.currentPage,null,
        //    function(result){
        //      vm.photos =  result.data.photos;
        //      vm.pagesCount = result.data.total_pages;
        //      $scope.$broadcast('scroll.infiniteScrollComplete');
        //     // preLoader.hide();
        //    });
        //};


        vm.moreDataCanBeLoaded = function () {
            return vm.currentPage <= vm.pagesCount;
        };



        vm.loadMore = function () {

            getPhotos();
        };

    }


}());
