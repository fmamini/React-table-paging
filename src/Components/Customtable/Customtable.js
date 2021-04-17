import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom"
import { connect } from 'react-redux'
import { fetchPosts } from "../../actions/postsAction"
import ReactPaginate from 'react-paginate';
import "./Customtable.css"
function Customtable({ postsData, fetchPosts }) {
    const history = useHistory()
    const { loading, error, posts } = postsData
    const [paginate, setPaginate] = useState({
        offset: 0,
        tableData: [],
        orgtableData: [],
        perPage: 10,
        currentPage: 0,
    });
    useEffect(() => {
        fetchPosts()
        setDataTable(posts)
    }, [posts]);
    function setDataTable(posts) {
        var slice = posts.slice(paginate.offset, paginate.offset + paginate.perPage)
        setPaginate({
            ...paginate,
            pageCount: Math.ceil(posts.length / paginate.perPage),
            orgtableData: posts,
            tableData: slice
        })
    }
    function handlePageClick(e) {
        const selectedPage = e.selected;
        const offset = selectedPage * paginate.perPage;
        setPaginate(
            {
                ...paginate,
                currentPage: selectedPage,
                offset: offset
            },
            () => {
                const data = paginate.orgtableData;
                const slice = data.slice(paginate.offset, paginate.offset + paginate.perPage);
                setPaginate({
                    ...paginate,
                    pageCount: Math.ceil(data.length / paginate.perPage),
                    tableData: slice
                })
            }
        )
    }
    function handleClickRow(id) {
        history.push("postdetail", id)
    }
    return loading ? (
        <h1>Loading...</h1>
    ) :
        error ? (
            <h1>{postsData.error}</h1>) :
            paginate.tableData &&
            <div className="container">
                <table className="custom-table">
                    <thead>
                        <tr>
                            <th >ID</th>
                            <th >TITLE</th>
                            <th >DESCRIPTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginate.tableData.map((row) => {
                            return <tr className="table-row" key={row.id} onClick={() => handleClickRow(row.id)}>
                                <td>{row.id}</td>
                                <td>{row.title}</td>
                                <td>{row.body}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
                <ReactPaginate
                    previousLabel={'prev'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={paginate.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                />
            </div>
}

const mapStateToProps = state => {
    return {
        postsData: state.posts
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Customtable)