import type { MiniQuestion, Question } from './Question';

export class Exam {
	public readonly id: number;
	public readonly questions: Question[];
	public result: number;

	public constructor(id: number, result: number, questions: Question[]) {
		this.id = id;
		this.questions = questions;
		this.result = result;
	}

	public checkExam(): number | null {
		const current = this.questions.reduce((val, current) => val + current.mark, 0);

		this.result = Number.parseInt(((100 * current) / this.questions.length).toFixed(0));

		return this.result;
	}

	public clear() {
		this.result = 0;
		for (const question of this.questions) {
			question.answered = false;
			question.chosenAnswer = undefined;
		}
	}

	public convertToMiniExam(): MiniExam {
		const result: MiniExam = {
			questions: [],
			id: this.id,
			result: this.result
		};
		for (const question of this.questions) {
			result.questions.push({
				id: question.id,
				answeredId: question.chosenAnswer?.id
			});
		}

		return result;
	}

	public updateWithMiniExam(miniExam: MiniExam): void {
		this.result = miniExam.result;
		for (const question of this.questions) {
			const miniQuestion = miniExam.questions.find((val) => val.id == question.id);
			if (miniQuestion?.answeredId) {
				question.makeAnswer(miniQuestion?.answeredId);
			}
		}
	}
}

export type MiniExam = {
	id: number;
	questions: Array<MiniQuestion>;
	result: number;
};
