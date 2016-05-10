import {Injectable, Output, EventEmitter} from '@angular/core';
import {Toast} from './toast';

@Injectable()
export class ToastsManager {
    @Output() onAddToast: EventEmitter<Toast> = new EventEmitter()
    @Output() onclearToasts = new EventEmitter();   

    show(toast: Toast) {       
            this.onAddToast.emit(toast);
    }

    clearToasts() {      
            this.onclearToasts.emit(null);
    }

    error(message: string, title?: string) {
        let toast = new Toast('error', message, title);
        this.show(toast);
    }

    info(message: string, title?: string) {
        let toast = new Toast('info', message, title);
        this.show(toast);
    }

    success(message: string, title?: string) {
        let toast = new Toast('success', message, title);
        this.show(toast);
    }

    warning(message: string, title?: string) {
        let toast = new Toast('warning', message, title);
        this.show(toast);
    }  
}
