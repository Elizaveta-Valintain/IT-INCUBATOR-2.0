//
// Карусель массива номеров страниц, можно сделать через Array.slice():
//
// pages.push(i);
// };
//
// let curP = this.props.currentPage;
// let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
// let curPL = curP + 5;
// let slicedPages = pages.slice( curPF, curPL);
//
// // И в jsx меняем:
// pages.map(*****)
// // на
// slicedPages.map(*****)
