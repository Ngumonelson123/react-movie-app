# React Router Checkpoint – Movie App

## 📌 Checkpoint Description

This project extends the Movie App from the previous checkpoint by adding **React Router** to enable navigation between pages.  
Users can now view movie details, including description and trailer, by clicking any movie card.

---

## 🎯 Objectives

- Use **React Router** to navigate between views  
- Add a movie description + YouTube trailer embed  
- Navigate to a dedicated movie page when a movie card is clicked  
- Include a **Back to home** button on the movie description page  

---

## 🛠 Tools Used

- React  
- React Router v6  
- React Hooks (`useState`, `useParams`)  
- JavaScript (ES6)  
- CSS  

---

## 📂 Project Structure



---

## 📂 Project Structure
src/
├── components/
│ ├── AddMovie.js
│ ├── Filter.js
│ ├── MovieCard.js
│ ├── MovieList.js
│ └── MovieDescription.js
├── moviesData.js
├── App.js
├── index.js
└── App.css
---

## 🔍 Features Implemented

### ✅ 1. Clickable Movie Cards  
Each movie card uses a React Router `<Link>` to navigate to:


---

## 🔍 Features Implemented

### ✅ 1. Clickable Movie Cards  
Each movie card uses a React Router `<Link>` to navigate to:

/movie/:title

### ✅ 2. Description Page  
Displays the selected movie’s:

- Title  
- Description  
- Trailer (YouTube embedded iframe)

### ✅ 3. Back to Home Navigation  
A button allows the user to return to the main movie list:

✅ 4. Updated Movie Data

Each movie now includes:

description

trailer (YouTube embed link)

⚙️ How to Run the Project
1️⃣ Install dependencies
npm install

2️⃣ Start the application
npm start

3️⃣ Open the app

Visit:

http://localhost:3000

📝 Example Movie Object
{
  title: "Inception",
  description: "A mind-bending thriller about dreams within dreams.",
  posterURL: "...",
  rating: 5,
  trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
}

👨‍💻 Author

Nelson Ngumo

📄 License

This project is open-source and for educational use.