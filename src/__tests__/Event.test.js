import { render } from '@testing-library/react';
import mockData from '../mock-data';
import Event from '../components/Event';
import userEvent from '@testing-library/user-event';

describe('<Event /> component', () => {
    let EventComponent;
    const event = mockData[0];

    beforeEach(() => {
        EventComponent = render(<Event event={event} />);
    });

    test('displays event title', () => {
        expect(EventComponent.queryByText(event.summary)).toBeInTheDocument();
    });

    test('displays event created time', () => {
        expect(EventComponent.queryByText(event.created)).toBeInTheDocument();
    });

    test('displays event location', () => {
        expect(EventComponent.queryByText(event.location)).toBeInTheDocument();
    });

    test('displays "Show Details" button', () => {
        expect(EventComponent.queryByText('Show Details')).toBeInTheDocument();
    });

    test('hides event details section by default', () => {
        const details = EventComponent.container.querySelector('.details');
        expect(details).not.toBeInTheDocument();
    });

    test('shows event details section when "Show Details" button is clicked', async () => {
        const button = EventComponent.queryByText('Show Details');
        await userEvent.click(button);
        const details = EventComponent.container.querySelector('.details');
        expect(details).toBeInTheDocument();
    });

    test('hides event details section when "Hide Details" button is clicked', async () => {
        const user = userEvent.setup();
        const showButton = EventComponent.queryByText('Show Details');
        const hideButton = EventComponent.queryByText('Hide Details');
    
        expect(showButton).toBeInTheDocument(); 
        expect(hideButton).not.toBeInTheDocument(); 
    
        await user.click(showButton);
        expect(EventComponent.container.querySelector('.details')).toBeInTheDocument(); 
    
        await user.click(hideButton); 
        expect(showButton).toBeInTheDocument(); 
        expect(hideButton).not.toBeInTheDocument();
    });
});
