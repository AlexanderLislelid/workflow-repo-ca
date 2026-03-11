# Workflow CA

This project demonstrates a professional development workflow using linting, formatting, automated checks and testing tools.
The goal of this assignment was to improve code quality and test coverage in an existing project repository.

The repository includes configuration for:

- ESLint
- Prettier
- Husky pre-commit hooks
- Vitest unit testing
- Playwright end-to-end testing

</br>

## Installation

1. Clone the repository

```bash
git clone https://github.com/AlexanderLislelid/workflow-repo-ca.git
```

2. Navigate into the project folder

```bash
cd workflow-repo-ca
```

3. Install dependencies

```bash
npm install
```

</br>

## Available Scripts

- Start live server: `npm start`
- Run Tailwind watcher `npm run dev` Builds the CSS file and watches for changes.
- Run Eslint `npm run lint`
- Run Autofixer `npm run lint:fix`

### Run tests

## Environment Variables

Create a `.env` file in the root directory:

```bash
TEST_USER_EMAIL=your@email
TEST_USER_PASSWORD=your password
```
