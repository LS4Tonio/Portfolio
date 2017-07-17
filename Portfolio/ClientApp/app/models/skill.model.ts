export class SkillModel {
    public name: string;
    public url: string;
    public imageUrl: string;
    public type: string;
    public isQuote: boolean;
    public rating: number;
    public links: string[];

    constructor(id: string, type: string) {
        let name: string;
        let isQuote: boolean = false;
        let rating: number = 0;
        let links: string[] = [];

        try {
            switch (type.toLowerCase()) {
                case SkillsType[SkillsType.Technic].toLowerCase():
                    switch (id.toLowerCase()) {
                        case TechnicalSkills[TechnicalSkills.Angular].toLowerCase():
                            name = "Angular";
                            rating = 3.5;
                            break;
                        case TechnicalSkills[TechnicalSkills.AspNet].toLowerCase():
                            name = "ASP .Net";
                            isQuote = true;
                            rating = 4.5;
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
                            break;
                        case TechnicalSkills[TechnicalSkills.Javascript].toLowerCase():
                            name = "Javascript";
                            rating = 4;
                            break;
                        case TechnicalSkills[TechnicalSkills.SassLess].toLowerCase():
                            name = "SASS LESS";
                            rating = 4;
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
        this.imageUrl = require(`./../../assets/images/skills/${formatedName}.png`);
        this.type = type.toLowerCase();
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
    None
}

export enum TechnicalSkills {
    CSharp,
    AspNet,
    Angular,
    SassLess,
    HtmlCss,
    Javascript,
}