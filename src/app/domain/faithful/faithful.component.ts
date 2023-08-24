import { Component } from '@angular/core';
import { Faithful } from './faithful';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FaithfulService } from './faithful.service';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-faithful',
  templateUrl: './faithful.component.html',
  styleUrls: ['./faithful.component.scss']
})
export class FaithfulComponent {
  faithful: Faithful;
  faithfulForm!: FormGroup;
  faithfulService: FaithfulService;
  
  constructor(private fb: FormBuilder, http: HttpClient) {
    this.faithfulForm = this.fb.group({
      fullName: ['', Validators.required],
      phoneNumber: ['', Validators.required, Validators.pattern],
      birthday: ['', Validators.required],
      originCity: [''],
      country: ['', Validators.required],
      originNetwork: ['', Validators.required],
    });
    this.faithful = new Faithful;
    this.faithfulService = new FaithfulService(http);
  }
  
  onSubmit() {
    this.faithful.fullName = this.faithfulForm.value.fullName;
    this.faithful.phoneNumber = this.faithfulForm.value.phoneNumber;
    this.faithful.birthday = this.formatTime(this.faithfulForm.value.birthday);
    this.faithful.originCity = this.faithfulForm.value.originCity;
    this.faithful.country = this.faithfulForm.value.country;
    this.faithful.originNetwork = this.faithfulForm.value.originNetwork;
    this.faithful.createdDate = this.getCurrentDateTime();
    this.faithfulService.createFaithful(this.faithful);
    console.log(this.faithful);
  }
  formatTime(birthday: string) {
    const myDate = new Date(birthday);

    const year = myDate.getFullYear();
    const month = String(myDate.getMonth() + 1).padStart(2, '0');
    const day = String(myDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  getCurrentDateTime() {
    const myDate = new Date();

    const year = myDate.getFullYear();
    const month = String(myDate.getMonth() + 1).padStart(2, '0');
    const day = String(myDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}

