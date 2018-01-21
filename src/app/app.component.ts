import { Component } from '@angular/core';

// 3rd-party modules
import { Ng4TwitterTimelineService } from 'ng4-twitter-timeline/lib/index';

// services
import { SlackService } from './slack.service';
import { ToastrService } from './toastr.service';

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
    private ng4TwitterTimelineService: Ng4TwitterTimelineService
  ) {}

  /**
   * Method to be used to send slack invitation to email
   * @param email User's email address
   */
  public sendInvite() {
    this.slack.sendSlackInvite(this.email)
      .then(res => console.log(res))
      .catch(err => console.log(err.message));
  }
}
