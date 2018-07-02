App.controller('guageCtrl',["$scope","$state","$http",function($scope, $state,a) {
   $scope.$on('$viewContentLoaded', function() {    
        $scope.click();
 })

// $scope.list = function() {
//     debugger;
//     Service.List().then(function(data) {
//                 $scope.list = data.articles;
//                 console.log($scope.list);               
//             }, function(err) {
//                 if (err) {
//                     $scope.errorMessage = err;
//                 }
//             })
// }



a.get("http://192.168.1.128:5006/gaugelist") 
      .then(function(response) {
        $scope.key12 = response.data.result;
  console.log($scope.key12);
  $scope.myt($scope.key12);
  });

   var i=0;
    $scope.click=function(i)
    {
        debugger;
         a.get("http://192.168.1.128:5006/gauge?gaugeId="+i)
      .then(function(res){
        $scope.key123 = res.data.result;
        console.log($scope.key123);
        $scope.myt($scope.key123);
      })

    }

     

$scope.myt = function(object){
    
    $scope.value1 = object[i].TRQ;
    $scope.value2 = object[i].PROPRPM;
    $scope.value3 = object[i].NH;
    $scope.value4 = object[i].ITT;
    $scope.value5 = object[i].NL;
    
    $scope.firstOptions = {
        bindingOptions: {
            value: "value1",
           
        },
        scale: {
            startValue: 10,
            endValue: 100,
            tickInterval: 5,
            label: {
                customizeText: function (arg) {
                    return arg.valueText + " ";
                }
            }
        },
        rangeContainer: {
            ranges: [
               
                { startValue: 10, endValue: 100, color: "#ff0000" }
            ]
        },
         valueIndicator: {
                type: "twoColorNeedle",
                color: "red",
                secondFraction: 0.24,
                secondColor: "#f05b41"
            },
        tooltip: { enabled: true },
        title: {
            text: "TRQ",
            font: { size: 28 }
        }
    };

    // 

    
    $scope.secoundOptions = {
        bindingOptions: {
            value: "value2",
            subvalues: "subvalues"
        },
        scale: {
            startValue: 1,
            endValue: 1000,
            tickInterval: 5,
            label: {
                customizeText: function (arg) {
                    return arg.valueText + " ";
                }
            }
        },
        rangeContainer: {
            ranges: [
               
                { startValue: 10, endValue: 1000, color: "#77DD77" }
            ]
        },
        tooltip: { enabled: true },
         valueIndicator: {
                type: "twoColorNeedle",
                color: "red",
                secondFraction: 0.24,
                secondColor: "#f05b41"
            },
        title: {
            text: "PRO",
            font: { size: 28 }
        }
    };

     $scope.thirdOptions = {
        bindingOptions: {
            value: "value3",
            subvalues: "subvalues"
        },
        scale: {
            startValue: 1.0,
            endValue: 100.0,
            tickInterval: 5,
            label: {
                customizeText: function (arg) {
                    return arg.valueText + " ";
                }
            }
        },
        rangeContainer: {
            ranges: [
               
                { startValue: 10, endValue: 100, color: "#0000ff" }
            ]
        },
         valueIndicator: {
                type: "twoColorNeedle",
                color: "red",
                secondFraction: 0.24,
                secondColor: "#f05b41"
            },
        tooltip: { enabled: true },
        title: {
            text: "NH",
            font: { size: 28 }
        }
    };

    $scope.forthOptions = {
        bindingOptions: {
            value: "value4",
            subvalues: "subvalues"
        },
        scale: {
            startValue: 10,
            endValue: 100,
            tickInterval: 5,
            label: {
                customizeText: function (arg) {
                    return arg.valueText + " ";
                }
            }
        },
        rangeContainer: {
            ranges: [
               
                { startValue: 10, endValue: 100, color: "#000000" }
            ]
        },
         valueIndicator: {
                type: "twoColorNeedle",
                color: "red",
                secondFraction: 0.24,
                secondColor: "#f05b41"
            },
        tooltip: { enabled: true },
        title: {
            text: "ITT",
            font: { size: 28 }
        }
    };

        $scope.fiveOptions = {
        bindingOptions: {
            value: "value5",
            subvalues: "subvalues"
        },
        scale: {
            startValue: 10,
            endValue: 1000,
            tickInterval: 5,
            label: {
                customizeText: function (arg) {
                    return arg.valueText + " ";
                }
            }
        },
        rangeContainer: {
            ranges: [
               
                { startValue: 10, endValue: 1000, color: "#dd00dd" }
            ]
        },
         valueIndicator: {
                type: "twoColorNeedle",
                color: "red",
                secondFraction: 0.24,
                secondColor: "#f05b41"
            },
        tooltip: { enabled: true },
        title: {
            text: "NL",
            font: { size: 28 }
        }
    };


   
}

 }]);