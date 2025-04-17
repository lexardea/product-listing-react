=====*DESCRIPTION OF PROJECT*=====
For this assignment, I was asked to create an e-commerce product listing using React.

Component Breakdown & Tasks
 - App Component (Parent Component)
    > Responsibilities:
        + Manages the state that holds an array of products.
        + Passes the list of products as a prop to the ProductList component.
        + Styles the main structure of the app using CSS.
    > Tasks for Students:
        + Initialize state using useState to store a list of products (each product should have attributes like id, name, price, and description).
        + Pass the product list as props to ProductList.
        + Apply custom CSS styling for the app layout.

- ProductList Component (Receives products as props)
    > Responsibilities:
        + Receives the product list from App as a prop.
        + Maps through the product list and renders each product using ProductItem.
    > Tasks for Students:
        + Create a ProductList component that takes the product list as a prop and maps through it.
        + Use the .map() method to iterate over products and render a ProductItem for each.
        + Apply custom CSS styling for the product list layout.
- ProductItem Component (Receives individual product data as props)
    > Responsibilities:
        + Represents one product with its name, price, and description.
        + Receives individual product data from ProductList via props.
    > Tasks for Students:
        + Display product details: Name, Price, and Description.
        + Use props to receive data and render it dynamically.
        + Style each product visually distinct using CSS.
