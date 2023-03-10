import React from "react"
import { connect } from "react-redux"
import { getNews } from "../../redux/reducers/news"
import Posts from "./posts/Posts"

class NewsContainer extends React.Component {
    componentDidMount() {
        this.props.getNews()
    }
    render() {
        return <Posts news={ this.props.news } isFetchingNews={ this.props.isFetchingNews } />
    }
}

const mapStateToProps = state => {
    return {
        news: state.newsPage.news,
        isFetchingNews: state.newsPage.isFetchingNews,
    }
}

const News = connect(mapStateToProps, { getNews })(NewsContainer)

export default News
