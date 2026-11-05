# Pull Shark

You earn it when pull requests **you opened** get merged. PRs into your own repositories count.

| Tier | Merged PRs |
|---|---|
| Base | 2 |
| Bronze | 16 |
| Silver | 128 |
| Gold | 1024 |

Time needed: about 5 minutes for the base tier.

## GUI

1. Create a new repository on github.com and tick **Add a README file**. This gives you something to edit.
2. Open `README.md` and click the pencil icon (**Edit this file**).
3. Change any line. A single word is enough.
4. Click **Commit changes…**, choose **Create a new branch for this commit and start a pull request**, then click **Propose changes**.
5. On the next page, click **Create pull request**.
6. Click **Merge pull request**, then **Confirm merge**.
7. Optional: click **Delete branch** to keep things tidy.
8. Do steps 2–6 a second time. That's 2 merged PRs.

## CLI

You need [Git](https://git-scm.com/) and the [GitHub CLI](https://cli.github.com/). Log in once with `gh auth login`.

Create a practice repository and clone it:

```bash
gh repo create achievements-practice --public --add-readme --clone
cd achievements-practice
```

Then open and merge two PRs:

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

What each part does:

- `git switch -c` makes a new branch for the change.
- `gh pr create --fill` opens a PR and uses the commit message as the title.
- `gh pr merge --merge --delete-branch` merges the PR, deletes the branch, and switches you back to your default branch.
- `git pull --ff-only` brings in the merge so the next branch starts from it.

On **PowerShell**, write the loop as `foreach ($i in 1..2) { ... }`. The lines inside stay the same.

## If it doesn't show up

- Wait a few hours. Achievements are not given out instantly.
- Make sure the PRs say **Merged**, not **Closed**. A closed PR doesn't count.
- Check that Achievements are turned on under **Settings → Public profile**.

## Higher tiers

Don't merge 1024 empty PRs into a junk repository. You're unlikely to get flagged for it, but it makes your profile look bad to anyone who checks. Real PRs to projects you use get you there more slowly, and they're worth more.
