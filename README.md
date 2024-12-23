This is an app that will help users find events in their city!
Built with React and Vite.

User scenarios:

Filter Events By City:

    given a user has not searched for a city
    when the user opens the app
    then show events from all cities

    given the app is open
    when the user starts typing in the text box
    then filter and show a list of cities that match their entry

    given the list of cities is open
    when the user clicks on a city
    then they will be shown events from that city.

Show/hide details:

    given the app is open
    when an event is loaded
    then it will be collapsed.

    given an event is collapsed
    when the show details button is clicked
    then the event will be expanded

    given an event is expanded
    when the hide details button is clicked,
    then the event will be collapsed.

Specify the number of events

    given the app is open
    when the user hasn't specified a number
    then 32 events will be shown by default.

    Given the app is open
    when the user specifies a number of events to be shown
    then the number of events that the user has chosen will be shown.

Use the app when offline.

    Given the app is offline
    when the user opens the app
    then show locally cached data.

    Given the app is offline,
    when a user tries to change the search settings
    then show an error because there is no internet.

Add an app shortcut to the users home screen

    given the app is closed
    when a user clicks the shortcut for the app
    then the app will open

Display charts visualizing event details.

    Given the app is running
    when the page loads
    then it will show a chart visualizing events in all cities.

# React + Vite

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
