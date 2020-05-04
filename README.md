# stream-server

JSON server for stream-client REST-Based React Apps

using:
[JSON Server](https://www.npmjs.com/package/json-server)


```
npm init 

npm i json-server
```

Create a db.json file with some data
```
{
  "streams": []
}
```

Edit a package.json file
```
  "scripts": {
    "start": "json-server -p 3001 -w db.json"
  },
```

Server run
```
npm start
```

[http://localhost:3001](http://localhost:3001)

 - Deploy on [Heroku](https://www.heroku.com/)

 - Create [New App](https://dashboard.heroku.com/new-app) on Heroku
 
 - Connect to [GitHub](https://dashboard.heroku.com/apps/stream-json-server/deploy/github) & Search for a repository to connect to, Enable automatic deploys from GitHub
 
 -  Open your [App](https://stream-json-server.herokuapp.com/)
 
 
 ------
 references:
 
 GitHub Integration [(Heroku GitHub Deploys)](https://devcenter.heroku.com/articles/github-integration)
