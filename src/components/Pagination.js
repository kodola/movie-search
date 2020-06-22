import React from "react";

const Pagination = (props) => {
    const pageLinks = [];

    for (let i = 1; i <= props.pages + 1; i++){
        let active = props.currPage === i ? "active" : "";
        pageLinks.push(<li className={`page-item ${active}`} key={i} onClick={() => props.nextPage(i)}><button className="page-link">{i}</button></li>)
    }
    return (
        <div className="container">
            <div className="row">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        {props.currPage > 1 ? <li className={"page-item"} onClick={() => props.nextPage(props.currPage - 1)}><button className="page-link">Prev</button></li> : ""}
                        {/*{pageLinks}*/}
                        {props.currPage < props.pages + 1 ? <li className={"page-item"} onClick={() => props.nextPage(props.currPage + 1)}><button className="page-link">Next</button></li> : ""}
                    </ul>
                </nav>
            </div>
        </div>
    )
};

export default Pagination;