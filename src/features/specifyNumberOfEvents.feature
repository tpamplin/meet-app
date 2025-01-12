Feature: Specify the number of events rendered on screen
    Scenario: When the app is opened, show 32 events by default
        Given the app is open
        When the user hasn't specified a number of events
        Then 32 events will be shown by default.
    Scenario: When the user specifies a number of events to show, that number will be shown.
        Given the app is open
        When the user specifies a number of events to be shown
        Then the number of events that the user has chosen will be shown.