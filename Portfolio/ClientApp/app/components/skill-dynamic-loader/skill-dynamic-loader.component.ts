import { AfterViewInit, Component, ComponentFactoryResolver, Input, Type, ViewChild } from "@angular/core";

import { SkillAdaptabilityComponent } from "../skill/adaptability/skill-adaptability.component";
import { SkillAngularComponent } from "../skill/angular/skill-angular.component";
import { SkillAspnetComponent } from "../skill/aspnet/skill-aspnet.component";
import { SkillAutonomyComponent } from "../skill/autonomy/skill-autonomy.component";
import { SkillCsharpComponent } from "../skill/csharp/skill-csharp.component";
import { SkillHtmlcssComponent } from "../skill/htmlcss/skill-htmlcss.component";
import { SkillJavascriptComponent } from "../skill/javascript/skill-javascript.component";
import { SkillSasslessComponent } from "../skill/sassless/skill-sassless.component";
import { SkillSeriousComponent } from "../skill/serious/skill-serious.component";
import { SkillTeamworkComponent } from "../skill/teamwork/skill-teamwork.component";
import { SkillNotfoundComponent } from "../skill/notfound/skill-notfound.component";

import { ComponentHostDirective } from "../../directives/component-host.directive";
import { SkillModel } from "../../models/skill.model";

@Component({
    entryComponents: [
        SkillAdaptabilityComponent,
        SkillAngularComponent,
        SkillAspnetComponent,
        SkillAutonomyComponent,
        SkillCsharpComponent,
        SkillHtmlcssComponent,
        SkillJavascriptComponent,
        SkillSasslessComponent,
        SkillSeriousComponent,
        SkillTeamworkComponent,
        SkillNotfoundComponent
    ],
    selector: "skill-dynamic-loader",
    template: "<ng-template component-host></ng-template>"
})
export class SkillDynamicLoaderComponent implements AfterViewInit {
    private _skillsComponents: any = {
        "adaptability": SkillAdaptabilityComponent,
        "angular": SkillAngularComponent,
        "aspnet": SkillAspnetComponent,
        "autonomy": SkillAutonomyComponent,
        "csharp": SkillCsharpComponent,
        "htmlcss": SkillHtmlcssComponent,
        "javascript": SkillJavascriptComponent,
        "sassless": SkillSasslessComponent,
        "serious": SkillSeriousComponent,
        "teamwork": SkillTeamworkComponent,
        "notfound": SkillNotfoundComponent
    };

    @Input() public skill: SkillModel;
    @ViewChild(ComponentHostDirective) private _skillHost: ComponentHostDirective;

    constructor(private _componentResolver: ComponentFactoryResolver) { }

    public ngAfterViewInit(): void {
        this.loadSkillComponent();
    }

    private loadSkillComponent(): void {
        const component = this.findSkillComponentFromId(this.skill.url);
        const factory = this._componentResolver.resolveComponentFactory(component);

        const viewContainerRef = this._skillHost.viewContainerRef;
        viewContainerRef.clear();

        viewContainerRef.createComponent(factory);
    }

    private findSkillComponentFromId(id: string): Type<any> {
        return this._skillsComponents[id];
    }
}