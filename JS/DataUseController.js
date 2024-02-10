(function()
{
    ///<!---Sinapp起始範圍--->//
    var SinApp = angular.module('SinApp',[]);
    SinApp.controller('SinController',['$scope',function($scope)
    {
        $scope.dataAA = "ABC";
        $scope.abcde = "66666-有數字表示呼叫正常";       

        $scope.NumA = "52888";      
       $scope.ngCk = function()
       {
        alert('angJSFun觸發呼叫正常');
       }

        /*-------function宣告方式 
        $scope. + fun名稱 = function()
            要做的事情
        }
        EX:$scope.save  = function() {alert("Note Saved");};
        前端要使用ng-事件做呼叫 EX:ng-click="save()"


        ----*/


    }]);    
    /// <!----Sinapp結束範圍----->///  
    var app = angular.module('myapp' ,['SinApp']); ///把[sinapp]裝載至[myapp]中    
}) ();