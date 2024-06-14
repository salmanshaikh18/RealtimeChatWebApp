## Dependencies

`Install dependencies`

```bash
npm install react-router-dom moment 6pp chart.js react-chartjs-2 react-hot-toast react-helmet-async @reduxjs/toolkit react-redux
```

```bash
# mui UI Framework for react
npm install @mui/material @emotion/react @emotion/styled
```

```bash
# mui icons
npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
```

---


Here’s a simple explanation of each of these dependencies, what they are, and their uses:

### 1. **react-router-dom**
- **What it is**: A library for routing in React applications.
- **Uses**: It helps in creating and managing navigation between different pages or views in a single-page application (SPA). For example, moving from a homepage to a user profile page without reloading the entire app.
- **Key Features**: 
  - `BrowserRouter`: Wraps your application and enables routing.
  - `Route`: Defines a path and the component that should be rendered when the path matches.
  - `Link`: Creates links to different routes in your app.

### 2. **moment**
- **What it is**: A library for parsing, validating, manipulating, and formatting dates and times in JavaScript.
- **Uses**: It makes working with dates and times easier. For instance, converting a timestamp to a readable date, calculating the difference between two dates, or formatting a date into a specific format like "MM/DD/YYYY".
- **Key Features**:
  - Date formatting: `moment().format('MMMM Do YYYY, h:mm:ss a')`
  - Date parsing: `moment('2023-06-14', 'YYYY-MM-DD')`
  - Time manipulation: `moment().add(7, 'days')`

### 3. **redux**
Certainly! Here's a simple explanation of `@reduxjs/toolkit` and `react-redux`, what they are, and their uses:

### @reduxjs/toolkit
- **What it is**: A package that simplifies Redux setup and usage.
- **Uses**: It provides tools to write Redux logic with less boilerplate code and better practices. It includes features like slices, a store configuration function, and utilities for creating async logic.
- **Key Features**:
  - **configureStore**: Easily sets up the Redux store with good defaults.
  - **createSlice**: Combines actions and reducers into a single slice, reducing boilerplate.
  - **createAsyncThunk**: Simplifies writing async logic like API calls.
  - **createReducer** and **createAction**: Utilities to write reducers and actions more succinctly.

**Example**:
```javascript
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Define a slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1
  }
});

// Create the store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});

// Export actions
export const { increment, decrement } = counterSlice.actions;
export default store;
```

### react-redux
- **What it is**: A library that provides bindings to use Redux with React.
- **Uses**: It allows your React components to interact with the Redux store, enabling them to read data from the store and dispatch actions to update the store.
- **Key Features**:
  - **Provider**: A component that makes the Redux store available to your React components.
  - **useSelector**: A hook to extract data from the Redux store state.
  - **useDispatch**: A hook to dispatch actions to the Redux store.

**Example**:
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store, { increment, decrement } from './store';

// Counter component
function Counter() {
  const count = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

// Render the app
ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
);
```

### Summary
- **@reduxjs/toolkit**: Simplifies Redux setup and usage, reducing boilerplate and providing useful utilities for creating slices, store configuration, and async actions.
- **react-redux**: Connects Redux with React, allowing React components to read data from the Redux store and dispatch actions to update the store.

By using these tools together, you can manage complex state in your React applications in a structured and efficient way.

### 4. **chart.js**
- **What it is**: A JavaScript library for creating charts and graphs.
- **Uses**: It allows developers to add various types of charts (like bar, line, pie, etc.) to their web applications easily. Great for visualizing data.
- **Key Features**:
  - Supports different chart types: Line, Bar, Radar, Pie, Doughnut, etc.
  - Customizable: You can style charts to fit the look and feel of your application.
  - Interactive: Charts can respond to user interactions.

### 5. **react-chartjs-2**
- **What it is**: A React wrapper for Chart.js.
- **Uses**: It makes it easier to use Chart.js within React applications by providing React components for each chart type.
- **Key Features**:
  - Integrates Chart.js with React: `import { Line } from 'react-chartjs-2'`
  - Uses React components: `<Line data={data} options={options} />`
  - Simplifies the use of Chart.js in a React-friendly way.

### 6. **react-hot-toast**
- **What it is**: A library for showing toast notifications in React applications.
- **Uses**: It allows you to display small, temporary messages to users, often used for success messages, error alerts, or general information.
- **Key Features**:
  - Easy to use: `toast('Your message here')`
  - Customizable: You can style toasts and control their position, duration, etc.
  - React component based: Integrates smoothly into React projects.

### 7. **react-helmet-async**
- **What it is**: A library for managing changes to the document head in React applications, supporting asynchronous rendering.
- **Uses**: It allows you to set meta tags, titles, and other head elements dynamically. Useful for SEO and managing page metadata.
- **Key Features**:
  - Manage document head: `Helmet` component to set titles and meta tags.
  - Supports async rendering: Ensures head changes are handled correctly in asynchronous rendering situations.
  - Server-side rendering (SSR) support: Works well with SSR frameworks like Next.js.

### Summary
- **react-router-dom**: Manages navigation in React apps.
- **moment**: Makes date and time handling easy.
- **chart.js**: Creates charts for data visualization.
- **react-chartjs-2**: Uses Chart.js in React apps.
- **react-hot-toast**: Shows temporary messages (toasts).
- **react-helmet-async**: Manages document head for SEO and metadata.

Let me know if you need any further details or clarification on any of these!


---


## Explanation of what each folder contains

Sure! Let's go through the common folders and their contents in a typical React project. Each folder has a specific role, and organizing your code in these folders helps in maintaining a clean and manageable codebase.

### 1. **src**
This is the main folder where all your source code lives. Inside this folder, you typically find subfolders like `components`, `pages`, `hooks`, `utils`, etc.

### 2. **components**
- **What it contains**: Reusable UI elements.
- **Uses**: This folder contains small, reusable pieces of UI that can be used across different parts of your application. Examples include buttons, forms, headers, footers, and other UI widgets.
- **Example**: 
  - `Button.js`: A reusable button component.
  - `Header.js`: A common header component used across multiple pages.

### 3. **pages**
- **What it contains**: Page components.
- **Uses**: This folder contains components that represent entire pages of your application. Each component here is usually linked to a specific route and combines multiple smaller components.
- **Example**:
  - `HomePage.js`: The main landing page of your app.
  - `ProfilePage.js`: The user profile page.

### 4. **hooks**
- **What it contains**: Custom React hooks.
- **Uses**: This folder contains custom hooks, which are reusable pieces of logic that can be shared across different components. They help manage state, side effects, and other reusable logic.
- **Example**:
  - `useAuth.js`: A custom hook for managing user authentication.
  - `useFetch.js`: A custom hook for fetching data from an API.

### 5. **utils (or lib)**
- **What it contains**: Utility functions.
- **Uses**: This folder contains helper functions and utilities that can be used throughout your application. These are typically pure functions that perform specific tasks.
- **Example**:
  - `formatDate.js`: A function to format dates.
  - `calculateSum.js`: A function to calculate the sum of an array of numbers.

### 6. **App.js**
- **What it contains**: The root component of your application.
- **Uses**: This file is the starting point of your React app. It usually sets up the main layout and includes routes for different pages using `react-router-dom`.
- **Example**:
  ```jsx
  import React from 'react';
  import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
  import HomePage from './pages/HomePage';
  import ProfilePage from './pages/ProfilePage';

  function App() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/profile" component={ProfilePage} />
        </Switch>
      </Router>
    );
  }

  export default App;
  ```

### 7. **index.js**
- **What it contains**: Entry point for the React application.
- **Uses**: This file is the main entry point for the React app. It renders the `App` component into the DOM. It typically includes setup for things like service workers or providers.
- **Example**:
  ```jsx
  import React from 'react';
  import ReactDOM from 'react-dom';
  import App from './App';
  import './index.css';

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
  ```

### 8. **app**

Sure! When using Redux for state management in a React application, it's common to have an `app` folder (or a similarly named folder) that contains the Redux-related functionality. This folder helps keep your state management logic organized and separate from your UI components. Here's a detailed breakdown of what you might find in the `app` folder and its subfolders:

### app Folder Structure

```
src/
  app/
    store.js
    slices/
      authSlice.js
      userSlice.js
      productSlice.js
    actions/
      authActions.js
      userActions.js
      productActions.js
    reducers/
      authReducer.js
      userReducer.js
      productReducer.js
    selectors/
      authSelectors.js
      userSelectors.js
      productSelectors.js
```

### 1. **store.js**
- **What it contains**: The Redux store configuration.
- **Uses**: This file sets up the Redux store, combines the reducers, and applies middleware like `redux-thunk` for handling asynchronous actions.
- **Example**:
  ```javascript
  import { configureStore } from '@reduxjs/toolkit';
  import authReducer from './reducers/authReducer';
  import userReducer from './reducers/userReducer';
  import productReducer from './reducers/productReducer';

  const store = configureStore({
    reducer: {
      auth: authReducer,
      user: userReducer,
      product: productReducer,
    },
  });

  export default store;
  ```

### 2. **slices**
- **What it contains**: Slice files created using Redux Toolkit.
- **Uses**: These files contain logic for a specific feature or slice of state, including actions and reducers in a single file.
- **Example**:
  - `authSlice.js`:
    ```javascript
    import { createSlice } from '@reduxjs/toolkit';

    const authSlice = createSlice({
      name: 'auth',
      initialState: { isLoggedIn: false, user: null },
      reducers: {
        login: (state, action) => {
          state.isLoggedIn = true;
          state.user = action.payload;
        },
        logout: (state) => {
          state.isLoggedIn = false;
          state.user = null;
        },
      },
    });

    export const { login, logout } = authSlice.actions;
    export default authSlice.reducer;
    ```

### 3. **actions**
- **What it contains**: Action creators for Redux.
- **Uses**: These files define functions that create actions, which are payloads of information that send data from your application to your Redux store.
- **Example**:
  - `authActions.js`:
    ```javascript
    import { login, logout } from '../slices/authSlice';

    export const loginUser = (user) => async (dispatch) => {
      // Perform some async operation, e.g., API call
      dispatch(login(user));
    };

    export const logoutUser = () => (dispatch) => {
      // Perform some cleanup or async operation
      dispatch(logout());
    };
    ```

### 4. **reducers**
- **What it contains**: Reducer functions for handling state changes.
- **Uses**: These files define how the state of the application changes in response to actions sent to the store. Often, with Redux Toolkit, you might not need separate reducer files as slices include reducers.
- **Example**:
  - `authReducer.js` (if not using slices):
    ```javascript
    import { LOGIN, LOGOUT } from '../actions/authActions';

    const initialState = { isLoggedIn: false, user: null };

    const authReducer = (state = initialState, action) => {
      switch (action.type) {
        case LOGIN:
          return { ...state, isLoggedIn: true, user: action.payload };
        case LOGOUT:
          return { ...state, isLoggedIn: false, user: null };
        default:
          return state;
      }
    };

    export default authReducer;
    ```

### 5. **selectors**
- **What it contains**: Selector functions for accessing specific parts of the state.
- **Uses**: These files contain functions that extract and return specific parts of the state from the Redux store, useful for keeping state selection logic encapsulated and reusable.
- **Example**:
  - `authSelectors.js`:
    ```javascript
    export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
    export const selectCurrentUser = (state) => state.auth.user;
    ```

### Summary
- **store.js**: Configures the Redux store, combines reducers, and applies middleware.
- **slices**: Contains Redux Toolkit slices, which integrate actions and reducers for specific features.
- **actions**: Defines action creators for dispatching actions, often used for async operations.
- **reducers**: Reducers handle state changes in response to actions. With Redux Toolkit, slices often replace separate reducer files.
- **selectors**: Functions to select and return specific parts of the state from the store.

By organizing your Redux functionality into these folders, you can maintain a clear and efficient structure for managing state in your React application.

### 9. **assets**
- **What it contains**: Static files like images, fonts, and icons.
- **Uses**: This folder stores static assets that can be used throughout your application, such as logos, background images, and custom fonts.
- **Example**:
  - `logo.png`: The logo of the app.
  - `background.jpg`: A background image for the app.

### 10. **services (or api)**
- **What it contains**: API interaction logic.
- **Uses**: This folder contains files that handle interactions with external APIs. It helps keep your data fetching and API logic separate from your components.
- **Example**:
  - `authService.js`: Functions for making authentication API calls.
  - `userService.js`: Functions for fetching user data from an API.

### 11. **6pp**

- Used for Validation

### Summary
- **src**: Main source code folder.
- **components**: Reusable UI elements.
- **pages**: Components representing entire pages.
- **hooks**: Custom reusable hooks for logic.
- **utils (lib)**: Helper functions and utilities.
- **App.js**: Root component of the app.
- **index.js**: Entry point for rendering the app.
- **styles (css)**: Stylesheets for styling the app.
- **assets**: Static files like images and fonts.
- **services (api)**: Logic for interacting with external APIs.

By organizing your React project into these folders, you can maintain a clean and efficient codebase that is easy to navigate and scale.


---


## Why use import {lazy} from react const Home = lazy(() => import("./pages/Home")) instead of import "./componets/Home"

Certainly! Let's explore the `lazy` function in React in simple terms, explaining what it is, how it works, and why you might use it.

### What is `React.lazy`?
- **What it is**: A function provided by React to enable code splitting by loading components only when they are needed.
- **Uses**: It helps improve the performance of your application by reducing the initial load time. Instead of loading all components upfront, `React.lazy` allows you to load components lazily when they are actually needed (e.g., when a user navigates to a particular route).

### How it works
When you use `React.lazy`, the component is loaded only when it is rendered for the first time. This is particularly useful for large applications with many components or routes.

### Example Usage

Here’s a simple example to illustrate how `React.lazy` works:

1. **Without `React.lazy`**: All components are imported and loaded when the application starts.
   ```javascript
   import Home from './Home';
   import About from './About';

   function App() {
     return (
       <div>
         <Home />
         <About />
       </div>
     );
   }

   export default App;
   ```

2. **With `React.lazy`**: Components are loaded only when they are rendered.
   ```javascript
   import React, { Suspense } from 'react';

   // Lazy load the components
   const Home = React.lazy(() => import('./Home'));
   const About = React.lazy(() => import('./About'));

   function App() {
     return (
       <div>
         <Suspense fallback={<div>Loading...</div>}>
           <Home />
           <About />
         </Suspense>
       </div>
     );
   }

   export default App;
   ```

### Key Components
- **React.lazy**: This function takes a function that returns a dynamic `import()` statement. This dynamic import loads the component when it’s needed.
  ```javascript
  const Home = React.lazy(() => import('./Home'));
  ```

- **Suspense**: A component that wraps the lazy-loaded component. It displays a fallback UI (like a loading spinner) until the lazy component has finished loading.
  ```javascript
  <Suspense fallback={<div>Loading...</div>}>
    <Home />
  </Suspense>
  ```

### Why use `React.lazy`?
1. **Improves Performance**: By splitting the code and loading components only when needed, it reduces the initial load time of the application.
2. **Better User Experience**: Users see the application load faster, with only necessary parts being loaded initially.
3. **Efficient Resource Use**: Resources are used more efficiently, as components are only loaded when required.

### Common Use Cases
- **Routing**: Load different pages or routes lazily in a single-page application (SPA).
  ```javascript
  import React, { Suspense } from 'react';
  import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

  const Home = React.lazy(() => import('./Home'));
  const About = React.lazy(() => import('./About'));

  function App() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </Suspense>
      </Router>
    );
  }

  export default App;
  ```

- **Heavy Components**: Load heavy components or third-party libraries only when needed.
  ```javascript
  const HeavyComponent = React.lazy(() => import('./HeavyComponent'));
  ```

### Summary
- **React.lazy**: A function to lazily load components, improving performance by loading components only when needed.
- **Suspense**: A wrapper component that shows a fallback UI while the lazy component is loading.
- **Benefits**: Improved load times, better user experience, and efficient resource use.

By using `React.lazy` and `Suspense`, you can make your React applications faster and more efficient, especially as they grow in size and complexity.


---


## Suspense component in React

The `Suspense` component in React is a powerful feature used to handle asynchronous operations, especially when it comes to lazy-loading components. It provides a way to display a fallback UI (such as a loading spinner) while waiting for asynchronous operations to complete. Here's a detailed explanation of what `Suspense` is, its uses, and how to use it effectively in your React applications.

### What is `Suspense`?

`Suspense` is a component provided by React that allows you to specify a loading fallback to be displayed while waiting for components that are being loaded asynchronously. It is typically used in conjunction with `React.lazy` for code splitting and lazy loading components.

### Uses of `Suspense`

1. **Lazy Loading Components**:
   - **What it is**: Loading components only when they are needed, rather than loading all components upfront.
   - **Why use it**: Improves the initial load time of your application by splitting the code into smaller chunks that are loaded on demand.

2. **Improving User Experience**:
   - **What it is**: Providing feedback to users while components are being loaded.
   - **Why use it**: Prevents users from seeing a blank screen and gives them a visual indication that something is happening in the background.

3. **Handling Large Data Fetches** (future versions):
   - **What it is**: Managing large or slow data fetches by showing a loading state.
   - **Why use it**: Enhances performance and user experience by providing a seamless loading experience.

### Example of Using `Suspense`

Here’s an example that demonstrates how to use `Suspense` with `React.lazy`:

1. **Lazy Loading a Component**:
   ```javascript
   import React, { Suspense } from 'react';

   // Lazy load the component
   const LazyComponent = React.lazy(() => import('./LazyComponent'));

   function App() {
     return (
       <div>
         <h1>My App</h1>
         <Suspense fallback={<div>Loading...</div>}>
           <LazyComponent />
         </Suspense>
       </div>
     );
   }

   export default App;
   ```

   - **Explanation**:
     - `React.lazy(() => import('./LazyComponent'))`: This lazy loads the `LazyComponent` only when it is needed.
     - `<Suspense fallback={<div>Loading...</div>}>`: This wraps the lazy-loaded component and specifies a fallback UI (a loading message) to be displayed while `LazyComponent` is being loaded.

2. **Using Suspense in Routing**:
   ```javascript
   import React, { Suspense } from 'react';
   import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

   const Home = React.lazy(() => import('./pages/Home'));
   const About = React.lazy(() => import('./pages/About'));

   function App() {
     return (
       <Router>
         <Suspense fallback={<div>Loading...</div>}>
           <Switch>
             <Route path="/" exact component={Home} />
             <Route path="/about" component={About} />
           </Switch>
         </Suspense>
       </Router>
     );
   }

   export default App;
   ```

   - **Explanation**:
     - This example shows how to use `Suspense` with `React Router` to lazy load route components.
     - The fallback UI is displayed while the route component is being loaded.

### Benefits of Using `Suspense`

1. **Enhanced Performance**: By splitting code into smaller chunks and loading them on demand, you reduce the initial load time of your application.
2. **Better User Experience**: Users are provided with immediate feedback (like a loading spinner) while components are being loaded, making the application feel faster and more responsive.
3. **Simplified Asynchronous Handling**: `Suspense` simplifies the handling of asynchronous operations, making the code easier to read and maintain.

### Key Considerations

- **Error Boundaries**: Use error boundaries to catch any errors in lazy-loaded components to provide a fallback UI in case of failures.
  ```javascript
  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
      return { hasError: true };
    }

    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
      }
      return this.props.children;
    }
  }

  // Usage with Suspense
  function App() {
    return (
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
      </ErrorBoundary>
    );
  }
  ```

- **Fallbacks**: Design meaningful and user-friendly fallback UIs to enhance the loading experience.

### Future Enhancements

- **Data Fetching**: Future versions of React are expected to integrate data fetching capabilities with `Suspense`, further simplifying asynchronous data handling.

In summary, `Suspense` is a valuable tool in React for managing asynchronous operations, particularly for lazy loading components and improving the user experience by providing visual feedback during loading times.


---


## memo

In React, `memo` is a higher-order component (HOC) used to optimize the performance of functional components. It prevents unnecessary re-renders by memoizing the result of a component, i.e., it only re-renders the component if its props change. Here's a detailed explanation of what `memo` is, its uses, and how to use it effectively in your React applications.

### What is `memo`?

`React.memo` is a function that takes a component and returns a new component that only re-renders if its props have changed. This is similar to `PureComponent` for class components but is used for functional components.

### Why Use `memo`?

1. **Performance Optimization**: By preventing unnecessary re-renders, `memo` can improve the performance of your application, especially for components that receive the same props frequently.
2. **Avoid Unnecessary Computations**: For components with expensive computations or complex rendering logic, memoization can save computational resources by reusing the previous render's result if the props have not changed.

### How to Use `memo`

#### Basic Usage

Here’s how you can use `React.memo` to memoize a functional component:

```javascript
import React, { memo } from 'react';

const MyComponent = (props) => {
  console.log('Rendering MyComponent');
  return <div>{props.value}</div>;
};

export default memo(MyComponent);
```

In this example, `MyComponent` will only re-render if its `props.value` changes. If `props.value` remains the same between renders, `React.memo` will skip the re-render.

#### Example with a Parent Component

To see `React.memo` in action, consider a parent component that updates its state frequently:

```javascript
import React, { useState } from 'react';
import MyComponent from './MyComponent';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('Hello');

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setText(text + '!')}>Update Text</button>
      <MyComponent value={text} />
    </div>
  );
}

export default App;
```

- **Explanation**: 
  - Clicking the "Increment" button updates the `count` state, but `MyComponent` will not re-render because its `value` prop (`text`) has not changed.
  - Clicking the "Update Text" button updates the `text` state, causing `MyComponent` to re-render since its `value` prop has changed.

### Custom Comparison Function

By default, `React.memo` performs a shallow comparison of props. If you need a deeper comparison, you can pass a custom comparison function as the second argument to `memo`:

```javascript
const MyComponent = (props) => {
  console.log('Rendering MyComponent');
  return <div>{props.value}</div>;
};

function areEqual(prevProps, nextProps) {
  return prevProps.value === nextProps.value;
}

export default memo(MyComponent, areEqual);
```

- **areEqual Function**: This function takes the previous and next props and returns `true` if they are equal and `false` otherwise. If the function returns `true`, `MyComponent` will not re-render.

### When Not to Use `memo`

1. **Cheap Components**: If your component is simple and rendering it is cheap, using `memo` might introduce unnecessary complexity without significant performance gains.
2. **Frequent Prop Changes**: If your component's props change frequently, the overhead of the comparison might outweigh the benefits of avoiding re-renders.

### Summary

- **What it is**: `React.memo` is a higher-order component that memoizes functional components to prevent unnecessary re-renders.
- **Why use it**: It optimizes performance by avoiding re-renders for components that receive the same props frequently.
- **How to use it**: Wrap your functional component with `React.memo`. Optionally, provide a custom comparison function for more complex prop comparisons.
- **When to avoid**: Avoid using `memo` for simple, inexpensive components or components with frequently changing props.

Using `React.memo` effectively can help you optimize the performance of your React applications, particularly in cases where components have complex rendering logic or are expensive to render.