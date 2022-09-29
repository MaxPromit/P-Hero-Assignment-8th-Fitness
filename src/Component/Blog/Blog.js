import React from 'react';

const Blog = () => {
    return (
        <div>
         <div>
         <h1>1. How Does React Work</h1>
            <p> One of the biggest advantage in React Js is Using Jsx XML you can write <strong>Html, Css , Js</strong> in React Application. ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
         </div>
         <div>
            <h1>2. Difference Between Proops And State</h1>
            <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. <strong>Props Are Read Only</strong> The this.setState property is used to update the state values in the component. <strong>State is Muiteable and Asynchronous.</strong></p>
         </div>
         <div>
            <h1>3. Usses Of UseEffect</h1>
            <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. <strong>You Can Change Live Filtering</strong> The second argument is optional.t your component needs to do something after render. React will remember the function you passed we'll refer to it as our “effect”, and call it later after performing the DOM updates. <strong>You Can Change Validating Input Field</strong> 
            useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.
            </p>
         </div>
        </div>
    );
};

export default Blog;