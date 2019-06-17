import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';

import { Appointments } from './appointments';
import { Router } from '@angular/router';

export interface AppointmentItem extends Appointments { id: string; }

@Injectable({
  providedIn: 'root'
})


export class AppointmentService {

  collectionsName = 'appointments';

  constructor( private db: AngularFirestore, private router: Router) {

  }

  private AppointmentCollections: AngularFirestoreCollection<Appointments>;
  private AppointmentDetails: AngularFirestoreDocument<Appointments>;
  appointment: Observable<AppointmentItem>;
  appointments: Observable<AppointmentItem[]>;

  getAppointments(): Observable<AppointmentItem[]> {

    const apptCollection = this.db.collection<Appointments>(this.collectionsName);

    return  apptCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const id = a.payload.doc.id;
        const data = a.payload.doc.data();
        return {id, ...data};
      });
    }));

  }

  getAppointment(ID: string): Observable<AppointmentItem> {

    this.AppointmentDetails = this.db.doc(this.collectionsName + `/${ID}`);

    return this.AppointmentDetails.snapshotChanges().pipe(map(action => {
      const id = action.payload.id;
      const data = action.payload.data();
      return {id, ...data};
    }));
  }


  addAppointment(value: Appointments ): void {

    this.AppointmentCollections = this.db.collection<Appointments>(this.collectionsName);
    this.AppointmentCollections.add(value)
        .then(docRef => {
          this.router.navigateByUrl('/detail/' + docRef.id);
          console.log('Document successfully written!');
        });

  }

  deleteAppointment(el: any ): void {
    const messageId = el.getAttribute('data-list-id');
    this.AppointmentDetails = this.db.collection<Appointments>(this.collectionsName).doc(messageId);
    this.AppointmentDetails.delete().then(() => {
      console.log('Document successfully deleted!');
    }).catch(error => {
      console.error('Error removing document: ', error);
    });

  }
}
