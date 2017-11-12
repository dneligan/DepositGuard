import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User, Listing } from '../_models/index';
import { UserService, ListingService, AlertService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'listing.component.html'
})

export class ListingComponent {
    model: any = {};
    loading = false;
    currentUser: User;

    constructor(
        private router: Router,
        private listingService: ListingService,
        private alertService: AlertService,
        private userService: UserService) {
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
         }

    addListing() {
        this.loading = true;
        this.listingService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Successfully added new listing!', true);
                    this.router.navigate(['/']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}

