# SystemJS Demo Project Organization

## Summary

This document explains the organization of its namesake project. POC: [system-demo](https://bitbucket.org/3dresults_dev/3drcube-resources/src/48d358ffecabb77e99533ec26c81c67655ea0b3b/systemjs-demo/?at=master)

## Front End Source Files

The pre-compilation client-side JavaScript files are located in `/src/`. The file `base.js` contains the code for the base React application, which is transpiled by the Gulp task `normalBundleTranspilation`. The folder `/components/` contains components to be transpiled individually into standalone files for lazy loading, performed by the Gulp task `componentSystemTranspilation`.

## Front End Compiled Files

All transpiled files sit in `/public/javascripts/`.

## Important Note:

SystemJS must be loaded on the page if lazy loading is required; in this case, `system-production.js` is loaded on `/views/index.ejs`.
