export class Article {
	public readonly id: number;
	public readonly text: string;
	public readonly title: string;

	constructor(id: number, text: string, title: string) {
		this.id = id;
		this.text = text;
		this.title = title;
	}
}
