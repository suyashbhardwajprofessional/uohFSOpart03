const express = require('express');

const persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
];

const app = express();

app.get('/api/test', (request,response)=>{
	response.send('hey there!');
})

app.get('/api/persons', (request, response) => {
	response.json(persons);
})

app.get('/info', (request, response) =>{
	response.send(`<div><p>phonebook has information for ${persons.length} people.</p>${new Date()}</div>`)
})

app.get('/api/persons/:id', (request, response) => {
	const id = request.params.id;
	const match = persons.find(person=>person.id===id)
	if(match)	response.json(match)
	else 		response.status(404).end('not found')
})

// app.use(express.json());
const PORT=3001;
app.listen(PORT, ()=> {
	console.log('server now running at port 3001');
})