import type { Article } from './Article';
import type { Exam } from './Exam';

export class Topic {
	public readonly id: number;
	public readonly article: Article;
	public readonly exam: Exam;

	public constructor(id: number, article: Article, exam: Exam) {
		this.id = id;
		this.article = article;
		this.exam = exam;
	}
}
