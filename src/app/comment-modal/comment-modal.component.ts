import { ApartmentService } from './../apartment.service';
import { Apartment } from './../apartment';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-comment-modal',
  templateUrl: './comment-modal.component.html',
  styleUrls: ['./comment-modal.component.scss']
})
export class CommentModalComponent implements OnInit {
  apartment: Apartment;

  constructor(public bsModalRef: BsModalRef, private apartmentService: ApartmentService) { }

  ngOnInit() {
  }

  saveComment() {
    this.apartmentService.update(this.apartment._id, {comment : this.apartment.comment}).subscribe(apartment => {
      this.apartment = apartment;
      this.bsModalRef.hide();
    });

  }

}
