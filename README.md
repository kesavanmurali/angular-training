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

## Step-1 : Component creation basics

- In angular, its all about component, the screen can be assumed as the main application component, represented by `app.component.ts`.
- Lets try to create a new component named `sales-person-list` and try to add it to the main application component.
- This new component will display the list of sales persons.

### Generate a new component 

- Use the following command to generate the new component "sales-person-list".
```shell
    ng generate component sales-person-list
```
- Following are the actions taken by the above command.
    - **Create**
        - `sales-person-list.component.ts` - The main ts file represent the component in one class
        - `sales-person-list.component.html` - Basic HTML representing to define the structure of the component.
        - `sales-person-list.component.css` - Stylesheet for the same.
        - `sales-person-list.component.spec.ts` -  Will contain all the unit test cases for this component
    - **Update**
        - `app.module.ts` - This file represents the module.  The newly added component will be added to the module
- This new component can be added to the main application component by adding the following element to `app.component.html`
```html
    <app-sales-person-list></app-sales-person-list>
```
        
### Generate a Class

A sales person can be represented as a class.  

- Use the following command to generate a new basic typescript Class "SalesPerson".
```shell
    ng generate class sales-person-list/SalesPerson
```

### Loop over the data

- To display the list of sales persons, the HTML structure of the new component needs to be defined.
- Assuming the sales-person-list component holds a list of SalesPerson objects, those objects can added to the structure by using loop.  
    - `*ngFor=` Use this structural directive to define the loop in the HTML elements, part of component's HTML file.

## Step-2 : Wide surf with Angular

- **Bootstrap Integration**
    - Take the latest link from bootstrap site(https://getbootstrap.com) and add it to `index.html`.  And ensure the JS and CSS files are added at the runtime.
    - This would enable you to use the bootstrap framework within all the components(HTML files).
- **Angular Structural Directives**
    - Structurl directives allows us to introduce dynamic structuring to the normal HTML files of a component.  
    - Angular defines it's own construct on this.
        - `ngFor`
        - `ngIf`
        - `ngSwitch`
        - `ngStyle`
- **Angular Pipes**
    - Angular provides ease of data formatting for common data types with pipes and formatting options.
    - Below an example of a Pipe.  Find more [here](https://angular.io/api/common#pipes).
```typescript
    {{somevalue | currency : "USD"}}
```

## Angular Conventions

- For class properties, prefer defining them in the constructors itself with access specifiers
- Unlike Java, the class properties are maintained as public properties more often.   
