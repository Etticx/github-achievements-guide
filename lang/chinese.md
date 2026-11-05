# GitHub 成就指南

一步一步教你获得每个 GitHub 成就，可以用 github.com 网页操作，也可以用终端（`git` + `gh`）。

**[打开教程网站 →](https://etticx.github.io/github-achievements-guide/)**

[English](../README.md) · [Bahasa Melayu](malay.md) · [Bahasa Indonesia](indonesian.md) · **简体中文** · [Español](spanish.md)

## 查看你拥有的成就

打开 `https://github.com/<你的用户名>?tab=achievements`，把鼠标移到徽章上可以看到等级。新徽章可能要过几个小时才会出现。如果页面是空的，请开启 **Settings → Public profile → Show Achievements on my profile**。

## 成就

| | 成就 | 获得方式 | 等级 | 教程 |
|---|---|---|---|---|
| <img src="https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png" width="40" alt=""> | **Quickdraw** | 在创建后 5 分钟内关闭 issue 或 PR | – | [教程](../docs/achievements/quickdraw.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png" width="40" alt=""> | **YOLO** | 不经代码审查就合并 PR | – | [教程](../docs/achievements/yolo.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png" width="40" alt=""> | **Pull Shark** | 你创建的 PR 被合并 | 2 · 16 · 128 · 1024 | [教程](../docs/achievements/pull-shark.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png" width="40" alt=""> | **Pair Extraordinaire** | 作为共同作者出现在已合并 PR 的提交中 | 1 · 10 · 24 · 48 | [教程](../docs/achievements/pair-extraordinaire.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/starstruck-default.png" width="40" alt=""> | **Starstruck** | 你拥有的仓库获得足够的星标 | 16 · 128 · 512 · 4096 | [教程](../docs/achievements/starstruck.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/galaxy-brain-default.png" width="40" alt=""> | **Galaxy Brain** | 你在 GitHub Discussions 的回答被采纳 | 2 · 8 · 16 · 32 | [教程](../docs/achievements/galaxy-brain.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/public-sponsor-default.png" width="40" alt=""> | **Public Sponsor** | 通过 GitHub Sponsors 赞助他人 | – | [教程](../docs/achievements/public-sponsor.md) |

**第一次做？** 前四个在一个练习仓库里大约 10 分钟就能完成。

**目前无法获得：** Heart On Your Sleeve 和 Open Sourcerer（GitHub 正在测试），以及 Mars 2020 Contributor 和 Arctic Code Vault Contributor（已停止发放）。

## 教程

每个成就的完整分步教程，包含网页和终端两种操作方法：

**👉 https://etticx.github.io/github-achievements-guide/**

## 快速开始（终端）

需要先安装 [Git](https://git-scm.com/) 和 [GitHub CLI](https://cli.github.com/)，并运行一次 `gh auth login`。请在你自己的练习仓库里运行这些命令。

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

YOLO 和 Pair Extraordinaire 需要第二个人，具体做法见各自的教程。

## 公平地玩

请在自己的仓库里练习，不要在别人的项目里刷。购买或互换星标违反 GitHub 的 [Acceptable Use Policies](https://docs.github.com/en/site-policy/acceptable-use-policies/github-acceptable-use-policies)。

## 贡献与许可证

欢迎修正和翻译，请看 [CONTRIBUTING.md](../CONTRIBUTING.md)。内容采用 [MIT](../LICENSE) 许可证。徽章图片归 GitHub 所有，不在本许可证范围内。

如果这份指南对你有帮助，点个 ⭐ 能让更多人看到它。

---

最后核对：2026 年 11 月。GitHub 修改成就时不会公告。如果发现内容有误，请[提交 issue](../../../issues)。
