#Project Note List

##This project consists of 3 directories:
- Frontend - Here lies the Angular application.
- Backend - Contains files written in Python.
- Database - There is a file for importing into the database.

### Installation

1. Downolad zip folder and extract that on your desktop. Open unzip folder with VS Code.

## Database 

To start the server, you can use the XAMPP Control Panel tool. Begin by launching Apache and MySQL.

Navigate to http://localhost/dashboard/ and next select the phpMyAdmin tab, or directly go to http://localhost/phpmyadmin/.

Next, proceed to import the file to create the database and tables. To do this, go to the Import tab and select the file from the *database* directory.

## Backend

With the backend server set up, let's proceed to start it using the Django framework.

! If you're using the root user with a password, ensure to add 'PASSWORD': 'your_password' to the **settings.py** file.

Navigate to the *backend* directory using **cd backend** and run the commands followed by **python manage.py migrate** in the terminal.

Then, to launch the server, execute the command **python manage.py runserver** and check the database connection by visiting the designated address.

- To add data to the database, go to http://127.0.0.1:8000/notes/create/
- To display all data, visit http://127.0.0.1:8000/notes/.

! It is important that you do not close this window. To run the frontend application, you can open a new terminal, navigate to the frontend's path. Below you will find more information how to run.

## Frontend

### Description

A simple note management application with features like adding, browsing, editing, and deleting notes. The application is built using the Angular framework.

### Features

- Adding new notes
- Browsing the list of notes
- Editing existing notes
- Deleting notes
- Pagination of the note list

Navigate to the *frontend* directory using **cd frontend** 

Install all depencensis with **npm install**.

Open the *frontend* directory and initiate the application using the command **ng serve** and visit http://localhost:4200/.

The public server for the website is located at: https://notelist-task1.web.app.
