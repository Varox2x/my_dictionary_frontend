# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

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


This text you see here is *actually- written in Markdown! To get a feel
for Markdown's syntax, type some text into the left window and
watch the results in the right.

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

## Docker

Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.

```sh
cd dillinger
docker build -t <youruser>/dillinger:${package.json.version} .
```

This will create the dillinger image and pull in the necessary dependencies.
Be sure to swap out `${package.json.version}` with the actual
version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on
your host. In this example, we simply map port 8000 of the host to
port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart=always --cap-add=SYS_ADMIN --name=dillinger <youruser>/dillinger:${package.json.version}
```

> Note: `--capt-add=SYS-ADMIN` is required for PDF rendering.

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:8000
```

## License

MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>

