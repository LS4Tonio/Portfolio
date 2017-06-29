import { Component } from "@angular/core";

import { ResourceService } from "../../services/resources/resource.service";

@Component({
    providers: [ResourceService],
    selector: "nav-menu",
    styleUrls: ["./navmenu.component.css"],
    templateUrl: "./navmenu.component.html"
})
export class NavMenuComponent {
    public isCollapsed: boolean = true;
    public resources: object;

    constructor(private _resources: ResourceService) {
        this.resources = _resources.getNavbarMenuLabels();
    }
}