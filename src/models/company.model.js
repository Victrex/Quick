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
exports.company = void 0;
var typegoose_1 = require("@typegoose/typegoose");
var company = exports.company = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _companyName_decorators;
    var _companyName_initializers = [];
    var _category_decorators;
    var _category_initializers = [];
    var _since_decorators;
    var _since_initializers = [];
    var _until_decorators;
    var _until_initializers = [];
    var _photo_decorators;
    var _photo_initializers = [];
    return _a = /** @class */ (function () {
            function company() {
                this.companyName = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _companyName_initializers, void 0));
                this.category = __runInitializers(this, _category_initializers, void 0);
                this.since = __runInitializers(this, _since_initializers, void 0);
                this.until = __runInitializers(this, _until_initializers, void 0);
                this.photo = __runInitializers(this, _photo_initializers, void 0);
            }
            return company;
        }()),
        (function () {
            _companyName_decorators = [(0, typegoose_1.prop)({ type: String, required: true })];
            _category_decorators = [(0, typegoose_1.prop)({ type: String, required: true, trim: true })];
            _since_decorators = [(0, typegoose_1.prop)({ type: String, default: 0 })];
            _until_decorators = [(0, typegoose_1.prop)({ type: String, required: true })];
            _photo_decorators = [(0, typegoose_1.prop)({ type: String, required: true })];
            __esDecorate(null, null, _companyName_decorators, { kind: "field", name: "companyName", static: false, private: false, access: { has: function (obj) { return "companyName" in obj; }, get: function (obj) { return obj.companyName; }, set: function (obj, value) { obj.companyName = value; } } }, _companyName_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _category_decorators, { kind: "field", name: "category", static: false, private: false, access: { has: function (obj) { return "category" in obj; }, get: function (obj) { return obj.category; }, set: function (obj, value) { obj.category = value; } } }, _category_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _since_decorators, { kind: "field", name: "since", static: false, private: false, access: { has: function (obj) { return "since" in obj; }, get: function (obj) { return obj.since; }, set: function (obj, value) { obj.since = value; } } }, _since_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _until_decorators, { kind: "field", name: "until", static: false, private: false, access: { has: function (obj) { return "until" in obj; }, get: function (obj) { return obj.until; }, set: function (obj, value) { obj.until = value; } } }, _until_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _photo_decorators, { kind: "field", name: "photo", static: false, private: false, access: { has: function (obj) { return "photo" in obj; }, get: function (obj) { return obj.photo; }, set: function (obj, value) { obj.photo = value; } } }, _photo_initializers, _instanceExtraInitializers);
        })(),
        _a;
}();
var companyModel = (0, typegoose_1.getModelForClass)(company);
exports.default = companyModel;
