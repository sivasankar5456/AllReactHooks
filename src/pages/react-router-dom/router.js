 /* Introduction to react-router-dom
react-router-dom is a library used in React to handle routing in web applications. It allows you to navigate between different components (pages) without reloading the entire page. This is especially useful for single-page applications (SPAs).

Let's go through a basic example to get started.

1. Installation
First, you need to install react-router-dom in your React project. Run the following command in your terminal:

npm install react-router-dom
2. Basic Setup
Here’s how you can set up routing in a simple React application.

Step 1: Create the Components
Create a few basic components that you want to route between.
*/

// Home.js
export default function Home() {
  return <h2>Home Page</h2>;
}

// About.js
export default function About() {
  return <h2>About Page</h2>;
}

// Contact.js
export default function Contact() {
  return <h2>Contact Page</h2>;
}
/*
Step 2: Set Up Routing
Now, let’s set up the routing in your main App.js file.
*/
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

export function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

/*
Router Component (<Router>):

Wrap your entire application inside the Router component. This enables routing throughout the app.
Navigation (<Link>):

The Link component is used to navigate between different routes. It’s similar to an anchor (<a>) tag but doesn’t reload the page.
Routes and Route (<Routes> and <Route>):

The Routes component contains all your route definitions.
Each Route defines a path and the component that should be rendered when the path matches.
3. Running the Application
Once you have set up the routing, you can start your application using:

npm start
Now, when you navigate to /, /about, or /contact, you’ll see the corresponding component rendered on the page without a full page reload.

Summary
react-router-dom allows you to create navigation in your React apps.
You use <Router> to wrap your app, <Link> to navigate, and <Routes> with <Route> to define which components should be displayed for each route.
This is the basic setup to get you started with routing in a React app. Let me know if you'd like to dive deeper into specific features or concepts!
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
 Let’s explore some advanced features and concepts in react-router-dom.

1. Nested Routes
Nested routes allow you to render child routes within parent routes. This is useful for creating layouts where certain components should only be shown when you are on specific routes.

*/
// Dashboard.js
import { Outlet, Link } from "react-router-dom";

export function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li>
            <Link to="profile">Profile</Link>
          </li>
          <li>
            <Link to="settings">Settings</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

// Profile.js
export function Profile() {
  return <h3>Profile Page</h3>;
}

// Settings.js
export  function Settings() {
  return <h3>Settings Page</h3>;
}

// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Settings from "./Settings";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

/*
Explanation:
<Outlet>: Acts as a placeholder for where nested routes should render.
When you navigate to /dashboard, you’ll see the Dashboard component. Inside it, links to Profile and Settings are available. When you click on one of these links, the corresponding component will render within the Dashboard component.
2. Programmatic Navigation
Sometimes, you need to navigate programmatically (e.g., after a form submission). You can achieve this using the useNavigate hook.
*/

import { useNavigate } from "react-router-dom";

export function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
/*
Explanation:
useNavigate: A hook that returns a function to navigate programmatically.
After a successful login, the user is redirected to the /dashboard route.
3. Route Parameters
Route parameters are used to pass dynamic data through the URL, which can be accessed in your component.
*/

import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();

  return <h2>Product ID: {id}</h2>;
}

// App.js
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:id" element={<Product />} />
      </Routes>
    </Router>
  );
}
/*
Explanation:
useParams: A hook that returns an object of key-value pairs from the URL parameters.
If you navigate to /product/42, the Product component will render with Product ID: 42.
4. Redirects and 404 Pages
You can handle redirects and create custom 404 pages using Navigate and wildcard routes.
*/

import { Navigate } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="old-page" element={<Navigate to="/new-page" />} />
        <Route path="new-page" element={<NewPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
/*
Explanation:
Navigate: Used to redirect from one route to another.
Wildcard Route (*): Catches all undefined routes, useful for showing a custom 404 page.
5. Protected Routes
Protected routes are used to restrict access to certain parts of your app based on user authentication or other conditions.
*/

import { Navigate } from "react-router-dom";

function ProtectedRoute({ element, isAuth }) {
  return isAuth ? element : <Navigate to="/" />;
}

// App.js
function App() {
  const isAuthenticated = false; // Example condition

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="dashboard"
          element={<ProtectedRoute isAuth={isAuthenticated} element={<Dashboard />} />}
        />
      </Routes>
    </Router>
  );
}
/*
Explanation:
ProtectedRoute: A component that checks if the user is authenticated. If not, it redirects them to the home page.
Summary
Nested Routes: Organize routes with a parent-child relationship.
Programmatic Navigation: Navigate using functions instead of <Link>.
Route Parameters: Pass dynamic data through URLs.
Redirects and 404 Pages: Handle undefined routes and redirects.
Protected Routes: Control access to routes based on conditions.
These features give you more control and flexibility when building complex React applications with routing. Let me know if you'd like to explore any of these in more detail or if you have any questions!

*/




