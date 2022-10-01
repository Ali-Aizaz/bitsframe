/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['firebasestorage.googleapis.com', 'placeimg.com'],
  },
  env: {
    API_KEY: 'AIzaSyB7R5qJTte5p0ovVfyQ0CtPSSSdezS4hvw',
    AUTH_DOMAIN: 'bitsrame.firebaseapp.com',
    PROJECT_ID: 'bitsrame',
    STORAGE_BUCKET: 'bitsrame.appspot.com',
    MESSAGE_SENDER_ID: '713932777008',
    APP_ID: '1:713932777008:web:be7ca770b5448355f52ff5',
  },
  images: {
    loader: 'akamai',
    path: '',
  },
};

module.exports = nextConfig;
