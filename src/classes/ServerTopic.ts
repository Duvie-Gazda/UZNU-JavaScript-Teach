import type { MiniExam } from './Exam';
import { Topic } from './Topic';

export class ServerTopic extends Topic {
	public save() {
		const jsonData = JSON.stringify(this.convertToMiniTopic());
		localStorage.setItem('topic' + this.id, jsonData);
	}

	public upload() {
		const miniTopicJSON: string = localStorage.getItem('topic' + this.id) || '';
		const miniTopic: MiniTopic = JSON.parse(miniTopicJSON);

		this.exam.updateWithMiniExam(miniTopic.miniExam);
	}

	public convertToMiniTopic(): MiniTopic {
		const result: MiniTopic = {
			miniExam: this.exam.convertToMiniExam()
		};
		return result;
	}
}

export type MiniTopic = {
	miniExam: MiniExam;
};
