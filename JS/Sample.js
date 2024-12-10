"use strict";
(function()
{
    ///<!---Sinapp起始範圍--->//
    var SinApp2 = angular.module('Sample',[]);
    SinApp2.controller('SampleController',['$scope',function($scope)
    {
        $scope.SampleTXT2 = "JS-OK";
        ///$scope.dataAA = "ABC";
        ///$scope.abcde = "66666-有數字表示呼叫正常"; 

        ///$scope.NumA = "52888";      
       ///$scope.ngCk = function()
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
    /// <!----Sample結束範圍----->///  
    var app = angular.module('myapp' ,['Sample']); ///把[Sample]裝載至[myapp]中    
}) ();