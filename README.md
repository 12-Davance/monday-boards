<br/>
<p align="center">
  <a href="https://github.com/12-Davance/monday-boards">
    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/monday_logo_icon_168967.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Monday Boards</h3>

  <p align="center">
    Persist your Monday board state!
    <br/>
    <br/>
  </p>
</p>

## Table Of Contents

- [About the Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Preconditions](#preconditions)
  - [Installation](#installation)
- [Usage](#usage)
- [Authors](#authors)

## About The Project

This project is a basic full-stack application that saves board states fetched from the Monday.com API. The application includes the following functionalities for company users:

- register
- login
- search boards by name
- view board search result
- save a board's state
- view saved board records
- filter records by multiple parameters

## Tech Stack

This project is split into two sections: server and client.

**server**
The server was built primarily with :

- Node Js [Nest js] - Following the instructions
- Mongo DB [Mongoose ORM] - Following the instructions

**client**
The client was constructed with

- React Js - Following the instructions
- Bootstrap 5 - Following the instructions
- Create React App (CRA) - scaffold React project
- Axios - for making requests to the backend and monday.com server
- Redux - for an organized and traceable state management

## Getting Started

Follow these simple example steps to set up a local copy.

### Preconditions

The first tool that needs to be installed is

- npm

and can be done using the following :

```sh
npm install npm@latest -g
```

### Installation

1. Get a free API Key at [https://www.monday.com]

2. Clone the repo

```sh
git clone https://github.com/12-Davance/monday-boards.git
```

3. Change the directory to the 'server' folder and run:

```sh
npm install
```

5. Create a .env file inside the root directory

6. Enter your configuration details inside the .env file (example provided in the repo)
7. To run the server side development server enter:

```sh
npm start
```

9. To install the client side requirments, change the directory to the 'client' folder and run:

```sh
npm install
```

10. Create a .env file inside the root directory

11. Enter your configuration details inside the .env file (example provided in the repo)

12. Finally to run the client side development server

```sh
npm start
```

## Usage

There is a demo available here: https://mm-monday-fe.vercel.app/

For the purpose of the documentation
I have made 3 searchable boards with names of:

- Frontend Board
- Backend Board
- A simple fullstack web service

## Authors

- **Dawit Derebie** - _Software Engineer_ - [Dawit Derebie](https://www.linkedin.com/feed/) - \*\*
