import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { SkillModel } from "../../models/skill.model";

@Component({
    selector: "skill-detail",
    templateUrl: "./skill-detail.component.html",
    styleUrls: ["./skill-detail.component.less"]
})
export class SkillDetailComponent implements OnInit, OnDestroy {
    private _sub: any;

    public name: string;
    public skill: SkillModel;

    constructor(private _route: ActivatedRoute) { }

    public ngOnInit(): void {
        this._sub = this._route.params.subscribe(params => {
            this.name = params["name"];

            this.skill = new SkillModel("CSharp");
            // TODO: load skill detail here
        });
    }

    public ngOnDestroy(): void {
        this._sub.unsubscribe();
    }
}