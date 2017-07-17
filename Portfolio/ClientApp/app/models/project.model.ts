import { SkillModel, SkillsType, TechnicalSkills } from "./skill.model";

export class ProjectModel {
    public name: string;
    public company: string;
    public url: string;
    public imageUrl: string;
    public links: SkillModel[];
    public details: string[];

    constructor(id: string) {
        let name: string;
        let company: string;
        let links: SkillModel[] = [];
        let details: string[] = [];

        try {
            switch (id.toLowerCase()) {
                case Projects[Projects.AltecStore].toLowerCase():
                    name = "Altec Store";
                    company = "AirLiquide";
                    links = [
                        new SkillModel(TechnicalSkills[TechnicalSkills.CSharp], SkillsType[SkillsType.Technic]),
                        new SkillModel(TechnicalSkills[TechnicalSkills.AspNet], SkillsType[SkillsType.Technic]),
                        new SkillModel(TechnicalSkills[TechnicalSkills.HtmlCss], SkillsType[SkillsType.Technic]),
                        new SkillModel(TechnicalSkills[TechnicalSkills.Javascript], SkillsType[SkillsType.Technic])
                    ];
                    details = [
                        "dotnet",
                        "csharp",
                        "aspnet",
                        "jquery",
                        "wpf",
                        "sqlserver"
                    ];
                    break;
                case Projects[Projects.GC].toLowerCase():
                    name = "Gesion de Consignes";
                    company = "Dassault Falcon System";
                    links = [
                        new SkillModel(TechnicalSkills[TechnicalSkills.CSharp], SkillsType[SkillsType.Technic]),
                        new SkillModel(TechnicalSkills[TechnicalSkills.AspNet], SkillsType[SkillsType.Technic]),
                        new SkillModel(TechnicalSkills[TechnicalSkills.Angular], SkillsType[SkillsType.Technic]),
                        new SkillModel(TechnicalSkills[TechnicalSkills.HtmlCss], SkillsType[SkillsType.Technic]),
                        new SkillModel(TechnicalSkills[TechnicalSkills.Javascript], SkillsType[SkillsType.Technic])
                    ];
                    details = [
                        "dotnet",
                        "csharp",
                        "aspnet",
                        "jquery",
                        "angularjs",
                        "sqlserver"
                    ];
                    break;
                case Projects[Projects.Monitoring].toLowerCase():
                    name = "Monitoring Tool";
                    company = "France Media Monde";
                    links = [
                        new SkillModel(TechnicalSkills[TechnicalSkills.CSharp], SkillsType[SkillsType.Technic]),
                        new SkillModel(TechnicalSkills[TechnicalSkills.AspNet], SkillsType[SkillsType.Technic]),
                        new SkillModel(TechnicalSkills[TechnicalSkills.HtmlCss], SkillsType[SkillsType.Technic]),
                        new SkillModel(TechnicalSkills[TechnicalSkills.Javascript], SkillsType[SkillsType.Technic])
                    ];
                    details = [
                        "dotnet",
                        "csharp",
                        "aspnet",
                        "jquery"
                    ];
                    break;
                case Projects[Projects.Gleipnir].toLowerCase():
                    name = "Gleipnir";
                    company = "IN'TECH";
                    links = [
                        new SkillModel(TechnicalSkills[TechnicalSkills.CSharp], SkillsType[SkillsType.Technic])
                    ];
                    details = [
                        "dotnet",
                        "csharp",
                        "winform",
                        "gitmaster",
                        "team3",
                        "teamleader"
                    ];
                    break;
                case Projects[Projects.Portfolio].toLowerCase():
                    name = "Porfolio";
                    company = "";
                    links = [
                        new SkillModel(TechnicalSkills[TechnicalSkills.CSharp], SkillsType[SkillsType.Technic]),
                        new SkillModel(TechnicalSkills[TechnicalSkills.AspNet], SkillsType[SkillsType.Technic]),
                        new SkillModel(TechnicalSkills[TechnicalSkills.Angular], SkillsType[SkillsType.Technic]),
                        new SkillModel(TechnicalSkills[TechnicalSkills.SassLess], SkillsType[SkillsType.Technic]),
                        new SkillModel(TechnicalSkills[TechnicalSkills.HtmlCss], SkillsType[SkillsType.Technic])
                    ];
                    details = [
                        "dotnet",
                        "csharp",
                        "aspnetcore",
                        "angular",
                        "typescript"
                    ];
                    break;
                case Projects[Projects.HeliosDashboard].toLowerCase():
                    name = "Helios Dashboard";
                    company = "Schlumberger";
                    links = [
                        new SkillModel(TechnicalSkills[TechnicalSkills.CSharp], SkillsType[SkillsType.Technic]),
                        new SkillModel(TechnicalSkills[TechnicalSkills.AspNet], SkillsType[SkillsType.Technic]),
                        new SkillModel(TechnicalSkills[TechnicalSkills.Angular], SkillsType[SkillsType.Technic]),
                        new SkillModel(TechnicalSkills[TechnicalSkills.SassLess], SkillsType[SkillsType.Technic]),
                        new SkillModel(TechnicalSkills[TechnicalSkills.HtmlCss], SkillsType[SkillsType.Technic]),
                        new SkillModel(TechnicalSkills[TechnicalSkills.Javascript], SkillsType[SkillsType.Technic])
                    ];
                    details = [
                        "dotnet",
                        "csharp",
                        "aspnetcore",
                        "angularjs",
                        "jquery"
                    ];
                    break;

                default:
                    throw new Error("Project not found");
            }
        } catch (e) {
            this.name = "Not found";
            this.url = "notfound";
            return;
        }

        const formatedName = id.toString().toLowerCase();

        this.name = name;
        this.company = company;
        this.url = formatedName;
        this.imageUrl = require(`./../../assets/images/projects/${formatedName}.png`);
        this.links = links;
        this.details = details;
    }
}

export enum Projects {
    // ReSharper disable InconsistentNaming
    AltecStore,
    GC,
    Monitoring,
    Gleipnir,
    Portfolio,
    HeliosDashboard
    // ReSharper restore InconsistentNaming
}