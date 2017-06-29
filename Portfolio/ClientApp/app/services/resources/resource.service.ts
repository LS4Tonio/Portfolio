import { Injectable } from "@angular/core";

@Injectable()
export class ResourceService {
    /**
     * Gets the labels in the given language for the navbar menu
     * @param lang selected language - by default french
     */
    public getNavbarMenuLabels(lang?: string): object {
        const isFrench = this.isFrenchLanguage(lang);

        return {
            "navbar": {
                "about": isFrench ? "A propos de Moi" : "About Me",
                "contact": isFrench ? "Me Contacter" : "Contact Me",
                "projects": isFrench ? "Mes Projets" : "My Projects",
                "skills": isFrench ? "Mes Compétences" : "My Skills"
            }
        };
    }

    /**
     * Gets the labels in the given language for the contact page
     * @param lang selected language - by default french
     */
    public getContactPageLabels(lang?: string): object {
        const isFrench = this.isFrenchLanguage(lang);

        return {
            "contact": {
                "form": {
                    "email": isFrench ? "Adresse Email" : "Email Address",
                    "name": isFrench ? "Nom" : "Name",
                    "validation": {
                        "email": {
                            "pattern": isFrench ? "Veuillez entrer une adresse email valide : votre.nom@societe.com" : "Please enter valid email address: your.name@company.com",
                            "required": isFrench ? "Votre adresse email est réquise." : "Your email address is required."
                        },
                        "name": {
                            "required": isFrench ? "Votre nom est réquis." : "Your name is required."
                        }
                    }
                },
                "title": isFrench ? "Me voulez-vous dans votre team ?" : "Do you want me in your crew?"
            }
        };
    }

    /**
     * Checks if the language is french
     * @param lang selected language - by default french
     */
    private isFrenchLanguage(lang?: string): boolean {
        return !lang || lang.indexOf("fr") > -1;
    }
}