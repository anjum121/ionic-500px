/**
 * Created by S00299 on 17/11/2015.
 */
(function () {
    'use strict';
    angular.module('coolPhotos')
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider

                .state('app', {
                    url: '/app',
                    abstract: true,
                    templateUrl: 'app/js/views/menu/menu.html',
                    controller: 'menuCtrl'
                })

                .state('app.welcome', {
                    url: '/welcome',
                    views: {
                        'menuContent': {
                            templateUrl: 'app/js/views/welcome/welcome.html',
                            controller: 'welcomeCtrl as vm'
                        }
                    }
                })

                .state('app.search', {
                    url: '/search',
                    views: {
                        'menuContent': {
                            templateUrl: 'app/js/views/search/search.html',
                            controller: 'settingsCtrl as vm'
                        }
                    }
                })

                .state('app.categories', {
                    url: '/categories',
                    views: {
                        'menuContent': {
                            templateUrl: 'app/js/views/categories/categories.html',
                            controller: 'CategoriesCtrl as vm'
                        }
                    }
                })

                .state('app.category', {
                    url: '/category/:url',
                    views: {
                        'menuContent': {
                            templateUrl: 'app/js/views/categories/category.html',
                            controller: 'CategoryCtrl as vm'
                        }

                    },
                    params:{
                        category:null,
                        url: null
                    }


                })

                .state('app.settings', {
                    url: '/settings',
                    views: {
                        'menuContent': {
                            templateUrl: 'app/js/views/settings/settings.html',
                            controller: 'settingsCtrl'
                        }
                    }
                });
            //
            //.state('app.single', {
            //  url: '/playlists/:playlistId',
            //  views: {
            //    'menuContent': {
            //      templateUrl: 'templates/playlist.html',
            //      controller: 'PlaylistCtrl'
            //    }
            //  }
            //});
            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/app/welcome');
        });
}());
