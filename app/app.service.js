System.register(["@angular/core", "@angular/http", "rxjs/Rx"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, http_1, EmployeeService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            EmployeeService = (function () {
                //4. Passsing the Http dependency to the constructor to access Http functions
                function EmployeeService(http) {
                    this.http = http;
                    //3. The local private variable for  storing the URL of the REST API
                    this.servUrl = "http://localhost:8020/EmployeeList/api/employees";
                }
                //5. Function to return the Observable response containing all Employees
                EmployeeService.prototype.getEmployees = function () {
                    return this.http.get(this.servUrl);
                };
                //6. Function to perform POST operation to create a new employee
                EmployeeService.prototype.addEmployee = function (emp) {
                    var header = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: header });
                    return this
                        .http
                        .post(this.servUrl, JSON.stringify(emp), options);
                };
                //7. Function to update Employee using PUT operation
                EmployeeService.prototype.updateEmployee = function (id, emp) {
                    var header = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: header });
                    return this
                        .http
                        .put(this.servUrl + "/" + id, JSON.stringify(emp), options);
                };
                //8. Function to remove the Employee using DELETE operation
                EmployeeService.prototype.deleteEmployee = function (id) {
                    return this
                        .http
                        .delete(this.servUrl + "/" + id);
                };
                EmployeeService = __decorate([
                    core_1.Injectable(),
                    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
                ], EmployeeService);
                return EmployeeService;
                var _a;
            }());
            exports_1("EmployeeService", EmployeeService);
        }
    };
});
