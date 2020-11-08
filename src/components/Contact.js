import React, { Component } from "react";
import Title from "./Title";
import { Button } from "./Button";

export default class Contact extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8 mx-auto">
            <form className="container d-flex flex-column justify-content-center">
              <Title title="Contact Us" />
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label for="exampleInputName1">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName1"
                  placeholder="Name"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Check to receive updates and the latest deals straight to your
                  inbox.
                </label>
              </div>
              <Button type="submit" className="btn btn-dark">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// ADD FORM VALIDATION
