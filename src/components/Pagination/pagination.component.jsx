import { Component } from 'react';
import styles from './pagination.module.css';

import icons from '../../assets/icons.svg';
import Button from '../UI/button/button.component';

class Pagination extends Component {
  iconArrowLeft = `${icons}#icon-arrow-left`;
  iconArrowRight = `${icons}#icon-arrow-right`;

  prevPageHandler = () => {
    const { saveCurrentPageHandler, page } = this.props;

    saveCurrentPageHandler(page - 1);
  };

  nextPageHandler = () => {
    const { saveCurrentPageHandler, page } = this.props;

    saveCurrentPageHandler(page + 1);
  };

  render() {
    const { page } = this.props;
    const { prevPageHandler, nextPageHandler, iconArrowLeft, iconArrowRight } =
      this;

    return (
      <div className={styles.pagination}>
        {page > 1 && (
          <Button btnInline floatLeft onClick={prevPageHandler}>
            <svg>
              <use href={iconArrowLeft}></use>
            </svg>
            <span>Page {page - 1}</span>
          </Button>
        )}
        <Button btnInline floatRight onClick={nextPageHandler}>
          <span>Page {page + 1}</span>
          <svg>
            <use href={iconArrowRight}></use>
          </svg>
        </Button>
      </div>
    );
  }
}
// const Pagination = ({ saveCurrentPageHandler, page }) => {
//   const iconArrowLeft = `${icons}#icon-arrow-left`;
//   const iconArrowRight = `${icons}#icon-arrow-right`;

//   const nextPageHandler = e => {
//     saveCurrentPageHandler(page + 1);
//   };

//   const prevPageHandler = e => {
//     saveCurrentPageHandler(page - 1);
//   };

//   return (
//     <div className={styles.pagination}>
//       {page > 1 && (
//         <Button btnInline floatLeft onClick={prevPageHandler}>
//           <svg>
//             <use href={iconArrowLeft}></use>
//           </svg>
//           <span>Page {page - 1}</span>
//         </Button>
//       )}
//       <Button btnInline floatRight onClick={nextPageHandler}>
//         <span>Page {page + 1}</span>
//         <svg>
//           <use href={iconArrowRight}></use>
//         </svg>
//       </Button>
//     </div>
//   );
// };

export default Pagination;
