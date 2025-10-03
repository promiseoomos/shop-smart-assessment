# AI Coding Agent Instructions for `shop-smart`

Welcome to the `shop-smart` codebase! This document provides essential guidelines for AI coding agents to be productive and aligned with the project's conventions.

## Project Overview

`shop-smart` is a Vue 3 application built with Vite. It includes TypeScript for type safety, Vitest for unit testing, and Cypress for end-to-end testing. The project follows modern frontend development practices and emphasizes modularity and maintainability.

### Key Directories
- **`src/`**: Contains the main application code.
  - `App.vue`: Root Vue component.
  - `main.ts`: Application entry point.
  - `router/`: Vue Router configuration.
  - `stores/`: Pinia state management stores.
  - `lib/`: Utility functions.
  - `assets/`: Static assets like CSS.
- **`cypress/`**: End-to-end testing setup.
  - `e2e/`: Cypress test specifications.
  - `support/`: Custom Cypress commands and configurations.
- **`__tests__/`**: Unit tests for components and utilities.

### External Dependencies
- **Vue 3**: Core framework.
- **Vite**: Build tool.
- **Pinia**: State management.
- **Cypress**: End-to-end testing.
- **Vitest**: Unit testing.

## Development Workflows

### Setup
1. Install dependencies:
   ```sh
   npm install
   ```

2. Start the development server:
   ```sh
   npm run dev
   ```

### Testing
- **Unit Tests**:
  ```sh
  npm run test:unit
  ```
- **End-to-End Tests** (development server):
  ```sh
  npm run test:e2e:dev
  ```
- **End-to-End Tests** (production build):
  ```sh
  npm run build
  npm run test:e2e
  ```

### Linting
Run ESLint to ensure code quality:
```sh
npm run lint
```

## Project-Specific Conventions

### TypeScript
- Use `vue-tsc` for type checking `.vue` files.
- Ensure all components and utilities are strongly typed.

### Vue Components
- Follow the [Vue Style Guide](https://vuejs.org/style-guide/).
- Use the `script setup` syntax for simplicity.

### State Management
- Use Pinia for global state management.
- Define stores in the `src/stores/` directory.

### Testing
- Write unit tests for all components and utilities in `__tests__/`.
- Use Cypress for end-to-end testing of critical user flows.

## Integration Points

### API Integration
- API calls should be abstracted into utility functions in `src/lib/`.
- Use mock data for testing API-dependent features.

### Router
- Define routes in `src/router/index.ts`.
- Ensure all routes are lazy-loaded for performance.

### State Management
- Centralize shared state in Pinia stores.
- Avoid directly mutating state outside of store actions.

## Examples

### Adding a New Component
1. Create the component in `src/components/`.
2. Write a unit test in `src/__tests__/`.
3. Import and use the component in the appropriate parent component.

### Writing a Cypress Test
1. Add the test in `cypress/e2e/`.
2. Use custom commands from `cypress/support/commands.ts` where applicable.
3. Run the test with:
   ```sh
   npm run test:e2e:dev
   ```

---

For additional details, refer to the `README.md` or the respective configuration files.