App.controller('lineCtrl',["$scope","$state","$http",function($scope, $state,a) {
 

a.get("http://192.168.1.128:5006/gaugelist") 
      .then(function(response) {
        $scope.key12 = response.data.result;
  console.log($scope.key12);
  $scope.myt($scope.key12);
  });

$scope.myt=function(object){
var types = ["line", "stackedline", "fullstackedline"];
$scope.currentType = types[0];
    
    $scope.chartOptions = {
        palette: "#ff0000,#0000ff,#000000,#dd00dd,#77DD77",
        dataSource: object,
        commonSeriesSettings: {
            argumentField: "gaugeId"
        },
        bindingOptions: { 
            "commonSeriesSettings.type": "currentType"
        },
        margin: {
            bottom: 20
        },
        argumentAxis: {
            valueMarginsEnabled: false,
            discreteAxisDivisionMode: "crossLabels",
            grid: {
                visible: true
            }
        },
        series: [
            { valueField: "ITT", name: "ITT" },
            { valueField: "NH", name: "NH" },
            { valueField: "NL", name: "NL" },
            { valueField: "PROPRPM", name: "PROPRPM" },
            { valueField: "TRQ", name: "TRQ" }
        ],
        
        title: { 
            text: "TECH M POC",
            subtitle: {
                text: "(Line Chart)"
            }
        },
        "export": {
            enabled: true
        },
        tooltip: {
            enabled: true,
            customizeTooltip: function (arg) {
                return {
                    text: arg.valueText
                };
            }
        }
    };
    
    $scope.typesOptions = {
        dataSource: types,
        bindingOptions: { 
            value: "currentType"
        }
    };
}

}]);

 