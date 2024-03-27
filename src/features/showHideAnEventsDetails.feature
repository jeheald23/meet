
Feature: Show/Hide Event Details


    Scenario: Event element is collapsed by default
        Given the user opens the events app
        When the user navigates to the list of events
        Then each event element should be collapsed by default

    Scenario: User can expand an event to see details
        Given the user is viewing the list of events
        When the user selects an event to expand
        Then the details of the selected event should become visible

    Scenario: User can collapse an event to hide details
        Given the user has expanded the details of an event
        When the user chooses to collapse the event
        Then the details of the event should be hidden
