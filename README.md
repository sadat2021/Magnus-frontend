# Getting Started with Frontend

This project developed by React.js and Typescript.
This frontend Application displays a map which allows user to plot unlimited coordinators on the map and displays a random polygon generated by the backend.

## Used programming languages & libraries

- leaflet and react-leaflet for displaying the map.

## Instruction

1- Clone the backend project in to your delicated directory.<br/>
2- Open the terminal and head to the directory and then run `npm i`.<br/>
3- The next step is running `npm run start`.<br/>
4- Please make sure the back-end got run before running the front side.<br/>
5- Kindly start clicking on the map to plot the coordinates on the delicated area. Note that you should at least plot 3 coordinates.<br/>
6- Populate the text box embedded on top of the page with a number which is greater than 3.<br/>
7- Click on the purple button labeled `got random polygon`.<br/>
8- A purple polygon will be displyed located inside then the first polygon created by you.<br/>

### Available scripts

#### `npm run start`

Runs the app in the development mode.

#### `npm run build`

Builds the app for production deployment and places into the `build` folder.

## Step

## Assupmtions

- User can select a delicated area by clicking on the map.
- User can populate the text box embedded on the app to determine the number of coordinates needed to be generated randomly and returned by the backend.

## Area of improvement

- Check the text box is populated only by number and it can be more meaningful if it is limited by the maximum and minimum numbers.
- Handle the errors which is returned by the backend.
- Make the created polygan on the map draggable.
- Make the created coordinates on the map draggable.
- Delete the last coordinate via `CTRL + Z`.
- Make the created coordinates on the map clickable and give user a permision to delete the selected one.
- Develop unit, integration and data-driven tests to ensure that the app works perfectly.
