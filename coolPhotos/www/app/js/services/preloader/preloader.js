/**
 * Created by S00299 on 17/11/2015.
 */
(function () {
  'use strict';
  angular.module('coolPhotos')
    .factory('preLoader', ['$ionicLoading', factoryFun]);

  function factoryFun($ionicLoading) {
    return {
      show: function (message) {
        $ionicLoading.show({
          template: message
        });
      },
      hide: function () {
        $ionicLoading.hide();
      }
    }

  }


}());
