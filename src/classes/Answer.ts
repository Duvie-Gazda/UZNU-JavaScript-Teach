export class Answer {
	public readonly id: number;
	public readonly text: string;
	public readonly correct: boolean;

	constructor(id: number, text: string, correct: boolean) {
		this.id = id;
		this.text = text;
		this.correct = correct;
	}

	get isCorrect(): boolean {
		return this.correct;
	}
}

export type AnswerType = {
	id: number;
	text: string;
	correct: boolean;
};
