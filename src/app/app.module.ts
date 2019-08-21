import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MomentModule } from 'ngx-moment';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { ApartmentDetailModalComponent } from './apartment-detail-modal/apartment-detail-modal.component';
import { FormsModule } from '@angular/forms';
import { CommentModalComponent } from './comment-modal/comment-modal.component';
import { PaginationModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ApartmentDetailModalComponent,
    CommentModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MomentModule,
    FontAwesomeModule,
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    FormsModule
  ],
  providers: [],
  entryComponents: [ApartmentDetailModalComponent, CommentModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
