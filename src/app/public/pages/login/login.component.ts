import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public recruiterUrl = '/login/recruiter';
  public userType: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.snapshot['_routerState'].url === this.recruiterUrl ? this.userType = 'Recruiter' : this.userType = 'Candidate';
  }

}
