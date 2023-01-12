import React, { useState } from "react";

export default (data, cnt) => {
    const [page, setPage] = useState(1);
    const maxPage = Math.ceil(data.length / cnt)

    const next = () => {
        let newPage = Math.min(page + 1, maxPage)
        setPage(newPage);
    }

    const prev = () => {
        let newPage = Math.max(1, page - 1)
        setPage(newPage);
    }

    const change = (p) => {
        setPage(Math.max(1, Math.min(p, maxPage)));
    }

    const pageData = () => {
        const start = (page - 1) * cnt; // первый элемент страницы 0-n
        const end = start + cnt;
        return data.slice(start, end);
    }
    return { next, prev, change, maxPage, page, pageData };
}

