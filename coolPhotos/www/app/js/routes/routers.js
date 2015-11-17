/**
 * Created by S00299 on 17/11/2015.
 */
(function(){
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
              templateUrl: 'app/js/views/welcome/welcome.html'
            }
          }
        })

        .state('app.search', {
          url: '/search',
          views: {
            'menuContent': {
              templateUrl: 'app/js/views/search/search.html'
            }
          }
        })

        .state('app.browse', {
          url: '/browse',
          views: {
            'menuContent': {
              templateUrl: 'templates/browse.html'
            }
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
