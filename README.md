# Form2DB

Form2DB is a simple web application that allows users to submit their **username** and **email** via a form. The submitted data is stored directly in a **MongoDB database** using **Node.js**, **Express**, and **Mongoose**. This project demonstrates a basic **frontend-backend-DB interaction** with proper handling of POST requests.

---

## Demo

You can run the project locally and test the form submission. Data will be saved in your MongoDB Atlas cluster.

---

## Features

- Simple **HTML form** to collect user information (username & email).  
- **Fetch API** is used to send form data to the backend without page reload.  
- Backend built with **Node.js** and **Express**.  
- **MongoDB Atlas** used to store submitted data.  
- **CORS enabled** to allow frontend-backend communication.  
- Displays **success/error alerts** after form submission.  

---

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript (Fetch API)  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (via Mongoose ORM)  
- **Other:** CORS for cross-origin requests  

---

## Installation

1. **Clone the repository**
git clone https://github.com/Jeetz-007/Form2DB.git
cd Form2DB

2. **Install dependencies**
npm install express mongoose cors

3. Configure MongoDB connection
    Replace the MongoDB connection string in server.js with your own:
    mongoose.connect('YOUR_MONGODB_CONNECTION_STRING')

4. Start the server
    node server.js
    Server will run on http://localhost:3000

5. Open index.html in your browser to test the form.


## Usage
1. Fill in the username and email fields.
2. Click Submit.
3. Data will be saved in MongoDB and a success alert will appear.
4. Use /showinfo GET route to view all users:
    GET http://localhost:3000/showinfo

## Folder Structure
Form2DB/
│
├── index.html       # Frontend form
├── style.css        # (Optional) Styling for form
├── server.js        # Backend server with routes and MongoDB connection
├── package.json     # Node.js project dependencies
└── README.md        # Project documentation
