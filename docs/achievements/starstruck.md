# Starstruck

You earn it when a repository **you own** gets enough stars.

| Tier | Stars on one repository |
|---|---|
| Base | 16 |
| Bronze | 128 |
| Silver | 512 |
| Gold | 4096 |

Time needed: depends on you. There is no command for this one.

## What actually works

- **Make something people search for.** Cheat sheets, starter templates, and small tools that fix one annoying problem get stars, because people bookmark them.
- **Make the README do the selling.** Say in one sentence what it does, show a screenshot or GIF, and give an install command people can copy.
- **Add topics.** In the repository's About box (the gear icon), add 5–10 topics people browse, such as `cli`, `react`, or `cheatsheet`.
- **Share it once, in the right place.** One honest post to a subreddit, Discord, or dev.to community that cares about the problem works better than spamming ten places.
- **Ask the people you helped.** If a classmate used your tool, it's fine to ask them for a star.

## What not to do

Buying stars, star-for-star trading, and using fake accounts break GitHub's [Acceptable Use Policies](https://docs.github.com/en/site-policy/acceptable-use-policies/github-acceptable-use-policies). GitHub removes fake stars and can flag your account.

## GUI

There are no steps to follow. Check your progress on the repository page: the star count is at the top right.

## CLI

Check your star count:

```bash
gh repo view YOUR-USERNAME/YOUR-REPO --json stargazerCount --jq .stargazerCount
```
