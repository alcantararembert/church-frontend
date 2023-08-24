import { DatePipe } from "@angular/common";
import { Input, Component } from "@angular/core";

@Component({
  template: ''
})
export class Faithful {
  @Input() fullName: String = '';
  @Input() phoneNumber: String = '';
  @Input() birthday: String = '';
  @Input() originCity: String = '';
  @Input() country: String = '';
  @Input() originNetwork: String = '';
  createdDate: String = '';
}