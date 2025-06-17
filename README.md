# Quiz App – CI/CD Challenge 19

A full-stack quiz application built with **React**, **TypeScript**, **Node.js**, **Express**, and **MongoDB**.  
This project demonstrates a modern CI/CD pipeline using **GitHub Actions** and **Render** for automated testing and deployment.

---

## 🚀 Live Application

- 🔗 **Backend deployed on Render:**  
  [https://quiz-backend-er48.onrender.com](https://quiz-backend-er48.onrender.com)

- 📁 **GitHub Repository:**  
  [https://github.com/erveygarcia/quiz-app-cicd](https://github.com/erveygarcia/quiz-app-cicd)

---

## 🛠️ Features

- 🔄 GitHub Flow using `main`, `develop`, and `feature` branches.
- ✅ **Cypress Component Tests** run automatically when a Pull Request is made to `develop`.
- 🚀 **Automatic Deployment to Render** when code is pushed to `main`, using a secure Deploy Hook.
- 🌱 Modular folder structure using models, services, routes, and mocks.

---

## ⚙️ CI/CD Pipeline

### ✅ Continuous Integration (CI)

- GitHub Action runs Cypress component tests on every Pull Request to `develop`.
- Test results are shown directly in the PR under the "Checks" tab.

### 🚀 Continuous Deployment (CD)

- On every push or merge to `main`, a GitHub Action triggers a Deploy Hook to Render.
- Auto-deployment updates the live backend application instantly.

---

## 📸 Screenshots

![Cypress GitHub Action](./Assets/19-Actions-Cypress-Tests.png)
*Component tests run automatically on PR to `develop`.*

![Render Deployment Hook](./Assets/19-Actions-Render-Deploy.png)
*Deploy to Render triggered when `main` is updated.*

---

## 📦 Tech Stack

- **Frontend:** React, Vite, TypeScript
- **Backend:** Node.js, Express, TypeScript, MongoDB (via Mongoose)
- **Testing:** Cypress (Component Testing)
- **CI/CD:** GitHub Actions + Render Deploy Hooks

---

## 👨‍💻 Author

Ervey Garcia – [GitHub Profile](https://github.com/erveygarcia)

---

© 2025 – Bootcamp Full-Stack Development  