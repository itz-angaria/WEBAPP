Sales Management Web Application
=================================

This is a simple web application designed to manage sales data. It allows users to perform various tasks related to sales, such as adding new sales, viewing top sales, and monitoring revenue trends. The application is built using React and utilizes the React Router library for navigation.

Project Structure
-----------------
The project's main components and files are organized as follows:

pages/ folder contains individual page components for different views:
======
AddSale.js: Allows users to add new sales data.
----------
TopSale.js: Displays the top sales data.
----------
Revenue.js: Provides insights into revenue trends.
----------
Login.js: Enables user login functionality.
----------
Registration.js: Handles user registration.
---------------
Sale.css: Common use for Styling.
--------

components/ folder contains reusable components:
==========
NavBar.js: The navigation bar component that appears at the top of the application.
---------

Routing
=======
The application uses React Router for navigation. The routing configuration is set up in the App component. Each Route corresponds to a different view of the application and is associated with a specific URL path. For example, when the user visits the path /topsale, the TopSale component will be rendered.

