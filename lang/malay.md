# Panduan GitHub Achievements

Cara dapatkan setiap achievement GitHub, langkah demi langkah, melalui laman web github.com atau terminal (`git` + `gh`).

**[Buka laman web panduan →](https://etticx.github.io/github-achievements-guide/)**

[English](../README.md) · **Bahasa Melayu** · [Bahasa Indonesia](indonesian.md) · [简体中文](chinese.md) · [Español](spanish.md)

## Semak achievement yang anda ada

Pergi ke `https://github.com/<username-anda>?tab=achievements` dan letak tetikus atas lencana untuk tengok tahapnya. Lencana baru boleh ambil beberapa jam untuk muncul. Kalau tab itu kosong, hidupkan **Settings → Public profile → Show Achievements on my profile**.

## Achievements

| | Achievement | Cara dapat | Tahap | Panduan |
|---|---|---|---|---|
| <img src="https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png" width="40" alt=""> | **Quickdraw** | Tutup issue atau PR dalam masa 5 minit selepas dibuka | – | [Panduan](../docs/achievements/quickdraw.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png" width="40" alt=""> | **YOLO** | Merge PR tanpa code review | – | [Panduan](../docs/achievements/yolo.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png" width="40" alt=""> | **Pull Shark** | PR yang anda buka di-merge | 2 · 16 · 128 · 1024 | [Panduan](../docs/achievements/pull-shark.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png" width="40" alt=""> | **Pair Extraordinaire** | Jadi co-author pada commit dalam PR yang di-merge | 1 · 10 · 24 · 48 | [Panduan](../docs/achievements/pair-extraordinaire.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/starstruck-default.png" width="40" alt=""> | **Starstruck** | Repo milik anda dapat cukup bintang | 16 · 128 · 512 · 4096 | [Panduan](../docs/achievements/starstruck.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/galaxy-brain-default.png" width="40" alt=""> | **Galaxy Brain** | Jawapan anda diterima dalam GitHub Discussions | 2 · 8 · 16 · 32 | [Panduan](../docs/achievements/galaxy-brain.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/public-sponsor-default.png" width="40" alt=""> | **Public Sponsor** | Taja seseorang melalui GitHub Sponsors | – | [Panduan](../docs/achievements/public-sponsor.md) |

**Baru mula?** Empat yang pertama ambil masa lebih kurang 10 minit dalam satu repo latihan.

**Tak boleh didapatkan sekarang:** Heart On Your Sleeve dan Open Sourcerer (sedang diuji oleh GitHub), serta Mars 2020 Contributor dan Arctic Code Vault Contributor (dah tamat).

## Tutorial

Panduan langkah demi langkah untuk setiap achievement, dengan arahan laman web dan terminal:

**👉 https://etticx.github.io/github-achievements-guide/**

## Mula cepat (terminal)

Anda perlukan [Git](https://git-scm.com/) dan [GitHub CLI](https://cli.github.com/) (jalankan `gh auth login` sekali). Jalankan arahan ini dalam repo latihan milik anda.

<details>
<summary><b>Quickdraw</b>: buka issue dan terus tutup</summary>

```bash
url=$(gh issue create --title "Quickdraw test" --body "Closing this right away.")
gh issue close "$url"
```
</details>

<details>
<summary><b>Pull Shark</b>: buka dan merge dua PR</summary>

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

YOLO dan Pair Extraordinaire perlukan orang kedua. Panduan masing-masing terangkan caranya.

## Main dengan adil

Berlatih dalam repo sendiri, bukan dalam projek orang lain. Membeli atau bertukar bintang melanggar [Acceptable Use Policies](https://docs.github.com/en/site-policy/acceptable-use-policies/github-acceptable-use-policies) GitHub.

## Sumbangan dan lesen

Pembetulan dan terjemahan dialu-alukan. Baca [CONTRIBUTING.md](../CONTRIBUTING.md). Kandungan di bawah lesen [MIT](../LICENSE). Imej lencana adalah milik GitHub dan tak termasuk dalam lesen ini.

Kalau panduan ini membantu, ⭐ akan membantu orang lain jumpa.

---

Kali terakhir disemak: November 2026. GitHub tukar achievement tanpa beritahu. Kalau ada yang salah, [buka issue](../../../issues).
