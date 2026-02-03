# 🧪 Cypress QA Portfolio (based on WebDojo)

## 🎯 Purpose of this Repository

This repository is a **QA Automation portfolio** created to demonstrate
best practices in **Cypress automation**, combining **UI and API testing**
using the **WebDojo application** and a **User Management API (CRUD)** as
testing playgrounds.

The main goals of this project are:
- Cypress automation for UI and API testing
- Clean code, test readability and maintainability
- Real-world QA scenarios (positive and negative)
- Application of testing patterns and best practices
- Test data management and environment control
- End-to-end quality mindset

---

## 🧠 What Was Implemented

This repository includes practical examples of:

- Cypress end-to-end tests following the **Arrange / Act / Assert** pattern
- Page Object pattern for UI abstraction
- Custom Cypress commands for reusable actions
- Utility/helper functions for shared logic
- Dynamic and reusable test data using fixtures
- Input masking validation (CPF / CNPJ, phone, etc.)
- Radio button and checkbox group validation
- Error handling and validation message strategies
- API testing using Cypress (`cy.request` / `cy.api`)
- Full CRUD API tests (POST, GET, PUT, DELETE)
- Database cleanup and test isolation strategies
- Integration between API and UI tests when applicable
- BDD scenarios using **Gherkin** (feature files)
- Improved test scalability and maintainability

---

## 🧪 Technologies & Tools

- Cypress
- JavaScript
- Node.js
- Express
- Prisma ORM
- PostgreSQL
- Git & GitHub
- dotenv
- Gherkin / BDD

---

## 📁 Project Structure

```text
api/
├── prisma/
│   ├── migrations/
│   └── schema.prisma
├── index.js
├── .env
└── package.json

cypress/
├── docs/
│   └── bdd/
│       ├── cep-search.feature
│       ├── consultancy.feature
│       └── github-profiles.feature
│
├── e2e/
│   ├── get.cy.js
│   ├── post.cy.js
│   ├── put.cy.js
│   └── delete.cy.js
│
├── fixtures/
│   ├── cep.json
│   ├── consultancy.json
│   ├── githubProfiles.json
│   ├── users.json
│   └── document.pdf
│
├── pages/
│   └── Page Objects
│
├── support/
│   ├── actions/
│   │   ├── consultancy.actions.js
│   │   ├── github.actions.js
│   │   └── user.actions.js
│   ├── commands.js
│   ├── database.js
│   ├── e2e.js
│   └── utils.js
```

---

## ▶️ Running the WebDojo Application

The WebDojo application is located in the **same repository**.

Before executing the tests, start the application with:

```bash
npm run dev
```

The application will be available at:

http://localhost:3000

---

## ▶️ User Management API

```bash
npm run dev
```

API will be available at:
http://localhost:3333

---

## ▶️ Running the Automated Tests

```bash
npm test
```

```bash
npm run open
```

```bash
npm run cy:chrome
```

```bash
npm run test:login:mobile
```

---

## 🚀 Next Improvements (Roadmap)
- CI integration (GitHub Actions)
- Test execution reports
- Contract testing examples
- Performance testing basics
- Expanded negative and edge case scenarios


## 👩‍💻 About the Author

This repository is part of my **professional QA Engineer portfolio**.

**Amanda Lopes**  
QA Engineer with experience in functional, exploratory, UI and API testing, focused on automation, test strategy, and delivering high-quality software through reliable and maintainable test solutions.

🔗 LinkedIn: https://www.linkedin.com/in/mandalps
