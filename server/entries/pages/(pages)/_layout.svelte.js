import { c as create_ssr_component, b as subscribe, d as each, e as escape } from "../../../chunks/index.js";
import { p as page } from "../../../chunks/stores.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".main.svelte-1xvgar5{min-height:100%;background-color:#f9f9f9;display:grid;grid-template-columns:15% auto}.left.svelte-1xvgar5{background-color:#ffffff;display:flex;flex-direction:column;align-items:center;padding:40px 10px;box-shadow:0px 0px 7px rgba(0, 0, 0, 0.1)}.right.svelte-1xvgar5{display:flex;flex-direction:column;justify-content:center;align-items:center;font-family:'Poppins';font-style:normal;font-weight:400;font-size:16px;line-height:24px;color:#8b8282}.menu.svelte-1xvgar5{padding:40px 0px}.menu-item.svelte-1xvgar5{padding:15px 40px;text-align:center;font-family:'Exo 2';font-style:normal;font-weight:400;font-size:16px;line-height:24px;letter-spacing:0.02em;color:#928e8e;cursor:pointer}.active.svelte-1xvgar5{color:white !important;background:#5aced6;border-radius:6px}.container.svelte-1xvgar5{display:flex;flex-direction:column;justify-content:center;align-items:center}.title.svelte-1xvgar5{font-family:'Exo 2';font-style:normal;font-weight:600;font-size:28px;line-height:42px;color:#3e435d;text-align:center}@media only screen and (max-width: 600px){.main.svelte-1xvgar5{min-height:100%;background-color:#f9f9f9;display:block}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let { url } = $$props;
  const topics = JSON.parse(data.topics);
  let activeId = null;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  $$result.css.add(css);
  activeId = Number.parseInt($page.params.id) || 0;
  $$unsubscribe_page();
  return `<div class="${"main svelte-1xvgar5"}"><div class="${"left svelte-1xvgar5"}"><div class="${"container svelte-1xvgar5"}"><div class="${"title svelte-1xvgar5"}">Вивчення JavaScript</div>
			<div class="${"menu svelte-1xvgar5"}">${each(topics, (topic) => {
    return `
					<div class="${["menu-item svelte-1xvgar5", topic.id == activeId ? "active" : ""].join(" ").trim()}">${escape(topic.article.title)}
					</div>`;
  })}</div></div></div>
	<div class="${"right svelte-1xvgar5"}">${slots.default ? slots.default({}) : ``}</div>
</div>`;
});
export {
  Layout as default
};
