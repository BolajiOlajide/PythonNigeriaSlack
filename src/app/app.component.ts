import { Component, OnInit } from '@angular/core';

// services
import { SlackService } from './slack.service';
import { ToastrService } from './toastr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Python Nigeria Slack';

  email: String;

  constructor(
    private slack: SlackService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.toastr.info('Welcome to Python Nigeria Slack!');
  }

  /**
   * Method to be used to send slack invitation to email
   * @param email User's email address
   */
  public sendInvite() {
    this.slack.sendSlackInvite(this.email)
      .then(res => this.toastr.success('Invite has successfully been sent.'))
      .catch(err => this.toastr.error('Error while sending invite. Seems user already in team.'));
  }
}
