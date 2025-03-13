import React from 'react';
import style from '../Home/style.module.css';

import Header from '../../components/Header';
import FormTask from '../../components/FormTask';
import TaskList from '../../components/TaskList';
import TaskItem from '../../components/TaskItem';
import Footer from '../../components/Footer';

function Home() {
  return (
    <main className={style.main}>
      <Header/>
      <FormTask/>
      <TaskList>
        <TaskItem/>
      </TaskList>
      <Footer/>
    </main>
  );
}

export default Home;