import { db } from '../../utils/firebase';
import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  limit,
} from 'firebase/firestore';

export const getPortfolio = async () => {
  const docRef = collection(db, 'portfolio');
  const querySnapshot = await getDocs(docRef);
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
    limit(10)
  );
  const blogsSnap = await getDocs(blogsQueryRef);
  let data = [];
  blogsSnap.forEach((doc) => {
    let blog = doc.data();
    blog['id'] = doc.id;
    data.push(blog);
  });
  return data;
};

export const getBlog = async (slug) => {
  const blogRef = doc(db, `blogs/${slug}`);
  const blog = await getDoc(blogRef);
  return blog.exists() ? blog.data() : null;
};
