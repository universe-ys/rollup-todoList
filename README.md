# rollup-todoList

`npm init -y`

`npm i -D rollup`

`npm i -D rollup-plugin-scss sass`

`npm i -D rollup-plugin-generate-html-template` index.html 을 사용하기 위한 플러그인

`npm i -D rollup-plugin-livereload`

`npm i -D rollup-plugin-serve rollup-plugin-terser`

```jsx
// rollup.common.config.js
import htmlTemplate from 'rollup-plugin-generate-html-template';
import scss from 'rollup-plugin-scss';
import nodeResolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/js/index.js',
  output: {
    file: './dist/bundle.js',
    format: 'cjs',
    sourcemap: true
  },
  plugins: [
		nodeResolve(),
    scss({
      insert: true,
      sourcemap: true
    }),
    htmlTemplate({
      template: 'src/index.html',
      target: 'index.html'
    })
  ]
}
```

```jsx
// rollup.dev.config.js
import rollupCommonConfig from "./rollup.common.config";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

const config = {...rollupCommonConfig};

config.watch = {
  inclue: 'src/**' 
};

config.plugins = [
  ...config.plugins,
  serve({
    host: "localhost",
    port: 8080,
    open: true,
    contentBase: 'dist'
  }),
  livereload('dist')
]

export default config;
```

```jsx
// rollup.prod.config.js
import { terser } from "rollup-plugin-terser";
import rollupCommonConfig from "./rollup.common.config";

const config = {...rollupCommonConfig}

config.plugins = [
  ...config.plugins,
  terser()
];

export default config;
```

`npm i -D eslint`

`npm i -D --save-exact prettier`

`npm i -D eslint-config-prettier eslint-plugin-prettier`

cmd + shift + p ⇒ settings

```json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

`npm install --save @fortawesome/fontawesome-free`

`npm i -D @rollup/plugin-node-resolve`

Todo Create, delete 기능

Todo Edit, Done 기능

Filter 기능(All/ Todo/ Done)

localStorage 에 Todo data 연동
