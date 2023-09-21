import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const pagContainer = document.querySelector('#tui-pagination-container');

function createPagination({ page, perPage, totalPages }) {
  return new Pagination(pagContainer, {
    totalItems: Number(totalPages) * Number(perPage),
    itemsPerPage: Number(perPage),
    visiblePages: 2,
    page: Number(page),
    centerAlign: true,
  });
}

export { createPagination };
