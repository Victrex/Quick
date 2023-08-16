"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllOrders = exports.userOrder = void 0;
var typegoose_1 = require("@typegoose/typegoose");
var userOrder = exports.userOrder = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _phone_decorators;
    var _phone_initializers = [];
    var _address_decorators;
    var _address_initializers = [];
    return _a = /** @class */ (function () {
            function userOrder() {
                this.name = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _name_initializers, void 0));
                this.email = __runInitializers(this, _email_initializers, void 0);
                this.phone = __runInitializers(this, _phone_initializers, void 0);
                this.address = __runInitializers(this, _address_initializers, void 0);
            }
            return userOrder;
        }()),
        (function () {
            _name_decorators = [(0, typegoose_1.prop)({ type: String, required: true })];
            _email_decorators = [(0, typegoose_1.prop)({ type: String, required: true })];
            _phone_decorators = [(0, typegoose_1.prop)({ type: String, required: true })];
            _address_decorators = [(0, typegoose_1.prop)({ type: String, required: true })];
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } } }, _name_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } } }, _email_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _phone_decorators, { kind: "field", name: "phone", static: false, private: false, access: { has: function (obj) { return "phone" in obj; }, get: function (obj) { return obj.phone; }, set: function (obj, value) { obj.phone = value; } } }, _phone_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _address_decorators, { kind: "field", name: "address", static: false, private: false, access: { has: function (obj) { return "address" in obj; }, get: function (obj) { return obj.address; }, set: function (obj, value) { obj.address = value; } } }, _address_initializers, _instanceExtraInitializers);
        })(),
        _a;
}();
var AllOrders = exports.AllOrders = function () {
    var _a;
    var _instanceExtraInitializers_1 = [];
    var _nameProduct_decorators;
    var _nameProduct_initializers = [];
    var _company_decorators;
    var _company_initializers = [];
    var _quantity_decorators;
    var _quantity_initializers = [];
    var _totalOrder_decorators;
    var _totalOrder_initializers = [];
    var _photo_decorators;
    var _photo_initializers = [];
    var _userName_decorators;
    var _userName_initializers = [];
    var _userEmail_decorators;
    var _userEmail_initializers = [];
    var _userPhone_decorators;
    var _userPhone_initializers = [];
    var _userAddress_decorators;
    var _userAddress_initializers = [];
    return _a = /** @class */ (function () {
            function AllOrders() {
                this.nameProduct = (__runInitializers(this, _instanceExtraInitializers_1), __runInitializers(this, _nameProduct_initializers, void 0));
                this.company = __runInitializers(this, _company_initializers, void 0);
                this.quantity = __runInitializers(this, _quantity_initializers, void 0);
                this.totalOrder = __runInitializers(this, _totalOrder_initializers, void 0);
                this.photo = __runInitializers(this, _photo_initializers, void 0);
                this.userName = __runInitializers(this, _userName_initializers, void 0);
                this.userEmail = __runInitializers(this, _userEmail_initializers, void 0);
                this.userPhone = __runInitializers(this, _userPhone_initializers, void 0);
                this.userAddress = __runInitializers(this, _userAddress_initializers, void 0);
            }
            return AllOrders;
        }()),
        (function () {
            _nameProduct_decorators = [(0, typegoose_1.prop)({ type: String, required: true })];
            _company_decorators = [(0, typegoose_1.prop)({ type: String, required: true })];
            _quantity_decorators = [(0, typegoose_1.prop)({ type: Number, required: true })];
            _totalOrder_decorators = [(0, typegoose_1.prop)({ type: Number, required: true })];
            _photo_decorators = [(0, typegoose_1.prop)({ type: String, required: true })];
            _userName_decorators = [(0, typegoose_1.prop)({ type: String, required: true })];
            _userEmail_decorators = [(0, typegoose_1.prop)({ type: String, required: true })];
            _userPhone_decorators = [(0, typegoose_1.prop)({ type: Number, required: true })];
            _userAddress_decorators = [(0, typegoose_1.prop)({ type: String, required: true })];
            __esDecorate(null, null, _nameProduct_decorators, { kind: "field", name: "nameProduct", static: false, private: false, access: { has: function (obj) { return "nameProduct" in obj; }, get: function (obj) { return obj.nameProduct; }, set: function (obj, value) { obj.nameProduct = value; } } }, _nameProduct_initializers, _instanceExtraInitializers_1);
            __esDecorate(null, null, _company_decorators, { kind: "field", name: "company", static: false, private: false, access: { has: function (obj) { return "company" in obj; }, get: function (obj) { return obj.company; }, set: function (obj, value) { obj.company = value; } } }, _company_initializers, _instanceExtraInitializers_1);
            __esDecorate(null, null, _quantity_decorators, { kind: "field", name: "quantity", static: false, private: false, access: { has: function (obj) { return "quantity" in obj; }, get: function (obj) { return obj.quantity; }, set: function (obj, value) { obj.quantity = value; } } }, _quantity_initializers, _instanceExtraInitializers_1);
            __esDecorate(null, null, _totalOrder_decorators, { kind: "field", name: "totalOrder", static: false, private: false, access: { has: function (obj) { return "totalOrder" in obj; }, get: function (obj) { return obj.totalOrder; }, set: function (obj, value) { obj.totalOrder = value; } } }, _totalOrder_initializers, _instanceExtraInitializers_1);
            __esDecorate(null, null, _photo_decorators, { kind: "field", name: "photo", static: false, private: false, access: { has: function (obj) { return "photo" in obj; }, get: function (obj) { return obj.photo; }, set: function (obj, value) { obj.photo = value; } } }, _photo_initializers, _instanceExtraInitializers_1);
            __esDecorate(null, null, _userName_decorators, { kind: "field", name: "userName", static: false, private: false, access: { has: function (obj) { return "userName" in obj; }, get: function (obj) { return obj.userName; }, set: function (obj, value) { obj.userName = value; } } }, _userName_initializers, _instanceExtraInitializers_1);
            __esDecorate(null, null, _userEmail_decorators, { kind: "field", name: "userEmail", static: false, private: false, access: { has: function (obj) { return "userEmail" in obj; }, get: function (obj) { return obj.userEmail; }, set: function (obj, value) { obj.userEmail = value; } } }, _userEmail_initializers, _instanceExtraInitializers_1);
            __esDecorate(null, null, _userPhone_decorators, { kind: "field", name: "userPhone", static: false, private: false, access: { has: function (obj) { return "userPhone" in obj; }, get: function (obj) { return obj.userPhone; }, set: function (obj, value) { obj.userPhone = value; } } }, _userPhone_initializers, _instanceExtraInitializers_1);
            __esDecorate(null, null, _userAddress_decorators, { kind: "field", name: "userAddress", static: false, private: false, access: { has: function (obj) { return "userAddress" in obj; }, get: function (obj) { return obj.userAddress; }, set: function (obj, value) { obj.userAddress = value; } } }, _userAddress_initializers, _instanceExtraInitializers_1);
        })(),
        _a;
}();
var AllorderModel = (0, typegoose_1.getModelForClass)(AllOrders);
exports.default = AllorderModel;
