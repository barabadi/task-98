import "./App.css";

function App() {
  return (
    <div className="App">
      <section class="hero">
        <div class="hero-body">
          <p class="title">A React Task</p>
          <p class="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div class="container is-fullhd">
        <div class="notification">
          Edit the <code>./src</code> folder to add components.
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import styles from './LoginForm.module.scss';

const LoginForm = () => {
  return (
    <form className={styles.form}>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" />

      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;

export default App;
