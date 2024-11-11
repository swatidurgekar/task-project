# Task Management Project

This project is a simple task management application that allows users to create, view, edit, and delete tasks. It consists of a backend built with Node.js, Express, and MongoDB, and a frontend built with React and styled with Tailwind CSS.

## Features

* Create, edit, and delete tasks
* Tasks have a title, description, and status
* UI built with React and styled with Tailwind CSS

## Setup

* Clone the repository

    `git clone https://github.com/swatidurgekar/task-project.git`

    `cd task-project`

* Backend Setup

    `cd server`
  
   `npm install`

  Create a .env file and add your MongoDB URL.
  
    MONGODB_URL="your_mongodb_connection_string"

  Start the backend

    `nodemon index.js`

* Frontend Setup

    `cd client`
  
    `npm install`
  
    `npm run dev`
