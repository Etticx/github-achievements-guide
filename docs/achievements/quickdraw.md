# Quickdraw

You earn it by closing an issue or a pull request **within 5 minutes** of opening it. It has only one tier.

Time needed: 1 minute.

## GUI

1. Open any repository you own and go to the **Issues** tab. If you don't see one, enable it under **Settings → General → Features → Issues**.
2. Click **New issue**, type any title, and click **Create**.
3. Scroll down and click **Close issue** right away.

## CLI

Run these inside a clone of your repository, or add `--repo you/your-repo` to both commands.

```bash
url=$(gh issue create --title "Quickdraw test" --body "Closing this right away.")
gh issue close "$url"
```

`gh issue create` prints the new issue's URL. The script saves it and passes it to `gh issue close`.

On **PowerShell**:

```powershell
$url = gh issue create --title "Quickdraw test" --body "Closing this right away."
gh issue close $url
```

## If it doesn't show up

- Close the issue. Don't delete it. Deleting an issue doesn't count, and only admins can delete issues anyway.
- Wait a few hours before trying again.
