//const not_now = !process.env.NOW_REGION
//const mobile_host = not_now ? 'm.ihs.edu.vn' : process.env.MOBILE_HOST
module.exports = {
  'process.env.NOW_REGION': process.env.NOW_REGION,
  'process.env.NODE_ENV': process.env.NODE_ENV,
  'process.env.API_HOST': 'api.ihs.edu.vn',
  'process.env.GRAPHQL_HOST': 'edu-1.herokuapp.com/v1alpha1/graphql',
  'process.env.GOOGLE_CLIENT_ID': '348227035708-ter7nr3ckok77jn08h1sjtircno59jkj.apps.googleusercontent.com'
}
