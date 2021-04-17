
import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom"
import { connect } from 'react-redux'
import { fetchDetailPost } from "../../actions/detailpostAction"
import "./Postdetail.scss"
function Postdetail({ detailPostData, fetchDetailPost }) {
    const history = useHistory()
    const { loadingDetail, error, post } = detailPostData
    const _id = history.location.state
    useEffect(() => {
        fetchDetailPost(_id)
    }, []);
    return loadingDetail ?
        (
            <h1>Loading ...</h1>
        ) :
        error ?
            (
                <h4>{detailPostData.error}</h4>
            ) :
            <div className="detail-container">
                {post.map((card) => {
                    return <div className="card" key={card.id}>
                        <p><span className="card-title">Name : </span>{card.name}</p>
                        <p><span className="card-title">Email : </span>{card.email}</p>
                        <p><span className="card-title">body : </span>{card.body}</p>
                    </div>
                })}
                <div className="back"><button onClick={() => history.push("/")}>Back Matrial table</button></div>
                <div className="back"><button onClick={() => history.push("/customtable")}>Back Custom table</button></div>
            </div>

}

const mapStateToProps = state => {
    return {
        detailPostData: state.detailpost
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchDetailPost: (_id) => dispatch(fetchDetailPost(_id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Postdetail)


