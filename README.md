 Dev Stack Builder

A simple React website where you can browse popular web development
technologies and build your own "dev stack" by adding the ones you like
to a personal list.

 About the Project

Dev Stack Builder shows a grid of technology cards (React, Node.js,
MongoDB, Docker, etc.) with their rating, difficulty and category. You
can click "Add to Stack" on any card and it shows up in the "Your Stack"
panel on the side. You can remove a single item or clear the whole
stack at once.

 Technology Used

- React.js (with Vite)
- Tailwind CSS
- React-Toastify (for alert notifications)
- JSON (for the technology data)

 Features

1. Add / Remove technologies – add any technology to your stack, and
   remove it again with one click, or clear everything with "Remove All".
2. Duplicate protection – you can't add the same technology twice,
   the app shows a warning toast if you try.
3. Fully responsive design** – the layout adjusts from 1 column on
   mobile up to 3 columns on desktop, including a mobile hamburger menu.

 React Questions

1. What is JSX, and why is it used in React
JSX is a way of writing HTML looking code directly inside JavaScript. We
use it in React because it makes it much easier to see what the UI will
look like, instead of writing everything with plain `createElement`
calls.

2. What is the difference between props and state?
Props are values passed into a component from its parent, and the
component itself cannot change them. State is data that lives inside a
component and can change over time, usually because of user actions.

3. What does the `useState` hook do, and where did you use it in this
project?
`useState` lets a component keep and update its own data. In this
project I used it to store the list of technologies, the loading
status, and the list of technologies the user added to their stack.

4. What does the `useEffect` hook do, and why did you need it to load
the JSON data?
`useEffect` lets you run some code after the component renders, like
fetching data. I used it to fetch the `technologies.json` file once
when the app first loads, and then save the result into state.

5. Why does every item in a `.map()` list need a unique `key` prop?
The `key` prop helps React know which item is which when the list
changes, so it can update, add or remove the correct item instead of
re-rendering the whole list every time.

6. What is conditional rendering? Show one place you used it (example:
the empty stack message).**
Conditional rendering means showing different UI depending on a
condition. In the `YourStack` component, I check if `stack.length === 0`
and show a "no technology added yet" message, otherwise I show the list
of added items.

7. How do you pass data from a parent component to a child component,
and how does a child send something back to the parent?
The parent passes data down to the child using props, like
`<TechCard tech={tech} />`. To send something back up, the parent also
passes a function as a prop (like `onAdd`), and the child calls that
function when something happens, for example when a button is clicked.

 Links

- GitHub Repository Link:
- Live Site Link:
