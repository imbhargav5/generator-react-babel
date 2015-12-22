# generator-react-babel [![Build Status](https://travis-ci.org/bhargav175/generator-react-babel.svg?branch=master)](https://travis-ci.org/bhargav175/generator-react-babel)
Quickly scaffold your next react project with react-babel generator. This generator is most useful for creating react-plugins, so you can code your plugin in an ES6 fashion in the `src` dir and transpile it for production in the `lib` dir using babel. You also have a `dev` folder ready which can serve as a playground. Happy coding! Contributions are welcome! 

 - [x] Webpack
 - [x] ES6 + Babel
 - [x] React + ReactDOM
 - [x] Configured Dev folder for your plugin's playground
 - [x] Build command which transpiles files to ES5 for production.

###Directory Structure

    src/
    dev/
    test/
    lib/
    package.json
    webpack.config.js
    .babelrc
    .eslintrc

###Installing the generator

    npm install -g generator-react-babel

##Initiate your project folder with this command

    yo react-babel
    
This creates an src, lib, dev and test folder in your project directory.

## To Run Dev Server

    npm run dev
    
## To Build files

    npm run build

This puts transpiled files into the lib folder.
