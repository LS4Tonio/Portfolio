export class SkillModel {
    public name: string;
    public url: string;
    public imageUrl: string;
    public description: string;
    public type: string;

    constructor(id: string, type: string) {
        console.log("ctor", id, type);

        let name: string;

        try {
            switch (type.toLowerCase()) {
                case SkillsType[SkillsType.Technic].toLowerCase():
                    switch (id.toLowerCase()) {
                        case TechnicalSkills[TechnicalSkills.Angular].toLowerCase():
                            name = "Angular";
                            break;
                        case TechnicalSkills[TechnicalSkills.AspNet].toLowerCase():
                            name = "ASP .Net";
                            break;
                        case TechnicalSkills[TechnicalSkills.CSharp].toLowerCase():
                            name = "C#";
                            break;
                        case TechnicalSkills[TechnicalSkills.HtmlCss].toLowerCase():
                            name = "HTML CSS";
                            break;
                        case TechnicalSkills[TechnicalSkills.Javascript].toLowerCase():
                            name = "Javascript";
                            break;
                        case TechnicalSkills[TechnicalSkills.SassLess].toLowerCase():
                            name = "SASS LESS";
                            break;
                        default:
                            console.log("TS not found");
                            throw new Error("Technical skill not found");
                    }
                    break;
                default:
                    console.log("S not found");
                    throw new Error("Skill type not found");
            }
        } catch (e) {
            console.log("not found !!");
            this.name = "Not found";
            return;
        }

        const formatedName = id.toString().toLowerCase();

        this.name = name;
        this.url = formatedName;
        this.imageUrl = require(`./../../assets/images/skills/${formatedName}.png`);
        this.description = formatedName;
        this.type = type.toLowerCase();
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
    HtmlCss,
    Javascript,
    SassLess,
    Angular
}