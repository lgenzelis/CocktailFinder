# CocktailFinder

This simple APP lets the user search among thousands of drinks and cocktails, using the public API exposed by 
[www.thecocktaildb.com](www.thecocktaildb.com).


The codebase is included in the *src/* folder. The rest of the project was generated automatically by the *react-native* CLI. 

## Instructions

To run the APP:

* Clone or download this repo

* Go the project folder and run `react-native install`

* Connect an iOS or Android device via USB (you need to also enable USB debugging on your device)

* Run `react-native start`

## External libraries

I used the following libraries to aid in the development of this application:

* *lodash*: I only used this library to access its debounce function. This function allows 
us to avoid making an excessive amount of requests to the API. Without it, the application 
would make a call to the API for each of the user's keystroke. With debounce, on the other hand,
the call is only made when there's been a certain amount of time without keystrokes. 

* *react-native-linear-gradient*: this library allows us to have a nice looking color gradient
 as the background of a view.

* *react-navigation*, *react-navigation-stack*, *react-native-gesture-handler*: these libraries
 simplify the navigation between the different screens of the application. Moreover, 
 they allow the user to navigate the application in a native way (e.g., by pressing the 
 back button on an Android device).
 
* *redux*: to manage the state of the application.

* *react-redux*: this library provides convenient bindings between *redux* and *react*

* *redux-thunk*: this library provides a middleware to redux. It allows us to dispatch functions, 
instead of just plain objects. This in turn provides a convenient way to handle asynchronous
 requests, such as calls to the API.

* *prop-types*: this library provides a simple way to implement typing. By using it, 
and adding the relevant definitions to each component, we can have a warning 
issued every time a component doesn't receive a prop it was expecting, or when it 
receives a prop of an incorrect type or structure. 

## Managing big amounts of data

If we found ourselves in the need of managing big amounts of data, there are two 
considerations that should be made:

* We should refrain from using the traditional *ScrollView* component. 
This component has the disadvantage of always rendering all of its elements, including those
that are currently not visible on the screen. Instead, a *FlatList* provides the same basic
functionality as *ScrollView*, but with the benefit of only rendering the components currently
visible to the user. With a large list, this could have a huge impact on performance. **This 
consideration has already been taken into account in the development of the application**.

* Another way to increase performance would be not to make calls to the API when we already
have the necessary data. Let's say the user searches for the word *vod*. Many results would
be fetched from the API. If the user keeps typing and now searches the word *vodka*, it shouldn't
be necessary to fetch the API again: the results corresponding to *vodka* are already included
in those corresponding to *vod*, and could therefore be filtered from the available data
without further calls to the API. This has **not** been implemented in the current version of
the application.
