import { NextApiRequest, NextApiResponse } from 'next'
import updateUserInfo from '../../../utils/api/updateUserInfo'
const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
      console.log("about to update the user")
    await updateUserInfo("ZQp1jvaAnVd394InQzaY");
    res.status(200).send("It worked");
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
