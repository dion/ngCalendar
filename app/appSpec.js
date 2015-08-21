describe("calendarDemoApp", function () {
	beforeEach(module('calendarDemoApp'));

	describe('CalendarCtrl', function () {
		var ctrl, scope, cal;

		beforeEach(inject(function ($controller, $rootScope, Calendar) {
			scope = $rootScope.$new();

			cal = Calendar;

			ctrl = $controller('CalendarCtrl', {
				$scope: scope,
				getCurrentYear: function () {
					return scope.getDate().getFullYear();
				}
			});
			console.log("beforeEach has run");

		}));

		it('should return current month', function () {			
			expect(scope.getCurrentMonth()).toBeNumber();
			expect(scope.getCurrentMonth()).toBe(new Date().getMonth());
		});

		it('should return current date', function () {
			//expect(cal.getDate(7, '2015').toString()).toBe('');
			console.log(cal.getDate(7, '2015').toString());
		});

		xit('should return current year', function () {
			expect(scope.getCurrentYear()).toBe(new Date().getFullYear());
		});


	});
});