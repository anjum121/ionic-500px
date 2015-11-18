/**
 * Created by S00299 on 17/11/2015.
 */
(function () {
  'use strict';
  angular.module('coolPhotos')
    .config(function ($translateProvider) {
      $translateProvider.useMissingTranslationHandlerLog();
      $translateProvider.useStaticFilesLoader({
        prefix: 'app/js/lang/locale-',// path to translations files
        suffix: '.json'// suffix, currently- extension of the translations
      });
      $translateProvider.preferredLanguage('en_US');// is applied on first load
      $translateProvider.useLocalStorage();// saves selected language to localStorage
    })
    .config(function (tmhDynamicLocaleProvider) {
      tmhDynamicLocaleProvider.localeLocationPattern('lib/angular-i18n/angular-locale_{{locale}}.js');
    })

   .config(function(RestangularProvider, API) {
    RestangularProvider.setBaseUrl(API.domain);

    

  });
}());
