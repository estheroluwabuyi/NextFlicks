# NextFlicks 🎬

NextFlicks is a practice **Next.js** app built to explore **dynamic routing**, TypeScript integration, and basic component rendering. Users can browse a list of movies and view detailed information on each movie.

---

## Features

- Movie listing with **Next.js App Router**
- Dynamic movie detail pages using **\[id]** routes
- TypeScript types for safe data handling
- Responsive layout using **Tailwind CSS**
- Optimized images with `next/image`

---

## Screenshots

![NextFlicks Screenshot](screenshots/nextflicks.png)

---

## Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/your-username/nextflicks.git
cd nextflicks
```

2. **Install dependencies**

```bash
npm install
# or
yarn
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

---

## Folder Structure

```
app/
 ├─ data/          # Movie data
 ├─ movies/
 │   ├─ page.tsx    # Movies list
 │   └─ [movieId]/page.tsx  # Movie details
```

---

## Notes

- This app uses **hardcoded movie data** for practice purposes.
- All IDs are **stable strings** to ensure dynamic routes work correctly.
- Built to demonstrate **dynamic routing, TypeScript usage, and component mapping** in Next.js.

---

## Tech Stack

- Next.js 13 (App Router)
- TypeScript
- Tailwind CSS
- next/image

---

## Author

**Esther Okiki** – [Your GitHub Profile](https://github.com/estheroluwabuyi)
