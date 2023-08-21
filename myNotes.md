# Notes
### To run, open the terminal and type the command:
```js 
node server.js into the terminal
```

- This says that we are importing modules as well as specific named imports from these modules
```js
import express from "express";
import bodyParser from "body-parser";
import { dogToHumanYears } from "./calculate.js"
import { dirname } from "path";
import { fileURLToPath } from "url";
```

- Here we are setting the express function to a constant called app
```js
const app = express();
```

- Here we are using the fileURLPath function and setting it to fileName
```js
const fileName = fileURLToPath(import.meta.url);
```

- Here we are passing fileName to the dirname funtion and assigning it to the constant directory
```js
const directory = dirname(fileName);
```

- Here we are creating a function called dogToHumanYears
- How to import JS file to use


- This says that our app will use body parser to get access to the form data
```js
app.use(bodyParser.urlencoded({extended: true}));
```


- This says, when the user goes to the root or home page of your web application, 
- The file index.html will be sent to them. 
```js
app.get("/", (req, res) => {
  res.sendFile(directory + "/index.html")
})
```

- This says that when the server receives a post request it will send the evaluation
- Of the function dogToHumanYears
```js
app.post("/human-years", (req, res) => {
  res.send(`<h1>${dogToHumanYears(req.body.age)}</h1>`);
})
```

- This says that you will be setting up a server to localhost 3000
- And it should log to the console 'Server 3000 started running'
```js
app.listen(3000, () => console.log('Server 3000 started running'));
```