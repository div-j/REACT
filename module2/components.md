Components and props are fundamental concepts in React that allow you to build reusable and modular UI elements. Let's dive into creating functional components and understanding how to work with props to pass data between components.

### Functional Components:

1. **Creating a Functional Component:**
   - A functional component is a JavaScript function that returns a React element. Here's an example:
     ```jsx
     // Functional component
     function Greeting() {
       return <h1>Hello, React!</h1>;
     }
     ```

2. **Using Functional Components:**
   - You can use functional components within other components or in the main application file. Here's how you might use the `Greeting` component:
     ```jsx
     // Main application
     function App() {
       return (
         <div>
           <Greeting />
         </div>
       );
     }
     ```
