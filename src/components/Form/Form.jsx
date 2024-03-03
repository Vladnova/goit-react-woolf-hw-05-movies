import { useState } from 'react';
import styles from './Form.module.css';
import Button from 'components/Button';

const Form = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handlerInput = ({ target }) => {
    setSearch(target.value);
  };

  const handlerSubmit = e => {
    e.preventDefault();
    onSubmit(search.trim());
    setSearch('');
  };
  return (
    <form onSubmit={handlerSubmit} className={styles.form}>
      <input
        type="text"
        name="search"
        value={search}
        onChange={handlerInput}
        className={styles.input}
      />
      {search && <Button type="submit" className={styles.buttonForm}>
              Search
            </Button>}
    </form>
    // <form onSubmit={handlerSubmit}>
    //   <input type="text" value={search} onChange={handlerInput} />
    //   <button type="submit">Search</button>
    // </form>
  );
};

export default Form;
