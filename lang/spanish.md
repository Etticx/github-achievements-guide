# Guía de logros de GitHub

Cómo conseguir cada logro de GitHub, paso a paso, desde la web de github.com o desde la terminal (`git` + `gh`).

**[Abrir la web de la guía →](https://etticx.github.io/github-achievements-guide/)**

[English](../README.md) · [Bahasa Melayu](malay.md) · [Bahasa Indonesia](indonesian.md) · [简体中文](chinese.md) · **Español**

> Última revisión: noviembre de 2026. GitHub cambia los logros sin avisar. Si algo está mal, [abre un issue](../../../issues).

## Mira qué logros tienes

Entra en `https://github.com/<tu-usuario>?tab=achievements` y pasa el cursor sobre una insignia para ver su nivel. Una insignia nueva puede tardar unas horas en aparecer. Si la pestaña está vacía, activa **Settings → Public profile → Show Achievements on my profile**.

## Logros

| | Logro | Cómo conseguirlo | Niveles | Guía |
|---|---|---|---|---|
| <img src="https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png" width="40" alt=""> | **Quickdraw** | Cerrar un issue o PR en menos de 5 minutos desde que se abrió | – | [Guía](../docs/achievements/quickdraw.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png" width="40" alt=""> | **YOLO** | Fusionar un PR sin revisión de código | – | [Guía](../docs/achievements/yolo.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png" width="40" alt=""> | **Pull Shark** | Que se fusionen PR que tú abriste | 2 · 16 · 128 · 1024 | [Guía](../docs/achievements/pull-shark.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png" width="40" alt=""> | **Pair Extraordinaire** | Ser coautor de un commit en un PR fusionado | 1 · 10 · 24 · 48 | [Guía](../docs/achievements/pair-extraordinaire.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/starstruck-default.png" width="40" alt=""> | **Starstruck** | Que un repositorio tuyo reciba suficientes estrellas | 16 · 128 · 512 · 4096 | [Guía](../docs/achievements/starstruck.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/galaxy-brain-default.png" width="40" alt=""> | **Galaxy Brain** | Que acepten tus respuestas en GitHub Discussions | 2 · 8 · 16 · 32 | [Guía](../docs/achievements/galaxy-brain.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/public-sponsor-default.png" width="40" alt=""> | **Public Sponsor** | Patrocinar a alguien con GitHub Sponsors | – | [Guía](../docs/achievements/public-sponsor.md) |

**¿Empiezas ahora?** Los cuatro primeros llevan unos 10 minutos en un repositorio de práctica.

**No se pueden conseguir ahora:** Heart On Your Sleeve y Open Sourcerer (en pruebas por GitHub), y Mars 2020 Contributor y Arctic Code Vault Contributor (retirados).

## Inicio rápido (terminal)

Necesitas [Git](https://git-scm.com/) y [GitHub CLI](https://cli.github.com/) (ejecuta `gh auth login` una vez). Úsalos en un repositorio de práctica que sea tuyo.

<details>
<summary><b>Quickdraw</b>: abre un issue y ciérralo al momento</summary>

```bash
url=$(gh issue create --title "Quickdraw test" --body "Closing this right away.")
gh issue close "$url"
```
</details>

<details>
<summary><b>Pull Shark</b>: abre y fusiona dos PR</summary>

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

YOLO y Pair Extraordinaire necesitan a otra persona. Sus guías explican cómo hacerlo.

## Juega limpio

Practica en tu propio repositorio, no en proyectos ajenos. Comprar o intercambiar estrellas va contra las [Acceptable Use Policies](https://docs.github.com/en/site-policy/acceptable-use-policies/github-acceptable-use-policies) de GitHub.

## Contribuir y licencia

Se agradecen correcciones y traducciones. Consulta [CONTRIBUTING.md](../CONTRIBUTING.md). El contenido usa la licencia [MIT](../LICENSE). Las imágenes de las insignias pertenecen a GitHub y no están cubiertas por ella.

Si esta guía te ayudó, una ⭐ ayuda a que otras personas la encuentren.
