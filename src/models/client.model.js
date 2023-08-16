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
exports.clientUser = void 0;
var typegoose_1 = require("@typegoose/typegoose");
var clientUser = exports.clientUser = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _gender_decorators;
    var _gender_initializers = [];
    var _telephone_decorators;
    var _telephone_initializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _date_decorators;
    var _date_initializers = [];
    var _address_decorators;
    var _address_initializers = [];
    var _userName_decorators;
    var _userName_initializers = [];
    var _photo_decorators;
    var _photo_initializers = [];
    var _password_decorators;
    var _password_initializers = [];
    return _a = /** @class */ (function () {
            function clientUser() {
                this.name = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _name_initializers, void 0));
                this.gender = __runInitializers(this, _gender_initializers, void 0);
                this.telephone = __runInitializers(this, _telephone_initializers, void 0);
                this.email = __runInitializers(this, _email_initializers, void 0);
                this.date = __runInitializers(this, _date_initializers, void 0);
                this.address = __runInitializers(this, _address_initializers, void 0);
                this.userName = __runInitializers(this, _userName_initializers, void 0);
                this.photo = __runInitializers(this, _photo_initializers, void 0);
                this.password = __runInitializers(this, _password_initializers, void 0);
            }
            return clientUser;
        }()),
        (function () {
            _name_decorators = [(0, typegoose_1.prop)({ type: String, required: true })];
            _gender_decorators = [(0, typegoose_1.prop)({ type: String, required: true })];
            _telephone_decorators = [(0, typegoose_1.prop)({ type: Number, required: true })];
            _email_decorators = [(0, typegoose_1.prop)({ type: String, required: true, trim: true })];
            _date_decorators = [(0, typegoose_1.prop)({ type: String })];
            _address_decorators = [(0, typegoose_1.prop)({ type: String, required: true })];
            _userName_decorators = [(0, typegoose_1.prop)({ type: String, required: true, trim: true })];
            _photo_decorators = [(0, typegoose_1.prop)({ type: String, required: true })];
            _password_decorators = [(0, typegoose_1.prop)({ type: String, required: true })];
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } } }, _name_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _gender_decorators, { kind: "field", name: "gender", static: false, private: false, access: { has: function (obj) { return "gender" in obj; }, get: function (obj) { return obj.gender; }, set: function (obj, value) { obj.gender = value; } } }, _gender_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _telephone_decorators, { kind: "field", name: "telephone", static: false, private: false, access: { has: function (obj) { return "telephone" in obj; }, get: function (obj) { return obj.telephone; }, set: function (obj, value) { obj.telephone = value; } } }, _telephone_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } } }, _email_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _date_decorators, { kind: "field", name: "date", static: false, private: false, access: { has: function (obj) { return "date" in obj; }, get: function (obj) { return obj.date; }, set: function (obj, value) { obj.date = value; } } }, _date_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _address_decorators, { kind: "field", name: "address", static: false, private: false, access: { has: function (obj) { return "address" in obj; }, get: function (obj) { return obj.address; }, set: function (obj, value) { obj.address = value; } } }, _address_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _userName_decorators, { kind: "field", name: "userName", static: false, private: false, access: { has: function (obj) { return "userName" in obj; }, get: function (obj) { return obj.userName; }, set: function (obj, value) { obj.userName = value; } } }, _userName_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _photo_decorators, { kind: "field", name: "photo", static: false, private: false, access: { has: function (obj) { return "photo" in obj; }, get: function (obj) { return obj.photo; }, set: function (obj, value) { obj.photo = value; } } }, _photo_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _password_decorators, { kind: "field", name: "password", static: false, private: false, access: { has: function (obj) { return "password" in obj; }, get: function (obj) { return obj.password; }, set: function (obj, value) { obj.password = value; } } }, _password_initializers, _instanceExtraInitializers);
        })(),
        _a;
}();
var clientModel = (0, typegoose_1.getModelForClass)(clientUser);
exports.default = clientModel;
