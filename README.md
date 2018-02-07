# PythonNigeriaSlack

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. At this point, you won't be able to access the API has I am still having issues with serving the angular app in development mode via the Server.

Currently, I'm mkaing use of a Javascript framework known as [Koa.JS](http://koajs.com/) to serve files and the API is also built on it.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### API Resource Endpoints

| EndPoint             | Functionality               | Public Access |
| -------------------- | :-------------------------: | ------------: |
| **GET** /            | Access the Client Side      | TRUE          |
| **GET** /health      | Healthcheck                 | TRUE          |
| **POST** /api/invite | Sends an invite to an email | TRUE          |

## Screenshot

Here's a screenshot of what it looks like Lol.
[![Screenshot](https://github.com/BolajiOlajide/PythonNigeriaSlack/blob/master/screenshot/screenshot1.png)](https://github.com/BolajiOlajide/PythonNigeriaSlack/blob/master/screenshot/screenshot1.png)

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
