# 📚 Library Management System

A modern, full-stack library management application built with React, TypeScript, and Node.js. This system provides comprehensive functionality for managing books, tracking borrowing activities, and maintaining library records.

## 🚀 Live Demo

- **Frontend**: [(https://library-management-frontent.vercel.app/)](https://library-management-frontent.vercel.app/)
- **Backend API**: [https://library-management-backend-ten.vercel.app](https://library-management-backend-ten.vercel.app)

## ✨ Features

### 📖 Book Management
- **Add New Books**: Complete book registration with title, author, genre, ISBN, and description
- **Edit Books**: Update book information and availability status
- **Delete Books**: Remove books from the library system
- **Search & Filter**: Find books by title, author, genre, or ISBN
- **Inventory Tracking**: Monitor book copies and availability

### 📋 Borrowing System
- **Book Borrowing**: Issue books to users with due dates
- **Return Management**: Track and manage book returns
- **Borrowing History**: View complete borrowing records
- **Due Date Tracking**: Monitor overdue books

### 🎨 User Interface
- **Modern Design**: Clean, responsive UI built with Tailwind CSS
- **Interactive Modals**: Smooth modal interactions for book operations
- **Real-time Updates**: Instant UI updates using Redux Toolkit Query
- **Mobile Responsive**: Optimized for all device sizes
- **Toast Notifications**: User-friendly success/error messages

## 🛠️ Tech Stack

### Frontend
- **React 19.1.0** - Latest React with modern features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **Redux Toolkit Query** - State management and API caching
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **React Hook Form** - Form management with validation
- **Zod** - Schema validation
- **Sonner** - Toast notifications
- **Lucide React** - Modern icon library

### Backend
- **Node.js & Express** - Server runtime and framework
- **TypeScript** - Type-safe backend development
- **MongoDB** - NoSQL database
- **CORS** - Cross-origin resource sharing

## 🏗️ Project Structure

```
library-management-frontend/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # Base UI components (Radix UI)
│   │   ├── AddNewBookModal.tsx
│   │   ├── BorrowBookModal.tsx
│   │   └── EditBookModal.tsx
│   ├── pages/              # Page components
│   │   ├── BookList.tsx
│   │   ├── BorrowSummary.tsx
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── redux/              # State management
│   │   ├── api/
│   │   │   └── libraryApi.ts
│   │   └── store.ts
│   ├── routes/             # Routing configuration
│   │   └── index.tsx
│   ├── lib/                # Utility functions
│   │   └── utils.ts
│   └── assets/             # Static assets
├── public/                 # Public assets
├── components.json         # shadcn/ui configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.ts          # Vite configuration
├── vercel.json             # Vercel deployment configuration
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sabbirziauddin/library-management-frontent.git
   cd library-management-frontent
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   VITE_API_BASE_URL=https://library-management-backend-ten.vercel.app
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🔧 API Endpoints

### Books
- `GET /api/books` - Get all books
- `POST /api/books` - Add a new book
- `PATCH /api/books/:id` - Update a book
- `DELETE /api/books/:id` - Delete a book

### Borrowing
- `POST /api/borrow` - Borrow a book
- `GET /api/borrow` - Get borrowing summary

## 📱 Screenshots

### Book List View
![Book List](https://via.placeholder.com/800x400?text=Book+List+View)

### Add New Book Modal
![Add Book](https://via.placeholder.com/800x400?text=Add+Book+Modal)

### Borrowing Summary
![Borrow Summary](https://via.placeholder.com/800x400?text=Borrowing+Summary)

## 🎯 Key Features Implemented

- ✅ **CRUD Operations** - Complete Create, Read, Update, Delete functionality
- ✅ **Real-time Updates** - Instant UI updates with RTK Query
- ✅ **Form Validation** - Robust client-side validation with Zod
- ✅ **Error Handling** - Comprehensive error handling and user feedback
- ✅ **Responsive Design** - Mobile-first responsive design
- ✅ **TypeScript** - Full type safety across the application
- ✅ **Modern UI** - Clean, modern interface with Radix UI components
- ✅ **Performance Optimized** - Code splitting and lazy loading
- ✅ **SEO Friendly** - Proper meta tags and semantic HTML

## 🔮 Future Enhancements

- 🔐 **User Authentication** - User login and role-based access
- 📊 **Analytics Dashboard** - Library usage statistics
- 🔍 **Advanced Search** - Full-text search with filters
- 📧 **Email Notifications** - Overdue book reminders
- 📱 **Mobile App** - React Native mobile application
- 🌐 **Multi-language Support** - Internationalization (i18n)
- 📈 **Reporting System** - Generate usage reports
- 🔔 **Real-time Notifications** - WebSocket-based notifications

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sabbir Ziauddin**
- GitHub: [@sabbirziauddin](https://github.com/sabbirziauddin)
- LinkedIn: [Sabbir Ziauddin](https://linkedin.com/in/sabbir-ziauddin)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Radix UI](https://www.radix-ui.com/) - For accessible components
- [Vercel](https://vercel.com/) - For deployment and hosting
- [Redux Toolkit](https://redux-toolkit.js.org/) - For state management

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/sabbirziauddin">Sabbir Ziauddin</a></p>
</div>