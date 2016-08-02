import React, {PropTypes} from 'react';
import styles from '../styles/ListFilters.css';

const ListFilters = ({filters}) => {
  return (
    <div className={styles.listFilters}>
      <ul className={styles.list}>
        {filters.map(filter =>
          <li key={filter}>{filter}</li>
        )}
      </ul>
    </div>
  );
}

ListFilters.propTypes = {}

export default ListFilters
