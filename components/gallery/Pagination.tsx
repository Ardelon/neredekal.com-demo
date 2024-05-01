import React from "react";
import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  return (
    <div>
      {prevPage && <Link href={`?page=${prevPage}`}>Previous</Link>}
      <span>{` Page ${currentPage} of ${totalPages}`}</span>
      {nextPage && <Link href={`?page=${nextPage}`}>Next</Link>}
    </div>
  );
};

export default Pagination;
