System.register(['angular2/core', './toast-options', './toast-manager'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, toast_options_1, toast_manager_1;
    var ToastContainer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (toast_options_1_1) {
                toast_options_1 = toast_options_1_1;
            },
            function (toast_manager_1_1) {
                toast_manager_1 = toast_manager_1_1;
            }],
        execute: function() {
            ToastContainer = (function () {
                function ToastContainer(mgr, options) {
                    this.mgr = mgr;
                    this.position = 'absolute';
                    this.messageClass = 'toast-message';
                    this.titleClass = 'toast-title';
                    this.positionClass = 'toast-top-right';
                    this.toasts = [];
                    this.maxShown = 5;
                    this.autoDismiss = true;
                    this.lastId = 1;
                    this.toastLife = 3000;
                    if (options) {
                        Object.assign(this, options);
                    }
                }
                ToastContainer.prototype.ngOnInit = function () {
                    var _this = this;
                    this.mgr.onAddToast.subscribe(function (toast) { return _this.addToast(toast); });
                    this.mgr.onclearToasts.subscribe(this.removeToasts());
                    this.mgr.containerLoaded = true;
                };
                ToastContainer.prototype.addToast = function (toast) {
                    var _this = this;
                    toast.id = this.lastId++;
                    if (this.positionClass.indexOf('top') > 0) {
                        this.toasts.push(toast);
                        if (this.toasts.length > this.maxShown) {
                            this.toasts.splice(0, (this.toasts.length - this.maxShown));
                        }
                    }
                    else {
                        this.toasts.unshift(toast);
                        if (this.toasts.length > this.maxShown) {
                            this.toasts.splice(this.maxShown, (this.toasts.length - this.maxShown));
                        }
                    }
                    if (this.autoDismiss) {
                        setTimeout(function () { _this.removeToast(toast.id); }, this.toastLife);
                    }
                };
                ToastContainer.prototype.removeToast = function (toastId) {
                    this.toasts = this.toasts.filter(function (toast) {
                        return toast.id !== toastId;
                    });
                };
                ToastContainer.prototype.removeToasts = function () {
                    this.toasts.splice(0, this.toasts.length);
                };
                ToastContainer.prototype.dismiss = function (toast) {
                    this.removeToast(toast.id);
                };
                ToastContainer.prototype.anyToast = function () {
                    return this.toasts.length > 0;
                };
                ToastContainer.prototype.findToast = function (toastId) {
                    for (var _i = 0, _a = this.toasts; _i < _a.length; _i++) {
                        var toast = _a[_i];
                        if (toast.id === toastId) {
                            return toast;
                        }
                    }
                    return null;
                };
                ToastContainer = __decorate([
                    core_1.Component({
                        selector: 'toast-container',
                        template: "\n    <div id=\"toast-container\" [style.position]=\"position\" class=\"{{positionClass}}\">\n      <div *ngFor=\"#toast of toasts\" class=\"toast-{{toast.type}}\" (click)=\"dismiss(toast)\">\n        <div *ngIf=\"toast.title\" class=\"{{titleClass}}\">{{toast.title}}</div>\n        <div class=\"{{messageClass}}\">{{toast.message}}</div>\n      </div>\n    </div>\n    ",
                    }),
                    __param(1, core_1.Optional()),
                    __param(1, core_1.Inject(toast_options_1.ToastOptions)), 
                    __metadata('design:paramtypes', [toast_manager_1.ToastsManager, Object])
                ], ToastContainer);
                return ToastContainer;
            }());
            exports_1("ToastContainer", ToastContainer);
        }
    }
});
//# sourceMappingURL=toast-container.component.js.map