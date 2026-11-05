# Contributing

Thanks for helping keep this accurate. GitHub changes achievements quietly, so fixes from people who just earned (or failed to earn) a badge are the most useful contributions.

## Reporting a wrong rule

Open an issue with:

- the achievement name
- what you did, step by step
- what happened, and roughly how long you waited

Screenshots of the PR or issue timeline help a lot.

## Fixing a guide

The guides are in `docs/achievements/`. The website reads those same files, so you only need to edit them once. To add a new badge page or change a page title, edit `scripts/build_pages.py` and run `python scripts/build_pages.py`.

Keep the existing layout: a short description, a tier table if the badge has tiers, then `## GUI`, `## CLI`, and `## If it doesn't show up`. The site turns the GUI and CLI sections into tabs, so keep those headings exactly as they are.

Test every command you add before you submit it.

## Adding a language

1. Copy `README.md` to `lang/<language>.md`, for example `lang/french.md`.
2. Translate the text. Leave commands, code blocks, and achievement names in English, since that's what people see on GitHub.
3. Change relative links so they work from inside `lang/`: `docs/...` becomes `../docs/...`.
4. Add your language to the language bar at the top of `README.md` and of every file in `lang/`.

Please only translate languages you speak well. Machine translations that nobody has checked will be closed.
