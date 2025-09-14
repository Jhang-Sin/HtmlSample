// AngularJS 控制器
        var app = angular.module('myApp', []);
        app.controller('myCtrl', function ($scope, $timeout) {
            $scope.users = [];
            let nextId = 1;

            $scope.addUser = function () {
                //console.log('NAME = ' + $scope.newUser.name + 'Email=' + $scope.newUser.email);

                if ($scope.newUser.name && $scope.newUser.email) {
                    // AngularJS Table
                    $scope.users.push({
                        id: nextId++,
                        name: $scope.newUser.name,
                        email: $scope.newUser.email
                    });

                    // jQuery DataTable
                    $('#table1').DataTable().row.add([
                        nextId - 1,
                        $scope.newUser.name,
                        $scope.newUser.email
                    ]).draw();

                    $scope.newUser = {}; // 清空輸入框
                } else {
                    alert("請輸入完整的資料！");
                }
            };

            // 初始化 DataTable
            $timeout(function () {
                $('#table1').DataTable();
            }, 0);
        });