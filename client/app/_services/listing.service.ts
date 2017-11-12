//service used for CRUD to the listings collection
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Listing } from '../_models/index';

@Injectable()
export class ListingService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/listings').map((response: Response) => response.json());
    }

    getById(_id: string) {
        return this.http.get('/listings/' + _id).map((response: Response) => response.json());
    }

    create(listing: Listing) {
        return this.http.post('/listings/add', listing);
    }

    update(listing: Listing) {
        return this.http.put('/listings/' + listing._id, listing);
    }

    delete(_id: string) {
        return this.http.delete('/listings/' + _id);
    }
}