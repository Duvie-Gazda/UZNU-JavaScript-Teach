export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.7208e5ce.js","imports":["_app/immutable/entry/start.7208e5ce.js","_app/immutable/chunks/index.d09ad2c3.js","_app/immutable/chunks/singletons.5fd4b739.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.7b7e8a4d.js","imports":["_app/immutable/entry/app.7b7e8a4d.js","_app/immutable/chunks/index.d09ad2c3.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js')
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
};
