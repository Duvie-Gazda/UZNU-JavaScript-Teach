import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.45fb8db1.js","imports":["_app/immutable/entry/start.45fb8db1.js","_app/immutable/chunks/index.d09ad2c3.js","_app/immutable/chunks/singletons.92a02057.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.0141983f.js","imports":["_app/immutable/entry/app.0141983f.js","_app/immutable/chunks/index.d09ad2c3.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js')
		],
		routes: [
			{
				id: "/(pages)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/(pages)/[id]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
