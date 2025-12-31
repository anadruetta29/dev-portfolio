export class Option {

    public value: string;
    public label: string;

    constructor(
        value: string,
        label: string
    ) {
        this.value = value;
        this.label = label;
    }

    public static fromObject(object: { [key: string]: any }): Option | null {
        if (!object) return null;

        const { value, label } = object;

        if (!value || !label) return null;

        return new Option(value, label);
    }
}