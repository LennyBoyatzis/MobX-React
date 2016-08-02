import {observable} from 'mobx';

class AppState {
  @observable selectedFilter = 'Recently Viewed';
  @observable filters = ['Recently Viewed', 'Recent Enquires', 'Recent Searches'];
  @observable items = [];
}

export default AppState;
