import {Component, Input, Optional, Inject, OnInit} from 'angular2/core';
import {Toast} from './toast';
import {ToastOptions} from './toast-options';
import {ToastsManager} from './toast-manager';

@Component({
    selector: 'toast-container',
    template: `
    <div id="toast-container" [style.position]="position" class="{{positionClass}}">
      <div *ngFor="#toast of toasts" class="toast-{{toast.type}}" (click)="dismiss(toast)">
        <div *ngIf="toast.title" class="{{titleClass}}">{{toast.title}}</div>
        <div class="{{messageClass}}">{{toast.message}}</div>
      </div>
    </div>
    `,
})
export class ToastContainer {
    position = 'absolute';
    messageClass = 'toast-message';
    titleClass = 'toast-title';
    positionClass = 'toast-top-right';
    toasts: Toast[] = [];
    maxShown = 5;
    autoDismiss = true;
    lastId = 1;
    toastLife = 3000;

    constructor(private mgr: ToastsManager, @Optional() @Inject(ToastOptions) options) {
        if (options) {
            Object.assign(this, options);
        }
        
        this.mgr.onAddToast.subscribe(toast => this.addToast(toast));
        this.mgr.onclearToasts.subscribe(x => this.removeToasts()); 
    }  


    addToast(toast: Toast) {
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
             setTimeout(() => { this.removeToast(toast.id); }, this.toastLife);
        }

    }

    removeToast(toastId: number) {
        this.toasts = this.toasts.filter((toast) => {
            return toast.id !== toastId;
        });
    }

    removeToasts() {
        this.toasts.splice(0, this.toasts.length);
    }

    dismiss(toast) {
        this.removeToast(toast.id);
    }

    anyToast(): boolean {
        return this.toasts.length > 0;
    }

    findToast(toastId: number): Toast {
        for (let toast of this.toasts) {
            if (toast.id === toastId) {
                return toast;
            }
        }
        return null;
    }
}
