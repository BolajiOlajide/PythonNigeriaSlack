import { Injectable } from '@angular/core';

// 3rd party library
import Toastr from 'toastr';

declare let toastr: any;

@Injectable()
export class ToastrService {

  constructor() { }

  success(message: string) {
    Toastr.success(message);
  }

}
