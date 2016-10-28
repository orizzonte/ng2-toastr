System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var ToastOptions;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ToastOptions = (function () {
                function ToastOptions(options) {
                    Object.assign(this, options);
                }
                ToastOptions.decorators = [
                    { type: core_1.Injectable },
                ];
                /** @nocollapse */
                ToastOptions.ctorParameters = [
                    { type: Object, },
                ];
                return ToastOptions;
            }());
            exports_1("ToastOptions", ToastOptions);
        }
    }
});
//# sourceMappingURL=toast-options.js.map