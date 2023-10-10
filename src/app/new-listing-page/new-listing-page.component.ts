import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fakeMyListings } from '../fake-data';

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrls: ['./new-listing-page.component.css']
})
export class NewListingPageComponent implements OnInit {
  name: string = ''
  description: string = ''
  price: string = ''

  constructor (
    private router: Router
    ) {}
  
    ngOnInit(): void {
    }

    onSubmit(): void {
      alert('Creating new listing...')
      this.router.navigateByUrl('/my-listings')
    }
}
