System.register(['@angular/core', '@angular/common', './toast-container.component', './toast-manager', './toast-options'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, toast_container_component_1, toast_manager_1, toast_options_1;
    var ToastModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (toast_container_component_1_1) {
                toast_container_component_1 = toast_container_component_1_1;
            },
            function (toast_manager_1_1) {
                toast_manager_1 = toast_manager_1_1;
            },
            function (toast_options_1_1) {
                toast_options_1 = toast_options_1_1;
            }],
        execute: function() {
            ToastModule = (function () {
                function ToastModule() {
                }
                ToastModule.forRoot = function (config) {
                    return {
                        ngModule: ToastModule,
                        providers: [
                            { provide: toast_options_1.ToastOptions, useValue: config }
                        ]
                    };
                };
                ToastModule.decorators = [
                    { type: core_1.NgModule, args: [{
                                imports: [common_1.CommonModule],
                                declarations: [toast_container_component_1.ToastContainer],
                                exports: [toast_container_component_1.ToastContainer],
                                providers: [toast_manager_1.ToastsManager],
                                entryComponents: [toast_container_component_1.ToastContainer]
                            },] },
                ];
                /** @nocollapse */
                ToastModule.ctorParameters = [];
                return ToastModule;
            }());
            exports_1("ToastModule", ToastModule);
        }
    }
});
//# sourceMappingURL=toast.module.js.map