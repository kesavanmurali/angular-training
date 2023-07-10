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

### Setup environment

- Use command-line tool to generate angular project
- Generates starter and bootstrap files

- Install Angular CLI
```shell
    npm install --location=gloabl @angular/cli@version
```
- Create a project
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