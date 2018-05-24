import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AnimatemessageService } from '../notifications/animatemessage.service';

@Injectable()
export class ErrorsHandler implements ErrorHandler {

    constructor(
        // Because the ErrorHandler is created before the providers, we'll have to use the Injector to get them.
        private injector: Injector,
    ) { }

    handleError(error: Error | HttpErrorResponse) {

        const router = this.injector.get(Router);
        const animateMessageService = this.injector.get(AnimatemessageService);
        if (error instanceof HttpErrorResponse) {
            // Server or connection error happened
            if (!navigator.onLine) {
                // Handle offline error
                console.log('No Internet Connection');
                return animateMessageService.showError('No Internet Connection', 'Error');
            } else {
                // Handle Http Error (error.status === 403, 404..)
                console.log(`${error.status} - ${error.message}`);
                return animateMessageService.showError(`${error.status} - ${error.message}`, 'Error');
            }
        } else {
            // Handle Client Error (Angular Error, ReferenceError...)
            router.navigate(['/error'], {queryParams: {error: error} });
        }

        // Log the error anyway
        console.error('It happens: ', error);
    }
}