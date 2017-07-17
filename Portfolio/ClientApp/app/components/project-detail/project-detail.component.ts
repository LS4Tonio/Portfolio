import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Language } from "angular-l10n";

import { ProjectModel } from "../../models/project.model";

@Component({
    selector: "project-detail",
    templateUrl: "./project-detail.component.html",
    styleUrls: ["./project-detail.component.less"]
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
    private _sub: any;

    @Language() public lang: string;

    public project: ProjectModel;

    constructor(private _route: ActivatedRoute) { }

    public ngOnInit(): void {
        this._sub = this._route.params.subscribe(params => {
            const name: string = params["name"];

            this.project = new ProjectModel(name);
        });
    }

    public ngOnDestroy(): void {
        this._sub.unsubscribe();
    }
}