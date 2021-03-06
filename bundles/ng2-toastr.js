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

System.register("ng2-toastr/src/toast-manager", ["@angular/core", "./toast"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
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
        }
        ToastsManager.prototype.show = function(toast) {
          this.onAddToast.emit(toast);
        };
        ToastsManager.prototype.clearToasts = function() {
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
        ToastsManager.decorators = [{type: core_1.Injectable}];
        ToastsManager.ctorParameters = [];
        ToastsManager.propDecorators = {
          'onAddToast': [{type: core_1.Output}],
          'onclearToasts': [{type: core_1.Output}]
        };
        return ToastsManager;
      }());
      exports_1("ToastsManager", ToastsManager);
    }
  };
});

System.register("ng2-toastr/src/toast-container.component", ["@angular/core", "./toast-options", "./toast-manager"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
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
          var _this = this;
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
          this.mgr.onAddToast.subscribe(function(toast) {
            return _this.addToast(toast);
          });
          this.mgr.onclearToasts.subscribe(function(x) {
            return _this.removeToasts();
          });
        }
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
        ToastContainer.decorators = [{
          type: core_1.Component,
          args: [{
            selector: 'toast-container',
            template: "\n    <div id=\"toast-container\" [style.position]=\"position\" class=\"{{positionClass}}\">\n      <div *ngFor=\"let toast of toasts\" class=\"toast-{{toast.type}}\" (click)=\"dismiss(toast)\">\n        <div *ngIf=\"toast.title\" class=\"{{titleClass}}\">{{toast.title}}</div>\n        <div class=\"{{messageClass}}\">{{toast.message}}</div>\n      </div>\n    </div>\n    "
          }]
        }];
        ToastContainer.ctorParameters = [{type: toast_manager_1.ToastsManager}, {
          type: undefined,
          decorators: [{type: core_1.Optional}, {
            type: core_1.Inject,
            args: [toast_options_1.ToastOptions]
          }]
        }];
        return ToastContainer;
      }());
      exports_1("ToastContainer", ToastContainer);
    }
  };
});

System.register("ng2-toastr/src/toast-options", ["@angular/core"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
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
        ToastOptions.decorators = [{type: core_1.Injectable}];
        ToastOptions.ctorParameters = [{type: Object}];
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

//# sourceMappingURL=ng2-toastr.js.map