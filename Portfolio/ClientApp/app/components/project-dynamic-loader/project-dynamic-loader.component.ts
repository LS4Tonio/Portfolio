import { AfterViewInit, Component, ComponentFactoryResolver, Input, Type, ViewChild } from "@angular/core";

import { ProjectAltecstoreComponent } from "../project/altecstore/project-altecstore.component";
import { ProjectGcComponent } from "../project/gc/project-gc.component";
import { ProjectGleipnirComponent } from "../project/gleipnir/project-gleipnir.component";
import { ProjectHeliosdashboardComponent } from "../project/heliosdashboard/project-heliosdashboard.component";
import { ProjectMonitoringComponent } from "../project/monitoring/project-monitoring.component";
import { ProjectPortfolioComponent } from "../project/portfolio/project-portfolio.component";
import { ProjectNotfoundComponent } from "../project/notfound/project-notfound.component";

import { ComponentHostDirective } from "../../directives/component-host.directive";
import { ProjectModel } from "../../models/project.model";

@Component({
    entryComponents: [
        ProjectAltecstoreComponent,
        ProjectGcComponent,
        ProjectGleipnirComponent,
        ProjectHeliosdashboardComponent,
        ProjectMonitoringComponent,
        ProjectPortfolioComponent,
        ProjectNotfoundComponent
    ],
    selector: "project-dynamic-loader",
    template: "<ng-template component-host></ng-template>"
})
export class ProjectDynamicLoaderComponent implements AfterViewInit {
    private _projectsComponents: any = {
        "altecstore": ProjectAltecstoreComponent,
        "gc": ProjectGcComponent,
        "gleipnir": ProjectGleipnirComponent,
        "heliosdashboard": ProjectHeliosdashboardComponent,
        "monitoring": ProjectMonitoringComponent,
        "portfolio": ProjectPortfolioComponent,
        "notfound": ProjectNotfoundComponent
    };

    @Input() public project: ProjectModel;
    @ViewChild(ComponentHostDirective) private _projectHost: ComponentHostDirective;

    constructor(private _componentResolver: ComponentFactoryResolver) { }

    public ngAfterViewInit(): void {
        this.loadProjectComponent();
    }

    private loadProjectComponent(): void {
        const component = this.findProjectComponentFromId(this.project.url);
        const factory = this._componentResolver.resolveComponentFactory(component);

        const viewContainerRef = this._projectHost.viewContainerRef;
        viewContainerRef.clear();

        viewContainerRef.createComponent(factory);
    }

    private findProjectComponentFromId(id: string): Type<any> {
        return this._projectsComponents[id];
    }
}