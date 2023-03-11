import { Answer, type AnswerType } from './Answer';

export class Question {
	public readonly id: number;
	public readonly title: string;
	public readonly answers: Answer[];
	public chosenAnswer: Answer | undefined;
	public mark: number;
	public answered: boolean;

	constructor(id: number, title: string, answers: Answer[]) {
		this.id = id;
		this.title = title;
		this.answers = answers;
		this.mark = 0;
		this.answered = false;
	}

	public makeAnswer(answerId: number): boolean | undefined {
		this.answered = true;
		this.chosenAnswer = this.answers.find((answer) => answer.id == answerId);
		const isCorrectChosen = this.chosenAnswer?.isCorrect;
		this.mark = isCorrectChosen ? 1 : 0;
		return isCorrectChosen;
	}

	public static generateFromObject(questionObj: QuestionType): Question {
		const answers: Answer[] = [];
		for (const answer of questionObj.answers) {
			const answerRes = new Answer(answer.id, answer.text, answer.correct);
			answers.push(answerRes);
		}

		const question = new Question(questionObj.id, questionObj.title, answers);
		return question;
	}
}

export type QuestionType = {
	id: number;
	title: string;
	answers: Array<AnswerType>;
};
