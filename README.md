# JSPlaygrounds

This repo contains all of the playgrounds for https://jsplaygrounds.github.io.

I created JSPlaygrounds because I often want to test out some js or css library in an online code playground, and I hate having to sift through the cruft to find a good starting point. JSPlaygrounds is a curated registry of playgrounds that highlight libraries like lodash, bootstrap, etc.

# How to Contribute

Contributors are more than welcome. To add a new playground or improve an existing one, please submit a PR.

Playgrounds live in the `/playgrounds` directory. Each playground gets its own folder (i.e. `/playgrounds/lodash`). Within each playground folder are the following files:
- playground.html: The HTML content for the playground
- playground.css: The CSS content for the playground
- playground.js: The JS content for the playground
- playground.json: Configuration for the playground

Of those files, only `playground.json` is required and supports the following fields:
- name(string): `name` is required and provides a name for the playground
- description(string): `description` is required and provides a description for the playground
- externalJS(array<string>): An optional array of urls to external js libraries that should be included
- externalCSS(array<string>): An optional array of urls to external css libraries that should be included

Example:
```
{
  "name": "lodash",
  "description": "A lodash playground",
  "externalJS": [
    "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js"
  ]
}
```
