import React, { Component } from "react";
import { WatchConsumer } from "../context";
import { NavLink } from "react-router-dom";
import { Button } from "./Button";
import Title from "./Title";

export default class Details extends Component {
  render() {
    return (
      <div>
        <WatchConsumer>
          {(value) => {
            const {
              id,
              title,
              img,
              imgDesc,
              price,
              company,
              info,
            } = value.watchDetail;
            return (
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <Title title={title} />
                </div>
                <div className="row">
                  {/** product info */}
                  <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                      <img src={img} alt={imgDesc} className="img-fluid" />
                    </div>

                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                      <h2>{title}</h2>
                      <h4 className="text-title text-uppercase text-muted">
                        by <span className="text-uppercase">{company}</span>
                      </h4>
                      <h4 className="text-green">
                        <strong>
                          Price: <span>£</span>
                          {price}
                        </strong>
                      </h4>
                      <p className="text-uppercase font-weight-bold mt-3">
                        Description
                      </p>
                      <p className="text-muted">{info}</p>
                      {/** buttons */}
                      <div className="pb-5">
                        <NavLink to="/shop">
                          <Button>Back to Shop</Button>
                        </NavLink>
                        <Button cart onClick={() => value.addToCart(id)}>
                          Add to Cart
                        </Button>
                      </div>
                      {/** end buttons */}
                    </div>
                  </div>
                  {/** end product info */}
                </div>
              </div>
            );
          }}
        </WatchConsumer>
      </div>
    );
  }
}
