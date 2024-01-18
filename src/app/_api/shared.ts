export const GRAPHQL_API_URL = process.env.NEXT_BUILD
  ? `https://demo-final-liard.vercel.app/:${process.env.PORT || 3000}`
  : process.env.NEXT_PUBLIC_SERVER_URL
