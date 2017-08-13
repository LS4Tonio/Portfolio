import { AfterViewInit, Component, ComponentFactoryResolver, Input, Type, ViewChild } from "@angular/core";

import { SkillTeamworkComponent } from "../skill/teamwork/skill-teamwork.component";

import { ComponentHostDirective } from "../../directives/component-host.directive";
import { SkillModel } from "../../models/skill.model";

@Component({
    entryComponents: [SkillTeamworkComponent],
    selector: "skill-dynamic-loader",
    template: "<template component-host></template>"
})
export class SkillDynamicLoaderComponent implements AfterViewInit {
    private _skillsComponents: any = {
        "teamwork": SkillTeamworkComponent
    };

    @Input() public skill: SkillModel;
    @ViewChild(ComponentHostDirective) private _skillHost: ComponentHostDirective;

    constructor(private _componentResolver: ComponentFactoryResolver) { }

    public ngAfterViewInit(): void {
        this.loadSkillComponent();
    }

    private loadSkillComponent(): void {
        const component = this.findSkillComponentFromId(this.skill.url);
        console.log(component);
        const factory = this._componentResolver.resolveComponentFactory(component);

        const viewContainerRef = this._skillHost.viewContainerRef;
        viewContainerRef.clear();

        viewContainerRef.createComponent(factory);
    }

    private findSkillComponentFromId(id: string): Type<any> {
        return this._skillsComponents[id];
    }
}