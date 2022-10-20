CSCI4050 Term Project

Contains a backend Django app with restful api endpoints.
Contains a frontend Next.js app for the which fetches data from the api.

Quick Start:

1.) clone repository

2.) Set up the backend Django api
    $ cd backend

    # Activate a virtual environment
    $ pip install virtualenv
    $ py -m venv venv

    If Windows:
        $ venv\Scripts\activate.bat
    If Linux:
        $ source venv/Scripts/activate

    # Download necessary packages
    $ py -m pip install -r requirements.txt

    # Make database migrations
    $ py manage.py makemigrations
    $ py manage.py migrate --run-syncdb 

3.) Run the backend server
    $ py manage.py runserver

    # Go to http://localhost:8000/admin
    # login with superuser username and password
        - username: 'username'
        - password: 'password'

4.) Set up the frontend Next.js app
    # Install node package manager on your system if it is not already installed

    # In a new terminal, cd into the frontend directory
    $ cd frontend

    # Install dependencies
    $ npm install

    # Create a new .env file. This will hold the backend api endpoint
    # In your text editor put the following line in your .env file:
    DJANGO_API=http://localhost:8000/api

    # Start your frontend app
    $ npm run dev

    # Go to http://localhost:3000/backend-test
    # proof of concept demo (this will pull the users from the backend database and display on page)