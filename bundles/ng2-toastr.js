System.register("ng2-toastr/src/toast", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var Toast;
  return {
    setters: [],
    execute: function() {
      Toast = (function() {
        function Toast(type, message, title) {
          this.type = type;
          this.message = message;
          this.title = title;
        }
        return Toast;
      }());
      exports_1("Toast", Toast);
    }
  };
});

System.register("ng2-toastr/src/toast-manager", ["angular2/core", "./toast"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      toast_1;
  var ToastsManager;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(toast_1_1) {
      toast_1 = toast_1_1;
    }],
    execute: function() {
      ToastsManager = (function() {
        function ToastsManager() {
          this.onAddToast = new core_1.EventEmitter();
          this.onclearToasts = new core_1.EventEmitter();
          this.containerLoaded = false;
        }
        ToastsManager.prototype.show = function(toast) {
          if (this.containerLoaded)
            this.onAddToast.emit(toast);
        };
        ToastsManager.prototype.clearToasts = function() {
          if (this.containerLoaded)
            this.onclearToasts.emit(null);
        };
        ToastsManager.prototype.error = function(message, title) {
          var toast = new toast_1.Toast('error', message, title);
          this.show(toast);
        };
        ToastsManager.prototype.info = function(message, title) {
          var toast = new toast_1.Toast('info', message, title);
          this.show(toast);
        };
        ToastsManager.prototype.success = function(message, title) {
          var toast = new toast_1.Toast('success', message, title);
          this.show(toast);
        };
        ToastsManager.prototype.warning = function(message, title) {
          var toast = new toast_1.Toast('warning', message, title);
          this.show(toast);
        };
        __decorate([core_1.Output(), __metadata('design:type', core_1.EventEmitter)], ToastsManager.prototype, "onAddToast", void 0);
        __decorate([core_1.Output(), __metadata('design:type', Object)], ToastsManager.prototype, "onclearToasts", void 0);
        ToastsManager = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [])], ToastsManager);
        return ToastsManager;
      }());
      exports_1("ToastsManager", ToastsManager);
    }
  };
});

System.register("ng2-toastr/src/toast-container.component", ["angular2/core", "./toast-options", "./toast-manager"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __param = (this && this.__param) || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  var core_1,
      toast_options_1,
      toast_manager_1;
  var ToastContainer;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(toast_options_1_1) {
      toast_options_1 = toast_options_1_1;
    }, function(toast_manager_1_1) {
      toast_manager_1 = toast_manager_1_1;
    }],
    execute: function() {
      ToastContainer = (function() {
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
        ToastContainer.prototype.ngOnInit = function() {
          var _this = this;
          this.mgr.onAddToast.subscribe(function(toast) {
            return _this.addToast(toast);
          });
          this.mgr.onclearToasts.subscribe(this.removeToasts());
          this.mgr.containerLoaded = true;
        };
        ToastContainer.prototype.addToast = function(toast) {
          var _this = this;
          toast.id = this.lastId++;
          if (this.positionClass.indexOf('top') > 0) {
            this.toasts.push(toast);
            if (this.toasts.length > this.maxShown) {
              this.toasts.splice(0, (this.toasts.length - this.maxShown));
            }
          } else {
            this.toasts.unshift(toast);
            if (this.toasts.length > this.maxShown) {
              this.toasts.splice(this.maxShown, (this.toasts.length - this.maxShown));
            }
          }
          if (this.autoDismiss) {
            setTimeout(function() {
              _this.removeToast(toast.id);
            }, this.toastLife);
          }
        };
        ToastContainer.prototype.removeToast = function(toastId) {
          this.toasts = this.toasts.filter(function(toast) {
            return toast.id !== toastId;
          });
        };
        ToastContainer.prototype.removeToasts = function() {
          this.toasts.splice(0, this.toasts.length);
        };
        ToastContainer.prototype.dismiss = function(toast) {
          this.removeToast(toast.id);
        };
        ToastContainer.prototype.anyToast = function() {
          return this.toasts.length > 0;
        };
        ToastContainer.prototype.findToast = function(toastId) {
          for (var _i = 0,
              _a = this.toasts; _i < _a.length; _i++) {
            var toast = _a[_i];
            if (toast.id === toastId) {
              return toast;
            }
          }
          return null;
        };
        ToastContainer = __decorate([core_1.Component({
          selector: 'toast-container',
          template: "\n    <div id=\"toast-container\" [style.position]=\"position\" class=\"{{positionClass}}\">\n      <div *ngFor=\"#toast of toasts\" class=\"toast-{{toast.type}}\" (click)=\"dismiss(toast)\">\n        <div *ngIf=\"toast.title\" class=\"{{titleClass}}\">{{toast.title}}</div>\n        <div class=\"{{messageClass}}\">{{toast.message}}</div>\n      </div>\n    </div>\n    "
        }), __param(1, core_1.Optional()), __param(1, core_1.Inject(toast_options_1.ToastOptions)), __metadata('design:paramtypes', [toast_manager_1.ToastsManager, Object])], ToastContainer);
        return ToastContainer;
      }());
      exports_1("ToastContainer", ToastContainer);
    }
  };
});

System.register("ng2-toastr/src/toast-options", ["angular2/core"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1;
  var ToastOptions;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }],
    execute: function() {
      ToastOptions = (function() {
        function ToastOptions(options) {
          Object.assign(this, options);
        }
        ToastOptions = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [Object])], ToastOptions);
        return ToastOptions;
      }());
      exports_1("ToastOptions", ToastOptions);
    }
  };
});

System.register("ng2-toastr/ng2-toastr", ["./src/toast", "./src/toast-manager", "./src/toast-container.component", "./src/toast-options"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  function exportStar_1(m) {
    var exports = {};
    for (var n in m) {
      if (n !== "default")
        exports[n] = m[n];
    }
    exports_1(exports);
  }
  return {
    setters: [function(toast_1_1) {
      exportStar_1(toast_1_1);
    }, function(toast_manager_1_1) {
      exportStar_1(toast_manager_1_1);
    }, function(toast_container_component_1_1) {
      exportStar_1(toast_container_component_1_1);
    }, function(toast_options_1_1) {
      exportStar_1(toast_options_1_1);
    }],
    execute: function() {}
  };
});
