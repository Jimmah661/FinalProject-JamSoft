### Monash Bootcamp Final Project

# JamSoft Ticketing

This is the final project developed for the Monash University Coding Bootcamp. 
All code was written and developed by myself (James Rudd)

The intent behind this project was to develop a reactive ticketing system based off of ITIL methadoligies.
I want to build this from the ground up to be incredibly responsive and user friendly. This means that it needs to be able to load information quickly to prevent performance issues. It also needs to be easy to use, with a simple interface for logging tickets from a client side and a streamlined administration portal for Managers and Team Leads.

## Intended Audience

JamSoft Ticketing is aimed at small to medium Service Desk environments that might be lacking the development power that is available to larger organisations. 
In the future I hope to make it open to editing allowing people to create new modules and share them with other organisations. 
We could then look at incorporating popular modules into the application to make them available in the base version increasing the functionality of the application.

## Technologies incorporated
#### Express
I needed a server to run the application. I have experience in Express. Using Mongo, React and GraphQL I figured I should use some things I know

#### MongoDB
I decided to go with MongoDB as the database as I wanted it to be fast to load information even when ticket databases are getting larger in size. 
This was a trade off between a well known and understood technology (SQL) with something newer that might result in a performance boost.

#### React
The DOM needed to update in real time, again to increase the speed at which technicians can access the data. 
For this reason I chose to use React to create components that can render new information in real time. 

#### nodeJS
This was just because its what I know. Nuff said.



## Current thoughts about this
I could use GraphQL as my query language
Looks like I'm going to use MDB for my bootstrap engine, The addons are going to be imporatnt including the Drag and Drop functions that I'll need to make my VTB's 
