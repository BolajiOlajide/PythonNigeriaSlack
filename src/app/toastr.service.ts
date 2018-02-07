import { Injectable } from '@angular/core';

// 3rd party library
import * as Toastr from 'toastr';

declare let toastr: any;

@Injectable()
export class ToastrService {

  constructor() { }

  success(message: string) {
    return Toastr.success(message);
  }

  error(message: string) {
    return Toastr.error(message);
  }

  info(message: string) {
    return Toastr.info(message);
  }

}
