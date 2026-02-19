# MERN Todo App

A full-stack Todo application built with the MERN stack:
- **M**ongoDB - Database
- **E**xpress - Backend framework
- **R**eact - Frontend library
- **N**ode.js - Runtime environment

## Features

- Create, read, update, and delete todos
- Mark todos as complete/incomplete
- Inline editing of todo text
- Task counter showing remaining vs total tasks
- Responsive design

## Project Structure

```
mern-todo/
├── backend/
│   ├── models/
│   │   └── Todo.js        # Mongoose schema
│   ├── routes/
│   │   └── todos.js       # REST API routes
│   ├── server.js          # Express server
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddTodo.js
│   │   │   ├── TodoItem.js
│   │   │   └── TodoList.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v16+)
- MongoDB running locally or a MongoDB Atlas URI

### Backend Setup

```bash
cd backend
cp .env.example .env
# Edit .env with your MongoDB URI
npm install
npm run dev
```

The server runs on `http://localhost:5000`.

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

The app runs on `http://localhost:3000` and proxies API requests to port 5000.

## API Endpoints

| Method | Endpoint          | Description         |
|--------|-------------------|---------------------|
| GET    | /api/todos        | Get all todos       |
| POST   | /api/todos        | Create a todo       |
| PATCH  | /api/todos/:id    | Update a todo       |
| DELETE | /api/todos/:id    | Delete a todo       |
