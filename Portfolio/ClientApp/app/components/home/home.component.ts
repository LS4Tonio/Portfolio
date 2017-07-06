import { Component } from "@angular/core";
import { Language } from "angular-l10n";

@Component({
    selector: "home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.less"]
})
export class HomeComponent {
    @Language() public lang: string;

    public imageSrc: any = require("./../../../assets/images/me-colored.jpg");
    public aboutImgSrc: any = require("./../../../assets/images/me-whited.jpg");
    public contactImgSrc: any = require("./../../../assets/images/home/contact.jpg");
    public projectImgSrc: any = require("./../../../assets/images/home/project.jpg");
    public skillImgSrc: any = require("./../../../assets/images/home/skill.jpg");
}