# React Native Code Challenge

Developed a Mobile App called "Star Wars Explorer" that displayed data from the Star Wars API.

 <img alt="node-current" src="https://img.shields.io/badge/made%20by-chris--ejeh-orange">

# Introduction

The Star Wars API is an open API that returns data about the Star Wars films.
https://swapi.dev/

The App renders two screens - "People" and "Movies" which can be navigated using a Bottom Tab Navigator from React Navigation. The People screen is the default screen when a user launches the App.

The names of various Star Wars characters and movies were queried from the SWAPI API and displayed on the initial screens (i.e the person screen displayed the name of the Star Wars character and the movies screen displayed name of the movies). When you click on a name item, you will be taken to a new route(screen) that displays extra details about the charater/movie (see mock up images below).

### The fields to be displayed for each item type are:

| People Screen | Movies Screen |
| ------------- | ------------- |
| Name          | Title         |
| Gender        | Director      |
| Height        | Producers     |
| Mass          | Release Date  |
| Hair Color    |
| Skin Color    |
| Birth Year    |

# Screens Mock ups

People Screen | People Details Screen | Movies Screen | Movies Details Screen
------------- | -------------- | ------------- | --------------
<img src="https://github.com/Chris-Ejeh/Star-Wars-Explorer-App/blob/main/app/assets/images/People_Screen.PNG" width="200"> | <img src="https://github.com/Chris-Ejeh/Star-Wars-Explorer-App/blob/main/app/assets/images/People_Details.PNG" width="200"> | <img src="https://github.com/Chris-Ejeh/Star-Wars-Explorer-App/blob/main/app/assets/images/Movies_Screen.PNG" width="200"> | <img src="https://github.com/Chris-Ejeh/Star-Wars-Explorer-App/blob/main/app/assets/images/Movies_Details.PNG" width="200">

# Features implemented in the App

- Proper state management using Redux. :rocket:
- Scrollable list of data with loading indicator.
- Proper navigation setup including back button when user is on details screen.
- Modular code structure and use of components.
- Implement ???Pull to Refresh??? for People lists (load more data from SWAPI).
- Displayed images of people beside their names on the first screen.
- Displayed a splash screen with a Star Wars image on it.

# Installation

```
Use any code editor of choice.
clone the project!

#Start by installing expo command line tools
npm install --global expo-cli

#Install the dependencies
npm install

#Start the project 
expo start
press i - for IOS
press a - for Andriod
Download Expo Go to run project directly from your device
```
