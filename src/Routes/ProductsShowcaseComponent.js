import React, { Component } from "react";
import ItemCardComponent from "../Components/ItemCardComponent";
import Stack from "@mui/material/Stack";
import {
  Pagination,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

export class ProductsShowcaseComponent extends Component {
  constructor(props) {
    super(props);
    this.paginationChanged = this.paginationChanged.bind(this);
    this.ProductTypeSearchChanged = this.ProductTypeSearchChanged.bind(this);
    this.state = {
      data: [],
      fetchIndex: 0,
      fetchSize: 12,
      PaginationCount: 0,
      DbCount: 0,
      ProductType: "",
    };
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
    const response = await fetch("http://mrgreencheezz.ddns.net:90/getdbcount");
    const jsonResponse = await response.json();
    return jsonResponse;
  }

  FetchInfo() {
    fetch(
      "http://mrgreencheezz.ddns.net:90/advget?" +
        new URLSearchParams({
          SegmentIndex: this.state.fetchIndex,
          SegmentSize: this.state.fetchSize,
          ItemType: this.state.ProductType
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
      prevState.fetchIndex !== this.state.fetchIndex ||
      prevState.ProductType !== this.state.ProductType
    ) {
      this.FetchInfo();
    }
  }
  ProductTypeSearchChanged(event, myType) {
    this.setState({ ProductType: event.target.value });
  }
  render() {
    //Разбить продукцию на подразделы и сделать выборку по данной информации

    if (this.state.data.length > 0)
      return (
        <div className="ProductsMain">
          <div
            className="ProductTypeSelecter"
            style={{ float: "left", paddingLeft: "35px", display: "flex", width: "90%" }}
          >
            <FormControl style={{backgroundColor: "white"}}>
              <InputLabel id="Search-input">Тип продукции</InputLabel>
              <Select
                value={this.state.ProductType}
                onChange={this.ProductTypeSearchChanged}
                label="Тип продукции"
                autoWidth
                style={{ minWidth: "200px" }}
                id="Search-input"
                
              >
                <MenuItem value={""}>Все</MenuItem>
                <MenuItem value={"Paint"}>Краска</MenuItem>
                <MenuItem value={"Coating"}>Покрытие</MenuItem>
                <MenuItem value={"Another"}>Другое</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div
            style={{ position: "relative", display: "inline-block" }}
            className="ProductsCards"
          >
            {this.state.data.map((item) => {
              return (
                <ItemCardComponent
                  Name={item.ItemName}
                  Price={item.Price}
                  key={item.Id}
                  ImageLink={item.PicLink}
                />
              );
            })}
          </div>
          <div
            className="ProductsPagination"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <Stack
              spacing={2}
              style={{ position: "relative", margin: "0 auto" }}
            >
              <Pagination
                count={this.state.PaginationCount}
                color="primary"
                onChange={this.paginationChanged}
              />
            </Stack>
          </div>
        </div>
      );
    else {
      return <div>
          <div
            className="ProductTypeSelecter"
            style={{ float: "left", paddingLeft: "35px",display: "flex", width: "90%" }}
          >
            <FormControl style={{backgroundColor: "white"}}>
              <InputLabel id="Search-input">Тип продукции</InputLabel>
              <Select
                value={this.state.ProductType}
                onChange={this.ProductTypeSearchChanged}
                label="Тип продукции"
                autoWidth
                style={{ minWidth: "200px" }}
                id="Search-input"
                
              >
                <MenuItem value={""}>Все</MenuItem>
                <MenuItem value={"Paint"}>Краска</MenuItem>
                <MenuItem value={"Coating"}>Покрытие</MenuItem>
                <MenuItem value={"Another"}>Другое</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div
            className="ProductsPagination"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <Stack
              spacing={2}
              style={{ position: "relative", margin: "0 auto" }}
            >
              <Pagination
                count={this.state.PaginationCount}
                color="primary"
                onChange={this.paginationChanged}
              />
            </Stack>
          </div>
      </div>;
    }
  }
}

export default ProductsShowcaseComponent;
