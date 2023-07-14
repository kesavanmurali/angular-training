# Angular

## Step-0 : Angular Basics

- A component-based framework used for developing Single-Page Applications
- Builtin support of Data-binding and dependency injection
- Supports responsive web-design and modern frameworks
- Clean separation of template coding and application logic

### Key terms
    - Component
    - View Template
    - Directive
    - Service
    - Module

- Component
    - Core aspect
    - View for user interface
    - Class that contains app logic/event handling for the view
- View Template
    - The UI of a component
    - Static HTML with dynamic elements
- Directive
    - Adds custom behavior to HTML elements
    - Used for looping, conditionals etc.
- Service
    - Helper class
    - Ex: Retreive data from an external server, perform validation, etc.
- Module
    - Collection of Components

### Setup environment

- Use command-line tool(Angular CLI) to generate angular project
- Generates starter and bootstrap files

- Prerequisites
    - Assuming *npm* and *node* installed already
- Install Angular CLI
```shell
    npm install --location=gloabl @angular/cli@version
```
- Create a bootstrapped project
```shell
    ng new <project-name>
```
- Build and serve the project.  Runs the app at 4200 by default.
```shell
    ng serve
```

#### Important files in the Project
- angular.json - workspace configuration and execution targets
- node_modules
- package.json - List of all the dependencies like pom.xml
- assets - web assets like images
- environments - To maintain dev, int and prod environments
- pollyfills.ts
- test.ts - Unit test for the entire project

### How Angular loads the application

- Starts with index.html.  This file contains a tag "app-root" by default.
- Finds the definition "app-root".  By default, it would be defined in app.component.ts.
    - All the properties and behavior are defined in the typescript class.
- A new component with a different name could also be created.

