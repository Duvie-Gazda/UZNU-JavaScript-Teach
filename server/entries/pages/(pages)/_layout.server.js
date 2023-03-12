import { T as Topic } from "../../../chunks/Topic.js";
class ServerTopic extends Topic {
  save() {
    const jsonData = JSON.stringify(this.convertToMiniTopic());
    localStorage.setItem("topic" + this.id, jsonData);
  }
  upload() {
    const miniTopicJSON = localStorage.getItem("topic" + this.id) || "";
    const miniTopic = JSON.parse(miniTopicJSON);
    this.exam.updateWithMiniExam(miniTopic.miniExam);
  }
  convertToMiniTopic() {
    const result = {
      miniExam: this.exam.convertToMiniExam()
    };
    return result;
  }
}
async function load() {
  return {
    topics: JSON.stringify(ServerTopic.get())
  };
}
export {
  load
};
