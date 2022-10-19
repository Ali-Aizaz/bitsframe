// server.js
const functions = require('firebase-functions');
// const { createServer } = require('http');
// const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
// const hostname = dev ? 'localhost' : 'bitsrame.web.app';
// const port = process.env.PORT || 3000;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, conf: { distDir: '.next' } });
const handle = app.getRequestHandler();

exports.nextServer = functions
  .region('asia-southeast1')
  .https.onRequest((req, res) => {
    return app.prepare().then(() => {
      // createServer(async (req, res) => {
      //   try {
      //     // Be sure to pass `true` as the second argument to `url.parse`.
      //     // This tells it to parse the query portion of the URL.
      //     const parsedUrl = parse(req.url, true);
      //     const { pathname, query } = parsedUrl;

      //     if (pathname === '/a') {
      //       await app.render(req, res, '/a', query);
      //     } else if (pathname === '/b') {
      //       await app.render(req, res, '/b', query);
      //     } else {
      //       await handle(req, res, parsedUrl);
      //     }
      //   } catch (err) {
      //     console.error('Error occurred handling', req.url, err);
      //     res.statusCode = 500;
      //     res.end('internal server error');
      //   }
      // }).listen(port, (err) => {
      //   if (err) throw err;
      //   console.log(`> Ready on http://${hostname}:${port}`);
      // });
      return handle(req, res);
    });
  });

// app.prepare().then(() => {
//   createServer(async (req, res) => {
//     try {
//       // Be sure to pass `true` as the second argument to `url.parse`.
//       // This tells it to parse the query portion of the URL.
//       const parsedUrl = parse(req.url, true);
//       const { pathname, query } = parsedUrl;

//       if (pathname === '/a') {
//         await app.render(req, res, '/a', query);
//       } else if (pathname === '/b') {
//         await app.render(req, res, '/b', query);
//       } else {
//         await handle(req, res, parsedUrl);
//       }
//     } catch (err) {
//       console.error('Error occurred handling', req.url, err);
//       res.statusCode = 500;
//       res.end('internal server error');
//     }
//   }).listen(port, (err) => {
//     if (err) throw err;
//     console.log(`> Ready on http://${hostname}:${port}`);
//   });
// });
