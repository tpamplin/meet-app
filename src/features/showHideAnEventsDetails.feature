Feature: show and hide an events details
    Scenario: When a user opens the app event details are hidden by default
        Given the app is open
        When an event is loaded
        Then it will be collapsed.
    Scenario: When a user clicks on the show details button the event will expand to show details
        Given an event is collapsed
        When the show details button is clicked
        Then the event will be expanded
    Scenario: When a user clicks on the hide details button the event will collapse to hide details
        Given an event is expanded
        When the hide details button is clicked,
        Then the event will be collapsed.