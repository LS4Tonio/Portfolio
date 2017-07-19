export class SkillModel {
    public name: string;
    public url: string;
    public imageUrl: string;
    public type: string;
    public typeId: SkillsType;
    public isQuote: boolean;
    public rating: number;
    public links: string[];

    constructor(id: string, type: string) {
        let name: string;
        let isQuote: boolean = false;
        let rating: number;
        let links: string[] = [];
        let typeId: SkillsType;

        try {
            switch (type.toLowerCase()) {
                case SkillsType[SkillsType.Human].toLowerCase():
                    typeId = SkillsType.Human;

                    switch (id.toLowerCase()) {
                        case HumanSkills[HumanSkills.Adaptability].toLowerCase():
                            name = "Adaptability";
                            rating = -1;
                            links = [
                                "altecstore",
                                "gc",
                                "gleipnir",
                                "monitoring",
                                "heliosdashboard"
                            ];
                            break;
                        case HumanSkills[HumanSkills.Autonomy].toLowerCase():
                            name = "Autonomy";
                            rating = -1;
                            links = [
                                "gc",
                                "monitoring",
                                "portfolio",
                                "heliosdashboard"
                            ];
                            break;
                        case HumanSkills[HumanSkills.Serious].toLowerCase():
                            name = "Serious";
                            rating = -1;
                            links = [
                                "altecstore",
                                "gc",
                                "gleipnir",
                                "monitoring",
                                "portfolio",
                                "heliosdashboard"
                            ];
                            break;
                        case HumanSkills[HumanSkills.TeamWork].toLowerCase():
                            name = "TeamWork";
                            rating = -1;
                            links = [
                                "altecstore",
                                "gleipnir",
                                "heliosdashboard"
                            ];
                            break;
                        default:
                            throw new Error("Human skill not found");
                    }
                    break;

                case SkillsType[SkillsType.Technic].toLowerCase():
                    typeId = SkillsType.Technic;

                    switch (id.toLowerCase()) {
                        case TechnicalSkills[TechnicalSkills.Angular].toLowerCase():
                            name = "Angular";
                            rating = 3.5;
                            links = [
                                "gc",
                                "portfolio",
                                "heliosdashboard"
                            ];
                            break;
                        case TechnicalSkills[TechnicalSkills.AspNet].toLowerCase():
                            name = "ASP .Net";
                            isQuote = true;
                            rating = 4.5;
                            links = [
                                "altecstore",
                                "gc",
                                "monitoring",
                                "portfolio",
                                "heliosdashboard"
                            ];
                            break;
                        case TechnicalSkills[TechnicalSkills.CSharp].toLowerCase():
                            name = "C#";
                            rating = 5;
                            links = [
                                "gleipnir",
                                "monitoring",
                                "altecstore",
                                "heliosdashboard",
                                "gc",
                                "portfolio"
                            ];
                            break;
                        case TechnicalSkills[TechnicalSkills.HtmlCss].toLowerCase():
                            name = "HTML CSS";
                            rating = 4.5;
                            links = [
                                "altecstore",
                                "gc",
                                "monitoring",
                                "portfolio",
                                "heliosdashboard"
                            ];
                            break;
                        case TechnicalSkills[TechnicalSkills.Javascript].toLowerCase():
                            name = "Javascript";
                            rating = 4;
                            links = [
                                "altecstore",
                                "gc",
                                "monitoring",
                                "heliosdashboard"
                            ];
                            break;
                        case TechnicalSkills[TechnicalSkills.SassLess].toLowerCase():
                            name = "SASS LESS";
                            rating = 4;
                            links = [
                                "portfolio",
                                "heliosdashboard"
                            ];
                            break;
                        default:
                            throw new Error("Technical skill not found");
                    }
                    break;
                default:
                    throw new Error("Skill type not found");
            }
        } catch (e) {
            this.name = "Not found";
            this.url = "notfound";
            return;
        }

        const formatedName = id.toString().toLowerCase();

        this.name = name;
        this.url = formatedName;
        this.imageUrl = `skills/${formatedName}.png`;
        this.type = type.toLowerCase();
        this.typeId = typeId;
        this.isQuote = isQuote;
        this.rating = rating;
        this.links = links;
    }
}

export enum SkillsType {
    None,
    Human,
    Technic
}

export enum HumanSkills {
    Adaptability,
    Autonomy,
    Serious,
    TeamWork
}

export enum TechnicalSkills {
    CSharp,
    AspNet,
    Angular,
    SassLess,
    HtmlCss,
    Javascript,
}