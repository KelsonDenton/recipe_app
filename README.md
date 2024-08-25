# Recipe Tracking Application

A web app developed using Django with React allowing users to perform CRUD operations on their favorite (or not so favorite) recipes. Currently allows users to enter and track a recipe name and the necessary ingredients.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

1. Clone the repository:

```bash
 git clone https://github.com/KelsonDenton/my_recipe_book.git
```

2. Install dependencies:

```bash
 npm install
```

```bash
 pip install django
```

## Usage
Navigate to the /backend directory and run the command
```bash
 python manage.py runserver
```

Next, navigate to the /frontend directory and run the command
```bash
 npm start
```

The app will now be running at http://localhost:3000/.
To verify the backend is working as expected, feel free to try out some of the API endpoints:
- http://127.0.0.1:8000/api/recipes/ will show all recipes currently saved
- http://127.0.0.1:8000/api/recipes/<id> where the id is the ID of the recipe you would like to view will display a single recipe

The frontend uses these APIs to perform CRUD operations.