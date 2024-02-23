
    <h1>Meet App Features</h1>


<h2>Feature 1: Filter Events by City</h2>
<h3>USER STORY</h3>
<p>As a user,<br>
I should be able to filter events by city<br>
So that I can see a list of events taking place in that city.</p>
<h4>SCENARIO 1: When user hasn’t searched for a specific city, show upcoming events from all cities</h4>
<ul>
    <li>Given user hasn’t searched for any city;</li>
    <li>When the user opens the app;</li>
    <li>Then the user should see a list of upcoming events.</li>
</ul>
<h4>SCENARIO 2: User should see a list of suggestions when they search for a city</h4>
<ul>
    <li>Given the main page is open;</li>
    <li>When user starts typing in the city textbox;</li>
    <li>Then the user should receive a list of cities (suggestions) that match what they’ve typed.</li>
</ul>
<h4>SCENARIO 3: User can select a city from the suggested list.</h4>
<ul>
    <li>Given user was typing “Berlin” in the city textbox</li>
    <li>AND the list of suggested cities is showing;</li>
    <li>When the user selects a city (e.g., “Berlin, Germany”) from the list;</li>
    <li>Then their city should be changed to that city (i.e., “Berlin, Germany”)</li>
    <li>AND the user should receive a list of upcoming events in that city.</li>
</ul>

<h2>Feature 2: Show/Hide Event Details</h2>
<h3>USER STORY</h3>
<p>As a user,<br>
I should be able to easily toggle between showing and hiding event details<br>
So that I can control the amount of information displayed based on my preference.</p>
<h4>SCENARIO 1: Event element is collapsed by default</h4>
<ul>
    <li>Given the user opens the events app</li>
    <li>When the user navigates to the list of events</li>
    <li>Then each event element should be collapsed by default</li>
    <li>And the user can expand the event element to view details</li>
</ul>
<h4>SCENARIO 2: User can expand an event to see details</h4>
<ul>
    <li>Given the user is viewing the list of events</li>
    <li>When the user selects an event to expand</li>
    <li>Then the details of the selected event should become visible</li>
    <li>And the user should be able to collapse the event details if desired</li>
</ul>
<h4>SCENARIO 3: User can collapse an event to hide details</h4>
<ul>
    <li>Given the user has expanded the details of an event</li>
    <li>When the user chooses to collapse the event</li>
    <li>Then the details of the event should be hidden</li>
    <li>And the event element should return to its collapsed state</li>
</ul>

<h2>Feature 3: Specify Number of Events</h2>
<h3>USER STORY</h3>
<p>As a user,<br>
I should be able to customize the number of events displayed per page<br>
So that I can tailor the browsing experience according to my preferences and screen size.</p>
<h4>SCENARIO 1: When user hasn’t specified a number, 32 events are shown by default</h4>
<ul>
    <li>Given the user opens the events app</li>
    <li>When the user navigates to the list of events</li>
    <li>Then the app should display 32 events by default</li>
</ul>
<h4>SCENARIO 2: User can change the number of events displayed</h4>
<ul>
    <li>Given the user is viewing the list of events</li>
    <li>When the user selects the option to change the number of events displayed</li>
    <li>Then the user should be able to specify a custom number of events to be shown</li>
    <li>And the app should display the specified number of events accordingly</li>
</ul>

<h2>Feature 4: Use the App When Offline</h2>
<h3>USER STORY</h3>
<p>As a user,<br>
I should be able to browse through a cached version of the app when offline<br>
So that I can continue exploring events and making plans regardless of internet availability.</p>
<h4>SCENARIO 1: Show cached data when there’s no internet connection</h4>
<ul>
    <li>Given the user has previously accessed event data on the app</li>
    <li>And the user's device is offline</li>
    <li>When the user opens the app</li>
    <li>Then the app should display cached event data</li>
    <li>And allow the user to browse through the cached content</li>
</ul>
<h4>SCENARIO 2: Show error when user changes search settings (city, number of events)</h4>
<ul>
    <li>Given the user is using the app with an internet connection</li>
    <li>When the user tries to change search settings, such as city or number of events</li>
    <li>And the device loses internet connection during the process</li>
    <li>Then the app should display an error message indicating the inability to change settings without internet access</li>
    <li>And prompt the user to reconnect to the internet to make changes</li>
</ul>

<h2>Feature 5: Add an App Shortcut to the Home Screen</h2>
<h3>USER STORY</h3>
<p>As a user,<br>
I should be able to add a shortcut to the app on my device's home screen<br>
So that I can quickly access the app without having to navigate through menus or app drawers.</p>
<h4>SCENARIO 1: User can install the meet app as a shortcut on their device home screen</h4>
<ul>
    <li>Given the user has the meet app installed on their device</li>
    <li>When the user accesses the meet app</li>
    <li>And the user chooses to add a shortcut to the home screen</li>
    <li>Then the meet app shortcut should be created on the device home screen</li>
    <li>And the user should be able to access the meet app directly from the home screen</li>
</ul>

<h2>Feature 6: Display Charts Visualizing Event Details</h2>
<h3>USER STORY</h3>
<p>As a user,<br>
I should be able to view charts visualizing event details, such as attendance numbers or event popularity,<br>
So that I can quickly understand and compare different aspects of events.</p>
<h4>SCENARIO 1: Show a chart with the number of upcoming events in each city</h4>
<ul>
    <li>Given the user has accessed the event details section in the meet app</li>
    <li>When the user selects the option to view charts</li>
    <li>And chooses the chart displaying the number of upcoming events in each city</li>
    <li>Then the app should generate and display a chart illustrating the distribution of upcoming events across different cities</li>
    <li>And the user should be able to interpret the data regarding event distribution easily</li>
</ul>

<h2>Serverless Functions</h2>
<p>Serverless functions are used in this app to securely manage user access, obtain and refresh OAuth2 tokens, and ensure the security of interactions between the React App and the Google Calendar API.
</body>
</html>
