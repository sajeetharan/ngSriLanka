import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '../../../../node_modules/@ng-bootstrap/ng-bootstrap';


interface IResponseData {

  status: boolean;
  message: string;


}



@Component({
  selector: 'app-mailchimp-form',
  templateUrl: './mailchimp-form.component.html',
  styleUrls: ['./mailchimp-form.component.css']
})
export class MailchimpFormComponent implements OnInit {

  @ViewChild('content') modalContent: ElementRef;

  first_name;
  last_name;
  email;

  modalMessage = '';

  isBtnDisabled = false;
  isHideForm = false;
  constructor(private http: HttpClient, private modalService: NgbModal) { }

  ngOnInit() {
  }



  async handleNotify() {

    if ((this.first_name !== undefined && this.last_name !== undefined) && this.email !== undefined) {

      this.isBtnDisabled = true;
      try {
        const server_url = 'https://ngsrilankaconf-backend.herokuapp.com/preregister';
        // tslint:disable-next-line:max-line-length
        const response = await this.http.post<IResponseData>(server_url, { first_name: this.first_name, last_name: this.last_name, email: this.email }).toPromise();

        if (response.status) {
          this.isHideForm = true;
        }

        this.modalMessage = 'Awesome! Thanks for subscribing, we\'ll keep you in the loop :D';
        this.openModal(this.modalContent);
        this.isBtnDisabled = false;

      } catch (error) {

        this.modalMessage = 'Unable to keep you in the loop. Try again :D';
        this.openModal(this.modalContent);
        this.isBtnDisabled = false;
      }

    } else {

      this.modalMessage = 'Fill In all the Details';
      this.openModal(this.modalContent);

    }



  }


  openModal(content) {
    this.modalService.open(content, { centered: true });
  }

}
