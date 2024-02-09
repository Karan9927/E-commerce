# Ecommerce Website
## UI Inspiration

The UI design of this application was inspired by [Award-Winning Website - Two Good Co](https://twogood.com.au/). I acknowledge the creators of [Two Good Co.] for their inspiring design and layout, which served as a reference during the development of this project.
## UI
## Home Page
![image](https://github.com/Karan9927/E-commerce/assets/115612744/eebb41fe-7d85-43f2-bcb7-66c3eff6e111)
![image](https://github.com/Karan9927/E-commerce/assets/115612744/eccaf2f2-2bbb-4740-83d8-c1f1640644c0)
![image](https://github.com/Karan9927/E-commerce/assets/115612744/61c68d00-c760-4ee3-9d68-63598babf65b)
![image](https://github.com/Karan9927/E-commerce/assets/115612744/5754de25-055a-436e-9826-973a10ddd4a3)
## Sidebar
![image](https://github.com/Karan9927/E-commerce/assets/115612744/dd7db0db-048e-4c3c-b156-e22efd885d59)
## Empty Cart
![image](https://github.com/Karan9927/E-commerce/assets/115612744/007b06c6-2513-4e08-8aa1-fd0406f8bc7d)
## Cart
![image](https://github.com/Karan9927/E-commerce/assets/115612744/3b0f501a-b886-4cc9-82b9-691b6671a46f)
## Product Page
![image](https://github.com/Karan9927/E-commerce/assets/115612744/3fec40e1-4980-4469-b0a4-aa5d413a472d)
## Shop Page
![image](https://github.com/Karan9927/E-commerce/assets/115612744/1dd9f0f5-4c04-45a9-aa75-83f2e0d6021c)
## Checkout Page
![image](https://github.com/Karan9927/E-commerce/assets/115612744/4048de56-e9f7-4714-ad01-4696d68f7a73)
## Admin Page
![image](https://github.com/Karan9927/E-commerce/assets/115612744/7f315d23-7f3f-45bf-95c1-0c5069b4b86e)
## Order Page
![image](https://github.com/Karan9927/E-commerce/assets/115612744/7e13eb20-3b0b-49bc-a03b-bdd9caf87287)

## Authentication and Authorization

This application includes protected routes that require users to be authenticated and authorized to access certain functionalities:

- **ProtectedRoute**: Checks if a user is logged in to allow access to the `/Orders` route. If not logged in, redirects to the home page.

- **ProtectedRouteForAdmin**: Restricts access to the `/Admin` route to administrators only. It verifies the admin's email before granting access.

## Dependencies

- React
- React Router DOM
- react-toastify
- GSAP (GreenSock Animation Platform) for animations
- Redux for state management
- Context API for managing product state

## Features

- **Home Page**: Displays a landing page showcasing featured products and promotional content.

- **Shop Page**: Allows users to browse through available products and view detailed information about each item.

- **About Page**: Provides information about the company or brand behind the e-commerce platform.

- **Checkout Page**: Facilitates the process of making purchases by guiding users through the checkout flow.

- **Admin Dashboard**: A secure dashboard accessible only to authorized administrators. It provides functionalities for managing products and orders.

- **User Authentication**: Implements user authentication to secure certain routes and functionalities.

## Project Difficulties

During the development of this project, I encountered several challenges that required problem-solving and perseverance. Some of the difficulties I faced include:

- **Integration of Third-party Libraries**: Incorporating external libraries like GSAP for animations and React Router for routing posed challenges in terms of understanding their APIs and integrating them effectively into the project.

- **Authentication and Authorization**: Implementing secure authentication and authorization mechanisms, including protected routes for users and administrators, required careful planning and consideration of security best practices.

- **State Management with Redux and Context API**: Managing application state efficiently using Redux and Context API involved a learning curve, especially in handling complex state structures and ensuring data consistency across components.

- **Debugging and Error Handling**: Identifying and resolving bugs, as well as handling errors gracefully, was an ongoing challenge throughout the development process. Utilizing debugging tools and thorough testing helped mitigate these issues.

Despite these challenges, overcoming them ultimately contributed to a deeper understanding of React development principles and improved my problem-solving skills.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
## Acknowledgments

- This project was bootstrapped with Create React App.
- Special thanks to GSAP, React Router, and Redux for their valuable contributions to this project.
## Note: Project Status

This project is currently in a development phase, and certain features, including responsiveness, may still be a work in progress. While efforts have been made to ensure functionality across different devices and screen sizes, there may be areas that require further optimization.

Your feedback and contributions are highly appreciated as we continue to improve and enhance the project. Feel free to report any issues or suggest improvements through GitHub issues or pull requests.

Thank you for your understanding and support!

