import React from "react";
import { User } from "next-auth";

export interface CardPanelProps {
  user: User;
}

export const UserCardPanel = ({ user }: CardPanelProps) => (
  <article className="panel is-primary">
    <p className="panel-tabs">
      <a className="is-active">All Info</a>
      <a>Public</a>
      <a>Private</a>
    </p>
    <a className="panel-block is-active">
      <span className="panel-icon">
        <i className="fas fa-book" aria-hidden="true"></i>
      </span>
      bulma
    </a>
    <a className="panel-block">
      <span className="panel-icon">
        <i className="fas fa-book" aria-hidden="true"></i>
      </span>
      marksheet
    </a>
    <a className="panel-block">
      <span className="panel-icon">
        <i className="fas fa-book" aria-hidden="true"></i>
      </span>
      minireset.css
    </a>
    <a className="panel-block">
      <span className="panel-icon">
        <i className="fas fa-book" aria-hidden="true"></i>
      </span>
      <span className="tag is-success">
        {user.paidMember === true ? "PAID" : "UNPAID"}
      </span>
    </a>
  </article>
);

export default UserCardPanel;
