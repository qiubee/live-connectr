# Zugo

Chat & play mini-games with others travelling by train.

## Concept

Chat and play mini-games with others who are also taking the same train. Select the train you're taking and chat or play mini-games together. Get live information about delays and disruptions.

![Concept sketch screens](images/concept-sketch.png)

## Dependencies

* Vue.js
* Express
* Socket.io

For dependencies on the server see [**`package.json`**](server/package.json)  (server) and for the client see [**`package.json`**](client/package.json) (client).

## Installation

1. Clone the repository and navigate to the directories.

2. **Install dependencies:**

	```bash
	npm install
	```

### Run server

```bash
# To run the server
npm run start

# To run the development environment
npm run dev
```

### Run client

```bash
# To run client in the development environment
npm run serve

# To build client app
npm run build

# To lint files
npm run lint
```

## Functionalities

* Chat with others
* Play mini-games
* Get live train information

## NS API

For travel information about current trains I use the [NS API](https://www.ns.nl/en/travel-information/ns-api).

## Data Life Cycle Diagram

A *Data Life Cycle Diagram* shows how data flows through an application. The following graph shows how the data is transferred from the [NS API](#ns-api) and database to and from the server and from the server to the user:

![Zugo data life cycle diagram](images/zugo-data-life-cycle.jpg)

## License

[**GNU General Public License v3.0**](LICENSE)