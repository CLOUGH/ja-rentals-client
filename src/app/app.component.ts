import { CommentModalComponent } from './comment-modal/comment-modal.component';
import { ApartmentDetailModalComponent } from './apartment-detail-modal/apartment-detail-modal.component';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap';
import { Component, OnInit } from '@angular/core';
import { ApartmentService } from './apartment.service';
import { Apartment, ApartmentListing } from './apartment';
import { faHeart, faHeartBroken, faBan, faComment, faMapMarked } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ja-rentals-client';
  apartmentListing: ApartmentListing;
  bsModalRef: BsModalRef;
  faHeart = faHeart;
  faHeartBroken = faHeartBroken;
  faBan = faBan;
  faComment = faComment;
  faMapMarked = faMapMarked;
  statusFilter = '';
  showComments = false;
  itemsPerPage = 50;
  currentPage = 1;

  constructor(private apartmentService: ApartmentService, private modalService: BsModalService) {

  }

  ngOnInit() {
    this.onFilterChanged();
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
    if (status === this.apartmentListing.data[index].status) {
      status = null;
    }
    this.apartmentService.update(this.apartmentListing.data[index]._id, {
      status
    })
      .subscribe(updatedApartment => {
        this.apartmentListing.data[index] = updatedApartment;
      });
  }

  addComment(index: number) {
    const modalOptions: ModalOptions = {
      initialState: { apartment: this.apartmentListing.data[index] },
      class: 'modal-lg'
    };
    this.bsModalRef = this.modalService.show(CommentModalComponent, modalOptions);
  }

  onFilterChanged() {
    this.apartmentService.getListings({
      status: this.statusFilter,
      page_size: this.itemsPerPage,
      page: this.currentPage
    }).subscribe(apartmentListing => {
      this.apartmentListing = apartmentListing;
    });
  }
  onPageChanged(event) {
    setTimeout(() => {
      this.onFilterChanged();
    });
  }

  getLocation(index: number) {

  }
}
