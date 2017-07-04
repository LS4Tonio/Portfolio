import { Injectable } from "@angular/core";

import { LanguageModel } from "../../models/language.model";

@Injectable()
export class ResourceService {
    /**
     * Gets the labels in the given language for the about page
     * @param lang selected language - by default french
     */
    public getAboutPageLabels(lang?: string): object {
        const isFrench = this.isFrenchLanguage(lang);
        const currentAge = new Date().getUTCFullYear() - 1994;

        return {
            "about": {
                "accordion": {
                    "hobbies": isFrench ? "Centres d'intérêts" : "Hobbies",
                    "languages": isFrench ? "Langues" : "Languages",
                    "transportation": isFrench ? "Transport" : "Transportation"
                },
                "description": {
                    "background": isFrench
                        ? `Je m’appelle Antoine BIBES, j’ai ${currentAge} ans et je possède un diplôme d’expert en ingénierie du logiciel, obtenu dans l’école supérieure d’ingénierie informatique IN’TECH du Groupe ESIEA.`
                        : `I am Antoine BIBES, ${currentAge} years old and I am graduated from IN'TECH of Group ESIEA.`,
                    "today": isFrench
                        ? "Aujourd’hui, j’entre dans la vie active et le milieu professionnel, afin de développer mon expérience et mes compétences."
                        : "Today I join the active life and professional work for improve my experience and my skills."
                },
                "hobbies": {
                    "cinema": "Cinema",
                    "sports": "Airsoft",
                    "videogames": isFrench ? "Jeux vidéos multijoueurs" : "Multiplayer video games"
                },
                "title": isFrench ? "Qui suis-je ?" : "Who am I?",
                "transportation": {
                    "carlicense": isFrench ? "Permis B" : "Car driver license"
                }
            }
        }
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
                    "button": {
                        "submit": isFrench ? "Envoyer" : "Send"
                    },
                    "email": isFrench ? "Adresse Email" : "Email Address",
                    "message": "Message",
                    "name": isFrench ? "Nom" : "Name",
                    "subject": isFrench ? "Sujet" : "Subject",
                    "validation": {
                        "email": {
                            "pattern": isFrench ? "Veuillez entrer une adresse email valide : votre.nom@societe.com" : "Please enter valid email address: your.name@company.com",
                            "required": isFrench ? "Votre adresse email est réquise." : "Your email address is required."
                        },
                        "message": {
                            "required": isFrench ? "Veuillez composer votre message." : "Please type your message"
                        },
                        "name": {
                            "required": isFrench ? "Votre nom est réquis." : "Your name is required."
                        },
                        "subject": {
                            "maxlength": isFrench ? "Le sujet ne doit pas dépasser les 144 caractères." : "The subject should not exceed 144 characters.",
                            "required": isFrench ? "Veuillez ajouter un sujet pour votre message." : "Please enter the subject of your message."
                        }
                    }
                },
                "title": isFrench ? "Me voulez-vous dans votre team ?" : "Do you want me in your crew?"
            }
        };
    }

    /**
     * Gets the spoken languages list
     * @param lang selected language - by default french
     */
    public getLanguagesList(lang?: string): LanguageModel[] {
        const isFrench = this.isFrenchLanguage(lang);

        return [
            {
                name: isFrench ? "Français" : "French",
                score: isFrench ? "Langue maternelle" : "Mother language"
            },
            {
                name: isFrench ? "Anglais" : "English",
                score: "TOEIC score : 790/990"
            }
        ];
    }

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
                "menu": {
                    "button": isFrench ? "Afficher le menu" : "Toggle navigation"
                },
                "projects": isFrench ? "Mes Projets" : "My Projects",
                "skills": isFrench ? "Mes Compétences" : "My Skills"
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