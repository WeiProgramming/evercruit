import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
