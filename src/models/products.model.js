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
exports.Product = void 0;
var typegoose_1 = require("@typegoose/typegoose");
var companys = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _company_decorators;
    var _company_initializers = [];
    return _a = /** @class */ (function () {
            function companys() {
                this.company = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _company_initializers, void 0));
            }
            return companys;
        }()),
        (function () {
            _company_decorators = [(0, typegoose_1.prop)()];
            __esDecorate(null, null, _company_decorators, { kind: "field", name: "company", static: false, private: false, access: { has: function (obj) { return "company" in obj; }, get: function (obj) { return obj.company; }, set: function (obj, value) { obj.company = value; } } }, _company_initializers, _instanceExtraInitializers);
        })(),
        _a;
}();
var Product = exports.Product = function () {
    var _a;
    var _instanceExtraInitializers_1 = [];
    var _productName_decorators;
    var _productName_initializers = [];
    var _company_decorators;
    var _company_initializers = [];
    var _category_decorators;
    var _category_initializers = [];
    var _price_decorators;
    var _price_initializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _photo_decorators;
    var _photo_initializers = [];
    return _a = /** @class */ (function () {
            function Product() {
                this.productName = (__runInitializers(this, _instanceExtraInitializers_1), __runInitializers(this, _productName_initializers, void 0));
                this.company = __runInitializers(this, _company_initializers, void 0);
                this.category = __runInitializers(this, _category_initializers, void 0);
                this.price = __runInitializers(this, _price_initializers, void 0);
                this.description = __runInitializers(this, _description_initializers, void 0);
                this.photo = __runInitializers(this, _photo_initializers, void 0);
            }
            return Product;
        }()),
        (function () {
            _productName_decorators = [(0, typegoose_1.prop)({ type: String, required: true })];
            _company_decorators = [(0, typegoose_1.prop)({ type: String, required: true })];
            _category_decorators = [(0, typegoose_1.prop)({ type: String, required: true, trim: true })];
            _price_decorators = [(0, typegoose_1.prop)({ type: Number, default: 0 })];
            _description_decorators = [(0, typegoose_1.prop)({ type: String, required: true })];
            _photo_decorators = [(0, typegoose_1.prop)({ type: String, required: true })];
            __esDecorate(null, null, _productName_decorators, { kind: "field", name: "productName", static: false, private: false, access: { has: function (obj) { return "productName" in obj; }, get: function (obj) { return obj.productName; }, set: function (obj, value) { obj.productName = value; } } }, _productName_initializers, _instanceExtraInitializers_1);
            __esDecorate(null, null, _company_decorators, { kind: "field", name: "company", static: false, private: false, access: { has: function (obj) { return "company" in obj; }, get: function (obj) { return obj.company; }, set: function (obj, value) { obj.company = value; } } }, _company_initializers, _instanceExtraInitializers_1);
            __esDecorate(null, null, _category_decorators, { kind: "field", name: "category", static: false, private: false, access: { has: function (obj) { return "category" in obj; }, get: function (obj) { return obj.category; }, set: function (obj, value) { obj.category = value; } } }, _category_initializers, _instanceExtraInitializers_1);
            __esDecorate(null, null, _price_decorators, { kind: "field", name: "price", static: false, private: false, access: { has: function (obj) { return "price" in obj; }, get: function (obj) { return obj.price; }, set: function (obj, value) { obj.price = value; } } }, _price_initializers, _instanceExtraInitializers_1);
            __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } } }, _description_initializers, _instanceExtraInitializers_1);
            __esDecorate(null, null, _photo_decorators, { kind: "field", name: "photo", static: false, private: false, access: { has: function (obj) { return "photo" in obj; }, get: function (obj) { return obj.photo; }, set: function (obj, value) { obj.photo = value; } } }, _photo_initializers, _instanceExtraInitializers_1);
        })(),
        _a;
}();
var ProductModel = (0, typegoose_1.getModelForClass)(Product);
exports.default = ProductModel;
