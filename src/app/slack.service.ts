import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../environments/environment';

@Injectable()
export class SlackService {
  constructor(private http: Http) { }

  public sendSlackInvite(email) {
    const res = this.http.get('http://localhost:3000');
    console.log('====>', res);
    console.log(email);
    console.log(`${environment.slackBaseUrl}/api/invite`);
    const body = { email };
    return this.http.post(`${environment.slackBaseUrl}/api/invite`, { email }).toPromise();
  }
}
