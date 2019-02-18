import {Component, EventEmitter, Inject, Injector, Input, OnInit, Output, PLATFORM_ID} from '@angular/core';
import {WeekDay} from 'calendar-utils';
import {DAYS_OF_WEEK} from 'angular-calendar';


@Component({
  selector: 'app-ngbd-modal-basic',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  model: EventViewModel = {
    start: '',
    end: '',
    title: ''
  };


  viewDate: Date = new Date();
  selectedDay: WeekDay;
  view: string;

  excludeDays: number[];
  weekStartsOn = DAYS_OF_WEEK.SUNDAY;


  dayClicked(day: WeekDay): void {
    if (this.selectedDay) {
      delete this.selectedDay.cssClass;
    }
    day.cssClass = 'cal-day-selected';
    this.selectedDay = day;

    alert('dupa');
  }


  saveEvent() {

    alert('model ' + this.model);
  }


  ngOnInit() {
    this.viewDate = new Date();
    // this.event = [];
    this.view = 'month';
  }

}

export interface EventViewModel {

  start: string;
  end: string;
  title: string;

}

