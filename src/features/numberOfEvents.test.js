import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/numberOfEvents.feature');

defineFeature(feature, (test) => {
    // Scenario 1
    test('When user hasn’t specified a number, 32 events are shown by default', ({ given, when, then }) => {
        let AppComponent;
        let eventList;
        given('the user opens the events app', () => {
            AppComponent = render(<App />);
        });

        when('the user navigates to the list of events', async () => {
            const AppDOM = AppComponent.container.firstChild;
            await waitFor(() => {
                eventList = within(AppDOM).queryAllByRole('listitem');
                expect(eventList[0]).toBeTruthy();
            });
        });

        then('the app should display 32 events by default', () => {
            expect(eventList.length).toEqual(32);
        });
    });

    // Scenario 2
    test('User can change the number of events displayed', ({ given, when, then }) => {
        let AppComponent;
        given('the user is viewing the list of events', async () => {
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;
            await waitFor(() => {
                const eventList = within(AppDOM).queryAllByRole('listitem');
                expect(eventList[0]).toBeTruthy();
            });
        });

        when('the user selects the option to change the number of events displayed', async () => {
            const button = AppComponent.queryByTestId('numberOfEventsInput');
            await userEvent.type(button, '{backspace}{backspace}10');
        });

        then('the app should display the specified number of events accordingly', () => {
            const AppDOM = AppComponent.container.firstChild;
            const eventList = within(AppDOM).queryAllByRole('listitem');
            expect(eventList.length).toEqual(10);
        });
    });
});
