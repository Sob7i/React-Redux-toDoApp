import React from 'react';
import Footer from '../src/components/Footer';
import AddTodo from '../src/container/AddTodo';
import VisibleTodoList from '../src/container/VisibleTodoList';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;