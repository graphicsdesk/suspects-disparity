This story was created with [Spectate](https://github.com/spec-journalism/spectate).

## Setup

Run `spectate clone SLUG`, which will clone the repository `spec-journalism/SLUG` into a new directory named `SLUG` and copy over Google Docs keys. Make sure you have first completed the [prerequisites and setup instructions](https://github.com/spec-journalism/spectate#prerequisites) for Spectate.

## Usage

Make sure you are inside the project directory.

To start the development server, run `npm run dev`.

To re-download the Google Doc, run `spectate download`.

## Deploying to the web

### GitHub Pages

Run `spectate gh-publish`, which will ensure that a `dist/` to `gh-pages` working tree exists, and then push changes to `gh-pages`.
