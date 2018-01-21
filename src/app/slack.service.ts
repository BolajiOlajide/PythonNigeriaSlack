import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import * as dotenv from 'dotenv';

import { environment } from '../environments/environment';
// import { URLSearchParams } from '@angular/http/src/url_search_params';

dotenv.config();

console.log(process.env.SLACK_TOKEN);

@Injectable()
export class SlackService {
  private slackToken = process.env.SLACK_TOKEN;
  private headers = new Headers({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': `Bearer ${this.slackToken}`
  });

  constructor(private http: Http) { }

  public sendSlackInvite(email) {
    // const body = new URLSearchParams();
    // body.set('email', email);
    const body = { email };
    return this.http.post(`${environment.slackBaseUrl}/users.admin.invite`, body, { headers: this.headers }).toPromise();
  }
}
