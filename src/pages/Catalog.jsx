import React, { useContext } from "react";
import Card from "../components/Card";
import { Context } from "../App";
import Pagination from "../components/Pagination";
import usePagination from "../components/Hooks/usePagination";

export default ({ setFav, setCart }) => {

    const { searchText, products, goods } = useContext(Context);

    const paginate = usePagination(products, 8)

    return <>
        <div className="cards-container">
            {!searchText && products.length > 0 && paginate.pageData().map((d, i) => <Card
                key={i}
                {...d}
                name={d.name.length > 15 ? d.name.slice(0, 15) + "..." : d.name}
                setFav={setFav}
                setCart={setCart}
            />)
                // <p>Для отображения данных войдите в систему</p>
            }
            {searchText && <div style={{ gridColumnEnd: "span 4" }}>
                {products.length
                    ? <>По запросу <b>{searchText}</b> найдено {products.length} позиций</>
                    : <>По запросу <b>{searchText}</b> товаров не найдено</>
                }
            </div>}
            {searchText && paginate.pageData().map((d, i) => <Card
                key={i}
                {...d}
                name={d.name.length > 15 ? d.name.slice(0, 15) + "..." : d.name}
                setFav={setFav}
                setCart={setCart}
            />)}
        </div>
        <Pagination hook={paginate} />
    </>
}