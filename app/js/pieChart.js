 angular.module('PieChartsModule', [])
    .directive('pieWithLegend', function() {
      return {
        scope: {
          data: '='
        },
        link: function ($scope, $element, $attrs) {
          var chartNode = $element.children()[0];
          chartNode.reloadConfiguration();
          $scope.$watch('data', function (newData, oldData) {
            // Update the series data
            chartNode.chart.series[0].setData(newData);
          }, true);       
        },
        template: function () {
          // The directive template HTML is placed inside script tag in the
          // document body for convenience. As usual with Angular Directive
          // templates, you can also use plain template string instead of
          // this function, or place your directive template in a separate
          // file and load it with the `templateUrl` option.
          return document.getElementById('tmpl-pie-with-legend').innerHTML;
        }
      };
    })
    .controller('PieChartsCtrl', function ($scope) {

      $scope.chartData = [
        ["Tunisia", 50.0],
        ["France", 20.0],
        ["Germany ", 15.0],
        ["Italy", 10.0],
      ];

    });
  // Wait until Web Components are loaded and registered
  // before bootstrapping your app
  document.addEventListener('WebComponentsReady', function () {
    angular.element(document).ready(function () {
      angular.bootstrap(document, ['PieChartsModule']);
    });
  });