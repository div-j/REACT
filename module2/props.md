
### Props and Data Passing:

1. **Understanding Props:**
   - Props (short for properties) allow you to pass data from a parent component to a child component. They are immutable, meaning they cannot be modified by the child component.

2. **Passing Props to Functional Components:**
   - When using a functional component, you can pass props as arguments to the function. Here's an example:
     ```jsx
     // Functional component with props
     function Welcome(props) {
       return <p>Hello, {props.name}!</p>;
     }

     // Using the Welcome component with props
     function App() {
       return <Welcome name="John" />;
     }
     ```

3. **Accessing Props in Class Components:**
   - In class components, you access props using `this.props`. For example:
     ```jsx
     // Class component with props
     class Welcome extends React.Component {
       render() {
         return <p>Hello, {this.props.name}!</p>;
       }
     }

     // Using the Welcome component with props
     function App() {
       return <Welcome name="John" />;
     }
     ```

4. **Default Props:**
   - You can define default values for props in case they are not provided. This is done using the `defaultProps` property.
     ```jsx
     // Functional component with default props
     function Welcome(props) {
       return <p>Hello, {props.name}!</p>;
     }

     Welcome.defaultProps = {
       name: "Guest",
     };

     // Using the Welcome component without providing a name prop
     function App() {
       return <Welcome />;
     }
     ```

5. **Passing Functions as Props:**
   - You can pass functions as props to enable communication between parent and child components. For example:
     ```jsx
     // Parent component
     function Parent() {
       const handleChildClick = () => {
         console.log("Child clicked!");
       };

       return <Child onClick={handleChildClick} />;
     }

     // Child component
     function Child(props) {
       return <button onClick={props.onClick}>Click me</button>;
     }
     ```

### Summary:

- Functional components are JavaScript functions that return React elements.

- Props allow you to pass data from a parent component to a child component.

- Props are accessed as arguments in functional components and using `this.props` in class components.

- Default props provide fallback values for props if they are not provided.

- Functions can be passed as props, enabling communication between parent and child components.

Understanding components and props is crucial for building modular and maintainable React applications. It allows you to create reusable pieces of UI and pass data efficiently between different parts of your application.
