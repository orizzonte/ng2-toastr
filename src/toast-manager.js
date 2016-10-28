System.register(['@angular/core', './toast'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
                ToastsManager.decorators = [
                    { type: core_1.Injectable },
                ];
                /** @nocollapse */
                ToastsManager.ctorParameters = [];
                ToastsManager.propDecorators = {
                    'onAddToast': [{ type: core_1.Output },],
                    'onclearToasts': [{ type: core_1.Output },],
                };
                return ToastsManager;
            }());
            exports_1("ToastsManager", ToastsManager);
        }
    }
});
//# sourceMappingURL=toast-manager.js.map