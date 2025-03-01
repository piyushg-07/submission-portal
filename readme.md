# Assignment Submission Portal Backend

This project is a backend for an Assignment Submission Portal that allows students to submit assignments and admins to review them. It is built using Node.js, Express, and MySQL, and implements JWT-based authentication, role-based access control, secure file uploads, and other security best practices.

## Technologies Used

- **Node.js** – JavaScript runtime for server-side development.
- **Express** – Web framework for building APIs.
- **MySQL** – Relational database.
- **mysql2** – MySQL client for Node.js.
- **jsonwebtoken** – For creating and verifying JWT tokens.
- **bcrypt** – For secure password hashing.
- **multer** – For handling file uploads.
- **dotenv** – For environment variable management.
- **cors** – To enable Cross-Origin Resource Sharing.
- **helmet** – For securing HTTP headers.
- **express-rate-limit** – For rate limiting incoming requests.
- **nodemon** (dev dependency) – For live-reloading during development.

## Installation and Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [MySQL](https://dev.mysql.com/downloads/) (or use a Dockerized MySQL instance)
- Git (optional)

### Steps

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd assignment-submission-portal

1. **Run Command**

   ```bash

   npm install
   npm run dev

