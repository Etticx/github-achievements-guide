# GitHub 成就指南

一步一步教你获得每个 GitHub 成就：一种方法用 github.com 网页操作，另一种用终端里的 `git` 和 `gh`。

[English](../README.md) · [Bahasa Melayu](malay.md) · [Bahasa Indonesia](indonesian.md) · **简体中文** · [Español](spanish.md)

**完整教程网站：** https://etticx.github.io/github-achievements-guide/

> 最后核对：2026 年 11 月。GitHub 修改成就时不会公告。如果发现内容有误，请[提交 issue](../../../issues)。

---

## 查看你已经拥有的成就

打开 `https://github.com/<你的用户名>?tab=achievements`。把鼠标移到徽章上可以看到等级（×2、×3、×4）。满足条件后，徽章可能要过几个小时才会出现。

如果页面是空的，请到 **Settings → Public profile → Contributions & activity**，确认已开启 "Show Achievements on my profile"。

## 可以获得的成就

| | 成就 | 获得方式 | 等级（基础 / 铜 / 银 / 金） | 教程 |
|---|---|---|---|---|
| <img src="https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png" width="48" alt=""> | **Pull Shark** | 你创建的 pull request 被合并 | 2 / 16 / 128 / 1024 个 PR | [教程](../docs/achievements/pull-shark.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png" width="48" alt=""> | **Quickdraw** | 在创建后 5 分钟内关闭 issue 或 PR | 无 | [教程](../docs/achievements/quickdraw.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png" width="48" alt=""> | **YOLO** | 不经代码审查就合并 PR | 无 | [教程](../docs/achievements/yolo.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png" width="48" alt=""> | **Pair Extraordinaire** | 作为共同作者出现在已合并 PR 的提交中 | 1 / 10 / 24 / 48 个 PR | [教程](../docs/achievements/pair-extraordinaire.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/starstruck-default.png" width="48" alt=""> | **Starstruck** | 你拥有的仓库获得足够的星标 | 16 / 128 / 512 / 4096 个星标 | [教程](../docs/achievements/starstruck.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/galaxy-brain-default.png" width="48" alt=""> | **Galaxy Brain** | 你在 GitHub Discussions 的回答被采纳 | 2 / 8 / 16 / 32 个回答 | [教程](../docs/achievements/galaxy-brain.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/public-sponsor-default.png" width="48" alt=""> | **Public Sponsor** | 通过 GitHub Sponsors 赞助他人 | 无 | [教程](../docs/achievements/public-sponsor.md) |

### 从哪里开始

如果你是第一次做，建议按这个顺序：**Quickdraw → YOLO → Pull Shark**。三个都可以在一个空仓库里独自完成，大约 10 分钟。

### 快速 CLI 命令

需要先安装 [Git](https://git-scm.com/) 和 [GitHub CLI](https://cli.github.com/)，并运行一次 `gh auth login`。请在你自己的、不介意塞满测试提交的仓库里运行这些命令。

<details>
<summary><b>Quickdraw</b>：创建 issue 后立即关闭</summary>

```bash
url=$(gh issue create --title "Quickdraw test" --body "Closing this right away.")
gh issue close "$url"
```
</details>

<details>
<summary><b>Pull Shark</b>：创建并合并两个 PR</summary>

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

<details>
<summary><b>YOLO</b>：请求审查，然后在审查前合并</summary>

```bash
git switch -c yolo
echo "yolo" >> yolo.txt && git add yolo.txt && git commit -m "YOLO"
git push -u origin yolo
gh pr create --fill --reviewer SOME-COLLABORATOR
gh pr merge --merge --delete-branch
```

审查者必须是该仓库的协作者。请看[教程](../docs/achievements/yolo.md)了解审查请求为什么重要。
</details>

<details>
<summary><b>Pair Extraordinaire</b>：加上 <code>Co-authored-by</code> 行，然后合并</summary>

```bash
id=$(gh api users/FRIEND-USERNAME --jq .id)

git switch -c pair
echo "pair" >> pair.txt && git add pair.txt
git commit -m "Pair commit" -m "Co-authored-by: FRIEND-USERNAME <$id+FRIEND-USERNAME@users.noreply.github.com>"
git push -u origin pair
gh pr create --fill
gh pr merge --merge --delete-branch
```
</details>

## 目前无法获得的成就

| 成就 | 状态 |
|---|---|
| Heart On Your Sleeve | GitHub 正在测试，还不是所有人都能获得。 |
| Open Sourcerer | GitHub 正在测试，还不是所有人都能获得。 |
| Mars 2020 Contributor | 已停止。只发放过一次，给代码被用于 Mars 2020 直升机任务的人。 |
| Arctic Code Vault Contributor | 已停止。只发放过一次，给代码被收入 2020 GitHub Archive Program 的人。 |

Galaxy Brain：在 `github/community` 里的回答已不再计入，其他仓库 Discussions 里的回答仍然计入。

## 公平地玩

请在自己的仓库里练习。在别人的项目里乱开 PR 或 issue 会浪费维护者的时间，你也可能被拉黑。购买或互换星标违反 GitHub 的 [Acceptable Use Policies](https://docs.github.com/en/site-policy/acceptable-use-policies/github-acceptable-use-policies)。

## 参与贡献

请看 [CONTRIBUTING.md](../CONTRIBUTING.md)。

## 许可证

[MIT](../LICENSE)。成就徽章图片归 GitHub 所有，不在本许可证范围内。

如果这份指南对你有帮助，请点个星标，让更多人看到它。
