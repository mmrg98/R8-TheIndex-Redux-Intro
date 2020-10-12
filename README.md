### Introduction

The Index project now has an `Add Author` button that adds an anonymous author.  
Each `AuthorCard` also has a `Delete` button.

Adding authors is being done using the internal state of `App.js` - passing methods as props, using them as event handlers, and just generally creating a massive headache. Delete authors isn't even implemented because it would create an even bigger mess.

Your task is to implement **both** features using a central redux store.

### Setup

1. Fork and clone [this repository](https://github.com/JoinCODED/R8-TheIndex-Redux-Intro).
2. `cd` into the project directory.
3. Install the required packages for the task:

```shell
$ yarn install
```

*4.* Install the redux packages

```shell
$ yarn add redux
$ yarn add react-redux
```

*5.* Run the project

```shell
$ yarn start
```

---

### Task

#### 1. Explore

1. Take some time to explore the code, take a look at the files and the comments and the code itself.
2. Talk it out. Discuss it with your fellow developers.
3. How is the "add authors" button in the SideBar currently working?
4. Is it easy to read and understand what's happening in `App.js` right now?
5. Ask questions. That's what we're here for.

#### 2. Install and Setup Redux

1. Download and add the necessary `redux` packages.
2. In `index.js`, set up your project to be able to use redux. We've already created an empty reducer for you to use in your setup at `redux/reducer.js`.
3. Set the initial state in the reducer in `redux/reducer.js` to include `authors`, an array of the imported authors from `data`.
4. In `AuthorsList.js`, use `mapStateToProps` so that the list of authors is now coming from the central store, not from `App.js`. (Make sure you don't pass props to `AuthorsList` any more).

#### 3. Adding an author

Let's turn the functionality of adding authors into a redux flow and move our state into a store!

1. In `redux/actions.js`. Write an action function `addAuthor` that returns an action with an `ADD_AUTHOR` type.
2. Update your reducer to handle `ADD_AUTHOR` action types. When this kind of action is received, update the `authors` array by creating a new author object and merging it into the `authors` state.
   (Hint: your returned state needs to return a NEW array - you will need to use `concat()`)
3. Modify the SideBar so that it's *connect*ed to redux. Change "add authors" button in the `Sidebar` so that it calls the `addAuthor` action function instead of the old `addAuthorHandler`.
   (Hint: You will need `mapDispatchToProps`)

You'll know when you're done when clicking the "ADD AUTHOR" button adds a new author to your list.

#### 4. Deleting an author

1. In `redux/actions.js`. Write an action function `deleteAuthor` this function should receive an `author` object as a parameter. It then sends the author object to the reducer as a `payload`.
2. Update your reducer to handle `DELETE_AUTHOR` action types. When this kind of action is received, delete the incoming `author` from the `authors` array in the state.
   (Hint: your returned state needs to return a NEW array - you will need to use `filter()`)
3. Modify the `AuthorCard` so clicking the "DELETE" button calls the `deleteAuthor` action function.

#### 5. Cleanup

Just for lols, clean up `App.js` and remove **all** the things you don't need any more. You should be able to turn `App` back into a functional (stateless) component.