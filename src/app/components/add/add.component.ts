import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Appointments} from '../../appointments';
import { AppointmentService } from '../../appointment.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent implements OnInit {

  @Output() addApt = new EventEmitter();

  model: Appointments;

  addAppointment(formInformation: any) {

    this.model = {
      name:  formInformation.clientName,
      email: formInformation.email,
      age: formInformation.age,
      gender: formInformation.gender,
      appointmentNotes: formInformation.aptNotes,
      appointmentDate: new Date(formInformation.aptDate.year + '-' + formInformation.aptDate.month + '-'  +  formInformation.aptDate.day + ' ' +  formInformation.aptTime)
    };

    this.appointmentService.addAppointment(this.model);



  }
  constructor(private appointmentService: AppointmentService) {  }

  ngOnInit() {
  }



}
