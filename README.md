# APISH

##Performance, bottlenecks
In the Back End, the calls to both the Twitter and Wikipedia APIs render the Front End calls to the BE unable to callback quickly and seamlessly. I tried to solve this by making a more fluid waiting experience with the help of a third party component.

##Improvements
The problem previously stated can be solved in several ways, the easiest one perhaps being the pagination of the search results. Both the Twitter and the Wikipedia APIs can provide some pagination capabilities to the developer, and your average web framework can certainly have pagination with a little help of external components or even with bundled components.
Due to some deficiencies in the geolocalitation components available and even in the very HTML5 geo API, displaying geo-relevant results to the user was a task not fullfilled.
Unit tests should be made to cover the critial code areas of the applications (BE & FE) as the project grows.

##I did this the way I did it because...
I did separate BackEnd and FrontEnd applications because, over time, I've developed and tried a lot of apps and this strikes to me as the future of development, both from an architectural and an escalability viewpoints. This way of doing things enables us to have multiple Front End apps interacting with a Back End cloud, which makes both the user and the developer experiencies much more simple and seamless.
With this separation of conerns, we can scale our FEs as traffic grows and geographically diversifies.
From the Back End perspective, we can increase greatly the security of the application as we are able to deliver new, more RESTful ways to authenticate and process petitions.
