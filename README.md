# Sample Express API

This is a sample Express API that can be used as a template for other projects.

-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
-   [Structure](#structure)

---

## Getting Started

### Prerequisites

Node.js and npm are required to run this project. You can download them from [here](https://nodejs.org/en/download/).

### Installation

Install all dependencies:

```bash
npm ci
```

Run the server:

```bash
npm start
```

This will start the express server on port 3000.

### Structure

The entry point of the application is `index.ts`. This file is responsible for starting the express server and loading all the routes.

The folder controllers contains all the controllers for the routes.
Each controller lives in its own folder and contains the following files:

-   `[controller].controller.ts` - This file contains the controller class that handles the requests.
-   `[controller].routes.ts` - This file contains the routes for the controller.
-   `[controller].models.ts` - This file contains the models for the controller.
-   `[controller].service.ts` - This file contains the service for the controller that handles the business logic.

The folder middlewares contains all the middlewares that can be used in the routes.
Some are already implemented and can be used as examples.
There are also global middlewares that are used in all routes.

Everything is written with typescript and compiled to javascript.
Compiled javascript files are located in the dist folder.
