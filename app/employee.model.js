System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Employee;
    return {
        setters: [],
        execute: function () {
            Employee = (function () {
                function Employee(_id, EmpNo, EmpName, Salary, DeptName, Designation) {
                    this._id = _id;
                    this.EmpNo = EmpNo;
                    this.EmpName = EmpName;
                    this.Salary = Salary;
                    this.DeptName = DeptName;
                    this.Designation = Designation;
                }
                return Employee;
            }());
            exports_1("Employee", Employee);
        }
    };
});
