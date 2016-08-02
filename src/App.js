import React, {Component} from 'react';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import ListHeading from './components/ListHeading';
import ListFilters from './components/ListFilters';
import List from './components/List';
import styles from './styles/styles.css';

@observer
class FilterList extends Component {
  render() {
    const {filters, selectedFilter, items} = this.props.store
    return (
      <div className={styles.container}>
        <DevTools />
        <ListHeading
          title='Your History'
        />
        <ListFilters
          filters={filters}
          selectedFilter={selectedFilter}
        />
        <List items={items}/>
      </div>
    );
  }
};

export default FilterList;
