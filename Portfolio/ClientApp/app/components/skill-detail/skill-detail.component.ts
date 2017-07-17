import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Language } from "angular-l10n";

import { SkillModel } from "../../models/skill.model";

@Component({
    selector: "skill-detail",
    templateUrl: "./skill-detail.component.html",
    styleUrls: ["./skill-detail.component.less"]
})
export class SkillDetailComponent implements OnInit, OnDestroy {
    private _sub: any;

    @Language() public lang: string;

    public skill: SkillModel;

    public isQuote: boolean = true;

    constructor(private _route: ActivatedRoute) { }

    public ngOnInit(): void {
        this._sub = this._route.params.subscribe(params => {
            const name: string = params["name"];
            const type: string = params["type"];

            this.skill = new SkillModel(name, type);
        });
    }

    public ngOnDestroy(): void {
        this._sub.unsubscribe();
    }
}