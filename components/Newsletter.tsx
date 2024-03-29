import React from "react";
import { useState } from "react";

const Newsletter = () => {
  const [fname, updateName] = useState("");
  const [lname, updateLName] = useState("");
  const [email, updateEmail] = useState("");

  const submit = () =>{
    fname;
    lname;
    email;
  }

  return (
        <div className="columns is-centered is-vcentered">
          <div className="column is-full">
            <p className="title is-1 is-spaced has-text-centered mt-4">
              Join our Newsletter
            </p>
            <div className="field">
              <label className="label">First name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  id="fname"
                  name="fname"
                  onChange={(e) => updateName(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="field">
              <label className="label">Last name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  id="fname"
                  name="fname"
                  onChange={(e) => updateLName(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="field">
              <label className="label">UTD email</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="abc123456@utdallas.edu"
                  id="email"
                  name="email"
                  onChange={(e) => updateEmail(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="control">
              <button className="button is-primary" onClick={submit}>Submit</button>
            </div>
          </div>
        </div>
  );
};

export default Newsletter;
