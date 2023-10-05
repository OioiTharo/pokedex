export class Pokemon{
    id: number;
    name: string;
    type: string[];
    description: string;
    height: string;
    weight: string;
    category: string;
    abilities: string;
    photo: string;
        constructor(id:number, name:string, type:string[], description:string, height:string, weight:string, category:string, abilities:string, photo: string){
            this.id = id;
            this.name = name;
            this.type = type;
            this.description = description;
            this.height = height;
            this.weight = weight;
            this.category = category;
            this.abilities = abilities;
            this.photo = photo;
        }
}