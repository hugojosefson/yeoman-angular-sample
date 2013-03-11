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

1. ~~Add a .gitignore file.~~
1. ~~Use CDN.~~
1. ~~Add complete Twitter Bootstrap, including JS components and jQuery.~~
1. ~~Write a README.md.~~
1. ~~Get rid of globally declared variables. Angular modules should be the only global thing.~~
1. ~~Make each script have an anonymous self-invoking function, wrapping its contents.~~
1. ~~Use shorter names for services, controllers etc.~~
1. ~~Structure folders per application feature, rather than per component type. For example keep everything about the `menu` in one directory. This includes service, controller, view. Take inspiration and example code from [thedigitalself/angular-sprout](https://github.com/thedigitalself/angular-sprout).~~
1. ~~Keep unit tests in the same folder as the rest of the code.~~
1. ~~Keep scenario tests in the same folder as the rest of the code.~~
1. ~~Make `yeoman scenario-test` launch `yeoman server` (or equivalent) during test run, [example](http://stackoverflow.com/a/11943814/96301).~~
1. ~~Use HTML5 History API.~~
1. ~~Split up `css` files, so there can be one in every directory if desired.~~
1. Make sure `css`, `scss` and `sass` are compiled from any directory to one `css` file.
1. Make sure `bower` works and scripts included in `components.json` are installed and made available correctly.
1. Fetch vendor scripts with `bower` if they are not available via CDN.
1. Create a `yeoman-generator` for generating and maintaining projects based on this sample.

### Optional / Later
1. Consolidate all built files and directories under one directory, for example `target` to make cleaning and `.gitignore`ing simpler.
1. Don't require developer to add `<script src...` tag for every `.js` file. Find and build them all together, starting with the ones which declarare modules, so that the modules are available when the other files reference them to add stuff into them. Make sure `yeoman server` and stuff still works.
1. Add support for `less` compilation to `css`.

## (Possibly) Related issues / resources

* https://github.com/yeoman/yeoman/issues/661
* https://github.com/yeoman/grunt-usemin/issues/37
* http://stackoverflow.com/questions/12632029/grunt-minimatch-glob-folder-exclusion