import { Exam, type MiniExam } from './Exam';

export class ClientExam extends Exam {
	public save() {
		const jsonData = JSON.stringify(this.convertToMiniExam());
		localStorage.setItem('exam' + this.id, jsonData);
	}

	public upload() {
		const miniExamJSON: string = localStorage.getItem('exam' + this.id) || '';
		const miniExam: MiniExam = JSON.parse(miniExamJSON);

		this.updateWithMiniExam(miniExam);
	}
}
