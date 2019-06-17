import {Component, Injectable, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AppointmentService } from '../../appointment.service';
import { AppointmentItem } from '../../app.component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFemale, faMale } from '@fortawesome/free-solid-svg-icons';

library.add(faFemale, faMale);

@Component({
  selector: 'app-appointment-detail',
  templateUrl: './appointment-detail.component.html',
  styleUrls: ['./appointment-detail.component.scss']
})
export class AppointmentDetailComponent implements OnInit {

  appointment: AppointmentItem;
  showSpinner = true;
  constructor(
              private route: ActivatedRoute,
              private appointmentService: AppointmentService) { }

  ngOnInit() {
    this.getAppointment();

  }

  getAppointment(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.appointmentService.getAppointment(id)
        .subscribe((appointment: AppointmentItem) => {
          this.showSpinner = false ;
          this.appointment = appointment;
        }
        );
  }
}
