import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {NotesComponent} from './notes/notes.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NoteComponent} from './notes/note/note.component';
import {NoteTextFilterPipe} from './shared/note-text-filter.pipe';
import {CalendarComponent} from './calendar/calendar.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {EventComponent} from './calendar/event/event.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


const appRoutes: Routes = [
  {
    path: 'notes',
    component: NotesComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: '',
    component: NotesComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FeedbackComponent,
    CalendarComponent,
    NotesComponent,
    NotFoundComponent,
    NoteComponent,
    NoteTextFilterPipe,
    EventComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  bootstrap: [AppComponent],

  entryComponents: [CalendarComponent, EventComponent]
})
export class AppModule {
}
