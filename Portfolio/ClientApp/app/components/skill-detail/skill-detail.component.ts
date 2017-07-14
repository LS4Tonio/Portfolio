import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { SkillModel, Skills } from "../../models/skill.model";

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

            this.skill = this.initSkill(this.name);
        });
    }

    public ngOnDestroy(): void {
        this._sub.unsubscribe();
    }

    private initSkill(id: string): SkillModel {
        try {
            const type: Skills = Skills[id];
            return new SkillModel(type);
        } catch (e) {
            return new SkillModel(Skills.None);
        }
    }
}