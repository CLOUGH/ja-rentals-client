import { CommentModalComponent } from './comment-modal/comment-modal.component';
import { ApartmentDetailModalComponent } from './apartment-detail-modal/apartment-detail-modal.component';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap';
import { Component, OnInit } from '@angular/core';
import { ApartmentService } from './apartment.service';
import { Apartment } from './apartment';
import { faHeart, faHeartBroken, faBan, faComment, faMapMarked } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ja-rentals-client';
  apartments: Apartment[];
  bsModalRef: BsModalRef;
  faHeart = faHeart;
  faHeartBroken = faHeartBroken;
  faBan = faBan;
  faComment = faComment;
  faMapMarked = faMapMarked;
  statusFilter = '';
  showComments = false;

  constructor(private apartmentService: ApartmentService, private modalService: BsModalService) {

  }

  ngOnInit() {
    this.apartmentService.getListings().subscribe(apartments => {
      this.apartments = apartments;
    });
  }

  showApartmentDetail(apartment: Apartment) {
    const modalOptions: ModalOptions = {
      initialState: { apartment },
      class: 'modal-lg'
    };
    this.bsModalRef = this.modalService.show(ApartmentDetailModalComponent, modalOptions);
  }

  stopEventPropagation(event) {
    event.stopPropagation();
  }

  updateStauts(index: number, status: string) {
    if (status === this.apartments[index].status) {
      status = null;
    }
    this.apartmentService.update(this.apartments[index]._id, {
      status
    })
      .subscribe(updatedApartment => {
        this.apartments[index] = updatedApartment;
      });
  }

  addComment(index: number) {
    const modalOptions: ModalOptions = {
      initialState: { apartment: this.apartments[index] },
      class: 'modal-lg'
    };
    this.bsModalRef = this.modalService.show(CommentModalComponent, modalOptions);
  }

  onStatusFilterChanged() {
    console.log(this.showComments);
    this.apartmentService.getListings({
      statusFilter: this.statusFilter
    }).subscribe(apartments => {
      this.apartments = apartments;
    });
  }

  getLocation(index: number){

  }
}
