import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

    //Scenario 1
    test('Event element is collapsed by default', ({ given, when, then }) => {
        let AppComponent;
        given('the user opens the events app', () => {
            AppComponent = render(<App />);
        });

        when('the user navigates to the list of events', async () => {
            const AppDOM = AppComponent.container.firstChild;
        const EventListDOM = AppDOM.querySelector('#event-list');

        await waitFor(() => {
          const EventListItems =
            within(EventListDOM).queryAllByRole('listitem');
          expect(EventListItems.length).toBe(32);
        });
      }
    );

        then('each event element should be collapsed by default', () => {
            const EventDOM = AppComponent.container.firstChild;
            const details = EventDOM.querySelector('.details');
            expect(details).not.toBeInTheDocument();
        });
    });

    //Scenario 2
    test('User can expand an event to see details', ({ given, when, then }) => {
        let AppComponent
        given('the user is viewing the list of events', async () => {
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;
      
            await waitFor(() => {
              const eventList = within(AppDOM).queryAllByRole('listitem');
              expect(eventList[0]).toBeTruthy();
            });
        
        });

        when('the user selects an event to expand', async () => {
            const button = AppComponent.queryAllByText('Show Details')[0];
      
            await userEvent.click(button);
          });

        then('the details of the selected event should become visible', () => {
            const EventDOM = AppComponent.container.firstChild;
            const details = EventDOM.querySelector('.details');
            expect(details).toBeInTheDocument();
          });
        });


    //Scenario 3
    test('User can collapse an event to hide details', ({ given, when, then }) => {
        let AppComponent;
        let button;
        given('the user has expanded the details of an event', async () => {
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;
      
            await waitFor(() => {
              const eventList = within(AppDOM).queryAllByRole('listitem');
              expect(eventList[0]).toBeTruthy();
            });
      
            button = AppComponent.queryAllByText('Show Details')[0];
            await userEvent.click(button);
      
            const EventDOM = AppComponent.container.firstChild;
            const details = EventDOM.querySelector('.details');
            expect(details).toBeInTheDocument();
        });

        when('the user chooses to collapse the event', async () => {
            await userEvent.click(button);
        });

        then('the details of the event should be hidden', () => {
            const EventDOM = AppComponent.container.firstChild;
            const details = EventDOM.querySelector('.details');
            expect(details).not.toBeInTheDocument();
        });
    });
});

