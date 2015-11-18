/**
 * Created by S00299 on 17/11/2015.
 */
(function () {
  'use strict';
  angular.module('coolPhotos')
    .constant('LOCALES', {
      'locales': {
        'en_US': 'English',
        'ar_ae':  'العربية',
        'ru_RU': 'Русский'
      },
      'preferredLocale': 'en_US'
    })
    .constant('API',{
      "domain":'https://api.500px.com/v1/',
      "consumerKey": 'nL0nivxA4vjhVpD0VpiXIgqOXgShgst3kR1bKF8S'
    })


}());

