import { Component } from "@angular/core";
import { Language } from "angular-l10n";

@Component({
    selector: "home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.less"]
})
export class HomeComponent {
    @Language() public lang: string;

    public imageSrc: string = "me-colored.jpg";
    public aboutImgSrc: string = "me-whited.jpg";
    public contactImgSrc: string = "home/contact.png";
    public projectImgSrc: string = "home/project.png";
    public skillImgSrc: string = "home/skill.png";
}