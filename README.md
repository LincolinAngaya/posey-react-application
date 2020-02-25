# Module 4 Code Challenge: Poesy

## Demo

Use this gif as an example of how the app should work.

![Demo GIF](./demo.gif)

## Instructions

Welcome to Poesy, where your poetry masterpieces come to life! Our old front-end team laid down the foundations for our app, but it looks like they forgot all the functionality!

Your job will be to make our app work according to the user stories you will find the [Core Deliverables](#Core-Deliverables) section.

## Setup

1. Fork and clone this repository.
2. Run `npm start`. This will open both your React page on port 6002 and your backend on port 6001.

## Endpoints

The base URL for your backend is: http://localhost:6001

These are the routes you will need:

- GET `/poems`
- DELETE `/poems/:id`

## Core Deliverables

1. When the app starts, I can see all currently created poems.
2. I can show/hide the form to create new poems.
3. I can create poems and they are still there when I refresh the page.
4. I can mark poems as read and see some visual difference when a poem has been read.

## Advanced Deliverables

These deliverables are not required to pass the code challenge, but if you have the extra time, or even after the code challenge, they are a great way to stretch your skills.

> Note: If you are going to attempt these advanced deliverables, please be sure to have a working commit with all the Core Deliverables first!

1. I can add a poem to my favourites and see it on a separate list.
2. I can delete a poem and they are still gone when I refresh the page.

## Rubric

### Props & State

1. No code or very little code has been written or the code doesn't run. If it runs, no deliverables have been met. Not managed to set state or pass props successfully.

2. State is not being set or updated. Props are not being passed down, or you are passing down the right prop but trying to access it incorrectly (wrong name, unnecessary `this`, `state` instead of `props`) or key props are missing. API call does not successfully populate state.

3. State is working. However, it may be in the wrong component, it might be nested oddly or might have some unnecessary state. Props are being passed unnecessarily to components. Functions that change or calculate state are not defined in the component that they are most closely tied to.

4. State works and is held by the lowest common component. No unnecessary state is created. Only the necessary props are being passed down. Functions used to edit state are passed down.

5. Advanced deliverables are met.

### Code Structure/Efficiency

1. No code or very little code has been written or the code doesn't run, i.e. syntax errors, imports missing, etc. If it runs, no deliverables have been met.

2. Starter components have been unnecessarily modified and broken. There is no reference to componentDidMount. Incorrect or unnecessary lifecycle methods are used.

3. Fetch is triggered in the right place. Code is not abstracted into clear methods. Additional components have been added which serve no purpose. Props and variables could be named consistently and descriptively.

4. Components are structured in a logical way. Class components only used when needed, functional components used for everything else. Code is abstracted into clear methods. Used object destructuring and spread operator successfully.

5. Advanced deliverables met. Uses some of the following: destructuring, functional components, spreading, hooks, pure functions, performance is taken into account.

### Rendering

1. No code or very little code has been written or the code doesn't run. If it runs, no deliverables have been met.

2. Did not manage to render everything that was asked for in the deliverables.

3. Renders everything that is asked for in the deliverables. Components could be more abstract/reusable. May have created own components instead of using the components provided.

4. Renders everything that is asked for in the deliverables. Components are abstract/reusable. No unnecessary components were created.

5. Everything from 4 plus extra features were added that are not listed in the deliverables.
