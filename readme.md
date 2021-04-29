# Zugo

Chat & play mini-games with others travelling by train.

[**Go to demo >**](https://zu-go.herokuapp.com/)

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

# To build client app & copy to public folder on the server
npm run build

# To lint files
npm run lint
```

## Functionalities

* Chat with others
* Play mini-games
* Get live train information

## API

For travel information about current trains I use the [NS API](https://www.ns.nl/en/travel-information/ns-api). To see the available API's and how to get a API-key go to their [starter's guide](https://apiportal.ns.nl/startersguide).
The API's provide the following information:

* Prices
* Current departure times
* Disruptions and engineering work
* The station list, with all stations in the Netherlands including Geodata
* Travel recommendations from station to station

You can make 50.000 request per day for each API, but the amount may vary per API. The API's I use are the *Reisinformatie API* & *Virtual Train API*.

### Reisinformatie API

The *Reisinformatie API* has endpoints for current arrivals & departures, ticket prices, journey details and travel advice. I use the **journey details** & **travel advice** endpoints.

#### Journey details endpoint

With the *journey details* endpoint you can request the full journey details of a train based on the journeynumber (or trainnumber). I use this to give current information about each journey with information about disruptions and delays. Here is an example of the response data:

```
{
  "payload": {
    "notes": [],                  // notes journeys
    "productNumbers": [],         // journey number
    "stops": [{
      "id": "",                   // station id
      "stop": {},                 // station & location
      "previousStopId": [],       // previous station id
      "nextStopId": [],           // next station id
      "destination": "",          // name of destination
      "status": "",               // type of stop
      "arrivals": [],             // arrival detail
      "departures": [],           // departure detail
      "actualStock": {},          // train stock being used
      "plannedStock": {},         // planned train stock
      "platformFeatures": [],     // station platform information
      "coachCrowdForecast": []    // crowd forecast for train
    }],
    "allowCrowdReporting": true,  // status of crowd forecast
    "source": ""                  // source of information
  }
}
```

#### Travel advice endpoint

With the *travel advice* endpoint you can request possible routes based on origin and destination. I use this to search for a train the user is possibly taking. Here is an example of the response data:

```
{
  "source": "",                         // source of information
  "trips": [{
    "idx": 0,
    "uid": "",                          // journey search id
    "ctxRecon": "",                     // journey search uri
    "plannedDurationInMinutes": 0,      // planned journey duration
    "actualDurationInMinutes": 0,       // real journey duration
    "transfers": 0,                     // amount of transfers
    "status": "",                       // search status
    "messages": [],                     // disruptions/constructions
    "legs": [{
      "idx": "",                        // journey id
      "name": "",                       // journey name
      "travelType": "",                 // travel type
      "direction": "",                  // name of destination
      "cancelled": false,               // if journey cancelled
      "changePossible": true,           // possible changes
      "alternativeTransport": false,    // other transport option
      "journeyDetailRef": "",           // journey uri
      "origin": {},                     // information of origin
      "destination": {},                // information of destination
      "product": {},                    // train type & number
      "messages": [],                   // disruptions
      "stops": [],                      // all train stops
      "crowdForecast": "",              // crowd forecast for train
      "punctuality": 100.0,             // train punctuality
      "shorterStock": false,            // if train is shorted
      "journeyDetail": [],              // journey detail
      "reachable": true,                // reachable in time
      "plannedDurationInMinutes": 0     // journey duration
    }],
    "crowdForecast": "",                // complete crowd forecast of route
    "punctuality": 100.0,               // complete punctuality of route
    "optimal": false,                   // if best route
    "fareRoute": {},                    // complete route
    "fares": [],                        // ticket prices
    "fareLegs": [],                     // complete route detail
    "productFare": {},                  // product types
    "fareOptions": {},                  // ticket options
    "type": "",                         // operator
    "shareUrl": {},                     // complete route url
    "realtime": true,                   // if current information
    "routeId": "",                      // route id
    "registerJourney": {}               // route url
  }]
}
```

### Virtual Train API

The *Virtual Train API* has enpoints for information about a specific train. I use the **getTreinInformatie_1** endpoint to get the current information of the train for a specific journey. With this information I can cross-reference where the train is and if it's delayed or cancelled. Here is an example of the response data:

```
{
  "bron": "",               // source of information
  "ritnummer": 0,           // journey number
  "station": "",            // current station
  "type": "",               // train type
  "vervoerder": "",         // operator
  "spoor": "",              // track
  "materieeldelen": [{      // train parts
    "materieelnummer": 0,   // train number
    "type": "",             // train type
    "faciliteiten": [],     // train facilities
    "afbeelding": "",       // train image url
    "breedte": 0,           // length of train
    "hoogte": 0,            // height of train
    "bakken": [],           // coaches of train with length, height and image
  "ingekort": false,        // if train is shorted
  "lengte": 0,              // complete length of train
  "lengteInMeters": 0,      // train length in meters
  "lengteInPixels": 0       // train length in pixels
}
```

## Data Life Cycle Diagram

A *Data Life Cycle Diagram* shows how data flows through an application. The following graph shows how the data is transferred from the [NS API](#ns-api) and database to and from the server and from the server to the user:

![Zugo data life cycle diagram](images/zugo-data-life-cycle.jpg)

## Socket Events

I use multiple socket events for real-time data transfer from server to client and vice versa. I have created the following socket events:

* join room
* all rooms
* add message

### *Join room* event

The *join room* event adds the client to a specific room that is tied to a journey and chat. A user is added to a room when they have given their name and have been added to the database. They will then get to join the room.

### *All rooms* event

The *all rooms* event gives the current active rooms. It will send newly added rooms when a new room has been added to the database.

### *Add message* event

The *add message* event will add the message to the database and send it to all clients of the specified room.  

## License

[**GNU General Public License v3.0**](LICENSE)