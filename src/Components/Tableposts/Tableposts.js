
import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom"
import { connect } from 'react-redux'
import { fetchPosts } from "../../actions/postsAction"
import { DataGrid } from '@material-ui/data-grid';
import "./Tableposts.scss"

function Tableposts({ postsData, fetchPosts }) {
    const history = useHistory()
    const { loading, error, posts } = postsData
    console.log(postsData)
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'title', headerName: 'TITLE', width: 400 },
        { field: 'body', headerName: 'DESCRIPTION', width: 750 },
    ];
    useEffect(() => {
        fetchPosts()
    }, []);

    function handleClickRow(id) {
        history.push("postdetail", id)
    }
    return error ?
        (
            <h4>{postsData.error}</h4>
        ) :
        < div style={{ height: 550, width: '100%' }}>
            <DataGrid
                loading={loading}
                disableColumnMenu
                rows={posts}
                columns={columns} pageSize={10}
                onRowClick={(data) => handleClickRow(data.id)}
            />
        </div >

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
export default connect(mapStateToProps, mapDispatchToProps)(Tableposts)