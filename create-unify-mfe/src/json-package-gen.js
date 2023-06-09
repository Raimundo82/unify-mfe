/** @format */

import { undo } from './utils.js';
import { execSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';

export default name => {
	try {
		writeFileSync(`${name}/package.json`, JSON.stringify(getPackageJSON(name)));
	} catch (error) {
		console.error(error.toString());
		undo(name);
	}
};

function getPackageJSON(name, port = 9001) {
	return {
		name,
		version: '1.0.0',
		license: 'MIT',
		private: true,
		type: 'module',
		entry: 'index.js',
		config: {
			dev: `http://localhost:${port}`,
		},
		scripts: {
			dev: 'vite',
			build: 'vite build',
			pack: `yarn build && ./scripts/pack.sh ${name}`,
			'publish-dev': `yarn run pack && ./scripts/publish.sh ${name} ${name}.js @./dist/${name}.tgz $npm_package_config_dev`,
			'unpublish-dev': `./scripts/unpublish.sh ${name} $npm_package_config_dev`,
			publish: `yarn run pack && ./scripts/publish.sh ${name} ${name}.js @./dist/${name}.tgz $npm_package_config_docker`,
			unpublish: `./scripts/unpublish.sh ${name} $npm_package_config_docker`,
		},
		devDependencies: {
			vite: 'latest',
			'@rollup/plugin-terser': 'latest',
			'@core': 'file:../shell/shared/dist',
		},
	};
}
