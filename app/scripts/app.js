'use strict';

/**
 * @ngdoc overview
 * @name ngChemApp
 * @description
 * # ngChemApp
 *
 * Main module of the application.
 */
angular.module('chembiohubAssayApp')


  .config(function ($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
      
          // catch all route
    // send users to the form page 
    //$urlRouterProvider.otherwise('/404');

    /*$urlRouterProvider.rule(function ($injector, $location) {
       //what this function returns will be set as the $location.url
        var path = $location.path(), normalized = path.toLowerCase();
        if (path != normalized) {
            //instead of returning a new url string, I'll just change the $location.path directly so I don't have to worry about constructing a new url string and so a new state change is not triggered
            $location.replace().path(normalized);
        }
        // because we've returned nothing, no state change occurs
    });*/
      $urlMatcherFactoryProvider.defaultSquashPolicy("slash");      
      var modalInstance;
      $stateProvider
          
        // HOME STATES AND NESTED VIEWS ========================================
        .state('404', {
            url: '/404',
            /*data: {
              login_rule: ""
            },*/
            templateUrl: '404.html',
            controller: function($scope) {

            }
        })

        .state('search', {
            url: '/search?project__project_key&flexmatch&with_substructure&similar_to&fpValue&created__gte&created__lte&molfile&smiles&limit&offset',
            //url: '/search',
            data: {
              login_rule: function($rootScope) {
                return $rootScope.isLoggedIn();
              }
            },
            //params: ['project__project_key', 'flexmatch', 'with_substructure', 'similar_to', 'fpValue', 'created__gte', 'created__lte', 'molfile', 'smiles', 'limit', 'offset', 'random'],
            resolve:{
              gridconfig: ['CompoundListSetup', function(CompoundListSetup){
                  return CompoundListSetup;
              }],
              projectFactory: ['ProjectFactory', function(ProjectFactory) {
                return ProjectFactory;
              }],
              projectKey: ['$stateParams', function($stateParams){
                  return $stateParams.projectKey;
              }],
            },
            views: {
              '': {
                templateUrl: 'views/search.html'
              },
              'form@search': {
                controller: 'SearchCtrl',
                templateUrl: 'views/templates/search-template.html'
              },
              'results@search': {
                templateUrl: 'views/templates/compound-list.html',
                controller: 'BatchesCtrl'
              }
            }
            
            
        })

        .state('help', {
            //parent: 'Default',
            url: '/help',
            data: {
              login_rule: function($rootScope) {
                return $rootScope.isLoggedIn();
              }
            },
            resolve:{
            },
            templateUrl: 'views/help.html',
            controller: function($scope) {

            }
        })

        .state('projects', {
            url: '/projects',
            data: {
              login_rule: function($rootScope) {
                return $rootScope.isLoggedIn();
              }
            },
            resolve:{

              // gridconfig: ['CompoundListSetup', function(CompoundListSetup){
              //     return CompoundListSetup;
              // }]
            },
            templateUrl: 'views/projects.html',
            controller: 'ProjectCtrl'
        })

        .state('projects.list', {
            url: '/list',
            template: '<project-list></project-list><div class="form-views" ui-view="projectlist"></div>',
            controller: function($rootScope) {
              $rootScope.headline = "Projects List";
              $rootScope.subheading = "Click a project title to see more details and add compounds to that project";
              $rootScope.help_lookup = "";
              $rootScope.projectKey = "Projects";
              $rootScope.glyphicon = "folder-open";
            }
        })

        .state('projects.list.project', {
            url: '/:projectKey?limit&offset',
            resolve: {
              projectKey: ['$stateParams', function($stateParams){
                  return $stateParams.projectKey;
              }]
            },
            views: {
              projectlist: {
                templateUrl: 'views/project-summary.html',
                controller: 'ProjectassaysCtrl',
              }
            }
            
        })

        .state('projects.project', {
            url: '/:projectKey',
            templateUrl: 'views/project-full.html',
            controller: function($rootScope, projectKey) {
              $rootScope.projectKey = projectKey;
            },
            resolve: {
              projectKey: ['$stateParams', function($stateParams){
                  return $stateParams.projectKey;
              }]
            }
        })

        // .state('projects.add', {
        //     url: '/add',
        //     templateUrl: 'views/projects-add.html',
        //     controller: function($rootScope){
        //       $rootScope.headline = "Add a new Project"
        //       $rootScope.subheading = ""
        //       $rootScope.help_lookup = ""
        //       $rootScope.glyphicon = "folder-open";
        //     }
        // })




        .state('projects.project.assay_add', {
            data: {
              login_rule: function($rootScope) {
                return $rootScope.isLoggedIn();
              }
            },
            url: '/assay_add',
            templateUrl: 'views/start.html',
            controller: 'AssayaddCtrl'
        })
        
        // nested states 
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('projects.project.assay_add.intro', {
            url: '/intro',
            templateUrl: 'views/assay-add-first.html',
            controller: function($scope) {

              // $scope.wizard.step = 0;
              // $scope.wizard.dynamic = 0;
              // $scope.wizard.totalSteps = 0;
              // applyTicks("intro");
            }
        })

        .state('projects.project.demo.add', {
            url: '/add',
            templateUrl: 'views/demo-add.html',
            controller: function($scope) {
              // $scope.wizard.step = 1;
              // $scope.wizard.dynamic = 41;
              // applyTicks("add");

            }
        })

      
       

        .state("Default", {
          /*url: '/',
          abstract: true,*/
        })
        
        //creating a stateful modal box to show single compound details as directed at:
        // http://www.sitepoint.com/creating-stateful-modals-angularjs-angular-ui-router/
        /*.state('Modal', {
          parent: 'Default',
          onEnter: ["$state", '$modal', function($state, $modal) {
            //console.log($state);
            var modalInstance = $modal.open({
              template: '<div ui-view="modal"></div>',
              backdrop: true,
              windowClass: 'right fade'
            });
            $(document).on("keyup", function(e) {
              if(e.keyCode == 27) {
                $(document).off("keyup");
                $state.go("Default");
              }
            });
       
          }],
          onExit: function() {
            if (modalInstance) {
                modalInstance.close();
            }
          },
          abstract: true
        })

        .state('singleCompound', {
          parent: 'Modal',
          views: {
            "modal@": {
              templateUrl: "views/single-compound.html"
            }
          },*/
          /*resolve:{
              
              modalProvider: ['ModalProvider', function(ModalProvider){
                return ModalProvider;
              }]
            },
            controller: function($scope, $state, modalProvider) {
              this.parent = modalProvider.getModal('projects.list.project');
            }*/
        //});
        


  }).run(function($http, $cookies, $rootScope, $document, $state, LoginService, ProjectFactory, urlConfig, prefix) {

    $http.defaults.headers.post['X-CSRFToken'] = $cookies[prefix + "csrftoken"];
       
        //console.log(urlConfig);
        $rootScope.logged_in_user = {};
    $rootScope.projects = {};

          LoginService.setLoggedIn().then(
                      function(data){
                          $rootScope.logged_in_user = data.objects[0];
                      }
                  );
          ProjectFactory.get().$promise.then(function(res) {
                $rootScope.projects = res.objects;
              });
        
    

    $rootScope.$on('$stateChangeStart', function(e, to) {
      //console.log(to.name);
      if (to.name == '404') return;
      if(to.name.lastIndexOf('singleCompound', 0) === 0) return;
      if (!angular.isFunction(to.data.login_rule)) return;
      var result = to.data.login_rule($rootScope);

      if (result && result.to) {
        //console.log("result and result.to is passing");
        e.preventDefault();
        // Optionally set option.notify to false if you don't want 
        // to retrigger another $stateChangeStart event
        $state.go(result.to, result.params, {notify: false});
      }
      else {
        $state.go('404');
      }
    });

    $rootScope.$on('$stateChangeSuccess', function(e, to) {
      //$('html,body').animate({ scrollTop: target.offset().top}, 1000);
      //$animate.
      $document.scrollTop(0,0);
    });

    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){ 
        console.log(error);
    });

    $rootScope.isLoggedIn = function() {
        var loggedIn = false;
        if($rootScope.logged_in_user.id > 0) {
          loggedIn = true;
        }
        return loggedIn;
    };

    $rootScope.getUrlBase = function() {
      return urlConfig.instance_path.url_frag;
    }


  
    
}).config(['ngClipProvider', function(ngClipProvider) {
    ngClipProvider.setPath("bower_components/zeroclipboard/dist/ZeroClipboard.swf");
}])
.factory('authHttpResponseInterceptor',['$q','$location', 'urlConfig',function($q,$location, urlConfig){
    return {
        response: function(response){
            if (response.status === 401) {
                console.log("Response 401");
            }
            return response || $q.when(response);
        },
        responseError: function(rejection) {
            if (rejection.status === 401) {
                console.log("Response Error 401",rejection);
                window.location = urlConfig.instance_path.url_frag + "login"
                //$location.path('/login').search('returnTo', $location.path());
            }
            return $q.reject(rejection);
        }
    }
}])
.config(['$httpProvider',function($httpProvider) {
    //Http Intercpetor to check auth failures for xhr requests
    $httpProvider.interceptors.push('authHttpResponseInterceptor');
}]);



