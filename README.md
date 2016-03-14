# react-webpack-boilerplate
A boilerplate to start react project

# Steps to  create this boilerplate

1. Construct the directory structure

   ```
   mkdir react-webpack-bolierplate`
   cd react-webpack-bolierplate
   npm init
   ```

2. Install Dependencies

   ```
   npm install --save react react-dom
   npm install --save-dev webpack babel-loader babel-preset-es2015 babel-preset-react
   ```

3. Setup Webpack, add following content into `webpack.config.js`:

   ```
    module.exports = {
        // source
        entry: './index.jsx',
        output: {
            path: 'dist',
            filename: 'bundle.js'
        },
        devtool: 'source-map',
        module: {
            loaders: [
                {
                    test: /\.js[x]?$/,
                    loader: 'babel-loader',
                }
            ]
        }
    }
   ```

4. Setting for babel-loader. Add following content to `.babelrc`:

   ```
    {
        "presets": [
            "es2015",
            "react"
        ]
    }
   ```

5. Add template `index.html`:

   ```html
    <html>
        <head>
            <title>React Webpack Boilerplate</title>
        </head>
        <body>
            <div id="root">If you see this then something is wrong.</div>
            <script src="dist/bundle.js"></script>
        </body>
    </html>
   ```

6. Add sample `index.jsx`:

   ```javascript
    var React = require('react');
    var ReactDOM = require('react-dom');

    ReactDOM.render(<h1>Hello React!</h1>, document.getElementById('app'));
   ```

7. Run Webpack and file server

   ```
   webpack -d -w             # -w means to watch the changes of file
   http-server
   # open localhost:8080 now
   ```

8. Add script to open server automatically

  ```
  npm install --save http-server
  ```

  And add following contents to `package.json` "scripts" section:

  ```
    "start": "npm run serve | npm run dev",
    "serve": "./node_modules/.bin/http-server -p 8080",
  ```

  Now start http server with:

  ```
  npm run start
  ```

# Tutorials

- [React with webpack - part 1](http://jslog.com/2014/10/02/react-with-webpack-part-1/)
- [Setting Up a React.js Environment Using Npm, Babel 6 and Webpack](https://www.codementor.io/reactjs/tutorial/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack)
- [React-webpack-template](https://github.com/petehunt/react-webpack-template.git)
