# phase2-project

<img width="909" alt="Screenshot 2024-01-22 at 10 41 30 AM" src="https://github.com/kcastillo3/phase2-project/assets/134651057/bcac7ae0-1089-4179-a114-2f1ae0708d8c">

About:

Muse is intended to be a gallery for artists all over the world to showcase their artwork and to likewise view and interact with other pieces. It is an amalgamation of art from varying mediums, which anyone is allowed to partake in and leave their mark in this open forum and public museum.

In this space, every artist, whether amateur or professional and every art enthusiast finds a community. Muse facilitates a dialogue between the creator and the observer, making art accessible to everyone. Through this platform, we aim to invite everyone to experience the beauty and diversity of artistic expression in one accessible, online location.

Deliverables and Parent/Child Structure:

1. SPA Setup

✅ Use 'create-react-app' 
✅ Use single-HTML file 

2. Components/Parent-Child Architecture

✅ App()
├─ ✅ Header()
│  ├─ ✅ Navigation (Home, Collection, Submit Art) // onMouseOver for hover effect, onClick for routing
│  
├─ ✅ HomePage()
│  ├─ ✅ Featured Artwork() // onClick for detailed view
│  
├─ CollectionPage()
│  ├─ Artwork Grid()
│  │  ├─ Artwork Thumbnail() // onMouseOver for hover effect, onClick for detail view
│  
├─ SubmitArtPage()
│  ├─ Art Submission Form()
│  │  ├─ TextInput() (For artwork name, artist name, etc.) // onChange to update state
│  │  ├─ TextArea() (For artwork description) // onChange to update state
│  │  ├─ FileUpload (For artwork image) // onChange to handle file selection
│  │  ├─ Submit Button() // onClick to submit form
│  │  ├─ Submission Success Message (Conditional Rendering) // based on submission status
│  
└─ Footer
   ├─ SocialMediaLinks (Optional) // onClick for external navigation

3. Client-Side Routing for 3 routes

Setup routes for '/collection', '/submit-art', and '/' (homepage)

4. API Interaction

Set up 'json-server' for backend storing information on artists and artworks
Make one GET request to fetch artworks for the collection page
Make one POST request to submit new artwork via the Submit Art form

5. State Management

Use React's state management capabilities to handle the dynamic content, such as the list of artworks in the collection and the submission form state. Ensure that submitting a new artwork updates the collection view without a manual refresh.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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
