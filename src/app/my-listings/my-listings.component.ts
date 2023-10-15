import { Component, OnInit } from '@angular/core';
import { fakeMyListings } from '../fake-data';
import { ListingsService } from '../listings.service';
import { Listing } from '../types';

@Component({
  selector: 'app-my-listings',
  templateUrl: './my-listings.component.html',
  styleUrls: ['./my-listings.component.css']
})
export class MyListingsComponent implements OnInit {
  listings: Listing[] = []

  constructor (
    private listingsService: ListingsService
  ) {}

  ngOnInit(): void {
    this.listingsService.getListingsForUser()
      .subscribe((listings) => {
        this.listings = listings
      })
  }

  onDeleteClicked(listingId: string): void {
    this.listingsService.deleteListing(listingId)
      .subscribe(() => {
        this.listings = this.listings.filter(l => l.id !== listingId)
      })
  }
}
