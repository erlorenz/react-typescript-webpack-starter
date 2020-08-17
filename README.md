# react-typescript-webpack-starter

A starter build for React projects using Typescript and compiled with Webpack.

## Other modules:

- React Fast Refresh (replacement for React Hot Module)
- Styled Components with plugin to show names in devtools
- React Router Dom
- Sanitize.css

## Instructions

1. Run 'npm install' to install dependencies.
2. Run 'npm run initialize' to begin a fresh .git folder.
3. Run 'npm run dev' to start the dev server.
4. Run 'npm run build' to build to 'dist/'

## Configuration

- This packages uses dotenv-webpack in development mode and will load any environment variables in a .env file.
- The production build code splits js/ts, extracts css, and minifies everything.
- Assets like web manifest and favicons can be added to the 'public' folder and will be copied into the 'dist/' folder.
- This is transpiled by typescript and ts-loader, babel-loader is only there for React Fast Refresh.
- In development mode type-checking is disabled for hot reloading and because VSCode type-checking is good enough. In production mode it is enabled.

## Upcoming improvements

- Optimize image files
- Move assets to separate folders in 'dist/' (because why not?)
- Add VSCode debug files
