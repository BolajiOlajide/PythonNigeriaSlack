import { Component } from '@angular/core';

// 3rd-party modules
import { Ng4TwitterTimelineService } from 'ng4-twitter-timeline/lib/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Python Nigeria';

  constructor(private ng4TwitterTimelineService: Ng4TwitterTimelineService) {}
}
