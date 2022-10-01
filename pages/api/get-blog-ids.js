import firestore from '../../utils/firebaseAdmin';

export default async function (req, res) {
  try {
    const collections = await firestore.collection('blogs').listDocuments();
    const ids = collections.map((item) => item.id);
    return res.status(200).json(ids);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: e });
  }
}
