import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../environments/environment';

@Injectable()
export class SlackService {
  constructor(private http: Http) { }

  public sendSlackInvite(email) {
    const body = { email };
    return this.http.post(`/api/invite`, { email }).toPromise();
  }
}
