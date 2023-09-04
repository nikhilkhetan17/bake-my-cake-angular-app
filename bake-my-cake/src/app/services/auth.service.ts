import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = false;

  login(cakeRequestCode: string) {
    this.isLoggedIn = cakeRequestCode === 'admin';
  }

  // logout() {
  //   this.isLoggedIn = false;
  // }

  constructor() {}
}
