# Single Page Application & ParcelJS


## Features
- Single Page Application
- NO Framework used, no react, angular, jquery
- No templating engine, Used es6 templates
- Parceljs bundler used
- Client Side routing performed with # links
- SCSS used

## Getting started with Parceljs
1. Install parcel
```shell
npm install -g parcel-bundler
```
2. Entry File (index.html)
```shell
<html>
<body>
    <div class="container">
      <!--   Views are inserted here using index.js-->
    </div>
    <script src="./index.js"></script>
</body>
</html>
```
3. Code Splitting

Dividing the the webpage, its scss files
& resuable components into code chunks
Using
```shell
import { homePage } from "path/.*js";
```
```shell
export const homePage = "homepage";
```
to fetch all the chunks to **index.js** file so that parcel bundler can compile it to one file

## Parcel Commands
1. To run a live server which updates with code change
```shell
parcel index.html
```

2. To build a production
```shell
parcel index.html build --public-url ./
```