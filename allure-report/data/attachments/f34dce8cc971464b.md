# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\features\signup.feature.spec.js >> Create new user with valid credentials >> User Creates the valid login user
- Location: .features-gen\tests\features\signup.feature.spec.js:6:3

# Error details

```
Error: locator.check: Target page, context or browser has been closed
Call log:
  - waiting for locator('#id_gender1')

```

```
Error: browserContext.close: Target page, context or browser has been closed
```