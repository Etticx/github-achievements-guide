# GitHub Achievements Guide

How to earn each GitHub achievement, step by step: once through the github.com website, and once from the terminal with `git` and `gh`.

**English** · [Bahasa Melayu](lang/malay.md) · [Bahasa Indonesia](lang/indonesian.md) · [简体中文](lang/chinese.md) · [Español](lang/spanish.md)

**Website with full walkthroughs:** https://YOUR-USERNAME.github.io/github-achievements-guide/

> Last checked: November 2026. GitHub changes achievements without announcing it. If something here is wrong, [open an issue](../../issues).

---

## See which ones you already have

Go to `https://github.com/<your-username>?tab=achievements`. Hover over a badge to see its tier (×2, ×3, ×4). Badges can take a few hours to appear after you qualify.

If the tab is empty, check **Settings → Public profile → Contributions & activity** and make sure "Show Achievements on my profile" is turned on.

## Achievements you can earn

| | Achievement | How to earn it | Tiers (base / bronze / silver / gold) | Guide |
|---|---|---|---|---|
| <img src="https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png" width="48" alt=""> | **Pull Shark** | Get pull requests you opened merged | 2 / 16 / 128 / 1024 merged PRs | [Guide](docs/achievements/pull-shark.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png" width="48" alt=""> | **Quickdraw** | Close an issue or PR within 5 minutes of opening it | none | [Guide](docs/achievements/quickdraw.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png" width="48" alt=""> | **YOLO** | Merge a PR without a code review | none | [Guide](docs/achievements/yolo.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png" width="48" alt=""> | **Pair Extraordinaire** | Be a co-author on a commit in a merged PR | 1 / 10 / 24 / 48 merged PRs | [Guide](docs/achievements/pair-extraordinaire.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/starstruck-default.png" width="48" alt=""> | **Starstruck** | Own a repository that gets enough stars | 16 / 128 / 512 / 4096 stars | [Guide](docs/achievements/starstruck.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/galaxy-brain-default.png" width="48" alt=""> | **Galaxy Brain** | Get your answers accepted in GitHub Discussions | 2 / 8 / 16 / 32 accepted answers | [Guide](docs/achievements/galaxy-brain.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/public-sponsor-default.png" width="48" alt=""> | **Public Sponsor** | Sponsor someone through GitHub Sponsors | none | [Guide](docs/achievements/public-sponsor.md) |

### Where to start

If you have never done this before, go in this order: **Quickdraw → YOLO → Pull Shark**. All three can be done alone in one empty repository in about 10 minutes. Pair Extraordinaire also works alone if you have a second GitHub account or a friend who is okay with being listed as a co-author.

### Quick CLI recipes

These need [Git](https://git-scm.com/) and the [GitHub CLI](https://cli.github.com/) (`gh auth login` once). Run them inside a repository you own that you don't mind filling with test commits. The full guides explain each step and cover the website method.

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

`--delete-branch` switches you back to your default branch. `git pull` brings in the merge so the next branch starts from it.
</details>

<details>
<summary><b>YOLO</b>: request a review, then merge before it happens</summary>

```bash
git switch -c yolo
echo "yolo" >> yolo.txt && git add yolo.txt && git commit -m "YOLO"
git push -u origin yolo
gh pr create --fill --reviewer SOME-COLLABORATOR
gh pr merge --merge --delete-branch
```

The reviewer has to be a collaborator on the repository. See the [guide](docs/achievements/yolo.md) for why the review request matters.
</details>

<details>
<summary><b>Pair Extraordinaire</b>: add a <code>Co-authored-by</code> line, then merge</summary>

```bash
# Look up the co-author's no-reply email address
id=$(gh api users/FRIEND-USERNAME --jq .id)

git switch -c pair
echo "pair" >> pair.txt && git add pair.txt
git commit -m "Pair commit" -m "Co-authored-by: FRIEND-USERNAME <$id+FRIEND-USERNAME@users.noreply.github.com>"
git push -u origin pair
gh pr create --fill
gh pr merge --merge --delete-branch
```
</details>

## Achievements you can't earn right now

| Achievement | Status |
|---|---|
| Heart On Your Sleeve (react with ❤️) | Being tested by GitHub. Not everyone can earn it yet. |
| Open Sourcerer (PRs merged in several public repos) | Being tested by GitHub. Not everyone can earn it yet. |
| Mars 2020 Contributor | Gone. Given once, for code used in the Mars 2020 helicopter mission. |
| Arctic Code Vault Contributor | Gone. Given once, for code in the 2020 GitHub Archive Program. |

Galaxy Brain answers in the `github/community` discussions no longer count. Answers in other repositories' Discussions still do.

## Profile highlights (not achievements)

These show up on your profile too, but you can't work toward them the same way: **PRO** (paid GitHub plan), **Developer Program Member**, **Security Bug Bounty Hunter**, **Security Advisory Credit**, **GitHub Campus Expert**, and **GitHub Star**.

## A note on doing this fairly

Use your own repository for practice. Opening throwaway PRs or issues on other people's projects wastes maintainers' time and can get you blocked. Buying or trading stars breaks GitHub's [Acceptable Use Policies](https://docs.github.com/en/site-policy/acceptable-use-policies/github-acceptable-use-policies), and GitHub removes fake stars.

The honest way to get a badge's higher tiers is to contribute to real projects. Look for issues labelled `good first issue` on projects you already use.

## Contributing

Found an outdated rule, a broken command, or want to add a language? See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE). Achievement badge images belong to GitHub and are loaded from GitHub's servers. They are not covered by this license.

If this guide helped you, a star helps other people find it. It also counts toward someone's Starstruck badge.
