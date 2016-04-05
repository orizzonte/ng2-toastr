import { OnInit } from 'angular2/core';
import { Toast } from './toast';
import { ToastsManager } from './toast-manager';
export declare class ToastContainer implements OnInit {
    private mgr;
    position: string;
    messageClass: string;
    titleClass: string;
    positionClass: string;
    toasts: Toast[];
    maxShown: number;
    autoDismiss: boolean;
    lastId: number;
    toastLife: number;
    constructor(mgr: ToastsManager, options: any);
    ngOnInit(): void;
    addToast(toast: Toast): void;
    removeToast(toastId: number): void;
    removeToasts(): void;
    dismiss(toast: any): void;
    anyToast(): boolean;
    findToast(toastId: number): Toast;
}
