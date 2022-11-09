// /** @type {import('next').NextConfig} */
const {
  PHASE_DEVELOPMENT_SERVER
} = require('next/constants')

const nextConfigProd = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    CONTENT_API_KEY: '63bae8655b3b9e3c1c83ae8b0b',
    BLOG_URL: 'http://localhost:2368'
  }
}

const nextConfigStage = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    CONTENT_API_KEY: '63bae8655b3b9e3c1c83ae8b0b',
    BLOG_URL: 'http://localhost:2368'
  }
}


module.exports = (phase) => {
  if(phase === PHASE_DEVELOPMENT_SERVER) {
    return nextConfigStage
  }

  return nextConfigProd
}
