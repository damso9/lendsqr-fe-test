import React from 'react';
import styles from './Pagination.module.scss';
import { PaginationProps } from './types';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded'; // Added for back arrow

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  totalItems,
  itemsPerPage,
  onItemsPerPageChange,
}) => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const delta = 2;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        pages.push(i);
      } else if (
        i === currentPage - delta - 1 ||
        i === currentPage + delta + 1
      ) {
        pages.push('...');
      }
    }

    return pages;
  };

  return (
    <div className={styles.paginationContainer}>
      <div className={styles.itemsPerPage}>
        <span>Showing</span>
        <select
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(parseInt(e.target.value))}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <span>out of {totalItems}</span>
      </div>
      <div className={styles.pageNumbers}>
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className={styles.arrowButton}
        >
          <ArrowBackIosRoundedIcon fontSize='small' />
        </button>
        {getPageNumbers().map((page, index) =>
          page === '...' ? (
            <span key={index} className={styles.ellipsis}>
              ...
            </span>
          ) : (
            <button
              key={index}
              className={page === currentPage ? styles.active : ''}
              onClick={() => onPageChange(page as number)}
            >
              {page}
            </button>
          )
        )}
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className={styles.arrowButton}
        >
          <ArrowForwardIosRoundedIcon fontSize='small' />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
