import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WorkerComponent } from './components/worker/worker.component';
import { WorkersListComponent } from './components/workers-list/workers-list.component';
import { NewWorkerComponent } from './components/new-worker/new-worker.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkerComponent,
    WorkersListComponent,
    NewWorkerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }