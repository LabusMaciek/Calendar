import {Component, EventEmitter, Inject, Injector, Input, OnInit, Output, PLATFORM_ID} from '@angular/core';
import {WeekDay} from 'calendar-utils';
import {DAYS_OF_WEEK} from 'angular-calendar';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {isPlatformBrowser} from '@angular/common';


@Component({
  selector: 'app-ngbd-modal-basic',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  closeResult: string;
  viewDate: Date = new Date();


  view: string;
  excludeDays: number[];
  weekStartsOn = DAYS_OF_WEEK.SUNDAY;


  selectedDay: WeekDay;

  // constructor(private modalService: NgbModal) {
  // }

  private modalService: NgbModal;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private injector: Injector) {
    if (isPlatformBrowser(this.platformId)) {
      this.modalService = this.injector.get(NgbModal);
    }
  }


  openThis(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  // @Output() saveEvent: EventEmitter<Event> = new EventEmitter<Event>();

  dayClicked(day: WeekDay): void {
    if (this.selectedDay) {
      delete this.selectedDay.cssClass;
    }
    day.cssClass = 'cal-day-selected';
    this.selectedDay = day;
    // alert(this.selectedDay);

    alert('dupa');
  }

  public onSubmit() {
    const newVar = <EventInterface>{
      start: '',
      end: '',
      title: ''
    };
  }

  ngOnInit() {
    this.viewDate = new Date();
    // this.event = [];
    this.view = 'month';
  }

  // eventSave() {
  //   this.saveEvent.emit(this.event);
  // }
}

export interface EventInterface {

  start: string;
  end: string;
  title: string;

}

