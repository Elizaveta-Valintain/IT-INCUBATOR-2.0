import React from 'react';
import style from "./Pagination.module.css";

const Pagination = ({pageTotalCount, pageSizeView, pageCurrent, onPageChanged}) => {

    let pageNumber = Math.ceil(pageTotalCount / pageSizeView);
    let pages = [];
    for (let i = 1; i <= pageNumber; i++) {
        pages.push(i);
    }

    let curP = pageCurrent
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5
    let curPL = curP + 5
    let slicedPages = pages.slice(curPF, curPL)

    return (
        <div>
            {slicedPages.map(p => {
                return <span key={p.id}
                             className={pageCurrent === p && style.selectedPage}
                             onClick={(e) => {
                                 onPageChanged(p)
                             }}
                > {p} </span>
            })}
        </div>
    );
}

export default Pagination;
