import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Apartment } from '../apartment';

@Component({
  selector: 'app-apartment-detail-modal',
  templateUrl: './apartment-detail-modal.component.html',
  styleUrls: ['./apartment-detail-modal.component.scss']
})
export class ApartmentDetailModalComponent implements OnInit {
  apartment: Apartment;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

}
