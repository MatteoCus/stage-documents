export class Attribute{

    public name: string = "";
    public value: string = "";

    constructor(attribute: Attribute) {
        this.name = attribute.name;
        this.value = attribute.value;
    }
}