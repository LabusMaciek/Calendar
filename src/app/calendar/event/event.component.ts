import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {


  // @Input() event: Event;
  // @Output() saveEvent: EventEmitter<Event> = new EventEmitter<Event>();

  constructor() {
  }

  ngOnInit() {
  }

  eventSave() {
    // this.saveEvent.emit(this.event);
  }

}
