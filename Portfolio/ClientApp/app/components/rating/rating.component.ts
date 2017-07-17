import { Component, Input } from "@angular/core";

@Component({
    selector: "rating",
    templateUrl: "./rating.component.html",
    styleUrls: ["./rating.component.less"]
})
export class RatingComponent {
    @Input("value") public ratingValue: number = 0; // Set default value to 0 for stars display
}