import React, {useState} from "react";




export default (data, cnt) => {
    const [page, setPage] = useState(1);
    const maxPage = Math.ceil(data.length / cnt)

    const next = () => {
        let newPage = Math.min(page + 1, maxPage)
        setPage(newPage);
        console.log(newPage)
    } 

    const prev = () => {
        let newPage = Math.max(1, page - 1)
        setPage(newPage);
        console.log(newPage)
    }

    const change = (p) => {
        /* 
            p=8 => 7 Math.min(p, maxPage)
            p=0 => 1 Math.max(1, p)
        
        */
        
        setPage(Math.max(1, Math.min(p, maxPage)));
    }

    const pageData = () => {
        const start = (page - 1) * cnt; // первый элемент страницы 0-n
        /* 
            page 1 (при cnt = 4) start = 0
            page 2   2-1      start = 4
            page 3         start = 8
        */

        const end = start + cnt;

        return data.slice(start, end);
    }
    return {next, prev, change, maxPage, page, pageData}; // {next: function() {...}} передали ссылку на функцию
}

// usePagination.next() / prev()
