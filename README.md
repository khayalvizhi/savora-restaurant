# SAVORA -- Taste the Extraordinary

A modern, premium restaurant website built with React, TypeScript, and
Tailwind CSS. SAVORA showcases a restaurant menu, allows visitors to
browse food categories, and provides a shopping-cart experience.

## Live Demo

[View SAVORA on Netlify](https://vocal-cuchufli-2aa7c2.netlify.app/)

## Features

-   **Home page** -- Restaurant landing page with a premium visual
    design.
-   **Menu page** -- Browse dishes across categories such as Indian,
    Chinese, Italian, Continental, Mexican, Desserts, and Beverages.
-   **Category filtering** -- Filter menu items by category.
-   **Shopping cart** -- Add items, update quantities, remove items, and
    view the cart total.
-   **About page** -- Learn about the restaurant.
-   **Offers page** -- View restaurant offers.
-   **Contact page** -- Find contact information and use the contact
    form interface.
-   **Multi-page navigation** -- Navigate between pages using React
    Router.
-   **Responsive design** -- Layout designed to work across different
    screen sizes.

## Tech Stack

-   **React** -- Component-based user interface.
-   **TypeScript** -- Type-safe JavaScript.
-   **Vite** -- Development server and production build tool.
-   **Tailwind CSS** -- Utility-first styling.
-   **React Router** -- Client-side page navigation.
-   **Lucide React** -- Icons.

## Getting Started

### Prerequisites

Make sure you have the following installed:

-   [Node.js](https://nodejs.org/)
-   npm (included with Node.js)
-   Git (optional, for version control)

### Installation

1.  Clone the repository:

    ``` bash
    git clone YOUR_GITHUB_REPOSITORY_URL
    ```

2.  Move into the project directory:

    ``` bash
    cd savora
    ```

3.  Install dependencies:

    ``` bash
    npm install
    ```

4.  Start the development server:

    ``` bash
    npm run dev
    ```

5.  Open the local URL shown in your terminal (Vite commonly uses
    `http://localhost:5173`).

## Production Build

To create an optimized production build, run:

``` bash
npm run build
```

The generated production files are placed in the `dist` directory.

To preview the production build locally:

``` bash
npm run preview
```

## Deployment

SAVORA is deployed using Netlify.

Typical Netlify build settings:

  Setting             Value
  ------------------- --------------------------------------------------
  Build command       `npm run build`
  Publish directory   `dist`
  Base directory      Leave empty if the app is at the repository root

A `public/_redirects` file with the following rule can be used to
support direct navigation and page refreshes with React Router on
Netlify:

``` text
/*  /index.html  200
```

## Project Structure

The project follows a typical Vite + React structure. Your exact files
may vary:

``` text
savora/
├── public/              # Static assets, favicon, Netlify redirects
├── src/
│   ├── components/      # Shared UI components
│   ├── data/            # Menu data
│   ├── pages/            # Home, Menu, About, Offers, Contact pages
│   ├── types/            # TypeScript types
│   ├── App.tsx           # App layout and routes
│   └── main.tsx          # React entry point
├── index.html
├── package.json
├── package-lock.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Notes

-   Menu images may be loaded from external image URLs, so an internet
    connection may be required for them to display.
-   The cart is managed in the React application state. Unless
    persistence has been added separately, cart contents may reset when
    the page is refreshed.
-   Replace `YOUR_GITHUB_REPOSITORY_URL` in the clone command with your
    actual GitHub repository URL.

## Contributing

1.  Fork the repository.
2.  Create a feature branch.
3.  Make your changes.
4.  Test the project with `npm run build`.
5.  Submit a pull request.

## License

No license has been specified yet. Add a license file if you intend to
make this project open source.
