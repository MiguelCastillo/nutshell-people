# nutshell-people
sample for nutshell people

# prerequisites

- node and npm to install and run a server to host to client application
- modern browser that can handle flexbox
- terminal for setting up and running the application

# Getting started

From the terminal:

- Clone: `git clone https://github.com/MiguelCastillo/nutshell-people.git`
- Go to nutshell-people: `cd nutshell-people`
- Install dependencies: `npm install`
- Start application: `npm start`

NOTE: When the application is ran for the very first time, there is a few second wait due to the build system putting together the application. It is not a client or server application performance issue.

A lot of the code is application setup.  But the code we are interested in looking at is [App.jsx](https://github.com/MiguelCastillo/nutshell-people/blob/master/src/views/App.jsx), which is where the logic exists for loading, processing, and rendering the most recent 5 people.
