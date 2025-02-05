# Myflix-client

This app shows you a list of events that you can view more details about if desired.
Using the google calendar API to load a list of events and then display them to the user in a user-friendly way.

## Features

### oAuth authentication with Google

-   The user can use their google account to authenticate themselves and gain access to the app.

### Show all events

-   Displays a list of events with the Name of the event as well as it's city and the date the event is taking place.

### Show/hide an event's details.

-   Select the "Show Details" button to also see a brief description of the event.

### Filter events by city

-   Use the "Search for a city" search box.
    -   It will display a list of available cities when selected.
    -   Select a city from the list or type in the city you are looking for.

### Change number of events shown

-   Use the "Number of events" search box.
    -   The app shows 32 events by default.
    -   Type in a number between 1 and 32 to display that number of events.

### Data Charts

-   Charts show data about the events that are currently being rendered.
    -   A point chart
        -   Shows data about how many events are in each city.
    -   A pie chart
        -   Shows what percentage of events are about which programming languages.

## Technologies Used

-   API: Google Calendar
-   Framework: React
-   Testing: jest-cucumber
-   Charts: recharts
-   Build: Vite

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/tpamplin/meet-app.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the server:

    ```bash
    npm start
    ```
