# README.md

# Resume Website

This is a simple resume website built with React. It showcases personal information, work experience, education, skills, and contact details.

## Project Structure

- **public/**: Contains the main HTML file and favicon.
  - **index.html**: The main HTML file for the React application.
  - **favicon.ico**: The favicon for the website.
  
- **src/**: Contains the React components and styles.
  - **components/**: Contains functional components for the website.
    - **Header.js**: Renders the header section.
    - **Footer.js**: Renders the footer section.
    - **Resume.js**: Displays the main content of the resume.
    - **Contact.js**: Displays contact information and a contact form.
  - **App.js**: The main component that structures the website.
  - **index.js**: The entry point of the application.
  - **styles/**: Contains CSS styles for the application.
    - **App.css**: Styles for the components and layout.

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/resume-website.git
   ```

2. Navigate to the project directory:
   ```
   cd resume-website
   ```

3. Install dependencies:
   ```
   yarn install
   ```

4. Start the development server:
   ```
   yarn start
   ```

5. Open your browser and go to `http://localhost:3000` to view the website.

## Deployment

To deploy the website on GitHub Pages, follow these steps:

1. Build the project:
   ```
   yarn build
   ```

2. Deploy to GitHub Pages:
   ```
   yarn add gh-pages
   ```

3. Add the following to your `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/resume-website"
   ```

4. Add deployment scripts:
   ```json
   "scripts": {
     "predeploy": "yarn build",
     "deploy": "gh-pages -d build"
   }
   ```

5. Deploy the project:
   ```
   yarn deploy
   ```

## License

This project is licensed under the MIT License.