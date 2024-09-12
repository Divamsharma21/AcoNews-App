 #ACONEWS
ACONEWS is a responsive news application built with React. It fetches and displays news articles from the GNews API. The application features a search bar, a category dropdown, and pagination for navigating through news articles.
#Features
Fetches news articles from the GNews API.
Responsive design for mobile, tablet, and desktop.
Search functionality to find news articles.
Dropdown menu for selecting news categories.
Pagination for navigating through news results.
#Getting Started
Prerequisites
Node.js and Yarn installed on your machine.
Firebase account and CLI.
Installation
Clone the repository:

git clone https://github.com/chhedadhruv/aconews.git
cd aconews

Install dependencies:

 yarn install
Create a .env file in the root directory and add the following environment variables:

REACT_APP_GNEWS_API_KEY=your_api_key_here
Running the Application Locally
Start the development server:
yarn start
The application will be running at http://localhost:3000.
Building the Application
Build the application:
yarn build
The build files will be generated in the build directory.
Deploying the Application
Install Firebase CLI:

npm install -g firebase-tools
Login to Firebase:

 firebase login
Initialize Firebase project:

 firebase init
Select Hosting and choose the Firebase project.

Deploy the application:

firebase deploy
The application will be deployed to Firebase Hosting.

Acknowledgements
GNews API
React
Firebase