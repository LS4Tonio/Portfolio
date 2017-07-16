import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { SkillModel, HumanSkills, TechnicalSkills, SkillsType } from "../../models/skill.model";

@Component({
    selector: "skill-detail",
    templateUrl: "./skill-detail.component.html",
    styleUrls: ["./skill-detail.component.less"]
})
export class SkillDetailComponent implements OnInit, OnDestroy {
    private _sub: any;

    public skill: SkillModel;
    public skillRating: number;

    constructor(private _route: ActivatedRoute) {
        this.skillRating = Math.random() * 10 / 2;
    }

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