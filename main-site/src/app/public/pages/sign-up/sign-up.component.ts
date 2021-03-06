import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public recruiterUrl = '/signup/recruiter';
  public isRecruiter: boolean;
  public registerForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.activatedRoute.snapshot['_routerState'].url === this.recruiterUrl ? this.isRecruiter = true : this.isRecruiter = false;
    this.registerForm = this.fb.group({
      first: new FormControl('', {validators: [Validators.required]}),
      last: new FormControl('', {validators: [Validators.required]}),
      email: new FormControl('', {validators: [Validators.required, Validators.email]}),
      password: new FormControl('', {validators: [Validators.required]}),
      confirm_password: new FormControl('', {validators: [Validators.required]})
    });
  }
  // showData() {
  //   console.log(this.registerForm);
  // }
}
