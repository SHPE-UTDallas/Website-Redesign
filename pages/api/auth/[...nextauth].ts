import NextAuth, { InitOptions, User } from "next-auth";
import type { NextApiRequest, NextApiResponse } from "next";
import { GenericObject } from "next-auth/_utils";
import Providers from "next-auth/providers";

interface ProviderLinkedInOptions {
  clientId: string;
  clientSecret: string;
  scope?: string;
  profile: (profile: GenericObject) => Promise<GenericObject>;
}

/**
 * Credit to @TimNZ for the prototype of how to get an email address from LinkedIn
 * Post: https://github.com/nextauthjs/next-auth/discussions/976
 */
const options: InitOptions = {
  callbacks: {
    signIn: async (user: User, account, _profile: GenericObject) => {
      return new Promise(async (resolve, reject) => {
        if (!user.email) {
          await fetch(
            "https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))",
            {
              method: "GET",
              headers: { Authorization: "Bearer " + account.accessToken },
            }
          )
            .then(async (response) => {
              const json = await response.json();
              user.email = json.elements[0]["handle~"].emailAddress;
            })
            .catch((err) => {
              reject(err);
            });
        }
        resolve(true);
      });
    },
  },
  /**
   * @todo: Make a flow for new users to go through
   * pages: {
   *   newUser: '/user/onboard'
   *  },
   */
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Providers.LinkedIn({
      clientId: process.env.LINKEDIN_CLIENT_ID!,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
      scope: "r_liteprofile r_emailaddress",
      profile: async (profile: GenericObject) => {
        return {
          id: profile.id,
          name: profile.localizedFirstName + " " + profile.localizedLastName,
          email: null,
          image: null,
        };
      },
    } as ProviderLinkedInOptions),
  ],

  // A database is optional, but required to persist accounts in a database
  // database: process.env.DATABASE_URL,
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);
