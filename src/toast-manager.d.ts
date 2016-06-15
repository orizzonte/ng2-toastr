import { EventEmitter } from '@angular/core';
import { Toast } from './toast';
export declare class ToastsManager {
    onAddToast: EventEmitter<Toast>;
    onclearToasts: EventEmitter<any>;
    show(toast: Toast): void;
    clearToasts(): void;
    error(message: string, title?: string): void;
    info(message: string, title?: string): void;
    success(message: string, title?: string): void;
    warning(message: string, title?: string): void;
}
