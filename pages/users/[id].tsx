import { GetServerSideProps } from 'next'

import { User } from 'next-auth'
import { sampleUserData } from '../../utils/sample-data'
import Layout from '../../components/Layout'
import ListDetail from '../../components/ListDetail'
import getUserData from '../../utils/api/getUserData'

type Props = {
  item?: User
  errors?: string
}

const StaticPropsDetail = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    )
  }

  return (
    <Layout
      title={`${
        item ? item.name : 'User Detail'
      } | Next.js + TypeScript Example`}
    >
      {item && <ListDetail item={item} />}
    </Layout>
  )
}

export default StaticPropsDetail

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getServerSideProps : GetServerSideProps = async (context) => {
  const id = Array.isArray(context.query) ? context.query[0].id : context.query.id;
  return getUserData(id).then(user => {
    return {
      props: {
        item: {
          ...user
        }
      },
    }
  }).catch(err => {
    return ({ props: { errors: err } })
  });
  
}