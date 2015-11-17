/**
 * Created by S00299 on 17/11/2015.
 */
(function(){
    'use strict';
  angular.module('coolPhotos')
    .controller('menuCtrl', ['$timeout', controllerFun]);

  //Actual function defination comes here

  function  controllerFun($timeout){
    var vm = this;

    vm.welcome = "Welcome page";

  }



}());
