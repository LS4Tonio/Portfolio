import { Injectable } from "@angular/core";

@Injectable()
export class ResourceService {
    /**
     * Gets the labels in the given language for the navbar menu
     * @param lang selected language - by default french
     */
    public getNavbarMenuLabels(lang?: string): object {
        const isFrench = !lang || lang.indexOf("fr") > -1;

        return {
            "navbar": {
                "about": isFrench ? "A propos de Moi" : "About Me",
                "contact": isFrench ? "Me Contacter" : "Contact Me",
                "projects": isFrench ? "Mes Projets" : "My Projects",
                "skills": isFrench ? "Mes Compétences" : "My Skills"
            }
        };
    }
}