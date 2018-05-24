import { Injectable } from '@angular/core';
import { ToastrService, ToastrConfig } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AnimatemessageService {

  constructor(private toastr: ToastrService) { }

  showSuccess(message: string, title: string, config?: ToastrConfig) {
    this.toastr.success(title, message, config);
  }

  showInfo(message: string, title: string, config?: ToastrConfig) {
    this.toastr.info(title, message, config);
  }

  showWarning(message: string, title: string, config?: ToastrConfig) {
    this.toastr.warning(title, message, config);
  }

  showError(message: string, title: string, config?: ToastrConfig) {
    this.toastr.error(title, message, config);
  }
}
