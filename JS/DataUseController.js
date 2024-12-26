"use strict";
(function()
{
    ///<!---Sinapp起始範圍--->//
    var SinApp = angular.module('SinApp',[]);

    
    SinApp.controller('SinController',['$scope',function($scope, $element, $interval, $timeout, $http, $window, $location)
    {
        $scope.DATAAA = "-Ini++";
        $scope.abcde = "+66666+";
        $scope.friends = [ 'A001', 'B002', 'C003', 'D004'];       
        $scope.SXs=[
            {id: 1,Tag: '男',value: 1},
            {id: 2,Tag: '女',value: 2},
            {id: 3,Tag: '未知',value: 3}];
        $scope.NumA = 6 ;
        $scope.ngCk = function()
       {
        alert('angJSFun觸發呼叫正常');
       }

       $scope.Sexs =
        [
            {
                id: 1,
                Tag: '男',
                value: 1
            },
            {
                id: 2,
                Tag: '女',
                value: 2
            },
            {
                id: 3,
                Tag: '未知',
                value: 4
            }
        ];


      





        /*-------function宣告方式 
        $scope. + fun名稱 = function()
            要做的事情
        }
        EX:$scope.save  = function() {alert("Note Saved");};
        前端要使用ng-事件做呼叫 EX:ng-click="save()" 
        ----*/
    }
]);    
    /// <!----Sinapp結束範圍----->///  
    var app = angular.module('myapp' ,['SinApp']); ///把[sinapp]裝載至[myapp]中    
}) ();