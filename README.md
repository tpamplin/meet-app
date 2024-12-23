This is an app that will help users find events in their city!
Built with React and Vite.

Filter Events By City:

    Story:

    As a user
    I should be able to filter events by city
    So that I can see events that are relevant to my location

    Scenarios:

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

    Story:

    As a user
    I should be able to show/hide event details
    So that I can see more events on screen, while also being able to more quickly access more information about an event.

    Scenarios:

    given the app is open
    when an event is loaded
    then it will be collapsed.

    given an event is collapsed
    when the show details button is clicked
    then the event will be expanded

    given an event is expanded
    when the hide details button is clicked,
    then the event will be collapsed.

Specify the number of events:

    Story:

    As a user
    I should be able to specify the number of events shown on screen at a given time.
    So that I can narrow down or expand my search the way I prefer.

    Scenarios:

    given the app is open
    when the user hasn't specified a number
    then 32 events will be shown by default.

    Given the app is open
    when the user specifies a number of events to be shown
    then the number of events that the user has chosen will be shown.

Use the app when offline:

    Story:

    As a User
    I should be able to access the app while offline
    So that I can see information about events that I have saved when I'm not online.

    Scenarios:

    Given the app is offline
    when the user opens the app
    then show locally cached data.

    Given the app is offline,
    when a user tries to change the search settings
    then show an error because there is no internet.

Add an app shortcut to the users home screen:

    Story:

    As a User
    I should be able to add a shortcut to the app on the home screen of my device.
    So that I can access the app quickly and conveniently.

    Scenario:

    given the app is closed
    when a user clicks the shortcut for the app
    then the app will open

Display charts visualizing event details:

    Story:

    As a user
    I should be able to see charts that visualize event details
    So that I can understand more information faster and more effectively.

    Scenario:

    Given the app is running
    when the page loads
    then it will show a chart visualizing events in all cities.

# React + Vite

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
