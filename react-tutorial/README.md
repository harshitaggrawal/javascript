# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
# npx create-react-app project_name 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.




### React

1. Built by facebook
2. Angular, vue, svelte
3. Components
4. Indepedence
5. Resuable
6. Speed

### Create React App and Start on Local Server Command

1. npx create-react-app app-tutorial
2. npm run dev

#### Folder Structure

- node_modules
  Contains all dependencies required by the app. Main dependencies also listed in package.json

- public
  Contains static assets including index.html (page template)
  - index.html
    - title
    - fonts
    - css
    - favicon
    - id="root" - our entire app
- src
  In simplest form it's the brain of our app. This is where we will do all of our work. src/index.js is the JavaScript entry point.
- .gitignore
  Specifies which files source control (Git) should ignore

- package.json
  
  Every Node.js project has a package.json and it contains info about our project, for example list of dependencies and scripts

- package-lock.json
  A snapshot of the entire dependency tree

- README
  The markdown file where you can share more info about the project for example build instructions and summary

### Images in React

-external image - just copy paste an URL

- local image (public folder) - slow
- local image (src folder) - faster in loading for assets
  under the hood they get optimizied

### {}

- {} in JSX entering back to javascript world
- value inside {} must be an expression, it can not be a statement (like loop and condition we can use map,filter reduce  instead of loop and use ternary operator insted of condition)

### VS Shortcuts

- close/open integrated terminal: Ctrl + `
- close/open sidebar: Ctrl + b

### Children Props

- everything we render between component tags
- during the context api we use it the most
- special props, has to be "children"
- can place anywhere in JSX


### Events
 - in js-> const btn=document.querySelector(".btn);
 - btn.addEventListener('click',()=>{
 -     fnction body
 - })
 -  in React Js 
 -  we use onclick function and make the function into same components