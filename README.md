
### Email Subscription App using Node.js and Docker

This project is a lightweight email subscription web app built with Node.js, HTML, and CSS. It runs inside a Docker container and persists subscriber data using Docker volumes. Users can subscribe via a simple form, and emails are stored securely in a `emails.txt` file.

**Key Features:**

* Frontend built with HTML and CSS for collecting email subscriptions.
* Backend built with Node.js and Express for handling HTTP requests.
* Subscribers’ emails are stored in a `emails.txt` file using filesystem I/O.
* Dockerized setup with volumes to persist email data across container restarts.
* "Show Subscribers" feature fetches and displays the list of saved emails.

**Technologies Used:**

* Node.js & Express.js (Backend)
* HTML/CSS/JavaScript (Frontend)
* Docker (Containerization)
* Docker Volumes (Data persistence)

**How It Works:**

1. Users submit emails via a form.
2. The email is sent to the server via a POST request.
3. Server saves the email in `emails.txt`.
4. Docker volume ensures `emails.txt` is persistent.
5. A button allows viewing all saved subscribers.

This project demonstrates full-stack development, data persistence with Docker, and basic DevOps skills for deploying and managing a containerized Node.js application.
