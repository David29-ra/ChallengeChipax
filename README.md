# Rick and Morty Challenge

It is a challenge to build a program with two exercises.

1. Char counter:
    - how many times does letter **"l"**(case insensitive) apear in the names of all `location`.
    - how many times does letter **"e"**(case insensitive) apear in names of all `episode`.
    - how many times does letter **"c"**(case insensitive) apear in names of all `character`.
    - how long the program 👆 takes to run in total (from start of execution to deliver the results).
2. Episode locations:
    - for each `episode`, list all the `locations`(`origin`) of the `character` who appear (without repetitions) in that `episode`.
    - how long the program 👆 takes to run in total (from start of execution to deliver the results).

## Api

For the exercise I use the appi https://rickandmortyapi.com/ to get data such as:

  + `location` (https://rickandmortyapi.com/api/location/)
  + `episode` (https://rickandmortyapi.com/api/episode/)
  + `character` (https://rickandmortyapi.com/api/character/)

Functions on services directory do the fecth of endpoints above.

  + apifetch contain a Fetch fuction that return a json object and manage error if it happens.

  + indexdata contain a getData function that return a data from the api and set on local storage.

<br/>
<br/>

# Directory structure

## Components

Files on components directory resturn a function with parts of layout.

  + header return a Header react component with title and subtitle.
  + results return a Results react component with the results of the challenge.
  + footer return a Header react component with a link to the github repository.
  
  + main return th join of the header, the results and the footer.

## __ test __

Files on __ test __ directory contain tests for the components and functions for the app.

to verify run:
```powershell
$ npm test
```

then check the console for the results.

## Functions

This directory contain directories with functions for the exercises.

  + charCounter about the first exercise.
  + locations about the second exercise.

  + main contain the fuction tha retorn a json object with the results.

## Helpers

THis directory contain helper functions.

  + timeformat return a string with the time like Xs Yms, format required by the challenge.

<br/>
<br/>

## To Start

In the project directory, you can run:

1. `npm install`
    + to install dependencies.

```powershell
$ npm install
```

2. `npm start`
    + to show the project on local host.

```powershell
$ npm start
```  
  + Open your browser at http://localhost:3000/

3. `npm test`
    + to run all test located on `__test__` dir.

```powershell
$ npm test
```
