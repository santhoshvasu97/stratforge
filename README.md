# SpaceX Rockets and Launches Web App

This is a web app that displays information about SpaceX rockets and launches.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install this app, clone this repository and install the required dependencies:

```bash
git clone https://github.com/your-username/spacex-web-app.git
cd spacex-web-app
npm install
```

## Usage

To start the app, run:

```bash
npm start
```

The app will open in your default web browser at `http://localhost:3000/rockets`.

You can navigate to different pages by clicking on the links in the navigation bar at the top of the page.

On the Rockets page, you can view information about SpaceX rockets, including their names, descriptions, and images. You can also filter the rockets by name using the search bar.

On the Launches page, you can view information about SpaceX launches, including their names, dates, and images. You can also filter the launches by name using the search bar.

On the History page, you can view information about SpaceX history, including its names, events, and images. You can also filter the events by name using the search bar.

## API Reference

This app uses the following APIs:

- Rockets: https://api.spacexdata.com/v4/rockets
- Launches: https://api.spacexdata.com/v5/launches
- History: https://api.spacexdata.com/v4/history

## Features

The web application has three main screens:

- Rockets
	The Rockets screen displays information about rockets launched by SpaceX. Each rocket is displayed with its picture, name, and short description. The rockets can be filtered by name using the search bar.

- History
	The History screen displays information about the history of SpaceX. Each event is displayed with its picture, name, and short description. The events can be filtered by name using the search bar.

- Launches
	The Launches screen displays information about the launches of SpaceX. Each launch is displayed with its picture, name, and short description. The launches can be filtered by name using the search bar.
	
## Technologies Used

* React
* Axios
* React Router
* CSS

## Contributing

If you would like to contribute to this project, please fork the repository and create a pull request with your changes. Please make sure to adhere to the code style and follow the existing naming conventions.

## License

This project is licensed under the [MIT License](LICENSE).
