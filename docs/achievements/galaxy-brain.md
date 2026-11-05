# Galaxy Brain

You earn it when your answers in GitHub Discussions are **marked as the accepted answer**.

| Tier | Accepted answers |
|---|---|
| Base | 2 |
| Bronze | 8 |
| Silver | 16 |
| Gold | 32 |

Time needed: depends on other people. Someone else has to accept your answer.

> Answers in `github/community` no longer count for this badge. Answers in other repositories' Discussions still do.

## GUI

1. Find a project you know well that has Discussions turned on. Look for a **Discussions** tab next to Issues.
2. Open the **Q&A** category. Only this category type supports accepted answers.
3. Find an unanswered question you can actually answer.
4. Write a clear answer with steps or code, then click **Answer**.
5. If the person who asked marks it with **Mark as answer**, it counts.

Good habits: answer older unanswered questions, include a working example, and say which version you tested with.

## CLI

`gh` has no built-in discussion commands. You can list unanswered Q&A discussions with the GraphQL API, and then answer them on the website:

```bash
gh api graphql -f query='
query($owner:String!, $name:String!) {
  repository(owner:$owner, name:$name) {
    discussions(first:20, answered:false, orderBy:{field:CREATED_AT, direction:DESC}) {
      nodes { title url category { name isAnswerable } }
    }
  }
}' -F owner=OWNER -F name=REPO --jq '.data.repository.discussions.nodes[] | select(.category.isAnswerable) | "\(.title)\n  \(.url)"'
```

## Don't

- Don't use a second account to accept your own answers. That's inauthentic activity, and it's exactly what got `github/community` excluded.
