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
} from 'firebase/firestore';

export const getPortfolio = async () => {
  const docRef = collection(db, 'portfolio');
  const querySnapshot = await getDocs(query(docRef, orderBy('createdAt')));
  let data = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    data.push(doc.data());
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
  let blogs = [];
  blogsSnap.forEach((doc) => {
    let blog = doc.data();
    blog['id'] = doc.id;
    blogs.push(blog);
  });
  const lastBlog =
    blogsSnap.docs[blogsSnap.docs.length - 1] === undefined
      ? null
      : blogsSnap.docs[blogsSnap.docs.length - 1];
  return { blogs, lastBlog };
};

export const getBlog = async (slug) => {
  const blogRef = doc(db, `blogs/${slug}`);
  const blog = await getDoc(blogRef);
  return blog.exists() ? blog.data() : null;
};

export const getMoreBlogs = async (genre, last) => {
  const blogsQueryRef = query(
    collection(db, 'blogs'),
    where('genres', 'array-contains', genre),
    orderBy('createdAt'),
    startAfter(last),
    limit(25)
  );
  const blogsSnap = await getDocs(blogsQueryRef);
  let blogs = [];
  blogsSnap.forEach((doc) => {
    let blog = doc.data();
    blog['id'] = doc.id;
    blogs.push(blog);
  });
  const lastBlog = blogsSnap.docs[blogsSnap.docs.length - 1];
  return { blogs, lastBlog };
};
