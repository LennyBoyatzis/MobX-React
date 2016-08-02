import React from 'react';
import {render} from 'react-dom';
import AppState from './AppState';
import FilterList from './App';
import styles from './styles/styles.css';

const appState = new AppState();

render(
  <FilterList
    className={styles.container}
    store={appState}
  />,
  document.getElementById('app')
);
