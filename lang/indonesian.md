# Panduan GitHub Achievements

Cara mendapatkan setiap achievement GitHub, langkah demi langkah, lewat situs github.com atau terminal (`git` + `gh`).

**[Buka situs panduan →](https://etticx.github.io/github-achievements-guide/)**

[English](../README.md) · [Bahasa Melayu](malay.md) · **Bahasa Indonesia** · [简体中文](chinese.md) · [Español](spanish.md)

## Cek achievement yang kamu punya

Buka `https://github.com/<username-kamu>?tab=achievements` dan arahkan kursor ke lencana untuk melihat tingkatnya. Lencana baru bisa butuh beberapa jam untuk muncul. Kalau tab itu kosong, aktifkan **Settings → Public profile → Show Achievements on my profile**.

## Achievements

| | Achievement | Cara mendapatkan | Tingkat | Panduan |
|---|---|---|---|---|
| <img src="https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png" width="40" alt=""> | **Quickdraw** | Tutup issue atau PR dalam 5 menit setelah dibuka | – | [Panduan](../docs/achievements/quickdraw.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png" width="40" alt=""> | **YOLO** | Merge PR tanpa code review | – | [Panduan](../docs/achievements/yolo.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png" width="40" alt=""> | **Pull Shark** | PR yang kamu buka di-merge | 2 · 16 · 128 · 1024 | [Panduan](../docs/achievements/pull-shark.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png" width="40" alt=""> | **Pair Extraordinaire** | Jadi co-author pada commit di PR yang di-merge | 1 · 10 · 24 · 48 | [Panduan](../docs/achievements/pair-extraordinaire.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/starstruck-default.png" width="40" alt=""> | **Starstruck** | Repo milikmu mendapat cukup bintang | 16 · 128 · 512 · 4096 | [Panduan](../docs/achievements/starstruck.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/galaxy-brain-default.png" width="40" alt=""> | **Galaxy Brain** | Jawabanmu diterima di GitHub Discussions | 2 · 8 · 16 · 32 | [Panduan](../docs/achievements/galaxy-brain.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/public-sponsor-default.png" width="40" alt=""> | **Public Sponsor** | Mensponsori seseorang lewat GitHub Sponsors | – | [Panduan](../docs/achievements/public-sponsor.md) |

**Baru mulai?** Empat yang pertama butuh sekitar 10 menit di satu repo latihan.

**Belum bisa didapat sekarang:** Heart On Your Sleeve dan Open Sourcerer (sedang diuji GitHub), serta Mars 2020 Contributor dan Arctic Code Vault Contributor (sudah dihentikan).

## Tutorial

Panduan langkah demi langkah untuk setiap achievement, dengan petunjuk situs web dan terminal:

**👉 https://etticx.github.io/github-achievements-guide/**

## Mulai cepat (terminal)

Kamu butuh [Git](https://git-scm.com/) dan [GitHub CLI](https://cli.github.com/) (jalankan `gh auth login` sekali). Jalankan perintah ini di repo latihan milikmu.

<details>
<summary><b>Quickdraw</b>: buka issue lalu langsung tutup</summary>

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

YOLO dan Pair Extraordinaire butuh orang kedua. Panduannya menjelaskan caranya.

## Bermain adil

Latihan di repo sendiri, bukan di proyek orang lain. Membeli atau bertukar bintang melanggar [Acceptable Use Policies](https://docs.github.com/en/site-policy/acceptable-use-policies/github-acceptable-use-policies) GitHub.

## Kontribusi dan lisensi

Perbaikan dan terjemahan dipersilakan. Lihat [CONTRIBUTING.md](../CONTRIBUTING.md). Kontennya berlisensi [MIT](../LICENSE). Gambar lencana adalah milik GitHub dan tidak termasuk dalam lisensi ini.

Kalau panduan ini membantu, ⭐ membantu orang lain menemukannya.

*Panduan tidak resmi. Tidak berafiliasi dengan atau didukung oleh GitHub.*

---

Terakhir dicek: November 2026. GitHub mengubah achievement tanpa pengumuman. Kalau ada yang salah, [buka issue](../../../issues).
