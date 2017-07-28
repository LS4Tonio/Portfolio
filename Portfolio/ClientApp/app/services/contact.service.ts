import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { ContactModel } from "./../models/contact.model";

@Injectable()
export class ContactService {
    constructor(private _http: Http) { }

    /**
     * Sends a mail to me
     * @param mail
     */
    public postMail(mail: ContactModel): Observable<Response> {
        return this._http.post("/api/contact", mail);
    }
}