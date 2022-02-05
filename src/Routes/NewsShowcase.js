import React, { Component } from "react";
import NewsElementComponent from "../Components/NewsElementComponent";
import "../Styles/News.scss";

export class NewsShowcase extends Component {
    constructor(props) {
      super(props)
      this.paginationChanged = this.paginationChanged.bind(this);
      this.state = {
        data: [],
        fetchIndex: 0,
        fetchSize: 4,
        PaginationCount: 0,
        DbCount: 0
      }
    }
    async componentDidMount() {
        const count = await this.FetchDbCount();
        this.setState({ DbCount: count });
        if (this.state.DbCount % this.state.fetchSize > 0) {
          this.setState({
            PaginationCount:
              Math.trunc(this.state.DbCount / this.state.fetchSize) + 1,
          });
        } else {
          this.setState({
            PaginationCount: this.state.DbCount / this.state.fetchSize,
          });
        }
        this.FetchInfo();
      }
      async FetchDbCount() {
        const response = await fetch("http://mrgreencheezz.ddns.net:90/getNewscount");
        const jsonResponse = await response.json();
        return jsonResponse;
      }
      FetchInfo() {
        fetch(
          "http://mrgreencheezz.ddns.net:90/advGetNews?" +
            new URLSearchParams({
              SegmentIndex: this.state.fetchIndex,
              SegmentSize: this.state.fetchSize
            }).toString()
        )
          .then((response) => response.json())
          .then((info) => this.setState({ data: info }));
      }
      paginationChanged(event, page) {
        this.setState({ fetchIndex: page - 1 });
      }
    
      componentDidUpdate(prevProps, prevState) {
        if (
          prevState.fetchIndex !== this.state.fetchIndex
        ) {
          this.FetchInfo();
        }
      }
  render() {
    return (
      <div className="NewsBlock">
        {this.state.data.map((item) => {
              return (
                <NewsElementComponent
                  Header = {item.NewsHeader}
                  PicLink = {item.NewsPictureLink}
                  Content = {item.NewsContent}
                />
              );
            })}
      </div>
    );
  }
}

export default NewsShowcase;
