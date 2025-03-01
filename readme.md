# Assignment Submission Portal Backend

This project is a backend for an Assignment Submission Portal where students can submit assignments and admins can review them. It is built using Node.js, Express, and MySQL. The application implements JWT-based authentication, role-based access control, secure file uploads, and other security best practices.



## Table of Contents

- [Live Demo](#live-demo)
- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
  - [Prerequisites](#prerequisites)
  - [Steps](#steps)
- [MySQL Database Setup](#mysql-database-setup)
- [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [License](#license)



## Live Demo

Access the live demo of the Assignment Submission Portal Backend [submission-portal](https://submission-portal-qurx.onrender.com).

---


## 1. Technologies Used

1. **Node.js** – JavaScript runtime for server-side development.
2. **Express** – Web framework for building APIs.
3. **MySQL** – Relational database.
4. **mysql2** – MySQL client for Node.js.
5. **jsonwebtoken** – For creating and verifying JWT tokens.
6. **bcrypt** – For secure password hashing.
7. **multer** – For handling file uploads.
8. **dotenv** – For environment variable management.
9. **cors** – To enable Cross-Origin Resource Sharing.
10. **helmet** – For securing HTTP headers.
11. **express-rate-limit** – For rate limiting incoming requests.
12. **nodemon** (dev dependency) – For live-reloading during development.

---



## Features

- **User Registration and Authentication**
  - Students can sign up and log in using their email and password.
  - Secure password hashing with bcrypt.
  - JWT-based authentication to protect API routes.

- **Role-Based Access Control (RBAC)**
  - Separate roles for students and administrators.
  - Admin endpoints for reviewing and managing assignments.
  - Manual role updates in the database for admin privileges.

- **Assignment Management**
  - Students can upload assignments via secure file uploads (using multer).
  - Assignments are stored locally (configurable for cloud storage like AWS S3).
  - Each submission is tracked with a status (Pending, Approved, Rejected).
  - **Submission Deadlines:** Admins can set deadlines, and submissions are validated against these deadlines.
  - **Soft Delete:** Instead of permanently deleting assignments, a soft delete flag is used so records are retained in the database.

- **Admin Dashboard**
  - Admins can view all student assignments.
  - Ability to filter assignments by status.
  - Admins can update assignment statuses and provide feedback.
  - **Notification System:** Students receive notifications when their assignments are reviewed.
  
- **Security Best Practices**
  - Use of JWT, CORS, Helmet, and rate limiting to secure the application.
  - Structured error handling and input validation.

- **Scalability and Maintainability**
  - Modular project architecture (controllers, routes, models, middlewares).
  - Environment variables for easy configuration.
  - Ready for future enhancements like notifications, deadlines, and soft deletes.

## 2. Installation and Setup

### 2.1 Prerequisites

1. [Node.js](https://nodejs.org/) (v14 or higher recommended)
2. [MySQL](https://dev.mysql.com/downloads/) (or use a Dockerized MySQL instance)
3. Git (optional)

### 2.2 Steps

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd assignment-submission-portal


## Install Dependencies
npm install
## Run project
npm run dev
## Configure Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`: `3000 `

`JWT_SECRET`: `your_jwt_secret`

`JWT_SECRET`: `localhost`

`DB_USER`: `your_mysql_username`

`DB_PASSWORD`: `your_mysql_password`

`DB_NAME`: `your_mysql_password`


## Set Up the MySQL Database

1. Create the Database:

Open your MySQL client (e.g., MySQL Workbench, phpMyAdmin, or CLI) and run:

 -->CREATE DATABASE assignment_portal;

2. Select the Database:
   
   USE assignment_portal; 

3. Create the users Table:

   CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('student', 'admin') DEFAULT 'student',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

4. Create the assignments Table:
    
    CREATE TABLE assignments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    file_path VARCHAR(255) NOT NULL,
    status ENUM('Pending', 'Approved', 'Rejected') DEFAULT 'Pending',
    feedback TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (student_id) REFERENCES users(id) ON DELETE CASCADE
);

## Run the Application
1. Development Mode (with live-reloading):

   npm run dev

2. Production Mode:

   npm start

The backend will be running on http://localhost:3000.
## API Reference

### USER

#### Register (Signup)

```http
  POST /api/auth/register

```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name,email, password` | `string` | **Required**. |

#### Login

```http
  POST /api/auth/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email, password`      | `string` | **Required**.  |



#### Assignment Endpoints

```http
  POST /api/assignments
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `upload file-multipart/form-data`      | `string` | **Required**.  |


#### Get My Assignments (Student Only)

```http
  GET /api/assignments/my
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


#### Get All Assignments (Admin Only)

```http
   GET /api/assignments
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**.  |


#### Get All Assignments (Admin Only)

```http
   GET /api/assignments
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**.  |

filtering Query Parameter: status (e.g., ?status=Pending)
Admins should be able to accept or reject assignments and provide feedback if
rejected.


#### Update Assignment Status (Admin Only)

```http
   PATCH /api/assignments/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `student id`      | `string` | **Required**. Id of item to fetch |

#### Manual Role Update (Admin Assignment)

USE assignment_portal;

UPDATE users

SET role = 'admin'

WHERE email = 'john@example.com';


---


## Authors

- [@PiyushGupta](https://github.com/piyushg-07)

