export class SkillModel {
    public name: string;
    public url: string;
    public imageUrl: string;
    public description: string;

    constructor(type: Skills) {
        let name: string;

        switch (type) {
            case Skills.Angular:
                name = "Angular";
                break;
            case Skills.AspNet:
                name = "ASP .Net";
                break;
            case Skills.CSharp:
                name = "ASP .Net";
                break;
            case Skills.HtmlCss:
                name = "HTML CSS";
                break;
            case Skills.Javascript:
                name = "Javascript";
                break;
            case Skills.SassLess:
                name = "SASS LESS";
                break;
            default:
                name = "Not Found";
                break;
        }

        const formatedName = type.toString().toLowerCase();

        this.name = name;
        this.url = formatedName;
        this.imageUrl = require(`./../../assets/images/skills/${formatedName}.png`);
        this.description = formatedName;
    }
}

export enum Skills {
    None,
    CSharp,
    AspNet,
    HtmlCss,
    Javascript,
    SassLess,
    Angular
}