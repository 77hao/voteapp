import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoteFormComponent } from './vote-form/vote-form.component';
import { VoteDetailComponent } from './vote-detail/vote-detail.component';
import { VoteDisplayComponent } from './vote-display/vote-display.component';
import { VoteSnapComponent } from './vote-snap/vote-snap.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


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
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
