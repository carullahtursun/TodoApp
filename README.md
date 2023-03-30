# Todo App with React, Tailwind, and Context API

This is a simple Todo app built with React, Tailwind, and Context API. It allows you to add, remove, edit, and mark as completed individual todo items. It also has a "Clear Completed" button that removes all completed items, and a "Toggle All" button that toggles the completed status of all items.

You can visit this [link](https://todo-app-ten-black.vercel.app)
![Opera Anlık Görüntü_2023-03-30_003422_127 0 0 1](https://user-images.githubusercontent.com/62027425/228677352-ff3d98ef-c6a5-4db7-a5b2-55cfdcd26b49.png)

## Getting Started

To get started with this app, simply clone this repository to your local machine and run npm install to install all the dependencies. Then run npm start to start the development server.
```git
git clone https://github.com/carullahtursun/TodoApp
cd todo-app
npm install
npm start
```

## How to Use

To add a new todo item, simply type the item description in the input field and press enter. To remove an item, click the "X" button next to it. To edit an item, click on the item text and modify it. To mark an item as completed, click the checkbox next to it. To clear all completed items, click the "Clear Completed" button. To toggle the completed status of all items, click the "Toggle All" button.

## Components
The app has the following components:

-App - The main component that renders the Header, FormTodo, and TodoList components.
-Header - A simple header component that displays the app title.
-FormTodo - A form component that allows the user to add new todo items.
-TodoList - A list component that renders individual Todo components.
-Todo - An item component that displays the todo item description and controls.

## Context API
The app uses Context API to manage the state of the todo items. The TodoProvider component defines the state and the functions to modify the state, and wraps the entire app in the todoContext.Provider component to make the state available to all components that consume it. The useContext hook is used in child components to access the state and the functions.

## Styling
The app uses Tailwind CSS to style the components. Tailwind CSS is a utility-first CSS framework that allows you to rapidly build custom designs without writing CSS. The framework provides a large number of pre-defined classes that you can use to style your components.

## License
This app is licensed under the MIT License. You are free to use, modify, and distribute the code as you like. However, you are not allowed to use the app for commercial purposes without permission from the author.

