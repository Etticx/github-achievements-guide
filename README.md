# GitHub Achievements Guide

How to earn each GitHub achievement, step by step, using either the github.com website or the terminal (`git` + `gh`).

**[Open the guide website →](https://etticx.github.io/github-achievements-guide/)**

**English** · [Bahasa Melayu](lang/malay.md) · [Bahasa Indonesia](lang/indonesian.md) · [简体中文](lang/chinese.md) · [Español](lang/spanish.md)

## Check which ones you have

Go to `https://github.com/<your-username>?tab=achievements` and hover over a badge to see its tier. A new badge can take a few hours to appear. If the tab is empty, turn on **Settings → Public profile → Show Achievements on my profile**.

## Achievements

| | Achievement | How to earn it | Tiers | Guide |
|---|---|---|---|---|
| <img src="https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png" width="40" alt=""> | **Quickdraw** | Close an issue or PR within 5 minutes of opening it | – | [Guide](docs/achievements/quickdraw.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png" width="40" alt=""> | **YOLO** | Merge a PR without a code review | – | [Guide](docs/achievements/yolo.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png" width="40" alt=""> | **Pull Shark** | Get PRs you opened merged | 2 · 16 · 128 · 1024 | [Guide](docs/achievements/pull-shark.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png" width="40" alt=""> | **Pair Extraordinaire** | Be a co-author on a commit in a merged PR | 1 · 10 · 24 · 48 | [Guide](docs/achievements/pair-extraordinaire.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/starstruck-default.png" width="40" alt=""> | **Starstruck** | Own a repository with enough stars | 16 · 128 · 512 · 4096 | [Guide](docs/achievements/starstruck.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/galaxy-brain-default.png" width="40" alt=""> | **Galaxy Brain** | Get answers accepted in GitHub Discussions | 2 · 8 · 16 · 32 | [Guide](docs/achievements/galaxy-brain.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/public-sponsor-default.png" width="40" alt=""> | **Public Sponsor** | Sponsor someone through GitHub Sponsors | – | [Guide](docs/achievements/public-sponsor.md) |

**New to this?** The first four take about 10 minutes in one practice repository.

**Can't be earned right now:** Heart On Your Sleeve and Open Sourcerer (being tested by GitHub), and Mars 2020 Contributor and Arctic Code Vault Contributor (retired).

## Tutorial

Full step-by-step guides for every achievement, with website and terminal instructions:

**👉 https://etticx.github.io/github-achievements-guide/**

## Quick start (terminal)

You need [Git](https://git-scm.com/) and the [GitHub CLI](https://cli.github.com/) (`gh auth login` once). Run these in a practice repository you own.

<details>
<summary><b>Quickdraw</b>: open an issue and close it straight away</summary>

```bash
url=$(gh issue create --title "Quickdraw test" --body "Closing this right away.")
gh issue close "$url"
```
</details>

<details>
<summary><b>Pull Shark</b>: open and merge two PRs</summary>

```bash
for i in 1 2; do
  git switch -c "shark-$i"
  echo "change $i" >> shark.txt
  git add shark.txt
  git commit -m "Pull Shark $i"
  git push -u origin "shark-$i"
  gh pr create --fill
  gh pr merge --merge --delete-branch
  git pull --ff-only
done
```
</details>

YOLO and Pair Extraordinaire need a second person. Their guides explain how.

## Play fair

Practise in your own repository, not on other people's projects. Buying or trading stars breaks GitHub's [Acceptable Use Policies](https://docs.github.com/en/site-policy/acceptable-use-policies/github-acceptable-use-policies).

## Contributing and license

Fixes and translations are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md). The content is under the [MIT](LICENSE) license. Badge images belong to GitHub and are not covered by it.

If this helped you, a ⭐ helps others find it.

---

Last checked: November 2026. GitHub changes achievements without announcing it. If something here is wrong, [open an issue](../../issues).
