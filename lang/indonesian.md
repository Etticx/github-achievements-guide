# Panduan GitHub Achievements

Cara mendapatkan setiap achievement GitHub, langkah demi langkah: sekali lewat situs github.com, dan sekali lewat terminal dengan `git` dan `gh`.

[English](../README.md) · [Bahasa Melayu](malay.md) · **Bahasa Indonesia** · [简体中文](chinese.md) · [Español](spanish.md)

**Situs dengan panduan lengkap:** https://etticx.github.io/github-achievements-guide/

> Terakhir dicek: November 2026. GitHub mengubah achievement tanpa pengumuman. Kalau ada yang salah, [buka issue](../../../issues).

---

## Cek achievement yang sudah kamu punya

Buka `https://github.com/<username-kamu>?tab=achievements`. Arahkan kursor ke lencana untuk melihat tingkatnya (×2, ×3, ×4). Lencana bisa butuh beberapa jam untuk muncul setelah kamu memenuhi syarat.

Kalau tab itu kosong, cek **Settings → Public profile → Contributions & activity** dan pastikan "Show Achievements on my profile" aktif.

## Achievement yang bisa didapat

| | Achievement | Cara mendapatkan | Tingkat (dasar / perunggu / perak / emas) | Panduan |
|---|---|---|---|---|
| <img src="https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png" width="48" alt=""> | **Pull Shark** | Pull request yang kamu buka di-merge | 2 / 16 / 128 / 1024 PR | [Panduan](../docs/achievements/pull-shark.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png" width="48" alt=""> | **Quickdraw** | Tutup issue atau PR dalam 5 menit setelah dibuka | tidak ada | [Panduan](../docs/achievements/quickdraw.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png" width="48" alt=""> | **YOLO** | Merge PR tanpa code review | tidak ada | [Panduan](../docs/achievements/yolo.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png" width="48" alt=""> | **Pair Extraordinaire** | Jadi co-author pada commit di PR yang di-merge | 1 / 10 / 24 / 48 PR | [Panduan](../docs/achievements/pair-extraordinaire.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/starstruck-default.png" width="48" alt=""> | **Starstruck** | Repo milikmu mendapat cukup bintang | 16 / 128 / 512 / 4096 bintang | [Panduan](../docs/achievements/starstruck.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/galaxy-brain-default.png" width="48" alt=""> | **Galaxy Brain** | Jawabanmu diterima di GitHub Discussions | 2 / 8 / 16 / 32 jawaban | [Panduan](../docs/achievements/galaxy-brain.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/public-sponsor-default.png" width="48" alt=""> | **Public Sponsor** | Mensponsori seseorang lewat GitHub Sponsors | tidak ada | [Panduan](../docs/achievements/public-sponsor.md) |

### Mulai dari mana

Kalau belum pernah, ikuti urutan ini: **Quickdraw → YOLO → Pull Shark**. Ketiganya bisa dikerjakan sendirian di satu repo kosong, dalam sekitar 10 menit.

### Resep CLI singkat

Kamu butuh [Git](https://git-scm.com/) dan [GitHub CLI](https://cli.github.com/) (jalankan `gh auth login` sekali). Jalankan perintah ini di repo milikmu yang boleh diisi commit percobaan.

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

<details>
<summary><b>YOLO</b>: minta review, lalu merge sebelum review terjadi</summary>

```bash
git switch -c yolo
echo "yolo" >> yolo.txt && git add yolo.txt && git commit -m "YOLO"
git push -u origin yolo
gh pr create --fill --reviewer SOME-COLLABORATOR
gh pr merge --merge --delete-branch
```

Reviewer harus collaborator di repo itu. Baca [panduannya](../docs/achievements/yolo.md) untuk tahu kenapa permintaan review itu penting.
</details>

<details>
<summary><b>Pair Extraordinaire</b>: tambahkan baris <code>Co-authored-by</code>, lalu merge</summary>

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

## Achievement yang belum bisa didapat

| Achievement | Status |
|---|---|
| Heart On Your Sleeve | Sedang diuji GitHub. Belum semua orang bisa mendapatkannya. |
| Open Sourcerer | Sedang diuji GitHub. Belum semua orang bisa mendapatkannya. |
| Mars 2020 Contributor | Sudah tidak ada. Hanya diberikan sekali, untuk kode yang dipakai di misi helikopter Mars 2020. |
| Arctic Code Vault Contributor | Sudah tidak ada. Hanya diberikan sekali, untuk kode di 2020 GitHub Archive Program. |

Untuk Galaxy Brain, jawaban di `github/community` sudah tidak dihitung. Jawaban di Discussions repo lain masih dihitung.

## Bermain adil

Latihan di repo sendiri. Membuka PR atau issue asal-asalan di proyek orang lain membuang waktu maintainer, dan kamu bisa diblokir. Membeli atau bertukar bintang melanggar [Acceptable Use Policies](https://docs.github.com/en/site-policy/acceptable-use-policies/github-acceptable-use-policies) GitHub.

## Kontribusi

Lihat [CONTRIBUTING.md](../CONTRIBUTING.md).

## Lisensi

[MIT](../LICENSE). Gambar lencana achievement adalah milik GitHub dan tidak termasuk dalam lisensi ini.

Kalau panduan ini membantu, beri bintang supaya orang lain bisa menemukannya.
