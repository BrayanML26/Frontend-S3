import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, CssBaseline, Box } from '@mui/material';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AddUser from './components/AddUser';
import AddBook from './components/AddBook';
import UserList from './components/UserList';
import BookList from './components/BookList';
import './App.css';

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <NavBar />
      <Container>
        <Box my={4}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/add-book" element={<AddBook />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/books" element={<BookList />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
};

export default App;
