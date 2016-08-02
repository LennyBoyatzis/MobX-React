import React, {PropTypes} from 'react';
import styles from '../styles/ListHeading.css';

const ListHeading = (props) => {
  return (
    <div className={styles.heading}>
      <h1>List Heading</h1>
    </div>
  );
}

ListHeading.propTypes = {}

export default ListHeading
