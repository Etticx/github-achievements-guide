# Pair Extraordinaire

You earn it when a merged pull request contains a commit with a `Co-authored-by:` line that credits another GitHub account. The commit's author and each co-author get credit.

| Tier | Merged PRs with co-authored commits |
|---|---|
| Base | 1 |
| Bronze | 10 |
| Silver | 24 |
| Gold | 48 |

Time needed: 5 minutes.

## What the line looks like

The `Co-authored-by` line goes at the very end of the commit message, after a blank line:

```text
Fix typo in README

Co-authored-by: Jane Doe <1234567+janedoe@users.noreply.github.com>
```

The email address must be one that's linked to the co-author's GitHub account. Their no-reply address always works. It has the form `ID+USERNAME@users.noreply.github.com`, and you can look up the ID with:

```bash
gh api users/USERNAME --jq .id
```

Ask your co-author before you add them. Their name will appear on the commit.

## GUI

1. Edit a file on github.com and click **Commit changes…**.
2. In **Extended description**, type the `Co-authored-by:` line. Use a real name and the email described above.
3. Choose **Create a new branch for this commit and start a pull request**, then click **Propose changes**.
4. Click **Create pull request**, then **Merge pull request** → **Confirm merge**.
5. On the commit page you should see two avatars. That means it worked.

## CLI

```bash
id=$(gh api users/FRIEND-USERNAME --jq .id)

git switch -c pair
echo "pair" >> pair.txt
git add pair.txt
git commit -m "Pair commit" -m "Co-authored-by: FRIEND-USERNAME <$id+FRIEND-USERNAME@users.noreply.github.com>"
git push -u origin pair
gh pr create --fill
gh pr merge --merge --delete-branch
```

Each `-m` adds a paragraph to the commit message, so the second `-m` puts the line in the right place.

## If it doesn't show up

- If the commit page shows only one avatar, the email doesn't match the co-author's account. Use the no-reply address.
- **Squash merge** keeps co-author lines, but check the final commit message before you confirm.
