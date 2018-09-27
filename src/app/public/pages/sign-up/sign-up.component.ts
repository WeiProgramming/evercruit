import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public recruiterUrl = '/signup/recruiter';
  public isRecruiter: boolean;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.snapshot['_routerState'].url === this.recruiterUrl ? this.isRecruiter = true : this.isRecruiter = false;
  }

}
