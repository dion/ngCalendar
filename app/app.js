//var d = new Date(); d.setMonth('March'); d.setYear('1995');
angular.module('calendarDemoApp', [])
	.run(['$rootScope', function (scope) {
		scope.data = {
			currentMonth: '7',
			currentYear: '2015'
		};
	}])
	.directive('calendar', function () {
		return {
			restrict: 'E',
			templateUrl: 'calendar.html',
			controller: 'CalendarCtrl'
		}
	})
	.controller('CalendarCtrl', function ($scope) {
		var i = 0,
		    startYear = 2035,
			months = ['January', 'February', 'March', 'April',
					 'May', 'June', 'July', 'August', 'September',
					 'October', 'November', 'December'],
			years = [];

		$scope.data = {
			currentMonth: '7',
			currentYear: '2015'
		};

		while (i <= 40) {
			years.push(startYear--);
			i++;
		}

		$scope.getDate = function () {
			var date = new Date();

			date.setMonth($scope.data.currentMonth);
			date.setYear($scope.data.currentYear);
			return date;
		};

		$scope.getCurrentMonth = function () {
			return $scope.data.currentMonth;
		};

		$scope.getCurrentYear = function () { 
			$scope.getDate.getFullYear();
		};

		$scope.isNotCurrentMonth = function (date) {
			//console.log(date.getMonth(), $scope.getCurrentMonth());
			
			if (date.getMonth() == $scope.getCurrentMonth()) {
				return false;	
			}

			return true;
		};

		$scope.getRange = function (month, year) {
			//console.log($scope.data);

			$scope.range = CalendarRange.getMonthlyRange($scope.getDate());

			//console.log($scope.range);
		};

		$scope.months = months;
		$scope.years = years;
		$scope.getRange();
	});