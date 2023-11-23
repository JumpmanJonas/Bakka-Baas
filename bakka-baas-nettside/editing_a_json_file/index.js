
const express = require('express');
const fs = require('fs');
const app = express();
const port = 3001;

app.listen(port, () => { // repeats port
	console.log(`Server lytter på port ${port}`);
});

app.get('/', function(request, response){ // shows "Hello World!" on the screen
	response.send('Hello world!');
});

app.get('/info', function(request, response){ // shows the places.json file
    const data = fs.readFileSync('places.json', 'utf8');
    const jsonData = JSON.parse(data);
    console.log(jsonData['bås1']['occupiedBy'])
    response.send(jsonData)
});

app.get('/info/:name', function(request, response){
    const newName = request.params["name"]
    fs.readFile('places.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        obj = JSON.parse(data); //now it an object
        obj['bås1']['bookings'].push({"date": [newName, "date2"]}); //add some data
        json = JSON.stringify(obj); //convert it back to json
        fs.writeFile('places.json', json, 'utf8', callback); // write it back 
    }});
})