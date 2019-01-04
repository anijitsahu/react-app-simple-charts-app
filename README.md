# react-app-simple-charts-app
A Simple Charts Application using [React JS](https://reactjs.org/docs/getting-started.html), a JavaScript library to make awesome UI by Facebook and [Chart JS](https://www.npmjs.com/package/react-chartjs-2) for plotting charts.

This application uses [React JS](https://reactjs.org/docs/getting-started.html) component oriented UI creation paradigm. All components are written in [JSX](https://reactjs.org/docs/jsx-in-depth.html) and ES6 style and are
combined to get a single build for production purpose using [Webpack 4](https://webpack.js.org/concepts/). 

ES6 `module` creation along with `import /export` is used. [Babel](https://babeljs.io/docs/en/babel-preset-react) is used to *transpile* all [JSX](https://reactjs.org/docs/jsx-in-depth.html) code to vanilla JavaScript code. To install all the dependecies `npm` is used.

All the charts are drawn by a popular library named [Chart JS](https://www.npmjs.com/package/react-chartjs-2). In version 2 it supports [React JS](https://reactjs.org/docs/getting-started.html) components.


For UI creation [HTML5](https://www.w3schools.com/html/html5_intro.asp) and [CSS3](https://www.w3schools.com/css/) are used. [Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout), the new feature of [CSS3](https://www.w3schools.com/css/) is used for layout creation purpose.

This is a *responsive web application* for viewing in both Mobile and Desktop.


## Features
- This is a Simple Chart Application
- Charts are plotted using [Chart JS](https://www.npmjs.com/package/react-chartjs-2)
- Charts are upadated when user changes the hourly watching rate of channel viewing

<br/> 

- Maximum and minimum values of the hourly rate is `24` and `0` respectively
- Three types of chart namely *Pie, Doughnut* and *Bar* is available
- *Tooltips* on each of the graph is supported
- *Legend* and *title* showing for data indication is supported

<br/>

- No database / storage is there. So no changes are *persistant* 
- Mobile view is supported 


## Installation

1. Clone the repository using `git clone https://github.com/anijitsahu/react-app-simple-charts-app.git` from `Git Bash / Command Prompt`
2. Navigate inside the directory by `cd react-app-simple-charts-app`
3. Install all the necessary dependecies by using `npm install` (optional)
4. Navigate to the directory `cd dist`
5. Open the `index.html` file in a web browser
6. Change the *hourly* watching values of the popular channels and see the changes in the graph
7. Choose the graph types from `DOUGHNUT, PIE` and `BAR` for different types of output

 
*tested with <img src="screenshots/chrome.png" width="20px" title="Google Chrome">Google Chrome v70 and <img src="screenshots/firefox.png" width="25px" title="Firefox Developer edition">Mozilla Firefox Developer Editon*  

## Screenshots

Some screens of the application is given below for better understanding. 

Desktop as well as Mobile version of the screenshots are given side by side.

<p> Home Screen <br/> 
 <img src="screenshots/desktop 1.png" width="590px" title="Home screen"/>
 <img src="screenshots/mobile 1.png" width="190px" title="Home screen"/> 
</p>
 
 <p> Pie Chart <br/> 
 <img src="screenshots/desktop 2.png" width="590px" title="Pie Chart screen"/>
 <img src="screenshots/mobile 2.png" width="190px" title="Pie Chart screen"/> 
</p>

 <p> Bar Chart <br/> 
 <img src="screenshots/desktop 3.png" width="590px" title="Bar Chart screen"/>
 <img src="screenshots/mobile 3.png" width="190px" title="Bar Chart screen"/> 
</p>

 <p> Tooltips of each chart <br/> 
 <img src="screenshots/desktop 4.png" width="590px" title="Tooltips of each chart screen"/>
 <img src="screenshots/mobile 4.png" width="210px" title="Tooltips of each chart screen"/> 
</p>


