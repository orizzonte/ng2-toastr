System.register(['@angular/core', './toast'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, toast_1;
    var ToastsManager;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (toast_1_1) {
                toast_1 = toast_1_1;
            }],
        execute: function() {
            ToastsManager = (function () {
                function ToastsManager() {
                    this.onAddToast = new core_1.EventEmitter();
                    this.onclearToasts = new core_1.EventEmitter();
                }
                ToastsManager.prototype.show = function (toast) {
                    this.onAddToast.emit(toast);
                };
                ToastsManager.prototype.clearToasts = function () {
                    this.onclearToasts.emit(null);
                };
                ToastsManager.prototype.error = function (message, title) {
                    var toast = new toast_1.Toast('error', message, title);
                    this.show(toast);
                };
                ToastsManager.prototype.info = function (message, title) {
                    var toast = new toast_1.Toast('info', message, title);
                    this.show(toast);
                };
                ToastsManager.prototype.success = function (message, title) {
                    var toast = new toast_1.Toast('success', message, title);
                    this.show(toast);
                };
                ToastsManager.prototype.warning = function (message, title) {
                    var toast = new toast_1.Toast('warning', message, title);
                    this.show(toast);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], ToastsManager.prototype, "onAddToast", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ToastsManager.prototype, "onclearToasts", void 0);
                ToastsManager = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ToastsManager);
                return ToastsManager;
            }());
            exports_1("ToastsManager", ToastsManager);
        }
    }
});
//# sourceMappingURL=toast-manager.js.map