# 📚 Online Library System

A modern and responsive Online Library System built using React, Redux Toolkit, React Router, and the Open Library API.

The application allows users to browse books by category, search for books, view book details, and add new books to the library.

---

## 🚀 Features

### 🏠 Home Page
- Welcome/landing section
- Book categories
- Popular books
- Book cards with cover images
- View Details navigation

### 📚 Browse Books
- Browse books from the Open Library API
- Category-based filtering
- Dynamic category routes
- Search books by title
- Search books by author
- Responsive book grid

### 📖 Book Details
- Dynamic book details page
- Book cover
- Book title
- Author
- Category
- Rating
- Description
- Back to Browse Books option

### ➕ Add Book
- Add a new book using a form
- Title validation
- Author validation
- Category selection
- Description
- Rating validation
- Book image URL
- Newly added books appear at the beginning of the collection

### ❌ 404 Page
- Displays when an invalid URL is entered
- Shows the invalid path
- Provides a link back to the Home page
- Header is hidden on the 404 page

### 📱 Responsive Design
- Desktop friendly
- Tablet friendly
- Mobile friendly
- Modern card-based UI

---

## 🛠️ Technologies Used

- **React**
- **Vite**
- **React Router DOM**
- **Redux Toolkit**
- **React Redux**
- **JavaScript**
- **CSS**
- **Open Library API**

---

## 🌐 API

Book information is retrieved from the Open Library API.

The application uses different searches for:

- Fiction
- Non-Fiction
- Sci-Fi
- Fantasy

Book cover images are loaded using Open Library cover URLs.

---

## 📂 Project Structure

```text
Online_Labrary/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── BookCard.jsx
│   │   ├── BookList.jsx
│   │   └── Loading.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── BrowseBooks.jsx
│   │   ├── BookDetails.jsx
│   │   ├── AddBook.jsx
│   │   └── NotFound.jsx
│   │
│   ├── services/
│   │   └── bookApi.js
│   │
│   ├── store/
│   │   ├── store.js
│   │   └── bookSlice.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
