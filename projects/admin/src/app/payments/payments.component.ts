import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any>;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {

    this.itemsCollection = this.afs.collection<any>('payments');
    this.items = this.itemsCollection.valueChanges();


    this.items.subscribe({
      next(res) {
        console.log(res)
      }
    })
  }

}
