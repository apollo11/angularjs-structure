/**
 * Created by apollo on 10/01/2016.
 */
app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

   //For unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/index/html');
    $stateProvider
   //Set up the navigation
    .state('sampleUrl1', {
        url: '/sampleUrl1',
        templateUrl: '/components/sample/sampleView.html',
        controller: 'MyController'
    })

    .state('sampleUrl2', {
          url: '/sampleUrl2',
          templateUrl: '/components/test/testView.html',
          controller: 'TestController'
    });

    //use the HTML5 History API
    $locationProvider.html5Mode(true);
});
