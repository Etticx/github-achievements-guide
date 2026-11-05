# Panduan GitHub Achievements

Cara dapatkan setiap achievement GitHub, langkah demi langkah: sekali melalui laman web github.com, dan sekali melalui terminal dengan `git` dan `gh`.

[English](../README.md) · **Bahasa Melayu** · [Bahasa Indonesia](indonesian.md) · [简体中文](chinese.md) · [Español](spanish.md)

**Laman web dengan panduan penuh:** https://etticx.github.io/github-achievements-guide/

> Kali terakhir disemak: November 2026. GitHub tukar achievement tanpa beritahu. Kalau ada yang salah, [buka issue](../../../issues).

---

## Semak achievement yang anda dah ada

Pergi ke `https://github.com/<username-anda>?tab=achievements`. Letak tetikus atas lencana untuk tengok tahapnya (×2, ×3, ×4). Lencana boleh ambil beberapa jam untuk muncul selepas anda layak.

Kalau tab itu kosong, semak **Settings → Public profile → Contributions & activity** dan pastikan "Show Achievements on my profile" dihidupkan.

## Achievement yang boleh didapatkan

| | Achievement | Cara dapat | Tahap (asas / gangsa / perak / emas) | Panduan |
|---|---|---|---|---|
| <img src="https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png" width="48" alt=""> | **Pull Shark** | Pull request yang anda buka di-merge | 2 / 16 / 128 / 1024 PR | [Panduan](../docs/achievements/pull-shark.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png" width="48" alt=""> | **Quickdraw** | Tutup issue atau PR dalam masa 5 minit selepas dibuka | tiada | [Panduan](../docs/achievements/quickdraw.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png" width="48" alt=""> | **YOLO** | Merge PR tanpa code review | tiada | [Panduan](../docs/achievements/yolo.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png" width="48" alt=""> | **Pair Extraordinaire** | Jadi co-author pada commit dalam PR yang di-merge | 1 / 10 / 24 / 48 PR | [Panduan](../docs/achievements/pair-extraordinaire.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/starstruck-default.png" width="48" alt=""> | **Starstruck** | Repo milik anda dapat cukup bintang | 16 / 128 / 512 / 4096 bintang | [Panduan](../docs/achievements/starstruck.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/galaxy-brain-default.png" width="48" alt=""> | **Galaxy Brain** | Jawapan anda diterima dalam GitHub Discussions | 2 / 8 / 16 / 32 jawapan | [Panduan](../docs/achievements/galaxy-brain.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/public-sponsor-default.png" width="48" alt=""> | **Public Sponsor** | Taja seseorang melalui GitHub Sponsors | tiada | [Panduan](../docs/achievements/public-sponsor.md) |

### Mula dari mana

Kalau anda belum pernah buat, ikut urutan ini: **Quickdraw → YOLO → Pull Shark**. Ketiga-tiganya boleh dibuat seorang diri dalam satu repo kosong, dalam masa lebih kurang 10 minit. Pair Extraordinaire pun boleh dibuat seorang diri kalau anda ada akaun GitHub kedua, atau kawan yang setuju namanya dimasukkan sebagai co-author.

### Resipi CLI ringkas

Anda perlukan [Git](https://git-scm.com/) dan [GitHub CLI](https://cli.github.com/) (jalankan `gh auth login` sekali). Jalankan arahan ini dalam repo milik anda yang tak kisah dipenuhi commit ujian. Panduan penuh terangkan setiap langkah dan cara guna laman web.

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

<details>
<summary><b>YOLO</b>: minta review, kemudian merge sebelum ia berlaku</summary>

```bash
git switch -c yolo
echo "yolo" >> yolo.txt && git add yolo.txt && git commit -m "YOLO"
git push -u origin yolo
gh pr create --fill --reviewer SOME-COLLABORATOR
gh pr merge --merge --delete-branch
```

Reviewer mesti seorang collaborator dalam repo itu. Baca [panduan](../docs/achievements/yolo.md) untuk tahu kenapa permintaan review itu penting.
</details>

<details>
<summary><b>Pair Extraordinaire</b>: tambah baris <code>Co-authored-by</code>, kemudian merge</summary>

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

## Achievement yang tak boleh didapatkan sekarang

| Achievement | Status |
|---|---|
| Heart On Your Sleeve | Sedang diuji oleh GitHub. Belum semua orang boleh dapat. |
| Open Sourcerer | Sedang diuji oleh GitHub. Belum semua orang boleh dapat. |
| Mars 2020 Contributor | Dah tiada. Diberi sekali sahaja, untuk kod yang digunakan dalam misi helikopter Mars 2020. |
| Arctic Code Vault Contributor | Dah tiada. Diberi sekali sahaja, untuk kod dalam 2020 GitHub Archive Program. |

Untuk Galaxy Brain, jawapan dalam `github/community` tak dikira lagi. Jawapan dalam Discussions repo lain masih dikira.

## Main dengan adil

Guna repo sendiri untuk berlatih. Buka PR atau issue sampah di projek orang lain membazir masa maintainer, dan anda boleh disekat. Membeli atau bertukar bintang melanggar [Acceptable Use Policies](https://docs.github.com/en/site-policy/acceptable-use-policies/github-acceptable-use-policies) GitHub, dan GitHub akan buang bintang palsu.

## Sumbangan

Jumpa peraturan yang dah lapuk, arahan yang rosak, atau nak tambah bahasa? Baca [CONTRIBUTING.md](../CONTRIBUTING.md).

## Lesen

[MIT](../LICENSE). Imej lencana achievement adalah milik GitHub dan dimuatkan dari server GitHub. Imej itu tak termasuk dalam lesen ini.

Kalau panduan ini membantu, beri bintang supaya orang lain boleh jumpa. Bintang itu juga dikira untuk lencana Starstruck seseorang.
