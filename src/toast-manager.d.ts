import { EventEmitter } from 'angular2/core';
import { Toast } from './toast';
export declare class ToastsManager {
    onAddToast: EventEmitter<Toast>;
    onclearToasts: EventEmitter<{}>;
    containerLoaded: boolean;
    show(toast: Toast): void;
    clearToasts(): void;
    error(message: string, title?: string): void;
    info(message: string, title?: string): void;
    success(message: string, title?: string): void;
    warning(message: string, title?: string): void;
}
