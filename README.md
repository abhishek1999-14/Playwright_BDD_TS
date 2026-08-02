# Playwright BDD Test Framework

This project is a Playwright-based end-to-end test framework using Behavior-Driven Development (BDD) with Cucumber-style feature files and step definitions.

## Project Structure

- `tests/features/` - Feature files written in Gherkin
- `tests/steps/` - Step definitions for the BDD scenarios
- `pages/` - Page Object Model (POM) classes for UI interactions
- `src/fixtures/` - Shared test fixtures and setup helpers
- `playwright.config.ts` - Main Playwright configuration
- `playwright-bdd.config.ts` - BDD configuration for feature/step mapping
- `package.json` - Scripts and dependencies

## Prerequisites

Make sure you have the following installed:

- Node.js (recommended: 22.x or newer)
- npm

## Setup

From the project root, run:

```powershell
npm install
npx playwright install
```

## Running Tests

### Run a specific feature file

```powershell
npx playwright test tests/features/loginwithvalidcreds.feature --headed
```

### Run all tests

```powershell
npm run test:all
```

### Run smoke tests

```powershell
npm run smoke
```

### Run sanity tests

```powershell
npm run sanity
```

### Run regression tests

```powershell
npm run regression
```

## Generate Reports

Open the HTML report:

```powershell
npm run report
```

## Notes

- The framework uses Playwright Test with BDD-style feature files.
- The `bdd` script generates the step definitions/spec files from the feature files.
- The project is configured to generate Allure and HTML reports.
