//var d = new Date(); d.setMonth('March'); d.setYear('1995');
angular.module('calendarDemoApp', [])
	/*.run(['$rootScope', function (scope) {
		scope.data = {
			currentMonth: '7',
			currentYear: '2015'
		};
	}])*/
	.directive('calendar', function () {
		return {
			restrict: 'E',
			templateUrl: 'calendar.html',
			controller: 'CalendarCtrl',
			scope: {
				currentMonth: '=',
				currentYear: '='
			}
		}
	})
	.factory('Calendar', function () {

		var cal = {};

		cal.getDate = function (month, year) {
			var date = new Date();

			date.setMonth(month);
			date.setYear(year);

			//console.log(month, year);
			return date;
		};

		return cal;
	})
	.controller('CalendarCtrl', function ($scope, Calendar) {
		var i = 0,
		    startYear = 2035,
			months = ['January', 'February', 'March', 'April',
					 'May', 'June', 'July', 'August', 'September',
					 'October', 'November', 'December'],
			years = [];

		$scope.currentMonth = $scope.currentMonth || new Date().getMonth();
		$scope.currentYear = $scope.currentYear || new Date().getFullYear();	

		while (i <= 40) {
			years.push(startYear--);
			i++;
		}

		$scope.getDate = Calendar.getDate;

		$scope.getCurrentMonth = function () {
			return $scope.currentMonth;
		};

		$scope.getCurrentYear = function () { 
			$scope.getDate($scope.currentMonth, $scope.currentYear).getFullYear();
		};

		$scope.isNotCurrentMonth = function (date, idx) {
			if (idx > 10 && idx < 25) {
				return false;
			} else {
				console.log('test');
				if (date.getMonth() == $scope.getCurrentMonth()) {
					return false;
				}

				return true;
			}
		};

		$scope.getRange = function (month, year) {
			$scope.range = CalendarRange.getMonthlyRange($scope.getDate($scope.currentMonth, $scope.currentYear));
			//console.log($scope.range);
		};

		$scope.months = months;
		$scope.years = years;
		$scope.getRange();
	});