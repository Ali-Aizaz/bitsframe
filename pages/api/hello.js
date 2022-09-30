import { db } from '../../utils/firebase';
import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  limit,
  orderBy,
  startAfter,
  endBefore,
  addDoc,
  Timestamp,
  limitToLast,
} from 'firebase/firestore';

export const getPortfolio = async () => {
  const docRef = collection(db, 'portfolio');
  const querySnapshot = await getDocs(query(docRef, orderBy('createdAt')));
  let data = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    const port = doc.data();
    delete port.createdAt;
    data.push(port);
  });

  return data;
};

export const getGenres = async () => {
  const docRef = doc(db, 'lists', 'genres');
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export const getBlogs = async (genre) => {
  const blogsRef = collection(db, 'blogs');
  const blogsQueryRef = query(
    blogsRef,
    where('genres', 'array-contains', genre),
    orderBy('createdAt'),
    limit(25)
  );
  const blogsSnap = await getDocs(blogsQueryRef);
  return blogToArray(blogsSnap);
};

export const getBlog = async (slug) => {
  const blogRef = doc(db, `blogs/${slug}`);
  const data = await getDoc(blogRef);
  const blog = data.data();
  delete blog.createdAt;
  return data.exists() ? blog : null;
};

export const getNextPage = async (genre, last) => {
  const blogsQueryRef = query(
    collection(db, 'blogs'),
    where('genres', 'array-contains', genre),
    orderBy('createdAt'),
    startAfter(last),
    limit(25)
  );
  const blogsSnap = await getDocs(blogsQueryRef);
  return blogToArray(blogsSnap);
};

export const getPrevPage = async (genre, first) => {
  const blogsQueryRef = query(
    collection(db, 'blogs'),
    where('genres', 'array-contains', genre),
    orderBy('createdAt'),
    endBefore(first),
    limitToLast(25)
  );
  const blogsSnap = await getDocs(blogsQueryRef);
  return blogToArray(blogsSnap);
};

const blogToArray = (blogsSnap) => {
  let blogs = [];
  blogsSnap.forEach((doc) => {
    let blog = doc.data();
    blog['id'] = doc.id;
    blog.createdAt = blog.createdAt.toDate().toDateString();
    blogs.push(blog);
  });
  const lastBlog =
    blogsSnap.docs[blogsSnap.docs.length - 1] === undefined
      ? null
      : blogsSnap.docs[blogsSnap.docs.length - 1].data().createdAt.valueOf();
  const firstBlog =
    blogsSnap.docs[0] === undefined
      ? null
      : blogsSnap.docs[0].data().createdAt.valueOf();
  return { blogs, pagination: { first: firstBlog, last: lastBlog } };
};

export const sendMessage = async (message) => {
  const messageRef = collection(db, 'messages');
  message['createdAt'] = Timestamp.now();
  return await addDoc(messageRef, message);
};
