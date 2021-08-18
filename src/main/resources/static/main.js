(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/2FO":
/*!*****************************************!*\
  !*** ./src/app/models/category.enum.ts ***!
  \*****************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
var Category;
(function (Category) {
    Category["Spa"] = "Spa";
    Category["Food"] = "Food";
    Category["Vacation"] = "Vacation";
    Category["Electronics"] = "Electronics";
    Category["Clothes"] = "Clothes";
    Category["Shoes"] = "Shoes";
    Category["Restaurants"] = "Restaurants";
})(Category || (Category = {}));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\USER\Documents\Programming\Angular\newCouponWebsite\src\main.ts */"zUnb");


/***/ }),

/***/ "0zL+":
/*!**********************************************!*\
  !*** ./src/app/services/customer.service.ts ***!
  \**********************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class CustomerService {
    constructor(client) {
        this.client = client;
    }
    purchaseCoupon(id) {
        return this.client.get("http://localhost:8080/customer/purchaseCoupon/" + id + "/" + sessionStorage.getItem('userId'), { responseType: 'text' });
    }
    getAllCoupons() {
        return this.client.get("http://localhost:8080/customer/getAllCoupons/" + sessionStorage.getItem('userId'));
    }
    getCustomerCoupons() {
        return this.client.get("http://localhost:8080/customer/getCustomerCoupons/" + sessionStorage.getItem('userId'));
    }
    getCouponsByCat(cat) {
        return this.client.get("http://localhost:8080/customer/getCouponsByCat/" + cat + "/" + sessionStorage.getItem('userId'));
    }
    getCouponsByPrice(price) {
        return this.client.get("http://localhost:8080/customer/getCouponsByPrice/" + price + "/" + sessionStorage.getItem('userId'));
    }
    getCustomerDetails() {
        return this.client.get("http://localhost:8080/customer/getCustomerDetails/" + sessionStorage.getItem('userId'));
    }
}
CustomerService.ɵfac = function CustomerService_Factory(t) { return new (t || CustomerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CustomerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomerService, factory: CustomerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "2I4r":
/*!***************************************************************************!*\
  !*** ./src/app/components/customer-details/customer-details.component.ts ***!
  \***************************************************************************/
/*! exports provided: CustomerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailsComponent", function() { return CustomerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/customer.service */ "0zL+");


class CustomerDetailsComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.service.getCustomerDetails().subscribe((res) => {
            this.customer = res;
            console.log(res);
        }, (err) => {
            alert(err.error);
            console.log(err.error);
        });
    }
}
CustomerDetailsComponent.ɵfac = function CustomerDetailsComponent_Factory(t) { return new (t || CustomerDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"])); };
CustomerDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerDetailsComponent, selectors: [["app-customer-details"]], decls: 9, vars: 4, template: function CustomerDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Customer Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Name: ", ctx.customer.firstName, " ", ctx.customer.lastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Email: ", ctx.customer.email, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Password: ", ctx.customer.password, "");
    } }, styles: ["span[_ngcontent-%COMP%]{\r\n    display: block;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoiY3VzdG9tZXItZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3BhbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59Il19 */"] });


/***/ }),

/***/ "4jPX":
/*!**********************************!*\
  !*** ./src/app/models/coupon.ts ***!
  \**********************************/
/*! exports provided: Coupon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coupon", function() { return Coupon; });
class Coupon {
    constructor(id, title, category, description, price, company, startDate, endDate, amount, image) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.description = description;
        this.price = price;
        this.company = company;
        this.startDate = startDate;
        this.endDate = endDate;
        this.amount = amount;
        this.image = image;
    }
    get _category() {
        return this.category;
    }
    set _category(category) {
        this.category = category;
    }
    get _price() {
        return this.price;
    }
    set _price(price) {
        this.price = price;
    }
    get _image() {
        return this.image;
    }
    set _image(image) {
        this.image = image;
    }
    get _amount() {
        return this.amount;
    }
    set _amount(amount) {
        this.amount = amount;
    }
    get _endDate() {
        return this.endDate;
    }
    set _endDate(endDate) {
        this.endDate = endDate;
    }
    get _startDate() {
        return this.startDate;
    }
    set _startDate(startDate) {
        this.startDate = startDate;
    }
    get _description() {
        return this.description;
    }
    set _description(description) {
        this.description = description;
    }
    get _title() {
        return this.title;
    }
    set _title(title) {
        this.title = title;
    }
    get _company() {
        return this.company;
    }
    set _company(company) {
        this.company = company;
    }
    get _id() {
        return this.id;
    }
    set _id(id) {
        this.id = id;
    }
}


/***/ }),

/***/ "AJ6+":
/*!*******************************************!*\
  !*** ./src/app/services/admin.service.ts ***!
  \*******************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class AdminService {
    constructor(client) {
        this.client = client;
    }
    addCompany(company) {
        return this.client.post("http://localhost:8080/admin/addCompany/" + sessionStorage.getItem('userId'), company, { responseType: 'text' });
    }
    updateCompany(company) {
        //is it post or put??
        return this.client.put("http://localhost:8080/admin/updateCompany/" + sessionStorage.getItem('userId'), company, { responseType: 'text' });
    }
    deleteCompany(id) {
        return this.client.delete("http://localhost:8080/admin/deleteCompany/" + id + "/" + sessionStorage.getItem('userId'), { responseType: 'text' });
    }
    getAllCompanies() {
        return this.client.get("http://localhost:8080/admin/getAllCompanies/" + sessionStorage.getItem('userId'));
    }
    getCompany(id) {
        return this.client.get("http://localhost:8080/admin/getOneCompany/" + id + "/" + sessionStorage.getItem('userId'));
    }
    getCompanyByEmail(email) {
        return this.client.get("http://localhost:8080/admin/getCompanyByEmail/" + email + "/" + sessionStorage.getItem('userId'));
    }
    addCustomer(customer) {
        return this.client.post("http://localhost:8080/admin/addCustomer/" + sessionStorage.getItem('userId'), customer, { responseType: 'text' });
    }
    updateCustomer(customer) {
        return this.client.put("http://localhost:8080/admin/updateCustomer/" + sessionStorage.getItem('userId'), customer, { responseType: 'text' });
    }
    deleteCustomer(id) {
        return this.client.delete("http://localhost:8080/admin/deleteCustomer/" + id + "/" + sessionStorage.getItem('userId'), { responseType: 'text' });
    }
    getAllCustomers() {
        return this.client.get("http://localhost:8080/admin/getAllCustomers/" + sessionStorage.getItem('userId'));
    }
    getCustomer(id) {
        return this.client.get("http://localhost:8080/admin/getOneCustomer/" + id + "/" + sessionStorage.getItem('userId'));
    }
    getCustomerByEmail(email) {
        return this.client.get("http://localhost:8080/admin/getCustomerByEmail/" + email + "/" + sessionStorage.getItem('userId'));
    }
}
AdminService.ɵfac = function AdminService_Factory(t) { return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AdminService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminService, factory: AdminService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AQna":
/*!***********************************************************************!*\
  !*** ./src/app/components/update-company/update-company.component.ts ***!
  \***********************************************************************/
/*! exports provided: UpdateCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCompanyComponent", function() { return UpdateCompanyComponent; });
/* harmony import */ var src_app_models_company__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/company */ "P+Z7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/admin.service */ "AJ6+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












function UpdateCompanyComponent_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email is required !");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UpdateCompanyComponent_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email is not legit !");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class UpdateCompanyComponent {
    constructor(dialogRef, data, fb, service, snack) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.service = service;
        this.snack = snack;
        this.company = data.dataToSend;
    }
    ngOnInit() {
        this.updateCompanyForm = this.fb.group({
            email: [this.company.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: [this.company.password, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    updateCompany() {
        let company = new src_app_models_company__WEBPACK_IMPORTED_MODULE_0__["Company"](this.company.id, this.company.name, this.updateCompanyForm.controls['password'].value, this.updateCompanyForm.controls['email'].value, this.company.coupons);
        this.service.updateCompany(company).subscribe((res) => {
            this.messageForUser = res;
            this.showSnack();
            this.dialogRef.close(company);
        }, (err) => {
            alert(err.error);
        });
    }
    showSnack() {
        let snackRef = this.snack.open(this.messageForUser, "close", { duration: 2000 });
        snackRef.onAction().subscribe(() => {
            this.snack.dismiss();
        });
    }
}
UpdateCompanyComponent.ɵfac = function UpdateCompanyComponent_Factory(t) { return new (t || UpdateCompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"])); };
UpdateCompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UpdateCompanyComponent, selectors: [["app-update-company"]], decls: 22, vars: 5, consts: [[3, "formGroup"], ["appearance", "outline"], ["type", "text", "matInput", "", "formControlName", "email", "required", ""], [4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "password", "required", ""], ["mat-raised-button", "", "type", "submit", 3, "disabled", "click"]], template: function UpdateCompanyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, UpdateCompanyComponent_mat_error_8_Template, 2, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, UpdateCompanyComponent_mat_error_9_Template, 2, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Password is required !");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateCompanyComponent_Template_button_click_18_listener() { return ctx.updateCompany(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Update !");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Update a Company - ", ctx.company.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.updateCompanyForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.updateCompanyForm.controls["email"].errors == null ? null : ctx.updateCompanyForm.controls["email"].errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.updateCompanyForm.controls["email"].errors == null ? null : ctx.updateCompanyForm.controls["email"].errors.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.updateCompanyForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtY29tcGFueS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/login.component */ "W3Zi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");







function HomeComponent_video_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "video", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ended", function HomeComponent_video_0_Template_video_ended_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.nextVideo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HomeComponent_video_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "video", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ended", function HomeComponent_video_1_Template_video_ended_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.nextVideo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HomeComponent_video_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "video", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ended", function HomeComponent_video_2_Template_video_ended_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.nextVideo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor(router, dialog) {
        this.router = router;
        this.dialog = dialog;
        this.router = router;
        this.dialog = dialog;
        this.videoPlaying = 1;
    }
    ngOnInit() {
    }
    goToLogin() {
        this.router.navigate(['login']);
    }
    openLoginDialog() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogConfig"]();
        dialogConfig.maxHeight = '800px';
        dialogConfig.maxWidth = '600px';
        dialogConfig.restoreFocus = true;
        dialogConfig.autoFocus = true;
        const dialogRef = this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"], dialogConfig);
    }
    nextVideo() {
        if (this.videoPlaying < 3)
            this.videoPlaying++;
        else
            this.videoPlaying = 1;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 10, vars: 3, consts: [["muted", "", "autoplay", "", "id", "v1", "src", "https://www.videvo.net/videvo_files/converted/2015_05/preview/FoodPack1_12_Videvo.mov93550.webm", 3, "ended", 4, "ngIf"], ["muted", "", "autoplay", "", "src", "https://www.videvo.net/videvo_files/converted/2017_09/preview/170804_A_Lombok_032.mp470034.webm", 3, "ended", 4, "ngIf"], ["muted", "", "autoplay", "", "src", "https://cdn.videvo.net/videvo_files/video/free/2020-04/small_watermarked/200413_01_Cine_03_preview.webm", 3, "ended", 4, "ngIf"], [1, "header"], [1, "content"], ["mat-raised-button", "", 3, "click"], ["muted", "", "autoplay", "", "id", "v1", "src", "https://www.videvo.net/videvo_files/converted/2015_05/preview/FoodPack1_12_Videvo.mov93550.webm", 3, "ended"], ["muted", "", "autoplay", "", "src", "https://www.videvo.net/videvo_files/converted/2017_09/preview/170804_A_Lombok_032.mp470034.webm", 3, "ended"], ["muted", "", "autoplay", "", "src", "https://cdn.videvo.net/videvo_files/video/free/2020-04/small_watermarked/200413_01_Cine_03_preview.webm", 3, "ended"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, HomeComponent_video_0_Template, 1, 0, "video", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_video_1_Template, 1, 0, "video", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HomeComponent_video_2_Template, 1, 0, "video", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Gad's Coupon Website\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Get All your favourite deals on Rrestaurants, Vacations, Spa's, Electronics and Fashion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_8_listener() { return ctx.openLoginDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.videoPlaying == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.videoPlaying == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.videoPlaying == 3);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: ["video[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    right: 0;\r\n    bottom: 0;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n  }\r\n\r\n  .content[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    bottom: 0;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    color: #f1f1f1;\r\n    width: 100%;\r\n    padding: 20px;\r\n  }\r\n\r\n  .header[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    color: white;\r\n    font-size: 30px;\r\n    font-weight: bolder;\r\n    left: 50%;\r\n    top: 30%;\r\n    transform: translateX(-50%)\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsU0FBUztJQUNULDhCQUE4QjtJQUM5QixjQUFjO0lBQ2QsV0FBVztJQUNYLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsUUFBUTtJQUNSO0VBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidmlkZW8ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgY29sb3I6ICNmMWYxZjE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVye1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogMzAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpXHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "EFyh":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class LoginService {
    // userName:string = "username";
    constructor(client) {
        this.client = client;
        this.token = sessionStorage.getItem('userId');
        // a simple verfication of the token in order to display/hide logout button
        this.loggedIn = this.token != null && this.token.length > 10;
    }
    login(email, password, clientType) {
        return this.client.get("http://localhost:8080/login/" + email + "/" + password + "/" + clientType, { responseType: 'text' });
    }
    logout() {
        return this.client.get("http://localhost:8080/login/logout/" + this.token, { responseType: 'text' });
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "EbBH":
/*!***************************************************************!*\
  !*** ./src/app/httpInterceptors/error-handler.interceptor.ts ***!
  \***************************************************************/
/*! exports provided: ErrorHandlerInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerInterceptor", function() { return ErrorHandlerInterceptor; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/login.service */ "EFyh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class ErrorHandlerInterceptor {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    intercept(request, next) {
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
            if (error.status === 504 || error.error == 'Session Expired !' || error.error == "You have to Login hombre !") {
                let errorMessage = `You are not logged in ! \n redirecting to home...`;
                this.service.loggedIn = false;
                sessionStorage.removeItem('userId');
                this.router.navigate(['main']);
                alert(errorMessage);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error);
            }
        }));
    }
}
ErrorHandlerInterceptor.ɵfac = function ErrorHandlerInterceptor_Factory(t) { return new (t || ErrorHandlerInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ErrorHandlerInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ErrorHandlerInterceptor, factory: ErrorHandlerInterceptor.ɵfac });


/***/ }),

/***/ "F33o":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 2, vars: 0, consts: [["src", "./assets/404.jpg", "alt", "wtf"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["img[_ngcontent-%COMP%]{\r\n    width: 70%;\r\n    height: 70%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "GH+m":
/*!*************************************************************************!*\
  !*** ./src/app/components/company-details/company-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: CompanyDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDetailsComponent", function() { return CompanyDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/company.service */ "ZtWP");


class CompanyDetailsComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.service.getCompanyDetails().subscribe((res) => {
            this.company = res;
        }, (err) => {
            alert(err.error);
            console.log(err.error);
        });
    }
}
CompanyDetailsComponent.ɵfac = function CompanyDetailsComponent_Factory(t) { return new (t || CompanyDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyService"])); };
CompanyDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompanyDetailsComponent, selectors: [["app-company-details"]], decls: 9, vars: 3, template: function CompanyDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Company Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Name: ", ctx.company.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Email: ", ctx.company.email, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Password: ", ctx.company.password, "");
    } }, styles: ["span[_ngcontent-%COMP%]{\r\n    display: block;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBhbnktZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJjb21wYW55LWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW57XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSJdfQ== */"] });


/***/ }),

/***/ "KpnB":
/*!***********************************************************!*\
  !*** ./src/app/httpInterceptors/localhost.interceptor.ts ***!
  \***********************************************************/
/*! exports provided: LocalhostInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalhostInterceptor", function() { return LocalhostInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LocalhostInterceptor {
    constructor() { }
    intercept(request, next) {
        // console.log(request.url);
        // const oldUrl = request.url;
        // var urlArr = oldUrl.split("8080");
        // urlArr[0] = "https://my-coupon-website.herokuapp.com";
        // const newHostUrl = urlArr.join('');
        // console.log(newHostUrl);
        // const newUrl = {url:newHostUrl};
        // const newUrlWithParams = {urlWithParams:newHostUrl};
        // request = Object.assign(request,newUrl);
        // request = Object.assign(request,newUrlWithParams);
        // console.log(request.url);
        return next.handle(request);
    }
}
LocalhostInterceptor.ɵfac = function LocalhostInterceptor_Factory(t) { return new (t || LocalhostInterceptor)(); };
LocalhostInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalhostInterceptor, factory: LocalhostInterceptor.ɵfac });


/***/ }),

/***/ "O56y":
/*!***********************************************************************!*\
  !*** ./src/app/components/coupon-display/coupon-display.component.ts ***!
  \***********************************************************************/
/*! exports provided: CouponDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponDisplayComponent", function() { return CouponDisplayComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _image_dialog_image_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image-dialog/image-dialog.component */ "VPGe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/customer.service */ "0zL+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");








class CouponDisplayComponent {
    constructor(service, snack, dialog) {
        this.service = service;
        this.snack = snack;
        this.dialog = dialog;
    }
    ngOnInit() {
    }
    purchaseCoupon() {
        this.service.purchaseCoupon(this.coupon.id).subscribe((res) => {
            this.couponMessage = res;
            this.showSnack();
            console.log(res);
        }, (err) => {
            alert(err.error);
            console.log(err.error);
        });
    }
    ;
    showSnack() {
        let snackRef = this.snack.open(this.couponMessage, "close", { duration: 2000 });
        snackRef.onAction().subscribe(() => {
            //do your stuff here !
            this.snack.dismiss();
        });
    }
    openImage() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogConfig"]();
        dialogConfig.maxHeight = '400px';
        dialogConfig.maxWidth = '600px';
        dialogConfig.restoreFocus = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            imageUrl: this.coupon.image
        };
        const dialogRef = this.dialog.open(_image_dialog_image_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ImageDialogComponent"], dialogConfig);
    }
}
CouponDisplayComponent.ɵfac = function CouponDisplayComponent_Factory(t) { return new (t || CouponDisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"])); };
CouponDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CouponDisplayComponent, selectors: [["app-coupon-display"]], inputs: { coupon: "coupon" }, decls: 22, vars: 9, consts: [["alt", "wtf", "width", "300px", "height", "200px", 3, "src", "click"], ["mat-raised-button", "", 3, "click"]], template: function CouponDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CouponDisplayComponent_Template_img_click_1_listener() { return ctx.openImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Buy: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CouponDisplayComponent_Template_button_click_19_listener() { return ctx.purchaseCoupon(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "attach_money");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.coupon.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Title: ", ctx.coupon.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Category: ", ctx.coupon.category, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Description: ", ctx.coupon.description, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Company: ", ctx.coupon.company.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Start Date: ", ctx.coupon.startDate, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("End Date: ", ctx.coupon.endDate, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Amount: ", ctx.coupon.amount, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Price: ", ctx.coupon.price, "");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], styles: ["span[_ngcontent-%COMP%]{\r\n    display: block;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXBvbi1kaXNwbGF5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOztHQUVHIiwiZmlsZSI6ImNvdXBvbi1kaXNwbGF5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFue1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi8qIGRpdiB7XHJcbiAgICBvdXRsaW5lOiBhdXRvO1xyXG59ICovIl19 */"] });


/***/ }),

/***/ "P+Z7":
/*!***********************************!*\
  !*** ./src/app/models/company.ts ***!
  \***********************************/
/*! exports provided: Company */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Company", function() { return Company; });
class Company {
    //try to use getters and setters
    constructor(id, name, password, email, coupons) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.email = email;
        this.coupons = coupons;
    }
    // public editable:boolean =false;
    get_coupons() {
        return this.coupons;
    }
    set_coupons(coupons) {
        this.coupons = coupons;
    }
    get_email() {
        return this.email;
    }
    set_email(email) {
        this.email = email;
    }
    get_password() {
        return this.password;
    }
    set_password(password) {
        this.password = password;
    }
    getName() {
        return this.name;
    }
    set_name(name) {
        this.name = name;
    }
    getid() {
        return this.id;
    }
    set_id(id) {
        this.id = id;
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/toolbar/toolbar.component */ "np0s");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'CouponSystemWebsite';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__["ToolbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["ng-particles[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    width: 100%;\r\n    position: fixed;\r\n    z-index: -100;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YsYUFBYTtBQUNqQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5nLXBhcnRpY2xlc3tcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogLTEwMDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "TEsU":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-details/user-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/customer.service */ "0zL+");
/* harmony import */ var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/company.service */ "ZtWP");



class UserDetailsComponent {
    constructor(customerService, companyService) {
        this.customerService = customerService;
        this.companyService = companyService;
    }
    ngOnInit() {
    }
}
UserDetailsComponent.ɵfac = function UserDetailsComponent_Factory(t) { return new (t || UserDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"])); };
UserDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserDetailsComponent, selectors: [["app-user-details"]], decls: 2, vars: 0, template: function UserDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "user-details works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "VPGe":
/*!*******************************************************************!*\
  !*** ./src/app/components/image-dialog/image-dialog.component.ts ***!
  \*******************************************************************/
/*! exports provided: ImageDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageDialogComponent", function() { return ImageDialogComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class ImageDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.image = data.imageUrl;
    }
    ngOnInit() {
    }
}
ImageDialogComponent.ɵfac = function ImageDialogComponent_Factory(t) { return new (t || ImageDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
ImageDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ImageDialogComponent, selectors: [["app-image-dialog"]], decls: 1, vars: 1, consts: [["alt", "wtf", 3, "src"]], template: function ImageDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, styles: ["img[_ngcontent-%COMP%] {\r\n    display: block;\r\n    max-width: 500px;\r\n    max-height: 300px; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckIiLCJmaWxlIjoiaW1hZ2UtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogMzAwcHg7IFxyXG59Il19 */"] });


/***/ }),

/***/ "VT+M":
/*!***********************************************************!*\
  !*** ./src/app/components/customer/customer.component.ts ***!
  \***********************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_models_category_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/category.enum */ "/2FO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customer-details/customer-details.component */ "2I4r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/customer.service */ "0zL+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _coupon_display_coupon_display_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../coupon-display/coupon-display.component */ "O56y");
















function CustomerComponent_mat_form_field_14_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", cat_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r4.categoryList[cat_r5]);
} }
function CustomerComponent_mat_form_field_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, CustomerComponent_mat_form_field_14_mat_option_4_Template, 2, 2, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "must select a category");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.keys);
} }
function CustomerComponent_mat_form_field_15_mat_error_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Price is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CustomerComponent_mat_form_field_15_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Price must be above 0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CustomerComponent_mat_form_field_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Max Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, CustomerComponent_mat_form_field_15_mat_error_4_Template, 2, 0, "mat-error", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, CustomerComponent_mat_form_field_15_mat_error_5_Template, 2, 0, "mat-error", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.searchCouponForm.controls["searchMaxPrice"].errors == null ? null : ctx_r1.searchCouponForm.controls["searchMaxPrice"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.searchCouponForm.controls["searchMaxPrice"].errors == null ? null : ctx_r1.searchCouponForm.controls["searchMaxPrice"].errors.min);
} }
function CustomerComponent_div_19_app_coupon_display_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-coupon-display", 15);
} if (rf & 2) {
    const c_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("coupon", c_r9);
} }
function CustomerComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CustomerComponent_div_19_app_coupon_display_1_Template, 1, 1, "app-coupon-display", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.coupons);
} }
function CustomerComponent_div_20_app_coupon_display_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-coupon-display", 15);
} if (rf & 2) {
    const c_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("coupon", c_r11);
} }
function CustomerComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CustomerComponent_div_20_app_coupon_display_1_Template, 1, 1, "app-coupon-display", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.filteredCoupons);
} }
class CustomerComponent {
    constructor(service, fb, snack, dialog) {
        this.service = service;
        this.fb = fb;
        this.snack = snack;
        this.dialog = dialog;
        this.filteredCoupons = new Array(0);
        this.categoryList = src_app_models_category_enum__WEBPACK_IMPORTED_MODULE_1__["Category"];
        this.keys = Object.keys(this.categoryList);
    }
    ngOnInit() {
        this.service.getAllCoupons().subscribe((res) => {
            this.coupons = res;
            console.log(res);
        }, (err) => {
            this.couponMessage = err.error;
            console.log(err.error);
        });
        this.searchCouponForm = this.fb.group({
            searchBy: [''],
            searchCat: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            searchMaxPrice: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1)]]
        });
    }
    searchCoupons() {
        this.couponMessage = '';
        let searchBy = this.searchCouponForm.controls['searchBy'].value;
        let cat = this.searchCouponForm.controls['searchCat'].value;
        let maxPrice = this.searchCouponForm.controls['searchMaxPrice'].value;
        switch (searchBy) {
            case 'category':
                if (cat == '' || cat == null) {
                    break;
                }
                this.filteredCoupons = this.coupons.filter(({ category }) => category == cat);
                if (this.filteredCoupons.length == 0) {
                    this.couponMessage = "No Coupons Found!";
                    this.showSnack();
                }
                break;
            case 'maxPrice':
                let max = parseFloat(maxPrice);
                this.filteredCoupons = this.coupons.filter(({ price }) => price <= max);
                if (this.filteredCoupons.length == 0) {
                    this.couponMessage = "No Coupons Found!";
                    this.showSnack();
                }
                break;
            case 'myCoupons':
                this.service.getCustomerCoupons().subscribe((res) => {
                    this.filteredCoupons = res;
                    console.log(res);
                }, (err) => {
                    alert(err.error);
                    console.log(err.error);
                });
                break;
            default: this.ngOnInit();
        }
    }
    showSnack() {
        let snackRef = this.snack.open(this.couponMessage, "close", { duration: 2000 });
        snackRef.onAction().subscribe(() => {
            //do your stuff here !
            this.snack.dismiss();
        });
    }
    openCustomerDetails() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.maxHeight = '400px';
        dialogConfig.maxWidth = '600px';
        dialogConfig.autoFocus = true;
        const dialogRef = this.dialog.open(_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_3__["CustomerDetailsComponent"], dialogConfig);
    }
}
CustomerComponent.ɵfac = function CustomerComponent_Factory(t) { return new (t || CustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_5__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
CustomerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CustomerComponent, selectors: [["app-customer"]], decls: 21, vars: 5, consts: [["action", "POST", 2, "display", "inline", 3, "formGroup"], ["mat-raised-button", "", 3, "click"], ["matInput", "", "formControlName", "searchBy"], ["value", "category"], ["value", "maxPrice"], ["value", "myCoupons"], [4, "ngIf"], ["mat-stroked-button", "", 3, "click"], ["class", "gridDisplay", 4, "ngIf"], ["matInput", "", "formControlName", "searchCat"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["type", "number", "matInput", "", "formControlName", "searchMaxPrice", "min", "1", "required", ""], [1, "gridDisplay"], [3, "coupon", 4, "ngFor", "ngForOf"], [3, "coupon"]], template: function CustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomerComponent_Template_button_click_1_listener() { return ctx.searchCoupons(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Search By");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Max Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "My Coupons");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, CustomerComponent_mat_form_field_14_Template, 7, 1, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, CustomerComponent_mat_form_field_15_Template, 6, 2, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomerComponent_Template_button_click_16_listener() { return ctx.openCustomerDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Customer Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, CustomerComponent_div_19_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, CustomerComponent_div_20_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.searchCouponForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.searchCouponForm.controls["searchBy"].value == "category");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.searchCouponForm.controls["searchBy"].value == "maxPrice");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.searchCouponForm.controls["searchBy"].value == "" || ctx.searchCouponForm.controls["searchBy"].value == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.filteredCoupons.length > 0 && ctx.searchCouponForm.controls["searchBy"].value != "" && ctx.searchCouponForm.controls["searchBy"].value != null);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _coupon_display_coupon_display_component__WEBPACK_IMPORTED_MODULE_13__["CouponDisplayComponent"]], styles: ["button[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n}\r\n\r\nmat-form-field[_ngcontent-%COMP%] {\r\n  margin: 20px;\r\n}\r\n\r\n.gridDisplay[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n  padding: 5px;\r\n  display: grid;\r\n  gap: 100px 1px;\r\n  grid-template-columns: 25% 25% 25% 25%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2Qsc0NBQXNDO0FBQ3hDIiwiZmlsZSI6ImN1c3RvbWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuLmdyaWREaXNwbGF5IHtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ2FwOiAxMDBweCAxcHg7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgMjUlIDI1JSAyNSU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ "EFyh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");













function LoginComponent_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required !");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is not legit !");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(fb, service, router, dialogRef) {
        this.fb = fb;
        this.service = service;
        this.router = router;
        this.dialogRef = dialogRef;
        this.hide = true;
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            client: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    }
    login() {
        this.service.login(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value, this.loginForm.controls['client'].value).subscribe((token) => {
            // this.toolbar.userName = "jlhl";
            sessionStorage.setItem('userId', token);
            this.service.loggedIn = true;
            switch (this.loginForm.controls['client'].value) {
                case "Administrator":
                    this.router.navigate(["admin"]);
                    this.dialogRef.close();
                    break;
                case "Company":
                    this.router.navigate(["company"]);
                    this.dialogRef.close();
                    break;
                case "Customer":
                    this.router.navigate(["customer"]);
                    this.dialogRef.close();
                    break;
            }
        }, (err) => {
            this.errorMessage = err.error;
            console.log(err.error);
        });
    }
    logout() {
        this.service.logout().subscribe((res) => {
            sessionStorage.removeItem('userId');
            this.service.loggedIn = false;
            // this.toolbar.userName = '';
            alert(res);
            this.router.navigate(["main"]);
        }, (err) => {
            alert(err.error);
        });
    }
    ;
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 43, vars: 9, consts: [[3, "formGroup"], ["appearance", "outline"], ["type", "text", "matInput", "", "formControlName", "email", "required", ""], [4, "ngIf"], ["matInput", "", "formControlName", "password", "required", "", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["matInput", "", "formControlName", "client"], ["value", "Administrator"], ["value", "Company"], ["value", "Customer"], ["mat-raised-button", "", 3, "disabled", "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, LoginComponent_mat_error_8_Template, 2, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LoginComponent_mat_error_9_Template, 2, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_16_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Password is required !");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Who are you?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Administrator");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_39_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginForm.controls["email"].errors == null ? null : ctx.loginForm.controls["email"].errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginForm.controls["email"].errors == null ? null : ctx.loginForm.controls["email"].errors.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ng_particles__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-particles */ "oMSG");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/admin/admin.component */ "cCTE");
/* harmony import */ var _components_company_company_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/company/company.component */ "pPPa");
/* harmony import */ var _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/customer/customer.component */ "VT+M");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "F33o");
/* harmony import */ var _components_company_update_coupon2_update_coupon2_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/company/update-coupon2/update-coupon2.component */ "zKhy");
/* harmony import */ var _components_image_dialog_image_dialog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/image-dialog/image-dialog.component */ "VPGe");
/* harmony import */ var _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/user-details/user-details.component */ "TEsU");
/* harmony import */ var _components_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/customer-details/customer-details.component */ "2I4r");
/* harmony import */ var _components_coupon_display_coupon_display_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/coupon-display/coupon-display.component */ "O56y");
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/toolbar/toolbar.component */ "np0s");
/* harmony import */ var _httpInterceptors_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./httpInterceptors/error-handler.interceptor */ "EbBH");
/* harmony import */ var _components_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/update-company/update-company.component */ "AQna");
/* harmony import */ var _components_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/update-customer/update-customer.component */ "w3qZ");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _httpInterceptors_localhost_interceptor__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./httpInterceptors/localhost.interceptor */ "KpnB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/core */ "fXoL");









































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HTTP_INTERCEPTORS"], useClass: _httpInterceptors_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_34__["ErrorHandlerInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HTTP_INTERCEPTORS"], useClass: _httpInterceptors_localhost_interceptor__WEBPACK_IMPORTED_MODULE_38__["LocalhostInterceptor"], multi: true }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_20__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"],
            ng_particles__WEBPACK_IMPORTED_MODULE_19__["NgParticlesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"],
        _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_23__["AdminComponent"],
        _components_company_company_component__WEBPACK_IMPORTED_MODULE_24__["CompanyComponent"],
        _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_25__["CustomerComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_26__["LoginComponent"],
        _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_27__["NotFoundComponent"],
        _components_company_update_coupon2_update_coupon2_component__WEBPACK_IMPORTED_MODULE_28__["UpdateCoupon2Component"],
        _components_image_dialog_image_dialog_component__WEBPACK_IMPORTED_MODULE_29__["ImageDialogComponent"],
        _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_30__["UserDetailsComponent"],
        _components_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_31__["CustomerDetailsComponent"],
        _components_coupon_display_coupon_display_component__WEBPACK_IMPORTED_MODULE_32__["CouponDisplayComponent"],
        _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_33__["ToolbarComponent"],
        _components_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_35__["UpdateCompanyComponent"],
        _components_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_36__["UpdateCustomerComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_37__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_20__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"],
        ng_particles__WEBPACK_IMPORTED_MODULE_19__["NgParticlesModule"]] }); })();


/***/ }),

/***/ "ZtWP":
/*!*********************************************!*\
  !*** ./src/app/services/company.service.ts ***!
  \*********************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class CompanyService {
    constructor(client) {
        this.client = client;
    }
    addCoupon(coupon) {
        return this.client.post("http://localhost:8080/company/addCoupon/" + sessionStorage.getItem('userId'), coupon, { responseType: 'text' });
    }
    updateCoupon(coupon) {
        return this.client.put("http://localhost:8080/company/updateCoupon/" + sessionStorage.getItem('userId'), coupon, { responseType: 'text' });
    }
    deleteCoupon(id) {
        return this.client.delete("http://localhost:8080/company/deleteCoupon/" + id + "/" + sessionStorage.getItem('userId'), { responseType: 'text' });
    }
    getCompanyCoupons() {
        return this.client.get("http://localhost:8080/company/getCoupons/" + sessionStorage.getItem('userId'));
    }
    getCouponsByCategory(category) {
        return this.client.get("http://localhost:8080/company/getCouponsByCategory/" + category + "/" + sessionStorage.getItem('userId'));
    }
    getCouponsBelowPrice(price) {
        return this.client.get("http://localhost:8080/company/getCouponsBelowPrice/" + price + "/" + sessionStorage.getItem('userId'));
    }
    getCoupon(id) {
        return this.client.get("http://localhost:8080/company/getOneCoupon/" + id + "/" + sessionStorage.getItem('userId'));
    }
    getCompanyDetails() {
        return this.client.get("http://localhost:8080/company/getCompanyDetails/" + sessionStorage.getItem('userId'));
    }
}
CompanyService.ɵfac = function CompanyService_Factory(t) { return new (t || CompanyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CompanyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CompanyService, factory: CompanyService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "cCTE":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var src_app_models_customer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/customer */ "lHZQ");
/* harmony import */ var src_app_models_company__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/company */ "P+Z7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _update_company_update_company_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../update-company/update-company.component */ "AQna");
/* harmony import */ var _update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../update-customer/update-customer.component */ "w3qZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/admin.service */ "AJ6+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");

















function AdminComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r10.searchCompanyForm.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AdminComponent_tr_22_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminComponent_tr_22_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const c_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r14.editCompany(c_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AdminComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, AdminComponent_tr_22_button_9_Template, 2, 0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminComponent_tr_22_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const c_r12 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r17.deleteCompany(c_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "delete_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](c_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](c_r12.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](c_r12.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !c_r12.editable);
} }
function AdminComponent_button_32_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminComponent_button_32_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r19.searchCustomerForm.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AdminComponent_tr_46_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminComponent_tr_46_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25); const c_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r23.editCustomer(c_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AdminComponent_tr_46_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, AdminComponent_tr_46_button_13_Template, 2, 0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminComponent_tr_46_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27); const c_r21 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r26.deleteCustomer(c_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "delete_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](c_r21.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](c_r21.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](c_r21.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](c_r21.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !c_r21.editable);
} }
function AdminComponent_mat_error_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Email is required !");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AdminComponent_mat_error_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Email is not legit !");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AdminComponent_mat_error_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Email is required !");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AdminComponent_mat_error_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Email is not legit !");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
class AdminComponent {
    constructor(service, fb, snack, dialog) {
        this.service = service;
        this.fb = fb;
        this.snack = snack;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.addCompanyForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.addCustomerForm = this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.searchCompanyForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]
        });
        this.searchCustomerForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]
        });
    }
    searchCompanies() {
        if (this.searchCompanyForm.controls['email'].value == '' || this.searchCompanyForm.controls['email'].value == null) {
            // if (this.companyEmail == '' || this.companyEmail == null || this.companyEmail == undefined) {
            this.service.getAllCompanies().subscribe((comps) => {
                this.companies = comps;
                this.messageForUser = null;
            }, (err) => {
                console.log(err);
                this.messageForUser = err.error;
            });
        }
        else {
            this.service.getCompanyByEmail(this.searchCompanyForm.controls['email'].value).subscribe((res) => {
                // this.service.getCompanyByEmail(this.companyEmail).subscribe((res) => {
                this.companies = new Array(1);
                this.companies[0] = res;
                this.messageForUser = null;
            }, (err) => {
                this.messageForUser = err.error;
                alert(err.error);
            });
        }
    }
    searchCustomers() {
        if (this.searchCustomerForm.controls['email'].value == '' || this.searchCustomerForm.controls['email'].value == null) {
            this.service.getAllCustomers().subscribe((cusz) => {
                this.customers = cusz;
                this.messageForUser = null;
            }, (err) => {
                this.messageForUser = err.error;
                alert(err.error);
            });
        }
        else {
            this.service.getCustomerByEmail(this.searchCustomerForm.controls['email'].value).subscribe((res) => {
                this.customers = new Array(1);
                this.customers[0] = res;
                this.messageForUser = null;
            }, (err) => {
                this.messageForUser = err.error;
                alert(err.error);
            });
        }
    }
    editCompany(company) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.restoreFocus = true;
        dialogConfig.data = {
            dataToSend: company
        };
        const dialogRef = this.dialog.open(_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_4__["UpdateCompanyComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe((data) => {
            if (data == undefined)
                return;
            company = data;
            console.log(data);
            console.log(company);
        });
    }
    editCustomer(customer) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.restoreFocus = true;
        dialogConfig.data = {
            dataToSend: customer
        };
        const dialogRef = this.dialog.open(_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_5__["UpdateCustomerComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe((data) => {
            if (data == undefined)
                return;
            customer = data;
            console.log(data);
            console.log(customer);
        });
    }
    deleteCompany(company) {
        this.service.deleteCompany(company.id).subscribe((res) => {
            this.messageForUser = res;
            this.showSnack();
            this.companies.splice(this.companies.indexOf(company), 1);
        }, (err) => {
            this.messageForUser = err.error;
            alert(err.error);
        });
    }
    deleteCustomer(customer) {
        this.service.deleteCustomer(customer.id).subscribe((res) => {
            this.messageForUser = res;
            this.showSnack();
            this.customers.splice(this.customers.indexOf(customer), 1);
        }, (err) => {
            this.messageForUser = err.error;
            alert(err.error);
        });
    }
    addCompany(formDirective) {
        let c = new src_app_models_company__WEBPACK_IMPORTED_MODULE_1__["Company"](0, this.addCompanyForm.controls['name'].value, this.addCompanyForm.controls['password'].value, this.addCompanyForm.controls['email'].value, null);
        this.service.addCompany(c).subscribe((res) => {
            this.messageForUser = res;
            this.showSnack();
            this.formReset(this.addCompanyForm, formDirective);
        }, (err) => {
            this.messageForUser = err.error;
            alert(err.error);
        });
    }
    addCustomer(formDirective) {
        let c = new src_app_models_customer__WEBPACK_IMPORTED_MODULE_0__["Customer"](0, this.addCustomerForm.controls['firstName'].value, this.addCustomerForm.controls['lastName'].value, this.addCustomerForm.controls['email'].value, this.addCustomerForm.controls['password'].value, null);
        this.service.addCustomer(c).subscribe((res) => {
            this.messageForUser = res;
            this.showSnack();
            this.formReset(this.addCustomerForm, formDirective);
        }, (err) => {
            this.messageForUser = err.error;
            alert(err.error);
        });
    }
    showSnack() {
        let snackRef = this.snack.open(this.messageForUser, "close", { duration: 2000 });
        snackRef.onAction().subscribe(() => {
            //do your stuff here !
            this.snack.dismiss();
        });
    }
    formReset(form, formDirective) {
        formDirective.resetForm();
        form.reset();
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 110, vars: 16, consts: [[1, "grid-container"], ["label", "Companies"], ["action", "POST", 3, "formGroup"], ["mat-raised-button", "", 3, "disabled", "click"], ["type", "text", "matInput", "", "formControlName", "email"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["label", "Customers"], [1, "add"], [3, "formGroup", "ngSubmit"], ["formDirective", "ngForm"], ["appearance", "outline"], ["type", "text", "matInput", "", "formControlName", "name", "required", ""], ["type", "text", "matInput", "", "formControlName", "email", "required", ""], [4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "password", "required", ""], ["mat-raised-button", "", "type", "submit", 3, "disabled"], ["formDirective1", "ngForm"], ["type", "text", "matInput", "", "formControlName", "firstName", "required", ""], ["type", "text", "matInput", "", "formControlName", "lastName", "required", ""], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], ["mat-raised-button", "", 3, "click", 4, "ngIf"], ["mat-raised-button", "", 3, "click"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_4_listener() { return ctx.searchCompanies(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, AdminComponent_button_10_Template, 3, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Email not legit");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, AdminComponent_tr_22_Template, 13, 4, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "mat-tab", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_26_listener() { return ctx.searchCustomers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, AdminComponent_button_32_Template, 3, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "Email not legit");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](46, AdminComponent_tr_46_Template, 17, 5, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "Add a Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "form", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function AdminComponent_Template_form_ngSubmit_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](52); return ctx.addCompany(_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](56, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "Name is required !");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](62, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](63, AdminComponent_mat_error_63_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](64, AdminComponent_mat_error_64_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](69, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71, "Password is required !");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74, "Add Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78, "Add a Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "form", 9, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function AdminComponent_Template_form_ngSubmit_79_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](80); return ctx.addCustomer(_r7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](83, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](84, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](86, "First Name is required !");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](89, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](90, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](92, "Last Name is required !");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](95, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](96, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](97, AdminComponent_mat_error_97_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](98, AdminComponent_mat_error_98_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](99, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](101, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](102, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](103, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](104, "Password is required !");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](105, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](107, "Add Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](108, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](109, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.searchCompanyForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.searchCompanyForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.searchCompanyForm.controls["email"].value);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.companies);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.searchCustomerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.searchCustomerForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.searchCustomerForm.controls["email"].value);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.customers);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.addCompanyForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.addCompanyForm.controls["email"].errors == null ? null : ctx.addCompanyForm.controls["email"].errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.addCompanyForm.controls["email"].errors == null ? null : ctx.addCompanyForm.controls["email"].errors.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.addCompanyForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.addCustomerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.addCustomerForm.controls["email"].errors == null ? null : ctx.addCustomerForm.controls["email"].errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.addCustomerForm.controls["email"].errors == null ? null : ctx.addCustomerForm.controls["email"].errors.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.addCustomerForm.valid);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTab"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"]], styles: ["table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  border: black double 3px;\r\n  text-align: center;\r\n  padding: 5px;\r\n}\r\n\r\n.grid-container[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 1.4fr 0.6fr;\r\n  grid-template-rows: 1fr;\r\n  gap: 1px 1px;\r\n  grid-template-areas: \". add\";\r\n}\r\n\r\n.add[_ngcontent-%COMP%] {\r\n  grid-area: add;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6ImFkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSwgdGgsIHRkIHtcclxuICBib3JkZXI6IGJsYWNrIGRvdWJsZSAzcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmdyaWQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS40ZnIgMC42ZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgZ2FwOiAxcHggMXB4O1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiLiBhZGRcIjtcclxufVxyXG5cclxuLmFkZCB7XHJcbiAgZ3JpZC1hcmVhOiBhZGQ7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "lHZQ":
/*!************************************!*\
  !*** ./src/app/models/customer.ts ***!
  \************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
class Customer {
    constructor(id, firstName, lastName, email, password, coupons) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.coupons = coupons;
    }
    // public editable:boolean =false;
    get _id() {
        return this.id;
    }
    get _firstName() {
        return this.firstName;
    }
    get _lastName() {
        return this.lastName;
    }
    get _email() {
        return this.email;
    }
    get _password() {
        return this.password;
    }
    get _coupons() {
        return this.coupons;
    }
    set_id(id) {
        this.id = id;
    }
    set_firstName(firstName) {
        this.firstName = firstName;
    }
    set_lastName(lastName) {
        this.lastName = lastName;
    }
    set_email(email) {
        this.email = email;
    }
    set_password(password) {
        this.password = password;
    }
    set_coupons(coupons) {
        this.coupons = coupons;
    }
}


/***/ }),

/***/ "np0s":
/*!*********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.ts ***!
  \*********************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/login.service */ "EFyh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");







function ToolbarComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "exit_to_app");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ToolbarComponent {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    ngOnInit() {
        console.log(this.loginService);
        console.log(this.userName);
    }
    logout() {
        this.loginService.logout().subscribe((res) => {
            sessionStorage.removeItem('userId');
            this.loginService.loggedIn = false;
            alert(res);
            this.router.navigate(["main"]);
        }, (err) => {
            alert(err.error);
        });
    }
    ;
    openUserDetails() {
    }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToolbarComponent, selectors: [["app-toolbar"]], decls: 5, vars: 2, consts: [["color", "primary"], [1, "toolbar-fill"], ["matTooltip", "Logout", 3, "click", 4, "ngIf"], ["matTooltip", "Logout", 3, "click"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ToolbarComponent_button_4_Template, 3, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Coupon Website ", ctx.userName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginService.loggedIn == true);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], styles: [".toolbar-fill[_ngcontent-%COMP%]{\r\n    flex: 1 1 auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoidG9vbGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXItZmlsbHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG59Il19 */"] });


/***/ }),

/***/ "pPPa":
/*!*********************************************************!*\
  !*** ./src/app/components/company/company.component.ts ***!
  \*********************************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_models_category_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/category.enum */ "/2FO");
/* harmony import */ var src_app_models_coupon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/coupon */ "4jPX");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _update_coupon2_update_coupon2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-coupon2/update-coupon2.component */ "zKhy");
/* harmony import */ var _image_dialog_image_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../image-dialog/image-dialog.component */ "VPGe");
/* harmony import */ var _company_details_company_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../company-details/company-details.component */ "GH+m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/company.service */ "ZtWP");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");




















function CompanyComponent_mat_form_field_15_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", cat_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r13.categoryList[cat_r14]);
} }
function CompanyComponent_mat_form_field_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, CompanyComponent_mat_form_field_15_mat_option_4_Template, 2, 2, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "must select a category");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.keys);
} }
function CompanyComponent_mat_form_field_16_mat_error_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Price is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CompanyComponent_mat_form_field_16_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Price must be above 0");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CompanyComponent_mat_form_field_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Max Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, CompanyComponent_mat_form_field_16_mat_error_4_Template, 2, 0, "mat-error", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, CompanyComponent_mat_form_field_16_mat_error_5_Template, 2, 0, "mat-error", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.searchCouponForm.controls["searchMaxPrice"].errors == null ? null : ctx_r1.searchCouponForm.controls["searchMaxPrice"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.searchCouponForm.controls["searchMaxPrice"].errors == null ? null : ctx_r1.searchCouponForm.controls["searchMaxPrice"].errors.min);
} }
function CompanyComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CompanyComponent_tr_38_Template_img_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19); const c_r17 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r18.openImage(c_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CompanyComponent_tr_38_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19); const c_r17 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r20.editCoupon(c_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CompanyComponent_tr_38_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19); const c_r17 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r21.deleteCoupon(c_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "delete_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](c_r17.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](c_r17.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](c_r17.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](c_r17.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](c_r17.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](c_r17.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](c_r17.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", c_r17.image, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
} }
function CompanyComponent_mat_option_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r22 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", cat_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r4.categoryList[cat_r22]);
} }
function CompanyComponent_mat_error_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Price is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CompanyComponent_mat_error_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Price must be above 0");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CompanyComponent_mat_error_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Amount is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CompanyComponent_mat_error_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Amount must be above 0");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CompanyComponent_mat_error_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Start Date is required !");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CompanyComponent_mat_error_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "start date cannot be in the past");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CompanyComponent_mat_error_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "End Date is required !");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CompanyComponent_mat_error_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "End Date cannot be before startDate !");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
class CompanyComponent {
    constructor(service, fb, dialog, snack) {
        this.service = service;
        this.fb = fb;
        this.dialog = dialog;
        this.snack = snack;
        this.defaultImage = "assets/placeholder-image.jpg";
        this.categoryList = src_app_models_category_enum__WEBPACK_IMPORTED_MODULE_1__["Category"];
        this.keys = Object.keys(this.categoryList);
        this.today = new Date();
    }
    ngOnInit() {
        this.addCouponForm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1)]],
            startDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, this.pastValidator]],
            endDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1)]],
            image: ['']
        });
        this.searchCouponForm = this.fb.group({
            searchBy: [''],
            searchCat: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            searchMaxPrice: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1)]]
        });
    }
    searchCoupons() {
        let searchBy = this.searchCouponForm.controls['searchBy'].value;
        let cat = this.searchCouponForm.controls['searchCat'].value;
        let maxPrice = this.searchCouponForm.controls['searchMaxPrice'].value;
        switch (searchBy) {
            case 'category':
                if (cat == '' || cat == null) {
                    break;
                }
                this.service.getCouponsByCategory(cat).subscribe((res) => {
                    this.coupons = res;
                }, (err) => {
                    alert(err.error);
                    console.log(err.error);
                });
                break;
            case 'maxPrice':
                if (maxPrice == '' || maxPrice == null) {
                    break;
                }
                this.service.getCouponsBelowPrice(maxPrice).subscribe((res) => {
                    this.coupons = res;
                }, (err) => {
                    alert(err.error);
                    console.log(err.error);
                });
                break;
            default:
                this.service.getCompanyCoupons().subscribe((res) => {
                    this.coupons = res;
                    console.log(res);
                }, (err) => {
                    console.log(err.error);
                    alert(err.error);
                });
        }
    }
    editCoupon(coupon) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.restoreFocus = true;
        dialogConfig.disableClose = true;
        dialogConfig.data = {
            dataToSend: coupon
        };
        const dialogRef = this.dialog.open(_update_coupon2_update_coupon2_component__WEBPACK_IMPORTED_MODULE_4__["UpdateCoupon2Component"], dialogConfig);
        dialogRef.afterClosed().subscribe((data) => {
            if (data == undefined)
                return;
            coupon = data;
            console.log(data);
            console.log(coupon);
        });
    }
    deleteCoupon(coupon) {
        this.service.deleteCoupon(coupon.id).subscribe((res) => {
            this.messageForUser = res;
            this.coupons.splice(this.coupons.indexOf(coupon), 1);
            this.showSnack();
        }, (err) => {
            alert(err.error);
            console.log(err.error);
        });
    }
    addCoupon(formDirective) {
        let title = this.addCouponForm.controls['title'].value;
        let cat = this.addCouponForm.controls['category'].value;
        let description = this.addCouponForm.controls['description'].value;
        let price = this.addCouponForm.controls['price'].value;
        let startDate = this.addCouponForm.controls['startDate'].value;
        if (startDate < this.today) {
            alert('can not pick a start date before today !');
            return;
        }
        let endDate = this.addCouponForm.controls['endDate'].value;
        if (endDate < startDate) {
            alert('can not pick an end date sooner than the start date !');
            return;
        }
        let amount = this.addCouponForm.controls['amount'].value;
        let image = this.addCouponForm.controls['image'].value;
        if (image == null || image == '' || image == undefined) {
            image = this.defaultImage;
        }
        let coupon = new src_app_models_coupon__WEBPACK_IMPORTED_MODULE_2__["Coupon"](0, title, cat, description, price, this.company, startDate, endDate, amount, image);
        this.service.addCoupon(coupon).subscribe((res) => {
            this.messageForUser = res;
            this.showSnack();
            this.formReset(this.addCouponForm, formDirective);
        }, (err) => {
            alert(err.error);
            console.log(err.error);
        });
    }
    openCompanyDetails() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.maxHeight = '400px';
        dialogConfig.maxWidth = '600px';
        dialogConfig.autoFocus = true;
        const dialogRef = this.dialog.open(_company_details_company_details_component__WEBPACK_IMPORTED_MODULE_6__["CompanyDetailsComponent"], dialogConfig);
    }
    formReset(form, formDirective) {
        formDirective.resetForm();
        form.reset();
    }
    openImage(coupon) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.maxHeight = '400px';
        dialogConfig.maxWidth = '600px';
        dialogConfig.restoreFocus = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            imageUrl: coupon.image
        };
        const dialogRef = this.dialog.open(_image_dialog_image_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ImageDialogComponent"], dialogConfig);
    }
    showSnack() {
        let snackRef = this.snack.open(this.messageForUser, "close", { duration: 2000 });
        snackRef.onAction().subscribe(() => {
            //do your stuff here !
            this.snack.dismiss();
        });
    }
    pastValidator(control) {
        let yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        let startDate = new Date(control.value);
        if (yesterday > startDate) {
            return { pastError: true };
        }
    }
}
CompanyComponent.ɵfac = function CompanyComponent_Factory(t) { return new (t || CompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_company_service__WEBPACK_IMPORTED_MODULE_8__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"])); };
CompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CompanyComponent, selectors: [["app-company"]], decls: 100, vars: 17, consts: [["label", "Search Coupons"], ["action", "POST", 3, "formGroup"], ["mat-raised-button", "", 3, "click"], ["matInput", "", "formControlName", "searchBy"], ["value", "category"], ["value", "maxPrice"], [4, "ngIf"], ["mat-stroked-button", "", 3, "click"], [4, "ngFor", "ngForOf"], ["label", "Add Coupons"], [3, "formGroup", "ngSubmit"], ["formDirective", "ngForm"], ["appearance", "outline"], ["type", "text", "matInput", "", "formControlName", "title", "required", ""], ["matInput", "", "formControlName", "category"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "number", "matInput", "", "formControlName", "price", "min", "1", "required", ""], ["type", "number", "matInput", "", "formControlName", "amount", "min", "1", "required", ""], ["type", "date", "matInput", "", "formControlName", "startDate", "required", "", 3, "min"], ["type", "date", "matInput", "", "formControlName", "endDate", "required", "", 3, "min"], ["appearance", "outline", 2, "width", "500px"], ["matInput", "", "formControlName", "description", "placeholder", "describe it...", "required", ""], ["type", "text", "matInput", "", "maxlength", "255", "formControlName", "image"], ["type", "submit", "mat-raised-button", "", 3, "disabled"], ["matInput", "", "formControlName", "searchCat"], [3, "value"], ["type", "number", "matInput", "", "formControlName", "searchMaxPrice", "min", "1"], ["alt", "wtf", "height", "20px", "width", "20px", 3, "src", "click"]], template: function CompanyComponent_Template(rf, ctx) { if (rf & 1) {
        const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-tab", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CompanyComponent_Template_button_click_4_listener() { return ctx.searchCoupons(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Search By");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Max Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, CompanyComponent_mat_form_field_15_Template, 7, 1, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, CompanyComponent_mat_form_field_16_Template, 6, 2, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CompanyComponent_Template_button_click_17_listener() { return ctx.openCompanyDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Company Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "Start Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "End Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](38, CompanyComponent_tr_38_Template, 29, 8, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "mat-tab", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "Add a Coupon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "form", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function CompanyComponent_Template_form_ngSubmit_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r23); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](44); return ctx.addCoupon(_r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](48, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, "Title is required !");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](55, CompanyComponent_mat_option_55_Template, 2, 2, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "Category is required !");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](61, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](62, CompanyComponent_mat_error_62_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](63, CompanyComponent_mat_error_63_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](67, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](68, CompanyComponent_mat_error_68_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](69, CompanyComponent_mat_error_69_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](73, "Start Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](74, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](75, CompanyComponent_mat_error_75_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](76, CompanyComponent_mat_error_76_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](79, "End Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](80, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](81, CompanyComponent_mat_error_81_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](82, CompanyComponent_mat_error_82_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "mat-form-field", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](86, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](87, "textarea", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](89, "Description is required !");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](90, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](93, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](94, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](95, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](96, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](97, "Add Coupon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](98, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](99, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.searchCouponForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.searchCouponForm.controls["searchBy"].value == "category");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.searchCouponForm.controls["searchBy"].value == "maxPrice");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.coupons);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.addCouponForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.keys);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.addCouponForm.controls["price"].errors == null ? null : ctx.addCouponForm.controls["price"].errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.addCouponForm.controls["price"].errors == null ? null : ctx.addCouponForm.controls["price"].errors.min);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.addCouponForm.controls["amount"].errors == null ? null : ctx.addCouponForm.controls["amount"].errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.addCouponForm.controls["amount"].errors == null ? null : ctx.addCouponForm.controls["amount"].errors.min);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("min", ctx.today.toJSON().split("T")[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.addCouponForm.controls["startDate"].errors == null ? null : ctx.addCouponForm.controls["startDate"].errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.addCouponForm.controls["startDate"].errors == null ? null : ctx.addCouponForm.controls["startDate"].errors.pastError);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("min", ctx.addCouponForm.controls["startDate"].value);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.addCouponForm.controls["endDate"].errors == null ? null : ctx.addCouponForm.controls["endDate"].errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.addCouponForm.controls["endDate"].errors == null ? null : ctx.addCouponForm.controls["endDate"].errors.eDateError);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.addCouponForm.valid);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTab"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"]], styles: ["table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    border: black double 3px;\r\n    text-align: center;\r\n    padding: 5px;\r\n  }\r\n  \r\n  button[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n  }\r\n  \r\n  mat-form-field[_ngcontent-%COMP%]{\r\n    margin: 20px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBhbnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkIiwiZmlsZSI6ImNvbXBhbnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlLCB0aCwgdGQge1xyXG4gICAgYm9yZGVyOiBibGFjayBkb3VibGUgM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuICBcclxuICBidXR0b24ge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgbWF0LWZvcm0tZmllbGR7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/admin/admin.component */ "cCTE");
/* harmony import */ var _components_company_company_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/company/company.component */ "pPPa");
/* harmony import */ var _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/customer/customer.component */ "VT+M");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "F33o");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    { path: "main", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: "admin", component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_1__["AdminComponent"] },
    { path: "company", component: _components_company_company_component__WEBPACK_IMPORTED_MODULE_2__["CompanyComponent"] },
    { path: "customer", component: _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_3__["CustomerComponent"] },
    { path: "", redirectTo: "main", pathMatch: "full" },
    { path: "**", component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "w3qZ":
/*!*************************************************************************!*\
  !*** ./src/app/components/update-customer/update-customer.component.ts ***!
  \*************************************************************************/
/*! exports provided: UpdateCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCustomerComponent", function() { return UpdateCustomerComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_models_customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/customer */ "lHZQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/admin.service */ "AJ6+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












function UpdateCustomerComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email is required !");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UpdateCustomerComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email is not legit !");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class UpdateCustomerComponent {
    constructor(dialogRef, data, fb, service, snack) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.service = service;
        this.snack = snack;
        this.customer = data.dataToSend;
    }
    ngOnInit() {
        this.updateCustomerForm = this.fb.group({
            firstName: [this.customer.firstName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: [this.customer.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [this.customer.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: [this.customer.password, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    updateCustomer() {
        let customer = new src_app_models_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"](this.customer.id, this.updateCustomerForm.controls['firstName'].value, this.updateCustomerForm.controls['lastName'].value, this.updateCustomerForm.controls['email'].value, this.updateCustomerForm.controls['password'].value, this.customer.coupons);
        this.service.updateCustomer(customer).subscribe((res) => {
            this.messageForUser = res;
            this.showSnack();
            this.dialogRef.close(customer);
        }, (err) => {
            alert(err.error);
        });
    }
    showSnack() {
        let snackRef = this.snack.open(this.messageForUser, "close", { duration: 2000 });
        snackRef.onAction().subscribe(() => {
            //do your stuff here !
            this.snack.dismiss();
        });
    }
}
UpdateCustomerComponent.ɵfac = function UpdateCustomerComponent_Factory(t) { return new (t || UpdateCustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"])); };
UpdateCustomerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UpdateCustomerComponent, selectors: [["app-update-customer"]], decls: 33, vars: 6, consts: [[3, "formGroup"], ["appearance", "outline"], ["type", "text", "matInput", "", "formControlName", "firstName", "required", ""], ["type", "text", "matInput", "", "formControlName", "lastName", "required", ""], ["type", "text", "matInput", "", "formControlName", "email", "required", ""], [4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "password", "required", ""], ["mat-raised-button", "", 3, "disabled", "click"]], template: function UpdateCustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "First Name is required !");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Last Name is required !");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, UpdateCustomerComponent_mat_error_20_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, UpdateCustomerComponent_mat_error_21_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Password is required !");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateCustomerComponent_Template_button_click_29_listener() { return ctx.updateCustomer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Update !");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("Update a Customer - ", ctx.customer.firstName, " ", ctx.customer.lastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.updateCustomerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.updateCustomerForm.controls["email"].errors == null ? null : ctx.updateCustomerForm.controls["email"].errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.updateCustomerForm.controls["email"].errors == null ? null : ctx.updateCustomerForm.controls["email"].errors.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.updateCustomerForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtY3VzdG9tZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "zKhy":
/*!*******************************************************************************!*\
  !*** ./src/app/components/company/update-coupon2/update-coupon2.component.ts ***!
  \*******************************************************************************/
/*! exports provided: UpdateCoupon2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCoupon2Component", function() { return UpdateCoupon2Component; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_models_coupon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/coupon */ "4jPX");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/company.service */ "ZtWP");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












function UpdateCoupon2Component_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Price is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UpdateCoupon2Component_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Price must be above 0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UpdateCoupon2Component_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Amount is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UpdateCoupon2Component_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Amount must be above 0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class UpdateCoupon2Component {
    constructor(dialogRef, data, service, fb, snack) {
        this.dialogRef = dialogRef;
        this.service = service;
        this.fb = fb;
        this.snack = snack;
        this.defaultImage = "assets/placeholder-image.jpg";
        this.today = new Date().toJSON().split('T')[0];
        this.coupon = data.dataToSend;
    }
    ngOnInit() {
        this.updateCouponForm = this.fb.group({
            title: [this.coupon.title, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            description: [this.coupon.description, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            price: [this.coupon.price, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1)]],
            startDate: [this.coupon.startDate, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            endDate: [this.coupon.endDate, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            amount: [this.coupon.amount, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1)]],
            image: [this.coupon.image]
        });
    }
    updateCoupon() {
        let startDate = this.updateCouponForm.controls['startDate'].value;
        if (startDate < this.today) {
            alert('can not pick a start date before today !');
            return;
        }
        let endDate = this.updateCouponForm.controls['endDate'].value;
        if (endDate < startDate) {
            alert('can not pick an end date sooner than the start date !');
            return;
        }
        let image = this.updateCouponForm.controls['image'].value;
        if (image == null || image == '' || image == undefined) {
            image = this.defaultImage;
        }
        let coupon = new src_app_models_coupon__WEBPACK_IMPORTED_MODULE_1__["Coupon"](this.coupon.id, this.updateCouponForm.controls['title'].value, this.coupon.category, this.updateCouponForm.controls['description'].value, this.updateCouponForm.controls['price'].value, this.coupon.company, startDate, endDate, this.updateCouponForm.controls['amount'].value, image);
        this.service.updateCoupon(coupon).subscribe((res) => {
            this.coupon = coupon;
            this.updateCouponMessage = res;
            this.showSnack();
            this.dialogRef.close(coupon);
        }, (err) => {
            this.updateCouponMessage = err.error;
            alert(err.error);
            console.log(err.error);
        });
    }
    close() {
        this.dialogRef.close();
    }
    showSnack() {
        let snackRef = this.snack.open(this.updateCouponMessage, "close", { duration: 2000 });
        snackRef.onAction().subscribe(() => {
            //do your stuff here !
            this.snack.dismiss();
        });
    }
}
UpdateCoupon2Component.ɵfac = function UpdateCoupon2Component_Factory(t) { return new (t || UpdateCoupon2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_company_service__WEBPACK_IMPORTED_MODULE_4__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"])); };
UpdateCoupon2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UpdateCoupon2Component, selectors: [["app-update-coupon2"]], decls: 60, vars: 10, consts: [["mat-dialog-title", ""], [3, "formGroup"], ["appearance", "outline"], ["type", "text", "matInput", "", "formControlName", "title", "required", ""], ["type", "number", "matInput", "", "formControlName", "price", "min", "1", "required", ""], [4, "ngIf"], ["type", "number", "matInput", "", "formControlName", "amount", "min", "1", "required", ""], ["type", "date", "matInput", "", "formControlName", "startDate", "required", "", 3, "min"], ["type", "date", "matInput", "", "formControlName", "endDate", "required", "", 3, "min"], ["appearance", "outline", 2, "width", "500px"], ["matInput", "", "formControlName", "description", "required", "", "placeholder", "describe it..."], ["type", "text", "matInput", "", "maxlength", "255", "formControlName", "image"], ["type", "submit", "mat-raised-button", "", 3, "disabled", "click"], ["mat-raised-button", "", 3, "click"]], template: function UpdateCoupon2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Update a Coupon - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Title is required !");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, UpdateCoupon2Component_mat_error_15_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, UpdateCoupon2Component_mat_error_16_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, UpdateCoupon2Component_mat_error_21_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, UpdateCoupon2Component_mat_error_22_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Start Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Start Date is required !");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "End Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "End Date is required !");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Description is required !");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "max 255 chars");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateCoupon2Component_Template_button_click_56_listener() { return ctx.updateCoupon(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Update !");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateCoupon2Component_Template_button_click_58_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.coupon.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.updateCouponForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.updateCouponForm.controls["price"].errors == null ? null : ctx.updateCouponForm.controls["price"].errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.updateCouponForm.controls["price"].errors == null ? null : ctx.updateCouponForm.controls["price"].errors.min);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.updateCouponForm.controls["amount"].errors == null ? null : ctx.updateCouponForm.controls["amount"].errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.updateCouponForm.controls["amount"].errors == null ? null : ctx.updateCouponForm.controls["amount"].errors.min);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("min", ctx.today);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("min", ctx.updateCouponForm.controls["startDate"].value);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.updateCouponMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.updateCouponForm.valid);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatHint"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtY291cG9uMi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map