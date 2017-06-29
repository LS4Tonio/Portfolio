import { Component } from "@angular/core";

import { ContactModel } from "./contact.model";
import { ResourceService } from "../../services/resources/resource.service";

@Component({
    providers: [ResourceService],
    selector: "contact",
    styleUrls: ["./contact.component.css"],
    templateUrl: "./contact.component.html"
})
export class ContactComponent {
    public contactModel: ContactModel;
    public emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    public resources: object;

    constructor(resources: ResourceService) {
        this.contactModel = new ContactModel();
        this.resources = resources.getContactPageLabels();
    }

    public onSubmit() {
        console.log("Submitted form");
    }
}