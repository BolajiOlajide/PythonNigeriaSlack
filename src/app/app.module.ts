import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// 3rd-party modules
import { Ng4TwitterTimelineModule } from 'ng4-twitter-timeline/lib/index';

// services
import { SlackService } from './slack.service';
import { ToastrService } from './toastr.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Ng4TwitterTimelineModule,
    HttpModule
  ],
  providers: [ SlackService, ToastrService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
