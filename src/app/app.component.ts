import { Component } from '@angular/core';

// services
import { SlackService } from './slack.service';
import { ToastrService } from './toastr.service';

import * as toastr from 'toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Python Nigeria Slack';

  email: String;

  constructor(
    private slack: SlackService,
  ) { }

  /**
   * Method to be used to send slack invitation to email
   * @param email User's email address
   */
  public sendInvite() {
    toastr.success('Hello World');
    // this.slack.sendSlackInvite(this.email)
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err.message));
  }
}
