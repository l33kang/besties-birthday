# 🎂 Happy Birthday, Sarro!

A small interactive birthday game and mobile app that I created as a personal birthday gift for my best friend, Sarro.

The project started from an existing **Phaser 3** HTML5 game project. I customized and extended the original project, fixed issues, added my own content and changes, and created my own version of the birthday experience.

🌐 **Live Web Version:** https://hb-sarro-server.onrender.com/

---

## 📖 About the Project

This project was created as a personalized birthday experience rather than a traditional website.

The original project provided the basic Phaser 3 game structure. I used it as a starting point and then modified it to create my own version, including changing the game content, fixing problems in the original implementation, and adapting it for my use case.

The finished project was deployed online using **Render**, where the web version has remained available since I deployed it.

I also created a **mobile app version** of the project so the birthday experience could be used as an Android application.

---

## 🛠️ Built With

- **HTML5**
- **JavaScript**
- **Phaser 3**
- **Node.js**
- **npm**
- **Render**
- **Android / Mobile App**

Phaser 3 was used as the game framework for the interactive web experience.

---

## ✨ What I Did

Starting from the original Phaser 3 project, I:

- Customized the existing game for my own birthday project.
- Replaced and modified the original content.
- Fixed issues I encountered while working with the project.
- Added my own birthday-related experience and assets.
- Adapted the project into my own version instead of using the original project unchanged.
- Built a mobile version of the application.
- Configured the project to run as a web application.
- Deployed the web version to **Render**.
- Kept the application running online after deployment.

---

## 🌐 Live Demo

The web version is available here:

**https://hb-sarro-server.onrender.com/**

Open it in a browser and enjoy the birthday game.

---

## 🚀 Running the Project Locally

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd <project-folder>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

The development server will start locally.

Open:

```text
http://localhost:8080/
```

The development setup also watches for source changes and refreshes the browser when the project is updated.

---

## 📦 Build for Deployment

To create an optimized production build:

```bash
npm run build
```

This builds and minimizes the compiled bundle for deployment.

---

## 🖥️ Production Server

The project includes a production server that can serve the compiled static files and `.ogg` audio files.

Run:

```bash
npm run server
```

The server uses:

```text
process.env.PORT || 5000
```

This also makes it suitable for deployment on platforms such as Render where the application port is provided through the `PORT` environment variable.

---

## 📱 Mobile Version

I also created a mobile version of the project based on the customized web game.

The mobile version packages the birthday experience as an Android application so it can be used without opening the web version in a browser.

---

## ☁️ Deployment

The web version is hosted using **Render**.

The application is configured to run as a production Node.js web service and uses the port supplied by the hosting environment.

The deployed application has been running online since the original deployment.

---

## 🧩 Project Structure

The project is based around a Phaser 3 game and a Node.js web server.

A typical structure includes:

```text
project/
├── src/
│   ├── game/
│   └── ...
├── public/
├── assets/
├── package.json
├── package-lock.json
└── server.js
```

The exact structure may differ depending on the version of the project.

---

## 🎮 Phaser 3

The game uses **Phaser 3** as its main game framework.

Phaser handles the interactive game environment, including things such as:

- Game scenes
- Game objects
- Input
- Animation
- Audio
- Rendering
- Game logic

More information about Phaser can be found at:

https://phaser.io/phaser3

---

## 🔧 Development Process

This project was also an opportunity to learn by taking an existing project and understanding how its different parts worked.

Instead of simply running the original project, I worked through the code and modified it until it became the version I wanted.

The general process was:

```text
Original Phaser Project
        ↓
Understand the existing code
        ↓
Modify the game
        ↓
Fix issues
        ↓
Add personal content
        ↓
Create mobile version
        ↓
Test
        ↓
Deploy to Render
        ↓
Live Birthday Experience
```

---

## 📚 What I Learned

Through this project, I gained practical experience with:

- Working with an existing codebase.
- Understanding and modifying JavaScript.
- Working with the Phaser 3 framework.
- Managing npm dependencies.
- Running local development servers.
- Building production web applications.
- Serving static game assets.
- Working with audio assets.
- Creating a mobile version of a web project.
- Deploying applications to Render.
- Debugging problems in an unfamiliar codebase.

---

## ❤️ Why I Built It

This wasn't built as a commercial application or university assignment.

I made it as a personal birthday project for someone important to me.

The goal was to create something more personal than simply sending a birthday message—a small interactive experience that could be played and kept as a memory.

---

## 📌 Note About the Original Project

This project was **based on an existing Phaser 3 birthday-game project**.

The original project provided the foundation, while this version contains my own modifications, fixes, customization, content, and deployment.

The original repository and its respective authors retain ownership of their original code and assets. This repository represents my customized version and the work I performed on top of that foundation.

---

## 📄 License

This project is a personal project.

Please check the original project's license and the licenses of any third-party assets before redistributing or reusing the project.

---

### 🎂 Made with code, debugging, and a lot of love.

**Happy Birthday, Sarro! ❤️**
