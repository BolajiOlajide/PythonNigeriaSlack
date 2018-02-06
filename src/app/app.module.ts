import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// 3rd-party modules

// services
import { SlackService } from './slack.service';
import { ToastrService } from './toastr.service';

// components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [SlackService, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
