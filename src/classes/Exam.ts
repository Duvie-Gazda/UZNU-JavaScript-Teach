import type { Question } from './Question';

export class Exam {
	public readonly id: number;
	public readonly questions: Question[];
	public result: number;

	public constructor(id: number, questions: Question[]) {
		this.id = id;
		this.questions = questions;
		this.result = 0;
	}

	public checkExam(): number | null {
		const current = this.questions.reduce((val, current) => val + current.mark, 0);

		this.result = Number.parseInt(((100 * current) / this.questions.length).toFixed(0));

		return this.result;
	}
}
