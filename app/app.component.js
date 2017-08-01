System.register(["@angular/core", "./employee.model", "./app.service", "rxjs/Rx"], function (exports_1, context_1) {
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
    var core_1, core_2, employee_model_1, app_service_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (employee_model_1_1) {
                employee_model_1 = employee_model_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            AppComponent = (function () {
                //3. Constructor injected with the Service Dependency
                function AppComponent(serv) {
                    this.serv = serv;
                    this.employees = new Array();
                    this.message = 'HTML DataGrid using Angular 4';
                }
                //4. Load all Employees
                AppComponent.prototype.ngOnInit = function () {
                    this.loadEmployee();
                };
                AppComponent.prototype.loadEmployee = function () {
                    var _this = this;
                    this
                        .serv
                        .getEmployees()
                        .subscribe(function (resp) {
                        _this.employees = resp.json();
                        //console.log(JSON.stringify(resp.json()));    
                    });
                };
                //5. Add Employee
                AppComponent.prototype.addEmp = function () {
                    this.selemp = new employee_model_1.Employee('', 0, '', 0, '', '');
                    this
                        .employees
                        .push(this.selemp);
                    this.isNewRecord = true;
                    //return this.editTemplate;
                };
                //6. Edit Employee
                AppComponent.prototype.editEmployee = function (emp) {
                    this.selemp = emp;
                };
                //7. Load either Read-Onoy Template or EditTemplate
                AppComponent.prototype.loadTemplate = function (emp) {
                    if (this.selemp && this.selemp.EmpNo == emp.EmpNo) {
                        return this.editTemplate;
                    }
                    else {
                        return this.readOnlyTemplate;
                    }
                };
                //8. Save Employee
                AppComponent.prototype.saveEmp = function () {
                    var _this = this;
                    if (this.isNewRecord) {
                        //add a new Employee
                        this.serv.addEmployee(this.selemp).subscribe(function (resp) {
                            _this.employee = resp.json(),
                                _this.statusMessage = 'Record Added Successfully.',
                                _this.loadEmployee();
                        });
                        this.isNewRecord = false;
                        this.selemp = null;
                    }
                    else {
                        //edit the record
                        this.serv.updateEmployee(this.selemp._id, this.selemp).subscribe(function (resp) {
                            _this.statusMessage = 'Record Updated Successfully.',
                                _this.loadEmployee();
                        });
                        this.selemp = null;
                    }
                };
                //9. Cancel edit
                AppComponent.prototype.cancel = function () {
                    this.selemp = null;
                };
                //10 Delete Employee
                AppComponent.prototype.deleteEmp = function (emp) {
                    var _this = this;
                    this.serv.deleteEmployee(emp._id).subscribe(function (resp) {
                        _this.statusMessage = 'Record Deleted Successfully.',
                            _this.loadEmployee();
                    });
                };
                __decorate([
                    core_1.ViewChild('readOnlyTemplate'),
                    __metadata("design:type", typeof (_a = typeof core_1.TemplateRef !== "undefined" && core_1.TemplateRef) === "function" && _a || Object)
                ], AppComponent.prototype, "readOnlyTemplate", void 0);
                __decorate([
                    core_1.ViewChild('editTemplate'),
                    __metadata("design:type", typeof (_b = typeof core_1.TemplateRef !== "undefined" && core_1.TemplateRef) === "function" && _b || Object)
                ], AppComponent.prototype, "editTemplate", void 0);
                AppComponent = __decorate([
                    core_2.Component({ selector: 'app-data', templateUrl: './app/app.component.html' }),
                    __metadata("design:paramtypes", [app_service_1.EmployeeService])
                ], AppComponent);
                return AppComponent;
                var _a, _b;
            }());
            exports_1("AppComponent", AppComponent);
        }
    };
});
