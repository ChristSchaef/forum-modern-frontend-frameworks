# Build Systems

## Common

- NPM
  - Project dependency management.
  - Maintaining scripts for tasks such as building, or testing.
- Vite
  - Helps set up development servers and production build tool, with the help of different build tools such as **esbuild** and **rollup**.
  - Provides a standard API to configure and maintain different tools used in the project development, building, testing and linting.
- Static analysis
  - TypeScript compiler: Catches potential errors at compile time, based on the provided compiler options(With Angular using it by default).
  - ESLint: Ensures code quality by identifying errors, enforcing coding standards and applying best practices through configurable rules and presets.
    - Rules
    - Presets
      - General presets
      - eslint:recommended
      - Vue code quality
        - plugin:vue/vue3-recommended
        - @vue/typescript
        - @vue/eslint-config-typescript
        - @vue/eslint-config-prettier/skip-formatting

### Framework-Specific Build Tools

- **Vue Framework:**

  - **Vue CLI:**
    Provides a standardized project setup with a Webpack-based build system. It streamlines development with a development server, hot-reload support, asset optimization for production, and features like a graphical user interface for project management.
  - **Vite (with Vue Plugin):**
    Offers an alternative to Vue CLI by using Vite’s fast development server and simplified build configuration, particularly optimized for Vue 3 with efficient handling of single file components.

- **React Framework:**

  - **Create React App (CRA):**
    The officially supported tool for bootstrapping a new React application, configured with webpack and Babel to manage modern JavaScript features, asset handling, and hot module reloading.
  - **Vite (with React Plugin):**
    Provides a leaner, faster development experience compared to CRA by delivering quick startup and efficient hot module replacement using Vite’s modern bundler and development server.

- **Angular Framework:**
  - **Angular CLI:**
    A critical tool for Angular development that offers comprehensive command-line support. It automates tasks
    - Project initialization
    - Development server setup
    - Production builds
    - Component generation.
      -Angular CLI manages configurations
    - TypeScript compilation
    - Ahead-of-Time (AOT) compilation
    - Asset optimization

### Advantages of using a build system instead of manual configuration

Although you could use most frameworks without any build system, using these build tools help development teams enhance the development process, ensure code quality, and deliver optimized, production-ready applications.

- **Improved Developer Productivity:** Faster feedback loops and streamlined development processes.
- **Higher Code Quality:** Early detection of issues via static analysis, type checking, and linting.
- **Optimized Production Builds:** Efficient bundling and asset optimization for better application performance.
