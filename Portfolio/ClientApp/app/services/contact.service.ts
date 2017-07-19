import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { ContactModel } from "./../models/contact.model";

@Injectable()
export class ContactService {
    constructor(private _http: Http) { }

    public postMail(mail: ContactModel) {
        this._http
            .post("/api/contact/post", mail)
            .subscribe(this.handleResponse, this.handleError);
    }

    private handleResponse(value: Response): void {
        console.log(value.status === 200);
    }

    private handleError(error: any): void {
        console.error("Something went wrong!");
    }
}