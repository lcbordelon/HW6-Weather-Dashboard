# 06 Server-Side APIs: Weather Dashboard

Lindsay Bordelon

This is a weather dashboard that features dynamically updated weather information based on the city you search for..

https://lcbordelon.github.io/HW6-Weather-Dashboard/
![image](https://user-images.githubusercontent.com/71234155/98620096-da36f780-22c1-11eb-8646-4ead7d8be6bf.png)

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```

---

© 2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

PSEUDO CODE

HTML/CSS

<!-- -arrange rows/cards correctly -->
<!-- -searched for cities will be appended, do I need a placeholder div? -->
<!-- -assign event handler to search button in html? -->

-after I finish all the JS, work on styling

JS
-setup API for weather
-will need separate feed for uv index?
-giant function for the search button event handler
-request data from API (city, info, etc)
-return data
-append data to html display
-append city name to searched for list
-set city data to local storage
-when appending city to list, append city name as a button with an event handler that will pull the city's info from local storage

3 separate calls
-5 day weather
-uv index (runs off lat and long) hard code lat and long for test city, and then work on dynamically passing something in
-current temp, wind speed, etc

hard code a city into the ajax call (first), then figure out response.whatever after it's pulling the correct data
-if time, input fix for touppercase to fix inputted city (first letter must be capitalized)
