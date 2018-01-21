import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../environments/environment';

@Injectable()
export class SlackService {

  constructor(private http: Http) { }

  public sendSlackInvite(email) {
    return this.http.post(`${environment.slackBaseUrl}`, { email }).toPromise();
  }
}
