import { Component, Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './search-results.module.css';
import Results from '../../components/results/results.component';
import Pagination from '../../components/pagination/pagination.component';

class SearchResults extends Component {
  constructor() {
    super();

    this.state = {
      currentPage: 1,
    };
  }

  onSaveCurrentPage = selectedPage => {
    this.setState(
      () => ({ currentPage: selectedPage }),
      () => console.log(this.state)
    );
  };

  onSaveIdPreview = selectedId => {
    console.log(selectedId);
  };

  render() {
    const { onSaveIdPreview, onSaveCurrentPage } = this;
    const { currentPage } = this.state;

    return (
      <Fragment>
        <div className={styles['search-results']}>
          <Results page={currentPage} saveIdPreviewHandler={onSaveIdPreview} />
          <Pagination
            page={currentPage}
            saveCurrentPageHandler={onSaveCurrentPage}
          />
        </div>
        <Outlet />
      </Fragment>
    );
  }
}
// const SearchResults = () => {
//   const saveIdPreviewHandler = selectedId => {
//     console.log(selectedId);
//   };

//   const saveCurrentPageHandler = selectedPage => {
//     console.log(selectedPage);

//     setCurrentPage(selectedPage);
//   };

//   const [currentPage, setCurrentPage] = useState(1);

//   return (
//     <div className={styles['search-results']}>
//       <Results page={currentPage} onSaveIdPreview={saveIdPreviewHandler} />
//       <Pagination
//         page={currentPage}
//         onSaveCurrentPage={saveCurrentPageHandler}
//       />
//     </div>
//   );
// };

export default SearchResults;
