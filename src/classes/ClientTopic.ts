import { HOST } from '../consts';
import { Topic } from './Topic';
import data from '../data.json';
import { Article } from './Article';
import { Exam } from './Exam';
import { Question } from './Question';

export class ClientTopic extends Topic {
	public static get(): ClientTopic[] {
		const topics: ClientTopic[] = [];
		for (const topic of data) {
			const article = new Article(topic.article.id, topic.article.text, topic.article.title);

			const questions: Question[] = [];
			for (const question of topic.exam.questions) {
				questions.push(Question.generateFromObject(question));
			}

			const exam = new Exam(topic.exam.id, questions);
			topics.push(new Topic(topic.id, article, exam));
		}
		return topics;
	}

	public static generateFromJSON(jsonObj: string): ClientTopic[] {
		const topics: ClientTopic[] = [];
		const objs = JSON.parse(jsonObj);
		for (const topic of objs) {
			const article = new Article(topic.article.id, topic.article.text, topic.article.title);

			const questions: Question[] = [];
			for (const question of topic.exam.questions) {
				questions.push(Question.generateFromObject(question));
			}

			const exam = new Exam(topic.exam.id, questions);
			topics.push(new Topic(topic.id, article, exam));
		}
		return topics;
	}
}
