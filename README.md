#Project Note List

##This project consists of 3 directories:
- Frontend - Here lies the Angular application.
- Backend - Contains files written in Python.
- Database - There is a file for importing into the database.

### Installation

1. Clone the repository to your local machine:

   git clone https://github.com/NoteList.git

## Database 

To start the server, you can use the XAMPP Control Panel tool. Begin by launching Apache and MySQL.

Navigate to http://localhost/dashboard/ and select the phpMyAdmin tab, or directly go to http://localhost/phpmyadmin/.

Next, proceed to import the file to create the database and tables. To do this, go to the Import tab and select the file from the Database directory.

Please note that the user required to connect to the backend is root, with the password root. This login information may be necessary for establishing a connection to the database. If you're using the root user without a password, ensure to remove 'PASSWORD': 'root' from the settings.py file.

## Backend

With the backend server set up, let's proceed to start it using the Django framework.

Navigate to the Backend directory and run the commands python manage.py makemigrations followed by python manage.py migrate in the terminal.

Then, to launch the server, execute the command python manage.py runserver and check the database connection by visiting the designated address.

To add data to the database, go to http://127.0.0.1:8000/notes/create/ and to display all data, visit http://127.0.0.1:8000/notes/.

## Frontend

### Description

A simple note management application with features like adding, browsing, editing, and deleting notes. The application is built using the Angular framework.

### Features

- Adding new notes
- Browsing the list of notes
- Editing existing notes
- Deleting notes
- Pagination of the note list

Install all depencensis with npm install.

Open the Frontend directory and initiate the application using the command ng serve and visit http://localhost:4200/.

The public server for the website is located at: https://notelist-task1.web.app
