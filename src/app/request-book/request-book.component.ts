import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validator,
  Validators,
} from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-request-book',
  templateUrl: './request-book.component.html',
  styleUrls: ['./request-book.component.css'],
})
export class RequestBookComponent implements OnInit {
  public isSubmitted = false;

  constructor(private fb: FormBuilder) {}
  reqBook = this.fb.group({
    bookName: ['', [Validators.required]],
    bookId: ['', [Validators.required]],
    year: ['', [Validators.required]],
    email: ['', Validators.email],
  });
  ngOnInit(): void {}

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.isSubmitted = true;
      console.log(form.value);
    }
  }
}
