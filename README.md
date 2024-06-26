# mvc-lab-project
# Zadanie 8 – Kolekcja ulubionych przepisów do koktajli

## Spis treści
1. [Opis projektu](#opis-projektu)
2. [Funkcjonalności](#funkcjonalności)
3. [Instrukcje instalacji](#instrukcje-instalacji)
4. [Autor](#autor)

## Opis projektu
Projekt "Kolekcja ulubionych przepisów do koktajli" to aplikacja webowa, która umożliwia użytkownikom przeglądanie, dodawanie, edytowanie oraz usuwanie przepisów na koktajle. Użytkownicy mogą również dodawać komentarze i oceniać przepisy.

## Funkcjonalności
1. **Przeglądanie przepisów**
   - Wyświetlanie listy dostępnych przepisów.
   - Wyświetlanie szczegółów przepisu: składniki, instrukcje, komentarze i ocena.
   - Wyświetlanie średniej oceny przepisu.

2. **Dodawanie przepisów**
   - Formularz dodawania nowego przepisu.

3. **Edytowanie przepisów**
   - Możliwość edycji nazwy, składników i instrukcji przepisu.

4. **Usuwanie przepisów**
   - Możliwość usunięcia przepisu.

5. **Dodawanie komentarzy**
   - Formularz dodawania nowego komentarza do przepisu.

6. **Ocenianie przepisów**
   - Możliwość oceniania przepisów.

## Instrukcje instalacji
1. Sklonuj repozytorium na swój komputer:
    - > git clone https://github.com/komikowy/mvc-lab-project.git
2. Przejdź do katalogu projektu:
    - > cd (tu podaj ścieżkę do folderu)
3. Zainstaluj zależności:
    - > npm install express ejs body-parser
4. Uruchom serwer:
    - > node app.js
5. Aplikacja będzie dostępna pod adresem `http://localhost:3000`.

**Uwaga:** Po wejściu na adres `http://localhost:3000/recipe` należy dodać nową receptę, gdyż lista może być pusta. Nowe przepisy dodajemy pod adresem `http://localhost:3000/recipe/add`.


## Autor
 - > Jakub Dyba < -
