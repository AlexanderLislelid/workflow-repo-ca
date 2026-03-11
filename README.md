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

</br>

## Testing

### Unit tests (Vitest)
Tests cover the following functions:

- **isActivePath**
  - Returns true when current path matches href exactly
  - Returns true for root path "/" when path is "/" or "/index.html"
  - Returns true when current path includes the href
  - Returns false when paths don't match

- **getUserName**
  - Returns the name from the user object stored in localStorage
  - Returns null when no user exists in storage

Run unit tests with:
```bash
npm run test
```

### End-to-end tests (Playwright)

#### The Playwright tests Verify
-	User can log in with valid credentials from environment variables
-	User sees an error message with invalid credentials
-	Navigation to the home page
- Venue list loads
-	Clicking the first venue opens the venue details page
-	The page heading contains “Venue details”

Run end-to-end tests with:
```bash
npx playwright test
```
## Environment Variables

Create a `.env` file in the root directory:

```bash
TEST_USER_EMAIL=your@email
TEST_USER_PASSWORD=your password
```
