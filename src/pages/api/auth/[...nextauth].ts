import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import FusionAuthProvider from 'next-auth/providers/fusionauth'

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    FusionAuthProvider({
      issuer: process.env.FUSION_ISSUER,
      clientId: process.env.FUSION_ID ?? '',
      clientSecret: process.env.FUSION_SECRET ?? ''
    }),
    // CredentialsProvider({
    //   name: 'Purity Vision',
    //   credentials: {
    //     username: { label: 'Username' },
    //     password: { label: 'Password', type: 'password' }
    //   },
    //   async authorize (credentials) {
    //     const loginBody = {
    //       loginId: credentials?.username,
    //       password: credentials?.password,
    //       applicationId: 'some id'
    //     }

    //     const authResponse = await fetch('http://localhost:9011/api/login', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify(loginBody)
    //     })

    //     console.log('auth response: ', authResponse)

    //     if (!authResponse.ok) {
    //       return null
    //     }

    //     const user = await authResponse.json()

    //     return user
    //   }
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
    })
  ]
}

export default NextAuth(authOptions)
