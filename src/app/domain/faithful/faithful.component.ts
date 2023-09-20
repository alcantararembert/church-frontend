import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { Faithful } from './faithful';
import { FaithfulService } from './faithful.service';

@Component({
  selector: 'app-faithful',
  templateUrl: './faithful.component.html',
  styleUrls: ['./faithful.component.scss']
})
export class FaithfulComponent implements OnInit {
  faithful: Faithful = new Faithful();
  faithfulForm!: FormGroup;
  faithfulService: FaithfulService;

  constructor(private fb: FormBuilder, http: HttpClient) {
    this.faithfulForm = this.fb.group({
      fullName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      birthday: ['', Validators.required],
      originCity: [''],
      country: ['', Validators.required],
      originNetwork: ['', Validators.required],
    });

    this.faithfulService = new FaithfulService(http);
  }

  ngOnInit() {
    this.faithfulForm.valueChanges.pipe(debounceTime(300))
      .subscribe(values => console.log('values', values));
  }

  onSubmit() {
    const faithful = new Faithful(this.faithfulForm.value);
    this.faithfulService.createFaithful(faithful).subscribe({
      next: () => console.log('created!'),
      error: (err: Error) => console.log(err),
    });
  }

}

