import { GetServerSideProps } from "next";

import { User } from "next-auth";
import Layout from "../../components/Layout";
import ListDetail from "../../components/ListDetail";
import UserCardPanel from "../../components/UserCardPanel";
import getUserData from "../../utils/api/getUserData";

type Props = {
  user: User;
  errors?: string;
};

const StaticPropsDetail = ({ user, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout
      title={`${
        user ? user.name : "User Detail"
      } | Next.js + TypeScript Example`}
    >
      <div className="columns is-centered">
        <div className="column is-11">
          <div className="card is-flex is-flex-direction-column">
            <header className="card-header">
              <p className="card-header-title"> {user.name} </p>
            </header>
            <div className="columns pt-3 mb-0">
              <div
                className="column is-one-third"
                style={{ borderRight: "2px solid whitesmoke" }}
              >
                <figure className="image is-square">
                  <img
                    className="is-rounded"
                    src={
                      user.image
                        ? user.image
                        : "https://via.placeholder.com/240"
                    }
                  />
                </figure>
              </div>
              <div className="column is-three-quarters">
                <p className="has-text-centered has-text-weight-bold">
                  ResumeBook Integration
                </p>
              </div>
            </div>
            <div className="columns">
              <div className="column is-one-third p-0 mt-3">
                <hr className="m-0 p-0" />
              </div>
            </div>
            <div className="columns">
              <div className="column is-one-third p-0 is-flex is-flex-wrap-wrap">
                <UserCardPanel user={user} />
              </div>
            </div>

            {/* <footer className="card-footer">
              <a className="card-footer-item">Save</a>
              <a className="card-footer-item">Edit</a>
              <a className="card-footer-item">Delete</a>
            </footer> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StaticPropsDetail;

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = Array.isArray(context.query)
    ? context.query[0].id
    : context.query.id;
  return getUserData(id)
    .then((user) => {
      return {
        props: {
          user: {
            ...user,
          },
        } as Props,
      };
    })
    .catch((err) => {
      return { props: { errors: err } as Props };
    });
};
