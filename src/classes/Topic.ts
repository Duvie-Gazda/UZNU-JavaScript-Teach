import data from '../data.json';
import { Article } from './Article';
import { Exam } from './Exam';
import { Question } from './Question';

export class Topic {
	public readonly id: number;
	public readonly article: Article;
	public readonly exam: Exam;

	public constructor(id: number, article: Article, exam: Exam) {
		this.id = id;
		this.article = article;
		this.exam = exam;
	}

	public static get(): Topic[] {
		return this.generateFromJSON(JSON.stringify(data));
	}

	public static generateFromJSON(jsonObj: string): Topic[] {
		const topics: Topic[] = [];
		const objs: Topic[] = JSON.parse(jsonObj);
		for (const topic of objs) {
			const article = new Article(topic.article.id, topic.article.text, topic.article.title);

			const questions: Question[] = [];
			for (const question of topic.exam.questions) {
				const questionRes = Question.generateFromObject(question);
				questions.push(questionRes);
			}

			const exam = new Exam(topic.exam.id, 0, questions);
			topics.push(new Topic(topic.id, article, exam));
		}
		return topics;
	}
}
