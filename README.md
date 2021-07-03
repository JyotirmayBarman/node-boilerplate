![image](https://user-images.githubusercontent.com/56916274/124358576-94f37b80-dc3e-11eb-9f04-ee3e5ba529bf.png)


# node-boilerplate
Basic boilerplate with niche folder structure for a express node API 

## USAGE
#### First f all, Clone The Repo
    git clone https://github.com/JyotirmayBarman/node-boilerplate.git Server
    
#### Then Install dependencies and start the server
    cd Server 
    cd src && npm setup
    npm start
    
#### Check your server from 
    http://localhost:3000
    

## Installed Modules 
* [Express](https://github.com/expressjs/express)   | main - framework
* [nodemon](https://github.com/remy/nodemon)        | dev - monitoring changes
* [helment](https://github.com/helmetjs/helmet)     | main - securing node with headers middleware
* [passport](http://www.passportjs.org/)            | main - 0Auth2
* [axios](https://github.com/axios/axios)           | main - for making request to other API
* [cors](https://github.com/expressjs/cors)         | main - for cross origin permission management
* [dotenv](https://github.com/motdotla/dotenv)      | main - for reading .env files with process.env
* [morgan](https://github.com/expressjs/morgan)     | main - logging tool
* [mongoose](https://mongoosejs.com/)               | main - mongo db driver for node
* [jest](https://jestjs.io/)                        | dev - testing node API
* [pm2](https://pm2.keymetrics.io/)                 | main - managing clusters

## Folder Structure

    .
    ├── Server
    │   ├── public/                    
    │   ├── src/              
    │   │   ├── models/
    │   │   ├── node_modules/
    │   │   ├── routes/
    │   │   ├── services/
    │   │   ├── app.js
    │   │   ├── server.js
    │   │   ├── .env
    │   │   ├── .gitignore
    │   │   ├── package.json
    │   │   └── package-lock.json
    
# Enjoy 🤟🤟🤟🤟
