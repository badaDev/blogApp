import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BackHomeService {

  constructor(private router: Router) { }

  backHome() {
    console.log('clicked');
    
    this.router.navigate([""])
  }
}
