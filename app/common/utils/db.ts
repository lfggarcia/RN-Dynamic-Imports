import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

export const converter = <T>() => ({
  toFirestore: (data: Partial<T>) => data,
  fromFirestore: (snap: FirebaseFirestoreTypes.DocumentSnapshot) =>
    snap.data() as T,
});
