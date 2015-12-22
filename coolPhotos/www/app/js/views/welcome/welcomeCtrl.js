/**
 * Created by S00299 on 17/11/2015.
 */
(function () {
  'use strict';
  angular.module('coolPhotos')
    .controller('welcomeCtrl', ['$scope', '$timeout', 'preLoader', 'viewModelHelper', 'apiFactory', controllerFun]);

  //Actual function defination comes here

  function controllerFun($scope, $timeout, preLoader, viewModelHelper, apiFactory) {
    var vm = this;

    vm.photos = [];
    vm.currentPage = 0;
    vm.pagesCount = 0;
    var featured = 'popular';


    var getPhotos = function () {
      apiFactory.getPhotos(featured, vm.currentPage)
        .then(function (result) {
          vm.pagesCount = result.total_pages;
          vm.photos = vm.photos.concat(result.photos);
          $scope.$broadcast('scroll.infiniteScrollComplete');
        });
    };

    vm.moreDataCanBeLoaded = function () {
      return vm.currentPage <= vm.pagesCount;
    };

    vm.loadMore = function () {
      vm.currentPage += 1;
      getPhotos();
    };


    //vm.getPhotos = function(){
    //  preLoader.show('Loading Photos');
    //
    //  viewModelHelper.apiGet('user',
    //    vm.currentPage,null,
    //    function(result){
    //      vm.photos =  result.data.photos;
    //      vm.pagesCount = result.data.total_pages;
    //      $scope.$broadcast('scroll.infiniteScrollComplete');
    //      preLoader.hide();
    //
    //    });
    //
    //
    //}
    //vm.moreDataCanBeLoaded = function(){
    //  return vm.currentPage <= vm.pagesCount;
    //}
    //vm.loadMore = function(){
    //  vm.currentPage += 1;
    //  vm.getPhotos();
    //}


  }


}());
