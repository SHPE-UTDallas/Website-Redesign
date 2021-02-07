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
      <span className="panel-icon"></span>
      <b>Name:</b>&nbsp; {user.name}
    </a>
    <a className="panel-block">
      <span className="panel-icon"></span>
      <b>Email:</b>&nbsp; {user.email}
    </a>
    <a className="panel-block">
      <span className="panel-icon"></span>
      <b>Major:</b>&nbsp; {user.major}
    </a>
    <a className="panel-block">
      <span className="panel-icon"></span>
      <b>Standing:</b>&nbsp; {user.standing}
    </a>
    <a className="panel-block">
      <span className="panel-icon"></span>
      <b>Dues status:</b>&nbsp;
      {user.paidMember === true ? (
        <span className="tag is-success">PAID</span>
      ) : (
        <span className="tag is-danger">UNPAID</span>
      )}
    </a>
    <a className="panel-block">
      <span className="panel-icon"></span>
      <b>Points:</b>&nbsp; {user.points}
    </a>
  </article>
);

export default UserCardPanel;
