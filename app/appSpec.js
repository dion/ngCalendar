describe("calendarDemoApp", function () {
	beforeEach(module('calendarDemoApp'));

	describe('CalendarCtrl', function () {
		var ctrl, scope;

		beforeEach(inject(function ($controller, $rootScope) {
			scope = $rootScope.$new();

			ctrl = $controller('CalendarCtrl', {
				$scope: scope,
				getCurrentYear: function () {
					return scope.getDate().getFullYear();
				}
			});
		}));

		it('should return current month', function () {			
			expect(scope.getCurrentMonth()).toBeNumber();
		});

		it('should return current date', function () {
			expect(scope.getDate()).toBeDate();
		});

		xit('should return current year', function () {
			expect(scope.getCurrentYear().length).toBe(4);
		});

	});
});