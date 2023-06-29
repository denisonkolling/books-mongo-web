import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import Navbar from './components/Navbar';
import BookGallery from './components/BookGallery';
import Login from './components/Login'
import BookCard from './components/BookCard'

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/addBook' element={<AddBook />}></Route>
        <Route path='/editBook/:id' element={<EditBook />}></Route>
        <Route path='/bookgallery' element={<BookGallery />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/bookcard' element={<BookCard />}></Route>
      </Routes>

    </>
  );
}

export default App;
