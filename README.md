# Yeoman with AngularJS Sample project

This is the way I like my AngularJS project set up with Yeoman.

I have run `yeoman init angular`, and then added my own changes on top of that. Please see the commit log for which changes I made.

## Requirements

    npm install -g yeoman testacular

## Run server locally

    yeoman server

## Run tests

    yeoman test

## Build for deployment

    yeoman build

The resulting webapp is then available in the `dist/` directory.

## TODO

1. <strike>Add a .gitignore file.</strike>
1. <strike>Use CDN.</strike>
1. <strike>Add complete Twitter Bootstrap, including JS components and jQuery.</strike>
1. <strike>Write a README.md.</strike>
1. Structure folders per application feature, rather than per component type. I.e. keep everything about the `menu` in one directory. This includes service, controller, view. See `angular-sprout` for inspiration.
1. Make each script have an anonymous self-invoking function, wrapping its contents.
1. Keep unit tests in the same folder as the rest of the code.
1. Keep scenario tests in the same folder as the rest of the code.
1. Fetch vendor scripts with `bower` if they are not available via CDN.
