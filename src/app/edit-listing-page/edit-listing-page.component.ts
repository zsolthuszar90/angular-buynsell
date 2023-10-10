import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Listing } from '../types';
import { fakeMyListings } from '../fake-data';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css']
})
export class EditListingPageComponent implements OnInit{
  listing: Listing = {name: '', description: '', id: '', price: 0}

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id")
    this.listing = fakeMyListings.find(l => l.id === id) || this.listing
  }

  onSubmit(): void {
    alert('Saving changes...')
    this.router.navigateByUrl('/my-listings')
  }

}
