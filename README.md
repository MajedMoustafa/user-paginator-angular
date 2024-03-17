# UserPaginator

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

# Angular Test Task
The main goal of the task is to show your skills in the best way possible.

Please use proper styling, animation and caching.

## Task

1. Create the new Angular 13 project using angular CLI 
2. Create a page with a header and paginated users list. The user list should be horizontally centered. 
3. Use the following HTTP endpoint: https://reqres.in/api/users?page={page} to get the cards data, which includes avatar image, first_name, last_name and id for the card. Single user can be requested via this endpoint: https://reqres.in/api/users/{id}. 
4. On click of the card, it should direct to a new page with information about this card. 
5. Add instant search field (without a button) in the header to search User by Id and show result if user exists with ability to navigate to user details page. 
6. On each individual card page, a back button should be present. 
7. Introduce caching to avoid additional requests. 
8. Show loading bar when there are pending network requests.
