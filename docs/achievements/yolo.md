# YOLO

You earn it by merging a pull request **without a code review**. It has only one tier.

Time needed: 5 minutes, plus however long it takes to add a collaborator.

## Why you need a reviewer

Merging your own PR in a repository where nobody else works usually doesn't trigger YOLO. The most reliable method people report is:

1. Ask someone for a review.
2. Merge before they review.

That means the repository needs at least one other person who can review: a friend, a classmate, or a second account of yours.

## GUI

1. In your repository, go to **Settings → Collaborators → Add people** and invite your reviewer. They need to accept the invite.
2. Edit any file, commit it to a **new branch**, and open a pull request (the same steps as the [Pull Shark guide](pull-shark.md)).
3. In the PR's right-hand sidebar, click **Reviewers** and pick your collaborator.
4. Don't wait. Click **Merge pull request**, then **Confirm merge**.

If GitHub blocks the merge with "Review required", a branch protection rule or ruleset is on. Use a repository without one, or turn that rule off for this test.

## CLI

Invite the collaborator (they still accept the invite on github.com):

```bash
gh api -X PUT repos/YOUR-USERNAME/YOUR-REPO/collaborators/FRIEND-USERNAME
```

Then open the PR with a reviewer and merge it right away:

```bash
git switch -c yolo
echo "yolo" >> yolo.txt
git add yolo.txt
git commit -m "YOLO"
git push -u origin yolo
gh pr create --fill --reviewer FRIEND-USERNAME
gh pr merge --merge --delete-branch
```

## If it doesn't show up

- Check that the PR's timeline shows "requested a review from …" before "merged".
- Make sure the reviewer had accepted the collaborator invite. Otherwise the review request may not have gone through.
