# Guía de logros de GitHub

Cómo conseguir cada logro de GitHub, paso a paso: una vez desde la web de github.com y otra desde la terminal con `git` y `gh`.

[English](../README.md) · [Bahasa Melayu](malay.md) · [Bahasa Indonesia](indonesian.md) · [简体中文](chinese.md) · **Español**

**Web con las guías completas:** https://etticx.github.io/github-achievements-guide/

> Última revisión: noviembre de 2026. GitHub cambia los logros sin avisar. Si algo está mal, [abre un issue](../../../issues).

---

## Mira qué logros ya tienes

Entra en `https://github.com/<tu-usuario>?tab=achievements`. Pasa el cursor sobre una insignia para ver su nivel (×2, ×3, ×4). Una insignia puede tardar unas horas en aparecer después de que cumplas el requisito.

Si la pestaña está vacía, revisa **Settings → Public profile → Contributions & activity** y comprueba que "Show Achievements on my profile" está activado.

## Logros que puedes conseguir

| | Logro | Cómo conseguirlo | Niveles (base / bronce / plata / oro) | Guía |
|---|---|---|---|---|
| <img src="https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png" width="48" alt=""> | **Pull Shark** | Que se fusionen pull requests que tú abriste | 2 / 16 / 128 / 1024 PR | [Guía](../docs/achievements/pull-shark.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png" width="48" alt=""> | **Quickdraw** | Cerrar un issue o PR en menos de 5 minutos desde que se abrió | ninguno | [Guía](../docs/achievements/quickdraw.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png" width="48" alt=""> | **YOLO** | Fusionar un PR sin revisión de código | ninguno | [Guía](../docs/achievements/yolo.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png" width="48" alt=""> | **Pair Extraordinaire** | Ser coautor de un commit en un PR fusionado | 1 / 10 / 24 / 48 PR | [Guía](../docs/achievements/pair-extraordinaire.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/starstruck-default.png" width="48" alt=""> | **Starstruck** | Que un repositorio tuyo reciba suficientes estrellas | 16 / 128 / 512 / 4096 estrellas | [Guía](../docs/achievements/starstruck.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/galaxy-brain-default.png" width="48" alt=""> | **Galaxy Brain** | Que acepten tus respuestas en GitHub Discussions | 2 / 8 / 16 / 32 respuestas | [Guía](../docs/achievements/galaxy-brain.md) |
| <img src="https://github.githubassets.com/images/modules/profile/achievements/public-sponsor-default.png" width="48" alt=""> | **Public Sponsor** | Patrocinar a alguien con GitHub Sponsors | ninguno | [Guía](../docs/achievements/public-sponsor.md) |

### Por dónde empezar

Si nunca lo has hecho, sigue este orden: **Quickdraw → YOLO → Pull Shark**. Los tres se pueden hacer solo, en un repositorio vacío, en unos 10 minutos.

### Recetas rápidas de CLI

Necesitas [Git](https://git-scm.com/) y [GitHub CLI](https://cli.github.com/) (ejecuta `gh auth login` una vez). Úsalas en un repositorio tuyo que no te importe llenar de commits de prueba.

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

<details>
<summary><b>YOLO</b>: pide una revisión y fusiona antes de que llegue</summary>

```bash
git switch -c yolo
echo "yolo" >> yolo.txt && git add yolo.txt && git commit -m "YOLO"
git push -u origin yolo
gh pr create --fill --reviewer SOME-COLLABORATOR
gh pr merge --merge --delete-branch
```

El revisor tiene que ser colaborador del repositorio. Lee la [guía](../docs/achievements/yolo.md) para saber por qué importa pedir la revisión.
</details>

<details>
<summary><b>Pair Extraordinaire</b>: añade una línea <code>Co-authored-by</code> y fusiona</summary>

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

## Logros que no se pueden conseguir ahora

| Logro | Estado |
|---|---|
| Heart On Your Sleeve | En pruebas por GitHub. Todavía no lo puede conseguir todo el mundo. |
| Open Sourcerer | En pruebas por GitHub. Todavía no lo puede conseguir todo el mundo. |
| Mars 2020 Contributor | Ya no existe. Se dio una sola vez, por código usado en la misión del helicóptero Mars 2020. |
| Arctic Code Vault Contributor | Ya no existe. Se dio una sola vez, por código incluido en el 2020 GitHub Archive Program. |

Para Galaxy Brain, las respuestas en `github/community` ya no cuentan. Las respuestas en Discussions de otros repositorios siguen contando.

## Juega limpio

Practica en tu propio repositorio. Abrir PR o issues de relleno en proyectos ajenos hace perder el tiempo a quien los mantiene, y te pueden bloquear. Comprar o intercambiar estrellas va contra las [Acceptable Use Policies](https://docs.github.com/en/site-policy/acceptable-use-policies/github-acceptable-use-policies) de GitHub.

## Contribuir

Consulta [CONTRIBUTING.md](../CONTRIBUTING.md).

## Licencia

[MIT](../LICENSE). Las imágenes de las insignias pertenecen a GitHub y no están cubiertas por esta licencia.

Si esta guía te ayudó, dale una estrella para que otras personas la encuentren.
