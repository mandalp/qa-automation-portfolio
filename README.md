# 🧪 Cypress QA Portfolio (based on WebDojo)

## 🎯 Purpose of this Repository

This repository is a **QA Automation portfolio** created to demonstrate
best practices in **Cypress test automation**, using the **WebDojo** application
as a testing playground.

The focus of this project is:
- Test automation with Cypress
- Clean code and test organization
- Application of testing patterns (Page Object, custom commands, helpers)
- Realistic test scenarios (positive and negative)
- Gherkin / BDD examples for test readability
- API testing and validation using Cypress

---

## 🧠 What Was Implemented

This repository includes practical examples of:

- Cypress end-to-end tests following the Arrange / Act / Assert pattern
- Page Object pattern for UI abstraction
- Custom Cypress commands for reusable actions
- Utility/helper functions for shared logic
- Dynamic data handling and assertions
- Input masking validation (CPF / CNPJ, phone, etc.)
- Radio button and checkbox group validation
- Error and validation message strategies
- API tests with request and response validation
- Integration between API and UI tests when applicable
- BDD scenarios using Gherkin (feature files)
- Improved test maintainability and scalability

---

## 📁 Project Structure

```text
cypress/
├── docs/
│   └── bdd/
│       ├── cep-search.feature
│       ├── consultancy.feature
│       └── github-profiles.feature
│
├── e2e/
│   └── Cypress end-to-end tests
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
│   │   └── cep.actions.js
│   ├── commands.js
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

## 👩‍💻 About the Author

This repository is part of my **professional QA Engineer portfolio**,
showcasing real-world Cypress automation techniques,
including UI and API testing.
