# Front-end Boilerplate

> A scaffold for new front-end projects

## Features

- Streaming [build system](http://gulpjs.com/)
- Dynamic [HTML templating](https://github.com/fbrctr/fabricator-assemble)
- Sass [compilation](https://github.com/sass/node-sass), [vendor prefixing](https://github.com/postcss/autoprefixer), and [minification](https://github.com/ben-eb/cssnano)
- JavaScript [module bundling](https://github.com/webpack/webpack), [optimization](https://github.com/mishoo/UglifyJS2), and [linting](http://eslint.org/)
- Image [optimization](https://github.com/imagemin/imagemin)
- Code formatting rules via [EditorConfig](http://editorconfig.org/) and [JS Beautifier](https://github.com/beautify-web/js-beautify)
- Boilerplate README

## Quick Start

Scaffold a new project by running these commands:

```
$ curl -L https://github.com/dynamit/front-end-boilerplate/archive/master.tar.gz | tar zx --strip 1
$ npm run setup
```

After the setup is compete, update the README with your project's info.


## Local development

Start a local development environment:

```
$ npm start
```

This will compile files, then watch for changes to recompile.

This will also start a server at [http://localhost:3000](http://localhost:3000) that will live-reload when changes are detected.

## Build for distribution

```
$ npm run build
```

In addition to the standard build tasks, this minifies CSS and uglifies JavaScript.

## Configuration

Configuration values are defined in the `config` object in `gulpfile.babel.js`

Available options, with defaults shown:

```javascript
templates: {
	src: ['src/templates/**/*', '!src/templates/+(layouts|components)/**'],
	dest: 'dist',
	watch: ['src/templates/**/*', 'src/data/**/*.json'],
	layouts: 'src/templates/layouts/*',
	partials: ['src/templates/components/**/*'],
	data: 'src/data/**/*.{json,yml}'
},
scripts: {
	src: './src/assets/scripts/main.js',
	dest: 'dist/assets/scripts',
	watch: 'src/assets/scripts/**/*'
},
styles: {
	src: 'src/assets/styles/main.scss',
	dest: 'dist/assets/styles',
	watch: 'src/assets/styles/**/*',
	browsers: ['last 1 version']
},
images: {
	src: 'src/assets/images/**/*',
	dest: 'dist/assets/images',
	watch: 'src/assets/images/**/*'
}
```

### Definitions

#### {task}.src 
 
Type: `String` or `Array`  
Source files for task.

#### {task}.dest

Type: `String`  
Output destination.

#### {task}.watch

Type: `String` or `Array`  
Files that should trigger recompilation/reload when changed.

### templates.layouts

Type: `String` or `Array`  
Layout templates.

Layouts are wrappers for template content. Templates are inserted into layouts at the `{% body %}` tag.

### templates.partials

Type: `String` or `Array`  
Partial templates.

### templates.data

Type: `String` or `Array`  
Data that can be used when templating pages. Can be either JSON or YAML.

### styles.browsers

Type: `Array`  
Value passed to [Autoprefixer](https://github.com/postcss/autoprefixer#browsers)

## Template Assembly

Templates are assembled using [fabricator-assemble](https://github.com/fbrctr/fabricator-assemble).

There are number of [options](https://github.com/fbrctr/fabricator-assemble#options) available, particularly the ability to define your own Handlebars helpers.

### Custom Helpers

[Helpers](http://jaskokoyn.com/2013/08/08/custom-helpers-handlebars-js-tutorial/) can be define as a object, where the key is the name of the helper and the value is a function.

```javascript
assemble({
	helpers: {
	    markdown: require('helper-markdown'),
	    foo: function () {
	        return 'bar';
	    }
	}
});
```

### Unit Testing

This version of the Front End Boilerplate is configured with Karma and Jasmime for unit testing. A sample test has been set up in `tests/addition.spec.js`. After you've create a JS module in `src/assets/scripts` and have imported it into `main.js`, you can create the module's matching `.spec.js` file under `tests/`.

Once you've written your unit test, you can start the test by running the command: `karma start`

After running your tests, coverage reporting will be available under `build/reports/coverage/report-html/index.html` (which you then open into a browser).

## License

The MIT License (MIT)
Copyright (c) 2016 Dynamit

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
