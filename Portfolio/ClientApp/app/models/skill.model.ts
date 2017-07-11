export class SkillModel {
    public name: string;
    public url: string;
    public imageUrl: string;
    public description: string;

    constructor(name: string) {
        const formatedName = name.trim().toLowerCase().replace(new RegExp("\s"), "-");

        this.name = name;
        this.url = formatedName;
        this.imageUrl = require(`./../../assets/images/skills/${formatedName}.png`);
        this.description = formatedName;
    }
}