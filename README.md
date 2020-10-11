# beam-frontend

In order to run the application,

1. You will need to clone the repository.
2. create a .env files in the root directory using the contents of the env.example file.
  - In this file you need to specify the backend API URL.
3. Go to the terminal window and issue a command <code>"npm run serve"</code>
4. Once the application successfully starts up, you can go to "http://localhost:8080". You will be redirected to the Locator app.

# Testing the application

The application has around 49 vehicles placed throught some of the MRT stations around Singapore.

You can use the following values to test the location of the vehicles.

1. Longitute : 103.9915
2. Latitute : 1.3644
3. Radius: 20000 (distance in meters)
4. Number of Bikes: The numbers of bikes you want to search for. (0 - 49)

Click on the <b>Search</b> button to see the data get plotted on the map.

