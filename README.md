# Fishcards
## Application to learn English

,,Fishcards" is application created to help you improve your language skills, specifically, learn new words.


## Features

- Learn Mode:
Page view intended for learning, allows user to scroll through the tabs. Every card consist of three things: name (written word in a language you know), definition (its definition you want to learn), example sentenes (example sentences in which you used the word). To make the application scallable, there are created feauters called ,,stages". Every stage must be associated to one of the side (Front - there is name, Back - there is definition). Stages are intended for actions for that side of the card. They can be  reflected in the upper right corner (icons), if u want to make special stagfe appear, just click special icon - their availability depends on the page that is revealed. 
Bulb icon - hint stage - user can see some words of definition word.
Text - text stage - when user click this icon, appears input when he can check spelling.
Example sentence - shows an example sentence entered for a given word.

- Edit Mode
This functionality allows user to add new words or edit existing ones

- Permissions
There are 3 types of a connection between the set and the users:
OWNER - allows user to edit/add words, grand permissions too other users, delete set
EDITABLE - allows user to edit/add
READ_ONLY - allows user to only read/learn words (learn mode)
To grant permissions user has to visit Edit mode then - set settings

## Features

| feauture | Backend | Frontend |
|------------|------------|------------|
| level of mastery of expression | [x] | [] |
| listening to the pronunciation | [] | [] |

## Front-End Tech

- React & Typescript
- Vite
- ReactQuery
- StyledComponent
- React Router
- Framer Motion

State managmend is based on React Context and React Query. To fetch data there are custom hooks (based on React Query hooks) and Axios. Sidebar on desktop is supported by ,,react-pro-sidebar". To create animation has been used Framer Motion.

## Back-End Tech

- NestJs
- Postgres
- TypeORM

To authorize users there is JWT (access & refresh token). 
Project consists of 3 services:
auth - responsible for authorizations and user support
accesses -responsible for users access to set (database relation user - access - set), access validation
word -creating, updating word etc.
sets - creating, updating set etc.


## Docker

To make working on the backend application convenient, there is a docker. 

To start application in docker, visit root folder, then enter belows commends:

```sh
docker-compose build
docker-compose up
```

Fill the variables in the .env file before running, if the variables don't match, the application will notify you when you run it.By default backend application is running on port 3000.
