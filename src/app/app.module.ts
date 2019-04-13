import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoteFormComponent } from './vote-form/vote-form.component';
import { VoteDetailComponent } from './vote-detail/vote-detail.component';
import { VoteDisplayComponent } from './vote-display/vote-display.component';
import { VoteSnapComponent } from './vote-snap/vote-snap.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';


@NgModule({
  declarations: [
    AppComponent,
    VoteFormComponent,
    VoteDetailComponent,
    VoteDisplayComponent,
    VoteSnapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
