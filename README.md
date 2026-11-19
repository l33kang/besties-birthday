# 🎂 Happy Birthday, Sarro!

A small interactive birthday game and mobile app that I created as a personal birthday gift for my best friend, Sarro.

The project started from an existing Phaser 3 HTML5 game project. I customized and extended the original project, fixed issues, redesigned the main character, added my own content and assets, and created my own version of the birthday experience.

🌐 **Live Web Version:** https://hb-sarro-server.onrender.com/

---

## 📖 About the Project

This project was created as a personalized birthday experience rather than a traditional website.

The original project provided the basic Phaser 3 game structure. I used it as a starting point and then modified it to create my own version, including changing the game content, fixing problems in the original implementation, redesigning the character, and adapting the experience for my use case.

One of the main parts I customized was the game's character. I **recreated and redesigned the character using Adobe Photoshop**, giving the project its own visual identity rather than keeping the original character unchanged.

The finished project was deployed online using **Render**, where the web version has remained available since I deployed it.

I also created a mobile app version of the project so the birthday experience could be used as an Android application.

---

## 🛠️ Built With

- **HTML5**
- **JavaScript**
- **Phaser 3**
- **Node.js**
- **npm**
- **Adobe Photoshop**
- **Render**
- **Android**

Phaser 3 was used as the game framework for the interactive web experience, while Photoshop was used to recreate and redesign the game's character and visual assets.

---

## ✨ What I Did

Starting from the original Phaser 3 project, I:

- Customized the existing game for my own birthday project.
- Replaced and modified the original content.
- **Recreated and redesigned the game character using Adobe Photoshop.**
- Created and modified visual assets for the customized experience.
- Fixed issues I encountered while working with the project.
- Added my own birthday-related experience and content.
- Adapted the original project into my own version.
- Built a mobile version of the application.
- Configured the project to run as a web application.
- Deployed the web version to Render.
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
git clone https://github.com/l33kang/besties-birthday.git
cd besties-birthday
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

This makes it suitable for deployment on platforms such as Render, where the application port is provided through the `PORT` environment variable.

---

## 📱 Mobile Version

I also created a mobile version of the project based on the customized web game.

The mobile version packages the birthday experience as an Android application so it can be used without opening the web version in a browser.

The Android APK is available in the project's **GitHub Releases**.

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

Phaser handles the interactive game environment, including:

- Game scenes
- Game objects
- Input
- Animation
- Audio
- Rendering
- Game logic

More information about Phaser 3:

https://phaser.io/phaser3

---

## 🎨 Character & Visual Design

The game's main character was not kept in its original form.

I **recreated and redesigned the character in Adobe Photoshop** specifically for my version of the game.

This involved creating the character artwork and adapting the visual assets so they could be used within the Phaser game.

This was one of the main parts of the project where I contributed beyond the original codebase.

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
Redesign character & visual assets
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
- Creating and modifying game assets.
- Using Adobe Photoshop for game asset design.
- Working with audio assets.
- Creating a mobile version of a web project.
- Deploying applications to Render.
- Debugging problems in an unfamiliar codebase.

---

## ❤️ Why I Built It

This wasn't built as a commercial application or university assignment.

I made it as a personal birthday project for someone important to me.

The goal was to create something more personal than simply sending a birthday message — a small interactive experience that could be played and kept as a memory.

---

## 📌 Note About the Original Project

This project was **based on an existing Phaser 3 birthday-game project**.

The original project provided the foundation, while this version contains my own modifications, fixes, visual redesign, customization, content, mobile adaptation, and deployment.

The original repository and its respective authors retain ownership of their original code and assets. This repository represents my customized version and the work I performed on top of that foundation.

---

## 📄 License

This project is a personal project.

Please check the original project's license and the licenses of any third-party assets before redistributing or reusing the project.

---

### 🎂 Made with code, design, debugging, and a lot of love.

**Happy Birthday, Sarro! ❤️**
