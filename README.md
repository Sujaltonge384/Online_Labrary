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
- <img width="1915" height="960" alt="image" src="https://github.com/user-attachments/assets/5ce818e8-da67-44bc-bc71-4f5bc8bdd8c8" />


### 📚 Browse Books
- Browse books from the Open Library API
- Category-based filtering
- Dynamic category routes
- Search books by title
- Search books by author
- Responsive book grid
- <img width="1917" height="987" alt="image" src="https://github.com/user-attachments/assets/34f161d2-c901-45be-8ac8-a0e665b08a41" />


### 📖 Book Details
- Dynamic book details page
- Book cover
- Book title
- Author
- Category
- Rating
- Description
- Back to Browse Books option
- <img width="1916" height="982" alt="image" src="https://github.com/user-attachments/assets/c29e3810-0055-4715-84a1-87681ceb993d" />


### ➕ Add Book
- Add a new book using a form
- Title validation
- Author validation
- Category selection
- Description
- Rating validation
- Book image URL
- Newly added books appear at the beginning of the collection
- <img width="1890" height="991" alt="image" src="https://github.com/user-attachments/assets/03cf06c1-f8cb-4195-af76-c77a421f92a2" />


### ❌ 404 Page
- Displays when an invalid URL is entered
- Shows the invalid path
- Provides a link back to the Home page
- Header is hidden on the 404 page
- <img width="1892" height="983" alt="image" src="https://github.com/user-attachments/assets/9adca2de-a5a4-4e36-9945-6c69b4d1ee19" />


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
