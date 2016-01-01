(function () {
    'use strict';
    angular.module('coolPhotos')
        .controller('CategoriesCtrl', ['$timeout', 'apiMenuFactory', controllerFun]);

    //Actual function defination comes here
    function controllerFun($timeout, apiMenuFactory) {
        var vm = this;

        console.log(apiMenuFactory);

        vm.welcome = "Welcome page";
        apiMenuFactory.getCategories()
            .then(function (data) {
                console.log(data);
                vm.menu = data.data;
            })

    }


}());
