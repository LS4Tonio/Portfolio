import { Component, Input } from "@angular/core";

@Component({
    selector: "alert",
    templateUrl: "./alert.component.html",
    styleUrls: ["./alert.component.less"]
})
export class AlertComponent {
    @Input() public dismissable: boolean = false;
    @Input() public style: string = "alert-default";
}