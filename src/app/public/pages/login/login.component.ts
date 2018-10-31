import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth/auth.service';
import {SignInRequest} from '../../../shared/services/auth/models/sign-in-request';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public recruiterUrl = '/login/recruiter';
  public userType: string;
  public loginForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private authService: AuthService,
              private testHttp: HttpClient) { }

  ngOnInit() {
    this.activatedRoute.snapshot['_routerState'].url === this.recruiterUrl ? this.userType = 'Recruiter' : this.userType = 'Candidate';
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    const { email, password } = this.loginForm.value;
    const credentials: SignInRequest = {
      email,
      password
    };
    this.authService.login(credentials).subscribe(res => {
      this.authService.setData( res.token, res.role );
    });
  }

}
