# 🧭 Git Workflow – Condensed Tips

## ✅ Codzienna praca – krok po kroku

1. Zawsze zacznij od aktualizacji `main`:

```bash
git checkout main
git pull origin main
```

2. Utwórz nową tematyczną gałąź:

```bash
git checkout -b [nowy-tematyczny-branch]
```

3. 🧱 Commituj modularnie, często i logicznie: Twórz commity o małym zakresie, opisuj je zgodnie z konwencją:

Przykłady commitów:

```scss
feat(form): add validation handler
refactor(ui): simplify layout structure
fix(form): handle empty input error
chore(github): add pull request template
```

4. Push do zdalnego repozytorium:

```bash
git push origin [branch-name]
```

5. Stwórz Pull Request (PR) do main i scal po akceptacji.

6. Po merge'u usuń niepotrzebną gałąź:

```bash
git branch -d [lokalna_nazwa_brancha]
git push origin --delete [zdalna_nazwa_brancha]
```

💬 Przykładowe wiadomości commitów (do kopiowania)
🔧 feat (nowa funkcjonalność)

```scss
feat(form): add dynamic validation rules
feat(auth): implement user login flow
feat(dashboard): show recent activity widget
feat(api): fetch data from external service
feat(modal): add animated transitions
feat(nav): implement sticky header behavior
```

♻️ refactor (zmiana struktury bez zmiany logiki)

```scss
refactor(ui): simplify layout grid
refactor(form): extract validation logic
refactor(store): modularize state slices
refactor(config): move constants to separate file
```

🐛 fix (naprawa błędów)

```scss
fix(form): handle empty input error
fix(auth): refresh token issue on timeout
fix(layout): incorrect spacing on mobile
fix(i18n): broken translation key fallback
```

🎨 style (zmiany kosmetyczne – tylko CSS/HTML)

```scss
style(button): update hover styles
style(card): improve spacing and padding
style(form): adjust label font size
```

📂 chore (zmiany pomocnicze, setup, struktura, deps)

```scss
chore(github): add pull request template
chore(deps): update Nuxt dependencies
chore(config): cleanup vite config
chore(build): update build script logic
```

🔍 test (testy jednostkowe / integracyjne)

```scss
test(form): add validation unit tests
test(utils): cover date formatting helpers
```

📚 docs (dokumentacja)

```scss
docs(readme): add setup instructions
docs(workflow): describe branching strategy
```
