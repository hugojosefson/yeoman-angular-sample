'use strict';

describe('Menu controller', function () {
    var mockMenu, controller, items, scope, $q, $rootScope, $httpBackend;

    beforeEach(function () {

        //Define any underlying mock data.
        items = [
            {
                "id": "item_1",
                "name": "item 1",
                "description": "item 1 details",
                "timestamp": "1349539521000"
            },
            {
                "id": "item_2",
                "name": "item 2",
                "description": "item 2 details",
                "timestamp": "1349651343000"
            }
        ];

        //Create mocks before we define our provider values. Using jasmine spy objects allows us to
        //define mocks succinctly.
        mockMenu = jasmine.createSpyObj('mockMenu', ['get']);

        //Chain a jasmine "andCallFake" method onto the spy so we can return a mock promise object.
        mockMenu.get.andCallFake(function () {

            var deferred;
            deferred = $q.defer();
            deferred.resolve(items);
            return deferred.promise;

        });

        //We load all the module dependencies up front.
        module('yeomanAngularSample');

        //Use the angular $provide service to mock any dependencies;
        module(function ($provide) {
            $provide.value('menu', mockMenu);
        });

        //Injecting all of our services in the "beforeEach" section allows us to avoid cluttering out tests.
        inject(function ($injector, $controller) {
            $q = $injector.get('$q');
            $rootScope = $injector.get('$rootScope');
            $httpBackend = $injector.get('$httpBackend');
            scope = $rootScope.$new();
            controller = $controller('menu', {$scope: scope});
        });


    });

    afterEach(function () {
        $rootScope.$digest();
    });

    it('should load a list of items', function () {

        scope.items.then(function (data) {
            expect(data).toBe(items);
        });

    });
});
       