📚 Katalog książek — React + JSON-Server

Prosta aplikacja typu CRUD do katalogowania książek z walidacją numerów ISBN.
Frontend został stworzony w React (Vite), a backend opiera się na JSON-Server.

👉 Live preview:
https://my-lib-git-main-pawel1022s-projects.vercel.app/

✨ Funkcjonalności

🔍 Wyszukiwanie książek po tytule i autorze

↕️ Sortowanie wyników

➕ Dodawanie nowych książek

❌ Usuwanie istniejących pozycji

📝 Walidacja ISBN (zarówno ISBN-10, jak i ISBN-13)

🗄 Pobieranie i zapisywanie danych przez JSON-Server

📦 Lista startowych książek w bazie

🛠 Technologie

React + Vite

Czysty CSS

JSON-Server (backend)

Fetch API

Render – hosting backendu

Vercel – hosting frontend

🚀 Uruchamianie projektu lokalnie

1. Pobierz repozytorium
   git clone https://github.com/TWOJ_LOGIN/my-lib.git
   cd my-lib

2. Zainstaluj zależności
   npm install

3. Uruchom backend (JSON-Server)
   npm run server

Backend działa pod adresem:

http://localhost:3001/books

4. Uruchom frontend
   npm run dev

Frontend dostępny pod:

http://localhost:5173

📄 Opis działania

Aplikacja umożliwia zarządzanie prostym katalogiem książek:

Formularz dodawania książki pozwala uzupełnić tytuł, autora, ISBN, rok oraz gatunek.

Przed zapisaniem danych numer ISBN jest sprawdzany pod kątem poprawności.

Lista książek pobierana jest z backendu za pomocą REST API opartego o JSON-Server.

Możliwe jest usuwanie książek z bazy.

Wyszukiwarka oraz sortowanie działają w czasie rzeczywistym po stronie klienta.

👨‍💻 Autor

Projekt wykonany na potrzeby zajęć, z naciskiem na czysty kod oraz prostą i czytelną implementację CRUD.
