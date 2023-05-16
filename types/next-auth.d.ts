// import NextAuth, { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface CustomSession extends Session {
    access_token: string // Add the access_token property to the custom Session interface
  }

  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  // interface Session {
  //   user: {
  //     isSubscribed: boolean = false
  //   } & DefaultSession['user']
  // }
}
