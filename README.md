# React Movie App Checkpoint

## 📌 Checkpoint Description

This project demonstrates a React Movie App where users can display, add, and filter their favorite movies or TV shows.  
The application uses **React Hooks** for state management and dynamic rendering.

---

## 🎯 Objectives

- Display a list of movies dynamically  
- Add new movies to the list  
- Filter movies by title or rating  
- Use React Hooks (`useState`) for state management  
- Implement reusable components  

---

## 🛠 Tools Used

- React (Functional Components)  
- React Hooks (`useState`)  
- JavaScript (ES6)  
- CSS (inline styling)  
- VS Code  

---

## 📂 Project Structure
src/
├── components/
│ ├── AddMovie.js
│ ├── Filter.js
│ ├── MovieCard.js
│ └── MovieList.js
├── moviesData.js
├── App.js
├── index.js
└── App.css

---

## 📌 Components Overview

### 1️⃣ MovieCard
Displays individual movie details including:
- Title  
- Description  
- Poster image  
- Rating  

### 2️⃣ MovieList
Maps through an array of movies and renders `MovieCard` for each movie.

### 3️⃣ Filter
Provides input fields to filter movies by:
- Title (text)  
- Rating (number)

### 4️⃣ AddMovie
Form that allows users to add a new movie with all required attributes.

---

## 🔍 Features Implemented

- Display pre-defined movies on initial load  
- Dynamically add new movies  
- Filter movies based on user input (title and rating)  
- Real-time updates using React Hooks  
- Conditional rendering based on filters  

---

## ⚙️ How to Run the Project

### 1️⃣ Install dependencies
```bash
npm install
2️⃣ Start the project
npm start

3️⃣ Open in browser

Visit:

http://localhost:3000

📝 Example Movie Object
{
  title: "Inception",
  description: "A thief who steals corporate secrets through dream-sharing technology.",
  posterURL: "https://via.placeholder.com/150",
  rating: 5
}