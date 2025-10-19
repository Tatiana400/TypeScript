/**
 * Representa una serie de televisión con sus atributos principales.
 */
export class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    webpage: string;
    image: string;

    /**
     * Crea una instancia de Serie.
     */
    constructor(
        id: number,
        name: string,
        channel: string,
        seasons: number,
        description: string,
        webpage: string,
        image: string
    ) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.webpage = webpage;
        this.image = image;
    }
}