

# Question Voting Application
 
This is a simple open API application that allows users to create questions with options and add votes to the options. It uses Node.js as the server platform and MongoDB as the database for data storage.




## Features

- Create a question: Users can create questions by sending a POST request to the /questions/create endpoint with the question text as the payload.

- Add options to a question: Users can add options to a specific question by sending a POST request to the /questions/:id/options/create endpoint with the option_text as the payload.

- Add a vote to an option: Users can add a vote to an option by sending a POST request to the /options/:id/add_vote endpoint with the option ID as a parameter.

- Delete a question: Users can delete a question by sending a DELETE request to the /questions/:id/delete endpoint with the question ID as a parameter. A question cannot be deleted if any of its options have votes.

- Delete an option: Users can delete an option by sending a DELETE request to the /options/:id/delete endpoint with the option ID as a parameter. An option cannot be deleted if it has any votes.

- View a question with its options and votes: Users can view a question along with its options and the total votes received for each option by sending a GET request to the /questions/:id endpoint with the question ID as a parameter.


## API ROUTES
- POST /questions/create: Create a new question.
- POST /questions/:id/options/create: Add options to a specific question.
- POST /options/:id/add_vote: Add a vote to an option.
- DELETE /questions/:id/delete: Delete a question.
- DELETE /options/:id/delete: Delete an option.
- GET /questions/:id: View a question with its options and votes.
## Installation And Setup
Make sure you have Node.js and npm (Node Package Manager) installed on your system.

Clone this repository to your local machine.

Install the project dependencies by running the following command in the project directory:



```bash
  bash
   
 `npm install`
```


- Make sure you have MongoDB installed and running on your system.`

- Modify the MongoDB connection URL in mongoose.js to match your MongoDB configuration if necessary.
## Running The Server
To start the server, run the following command in the project directory:

```bash
bash

node index.js
```
The server will start running on http://localhost:3000 (or the port specified in the environment variable).
## Usage

You can use tools like curl, Postman, or any HTTP client library to interact with the API endpoints.

Refer to the API routes and their respective request formats mentioned above for creating questions, adding options, voting, and fetching question details.
## 🚀 About Me
My name is Vaibhav Dwivedi.

I'm a full stack developer...

github profile: https://github.com/vaibhav9682

github repo: https://github.com/vaibhav9682/API-Poling-System


