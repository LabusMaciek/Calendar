import {Component, EventEmitter, Inject, Injector, Input, OnInit, Output, PLATFORM_ID} from '@angular/core';
import {WeekDay} from 'calendar-utils';
import {DAYS_OF_WEEK} from 'angular-calendar';
import {ApiService} from '../shared/api.service';


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

  constructor(private apiService: ApiService) {
  }

  viewDate: Date = new Date();
  selectedDay: WeekDay;
  view: string;

  excludeDays: number[];
  weekStartsOn = DAYS_OF_WEEK.SUNDAY;



  saveEvent(): void {
    this.apiService.displayEvent().subscribe();
    alert('submit calendar component ! !! ! ! !! ! !! ');

  }

  ngOnInit() {
    this.viewDate = new Date();
    // this.event = [];
    this.view = 'month';
    // this.saveEvent();
  }

}

export interface EventViewModel {

  start: string;
  end: string;
  title: string;

}

