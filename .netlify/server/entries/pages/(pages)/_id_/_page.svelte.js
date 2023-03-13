import { c as create_ssr_component, e as escape, d as each, v as validate_component, b as subscribe } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/stores.js";
import { E as Exam$1, T as Topic } from "../../../../chunks/Topic.js";
class ClientExam extends Exam$1 {
  save() {
    const jsonData = JSON.stringify(this.convertToMiniExam());
    localStorage.setItem("exam-" + this.id, jsonData);
  }
  upload() {
    const miniExamJSON = localStorage.getItem("exam-" + this.id) || "";
    if (miniExamJSON == "")
      return;
    const miniExam = JSON.parse(miniExamJSON);
    this.updateWithMiniExam(miniExam);
  }
}
const Question_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".main.svelte-1t0s3u7{background:#ffffff;border-radius:10px;box-shadow:0px 0px 10px rgba(0, 0, 0, 0.05);padding:25px 30px;margin:30px 0px}.title.svelte-1t0s3u7{font-family:'Exo 2';font-style:normal;font-weight:400;font-size:21px;line-height:32px;color:#000000}.answers-container.svelte-1t0s3u7{display:flex;flex-direction:column;padding:10px 0px}.answer.svelte-1t0s3u7{padding:12px 0px;padding-left:50px;margin-left:30px;width:533.5px;display:inline;font-family:'Exo 2';font-style:normal;font-weight:400;font-size:16px;line-height:32px;letter-spacing:0.03em;color:#8b8282;cursor:pointer}.answer.svelte-1t0s3u7:not(:last-child){border-bottom:1px solid #efefef}.bad.svelte-1t0s3u7{color:#dd3737;font-weight:500}.good.svelte-1t0s3u7{color:#1fc5d0}@media only screen and (max-width: 600px){.answer.svelte-1t0s3u7{width:90%;padding-left:30px;margin-left:0px}pre{overflow-x:scroll}li{word-wrap:break-word}}",
  map: null
};
const Question = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let chosen;
  let { question } = $$props;
  let { onClick } = $$props;
  if ($$props.question === void 0 && $$bindings.question && question !== void 0)
    $$bindings.question(question);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  $$result.css.add(css$2);
  chosen = question?.chosenAnswer;
  return `<div class="${"main svelte-1t0s3u7"}"><div class="${"title svelte-1t0s3u7"}">${escape(question?.title)}</div>
	<div class="${"answers-container svelte-1t0s3u7"}">${question?.answers != null ? `${each(question?.answers, (answer) => {
    return `
				<div class="${[
      "answer svelte-1t0s3u7",
      (chosen?.id == answer.id && answer.isCorrect ? "good" : "") + " " + (chosen?.id == answer.id && !answer.isCorrect ? "bad" : "")
    ].join(" ").trim()}">${escape(answer.text)}
				</div>`;
  })}` : ``}</div>
</div>`;
});
const Exam_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".result-container.svelte-1v03sh7{background:#ffffff;border-radius:10px;box-shadow:0px 0px 10px rgba(0, 0, 0, 0.05);padding:25px 30px;margin:30px 0px;display:flex;align-items:center;justify-content:space-between}.result-main.svelte-1v03sh7,.result-description.svelte-1v03sh7{display:inline;font-family:'Exo 2';font-style:normal;font-weight:400;font-size:21px;line-height:32px;color:#000000}.bad.svelte-1v03sh7{color:#d65a5a}.good.svelte-1v03sh7{color:#5aced6}.clear.svelte-1v03sh7{background:#5aced6;border-radius:10px;color:white !important;padding:15px 40px;font-family:'Poppins';font-style:normal;font-weight:400;font-size:16px;line-height:24px;letter-spacing:0.02em;cursor:pointer}",
  map: null
};
const max = 50;
const Exam = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let result;
  let { exam } = $$props;
  if ($$props.exam === void 0 && $$bindings.exam && exam !== void 0)
    $$bindings.exam(exam);
  $$result.css.add(css$1);
  result = exam?.checkExam() || 0;
  return `<div class="${"main"}">${exam != null ? `${each(exam.questions, (question) => {
    return `${validate_component(Question, "Question").$$render(
      $$result,
      {
        question,
        onClick: () => {
          exam?.checkExam();
          exam?.save();
          exam = exam;
        }
      },
      {},
      {}
    )}`;
  })}` : ``}
	<div class="${"result-container svelte-1v03sh7"}"><div class="${"result"}"><div class="${"result-description svelte-1v03sh7"}">Ваш результат:</div>
			<div class="${[
    "result-main svelte-1v03sh7",
    (result >= max ? "good" : "") + " " + (result <= max ? "bad" : "")
  ].join(" ").trim()}">${escape(exam?.result)}%
			</div></div>
		
		<div class="${"clear svelte-1v03sh7"}">Очистити</div></div>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".main.svelte-ewqq1d{width:100%;display:flex;justify-content:center}.container.svelte-ewqq1d{width:90%}.article-container.svelte-ewqq1d{background:#ffffff;border-radius:10px;margin-top:20px;padding:25px 30px;box-shadow:0px 0px 10px rgba(0, 0, 0, 0.05);font-family:'Exo 2';font-style:normal;font-weight:400;font-size:16px;line-height:28px;letter-spacing:1px;color:#8b8282}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let topic;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const topics = Topic.generateFromJSON(data.topics);
  let clientExam;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  topic = topics.find((topic2) => topic2.id == Number.parseInt($page.params.id));
  clientExam = new ClientExam(topic?.exam.id || 0, topic?.exam.result || 0, topic?.exam.questions || []);
  {
    if (typeof window != "undefined") {
      clientExam.upload();
    }
  }
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-232jec_START -->${$$result.title = `<title>${escape(topic?.article.title)}</title>`, ""}<!-- HEAD_svelte-232jec_END -->`, ""}

<div class="${"main svelte-ewqq1d"}"><div class="${"container svelte-ewqq1d"}">
		<div class="${"article-container svelte-ewqq1d"}"><!-- HTML_TAG_START -->${topic?.article.text}<!-- HTML_TAG_END --></div>
		${validate_component(Exam, "Exam").$$render($$result, { exam: clientExam }, {}, {})}</div>
</div>`;
});
export {
  Page as default
};
