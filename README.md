# **Creating a React App from Scratch using Webpack**

This guide will walk you through creating a React app from scratch using Webpack. Webpack is a popular module bundler that is commonly used in the React community.

### **Prerequisites**

Before you begin, you will need the following:

- Node.js installed on your machine
- Basic knowledge of JavaScript, HTML, and CSS
- Familiarity with the command line

### **Step 1: Set up a new project**

To create a new project, create a new directory and navigate into it using the command line:

```
mkdir react-practical-1
cd react-practical-1
```

Next, initialize a new Node.js project using the following command:

```
npm init -y
```

This will create a new **`package.json`** file in your directory.

### **Step 2: Install React and ReactDOM**

Install React and ReactDOM as dependencies by running the following command:

```
npm install react react-dom --save
```

This will install React and ReactDOM and add them to your **`package.json`** file.

### **Step 3: Install Webpack and its dependencies**

Next, install Webpack and its dependencies as dev dependencies:

```
npm install webpack webpack-cli webpack-dev-server html-webpack-plugin babel-loader @babel/core @babel/preset-env @babel/preset-react style-loader css-loader file-loader --save-dev
```

- **`webpack`** is the main Webpack package.
- **`webpack-cli`** is a command line interface for Webpack.
- **`webpack-dev-server`** is a development server for Webpack.
- **`html-webpack-plugin`** generates an HTML file to serve your Webpack bundles.
- **`babel-loader`** is a loader for Webpack that transpiles your code using Babel.
- **`@babel/core`** is the core Babel package.
- **`@babel/preset-env`** is a Babel preset that transpiles your code to be compatible with the latest JavaScript features.
- **`@babel/preset-react`** is a Babel preset that transpiles your React code.
- **`style-loader`** and **`css-loader`** are loaders for Webpack that handle styles and CSS.
- **`file-loader`** is a loader for Webpack that handles images and other files.

### **Step 4: Configure Webpack**

Create a new file called **`webpack.config.js`** in your project root with the following contents:

```jsx
const HtmlWebpackPlugin = require("html-webpack-plugin"); // This plugin will generate an HTML file that includes the generated bundles.
const path = require("path"); // Node.js module for working with file paths.

module.exports = {
    entry: "./src/index.js", // The entry point of the application.
    output: {
        filename: "bundle.[hash].js", // The name of the generated bundle file, including a hash to invalidate the cache.
        path: path.resolve(__dirname, "dist"), // The directory where the generated bundles will be stored.
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html", // The HTML file to use as a template for the generated HTML file.
        }),
    ],
    resolve: {
        modules: [__dirname, "src", "node_modules"], // The directories to use when resolving modules.
        extensions: ["*", ".js", ".jsx", ".tsx", ".ts"], // The file extensions to use when resolving modules.
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // The file types to apply this rule to.
                exclude: /node_modules/, // Directories to exclude from this rule.
                loader: require.resolve("babel-loader"), // The loader to use for this rule.
            },
            {
                test: /\.css$/, // The file types to apply this rule to.
                use: ["style-loader", "css-loader"], // The loaders to use for this rule.
            },
            {
                test: /\.png|svg|jpg|gif|avif$/, // The file types to apply this rule to.
                use: ["file-loader"], // The loaders to use for this rule.
            },
        ],
    },
    mode: process.env.NODE_ENV === "production" ? "production" : "development" // The mode to use for the build.
};
```

### **Step 5: Create the app structure**

Create a **`src`** directory at the root of your project. Inside the **`src`** directory, create an **`index.js`** file and a **`components`** directory to hold your React components.

### **Step 6: Create the HTML template**

Create an **`index.html`** file in the **`src`** directory with the following content:

```
<!DOCTYPE html>
<html>
  <head>
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

### **Step 7: Create a React component**

Create a ````App.**js**` file inside the **`components`** directory with the following content:

```jsx
import React from 'react';
import './App.css'
import image from "./assets/download.png"

const App = () => {
    return (
        <>
            <h1>Hello World!</h1>
            <img src={image} />
        </>
    )
}

export default App
```

### **Step 8: Render the component**

Update the **`index.js`** file with the following code:

```
import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './App';

ReactDOM.render(<App />, document.getElementById('root'));

```

### **Step 9: Build the app**

Run the following command to build the app:

```jsx
npm build
```

## **License**

This app is licensed under the MIT license. See the **`LICENSE`** file for more details.