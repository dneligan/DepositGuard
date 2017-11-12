import { Component, OnInit } from '@angular/core';

import { User, Listing } from '../_models/index';
import { UserService, ListingService } from '../_services/index';


@Component({
    moduleId: module.id,
    templateUrl: 'manage.component.html'
})

export class ManageComponent implements OnInit {
    listing : Listing;
    listings: Listing[] = [];

    currentUser: User;

    constructor(
        private listingService: ListingService,
        private userService: UserService) {
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
         }  

    ngOnInit() {
        this.loadAllListings();
    }

    private loadAllListings() {
        this.listingService.getAll().subscribe(listings => { this.listings = listings; });
    }
}