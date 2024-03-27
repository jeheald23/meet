Feature: Specify Number of Events

    Scenario: When user hasn’t specified a number, 32 events are shown by default
        Given the user opens the events app
        When the user navigates to the list of events
        Then the app should display 32 events by default

    Scenario: User can change the number of events displayed
        Given the user is viewing the list of events
        When the user selects the option to change the number of events displayed
        Then the app should display the specified number of events accordingly