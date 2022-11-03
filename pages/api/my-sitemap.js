const { SitemapStream, streamToPromise } = require('sitemap'); //Calculating...
const { Readable } = require('stream');
import { db } from '../../utils/firebase';
import { getDoc, doc } from 'firebase/firestore';
export default async (req, res) => {
  const docRef = doc(db, 'blogIndex', 'Index');
  const docSnap = await getDoc(docRef);
  // console.log(docSnap.data());
  const urls = Object.keys(docSnap.data());
  const links = [{ url: '/blogs/', changefreq: 'daily', priority: 0.7 }];
  urls.map((i) => {
    links.push({ url: `/blogs/${i}`, changefreq: 'monthly', priority: 0.3 });
  });
  console.log(process.env.HOST);
  const stream = new SitemapStream({
    hostname: `https://bitsframe.com`,
  });
  res.writeHead(200, {
    'Content-Type': 'application/xml',
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};
