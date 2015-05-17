/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);

	// Ionic Starter App

	// angular.module is a global place for creating, registering and retrieving Angular modules
	// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
	// the 2nd parameter is an array of 'requires'
	// 'starter.services' is found in services.js
	// 'starter.controllers' is found in controllers.js
	angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

	.run(function($ionicPlatform) {
	  $ionicPlatform.ready(function() {
	    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
	    // for form inputs)
	    if(window.cordova && window.cordova.plugins.Keyboard) {
	      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
	    }
	    if(window.StatusBar) {
	      // org.apache.cordova.statusbar required
	      StatusBar.styleDefault();
	    }
	  });
	})

	.config(function($stateProvider, $urlRouterProvider) {

	  // Ionic uses AngularUI Router which uses the concept of states
	  // Learn more here: https://github.com/angular-ui/ui-router
	  // Set up the various states which the app can be in.
	  // Each state's controller can be found in controllers.js
	  $stateProvider

	    // setup an abstract state for the tabs directive
	    .state('tab', {
	      url: "/tab",
	      abstract: true,
	      templateUrl: "templates/tabs.html"
	    })

	    // Each tab has its own nav history stack:

	    .state('tab.dash', {
	      url: '/dash',
	      views: {
	        'tab-dash': {
	          templateUrl: 'templates/tab-dash.html',
	          controller: 'DashCtrl'
	        }
	      }
	    })

	    .state('tab.friends', {
	      url: '/friends',
	      views: {
	        'tab-friends': {
	          templateUrl: 'templates/tab-friends.html',
	          controller: 'FriendsCtrl'
	        }
	      }
	    })
	    .state('tab.friend-detail', {
	      url: '/friend/:friendId',
	      views: {
	        'tab-friends': {
	          templateUrl: 'templates/friend-detail.html',
	          controller: 'FriendDetailCtrl'
	        }
	      }
	    })

	    .state('tab.account', {
	      url: '/account',
	      views: {
	        'tab-account': {
	          templateUrl: 'templates/tab-account.html',
	          controller: 'AccountCtrl'
	        }
	      }
	    });

	  // if none of the above states are matched, use this as the fallback
	  $urlRouterProvider.otherwise('/tab/dash');

	});



/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	angular.module('starter.controllers', [])

	.controller('DashCtrl', function($scope) {
	})

	.controller('FriendsCtrl', function($scope, Friends) {
	  $scope.friends = Friends.all();
	  $scope.friend = "neal g";
	})

	.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
	  $scope.friend = Friends.get($stateParams.friendId);
	})

	.controller('AccountCtrl', function($scope) {
	});


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	angular.module('starter.services', [])

	/**
	 * A simple example service that returns some data.
	 */
	.factory('Friends', function() {
	  // Might use a resource here that returns a JSON array

	  // Some fake testing data
	  var friends = [
	    { id: 0, name: 'Scruff McGruff' },
	    { id: 1, name: 'G.I. Joe' },
	    { id: 2, name: 'Miss Frizzle' },
	    { id: 3, name: 'Ash Ketchum' },
	    { id: 4, name: 'Herp Potatir'}
	  ];

	  return {
	    all: function() {
	      return friends;
	    },
	    get: function(friendId) {
	      // Simple index lookup
	      return friends[friendId];
	    }
	  }
	});


/***/ }
/******/ ]);