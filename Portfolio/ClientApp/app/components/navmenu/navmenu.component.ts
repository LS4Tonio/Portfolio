import { Component } from "@angular/core";
import { Language } from "angular-l10n";

@Component({
    selector: "nav-menu",
    styleUrls: ["./navmenu.component.less"],
    templateUrl: "./navmenu.component.html"
})
export class NavMenuComponent {
    @Language() public lang: string;

    public isCollapsed: boolean = true;
}