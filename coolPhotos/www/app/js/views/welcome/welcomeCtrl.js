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
    vm.currentPage = 1;
    vm.pagesCount = 1;
    var featured = 'popular';
    $scope.isFirstSlide = true;
    $scope.sliderItem = {};

    var getPhotos = function () {
      apiFactory.getPhotos(featured, vm.currentPage)
        .then(function (result) {
          vm.pagesCount = result.total_pages;
          vm.photos = vm.photos.concat(result.photos);
          $scope.$watch('sliderItem.index', function(nv, ov){
            if(nv !== ov){
              if((vm.photos.length - nv) == 4){
                if(vm.pagesCount !== vm.currentPage){
                  vm.currentPage += 1;
                  apiFactory.getPhotos(featured, vm.currentPage)
                    .then(function(result){
                      vm.photos = vm.photos.concat(result.photos);
                    });
                }
              }
            }
          });

        });
    };

    vm.moreDataCanBeLoaded = function () {
      return vm.currentPage <= vm.pagesCount;
    };
    getPhotos();
    vm.loadMore = function () {
      vm.currentPage += 1;
      getPhotos();
    };








  }


}());
