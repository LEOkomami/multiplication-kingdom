# Multiplication Kingdom, a fantasy animal adventure

## Project goal
A dynamic web game for kids to practice multiplication tables in a fun, simple, non intimidating way. No general knowledge, no tricky puzzles, only multiplication.

## How it works
- The game shows a multiplication grid (up to 10 or 12).
- Each cell is a "quest".
- A correct answer conquers the cell and awards a fantasy animal to the collection.
- Progress is saved locally using browser LocalStorage.

## Profiles
You can create multiple profiles (for siblings or friends). Each profile has its own:
- conquered cells progress
- animal collection
- stats (correct, wrong, streak)
- settings (10 or 12, table focus, show answers)

## Game modes
1) Quest  
One question at a time, calm progression through new cells.

2) Sprint  
A 60 second timer, answer as many as possible for fast practice.

## Quick customization
- "Max number": 10 or 12.
- "Table focus": focus a specific table (for example 7) or auto.
- "Show answers on grid": show or hide results in conquered cells.

## Files
- `index.html` includes everything, UI, logic, profiles, persistence.
- `.github/workflows/static.yml` deploys to GitHub Pages.

## Deploy to GitHub Pages
1) Create a new GitHub repository.
2) Upload the files.
3) The GitHub Action will run automatically.
4) Go to Settings -> Pages and ensure the source is set to GitHub Actions.

## Privacy note
- All data stays in LocalStorage on the local machine.
- No backend, no accounts, no analytics.
