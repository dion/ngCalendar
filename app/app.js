//var d = new Date(); d.setMonth('March'); d.setYear('1995');
angular.module('calendarDemoApp', [])

	.controller('CalendarCtrl', function ($scope) {
		var i = 0,
		    startYear = 2035,
			months = ['January', 'February', 'March', 'April',
					 'May', 'June', 'July', 'August', 'September',
					 'October', 'November', 'December'],
			years = [];

		$scope.data = {
			currentMonth: 'August',
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
			var date = new Date();
			
			months[date.getMonth()];
		};

		$scope.getCurrentYear = function () { 
			$scope.getDate.getFullYear();
		};

		$scope.getRange = function (month, year) {
			console.log($scope.data);

			$scope.range = CalendarRange.getMonthlyRange($scope.getDate());

			console.log($scope.range);
		};

		$scope.months = months;
		$scope.years = years;
		$scope.getRange();
	});