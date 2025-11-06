# Alura Next.js: Get to Know the React Framework

This project is a Next.js application designed to showcase the capabilities of the React framework. It likely serves as a blog or content display platform, featuring components for layout, user avatars, and post cards.

## Technologies Used

*   **Next.js** (v14.2.33)
*   **React**
*   **TypeScript**

## Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites

Ensure you have Node.js (v20.18.1) and npm (v10.8.2) installed.

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd alura-nextjs-get-to-know-the-react-framework
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

To start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

### Building the Project

To build the application for production:

```bash
npm run build
```

### Starting the Production Server

To run the built application in production mode:

```bash
npm run start
```

### Linting

To run the linter:

```bash
npm run lint
```

To run the linter and automatically fix issues:

```bash
npm run lint:fix
```

### Running the Mock API

To start the mock API server, which serves data from `posts.json`:

```bash
npm run api
```

The API will be available at `http://localhost:3042`.


## Project Structure

The project follows a standard Next.js structure with a focus on modular components:

*   `src/app`: Contains the main application pages and layout.
*   `src/components`: Houses reusable UI components such as `Aside`, `Avatar`, and `CardPost`.
*   `public`: For static assets like images (`logo.png`, `favicon.ico`).

## Learn More

To learn more about Next.js, take a look at the following resources:

*   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
*   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!