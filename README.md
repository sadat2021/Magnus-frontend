# Getting Started with Backend

This project developed by React.js and Typescript.
This frontend Application displays a map which allows user to plot unlimited coordinators on the map and displays a random polygon generated by the backend.

## Used programming languages & libraries

- leaflet and react-leaflet for displaying the map.

## Instruction

1- Clone the backend project in to your delicated directory.
2- Open the terminal and head to the directory and then run `npm i`.
3- The next step is running `npm run start`.
4- Please make sure the back-end got run before running the front side.

### Available scripts

#### `npm run start`

Runs the app in the development mode.

#### `npm run build`

Builds the app for production deployment and places into the `build` folder.

## Assupmtions

- User can select the delicated area by clicking on the map.
- User can populate the text box embedded on the app to determine the number of coordinates needed to be generated randomly and returned by the backend.

## Area of improvement

- Check the text box is populated only by number and can be more meaningful if limited by the maximum and minimum number.
- Handling the errors which is returned by the backend.
- Make the created polygan on the map draggable.
- Make the created coordinates on the map draggable.
- Delete the last coordinate via `CTRL + Z`.
- Make the created coordinates on the map clickable and give the user the permision to delete the selected one.
- Develop unit, integration and data-driven tests to ensure that the app working perfectly.