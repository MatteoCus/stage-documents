export class Attribute{

    private name: string = "";
    private value: string = "";

    constructor(attribute: Attribute) {
        this.name = attribute.name;
        this.value = attribute.value;
    }

    public get Name() { return this.name;}

    public get Value() { return this.value;}

    public set Name(name: string) {this.name = name;}

    public set Value(value: string) { this.value = value;}
}