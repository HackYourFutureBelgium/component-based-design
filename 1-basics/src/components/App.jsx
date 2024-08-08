import List from './list/List';
import Button from './button/Button';

import './App.css';

export const App = () => (
  <>
    <header>
      <h1>Pokemon app</h1>
      <Button text="Click me"/>
      <Button text="Clicked" color="red"/>
    </header>
    <main>
      <List />
    </main>
  </>
);
