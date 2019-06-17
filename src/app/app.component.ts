import { Component, OnInit } from '@angular/core';
import { library} from '@fortawesome/fontawesome-svg-core';
import {faTimes, faPlus, faCalendarPlus, faMugHot} from '@fortawesome/free-solid-svg-icons';
import { without } from 'lodash';

import { Observable } from 'rxjs';

import { AppointmentService } from './appointment.service';
import { Appointments } from './appointments';


library.add(faTimes, faPlus, faCalendarPlus, faMugHot);

export interface AppointmentItem extends Appointments { id: string; }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {



  constructor( private appointmentService: AppointmentService) {

  }
  title = 'Appointment Interface';

  showSpinner = true;

  appointments: Observable<AppointmentItem[]>;


  ngOnInit(): void {
    this.getAllAppointments();

  }
  getAllAppointments(): void {
    this.appointments = this.appointmentService.getAppointments();
    this.appointments.subscribe( () => this.showSpinner = false);

  }

  }
