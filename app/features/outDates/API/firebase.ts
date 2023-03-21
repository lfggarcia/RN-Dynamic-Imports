import firestore from '@react-native-firebase/firestore';
import {Destination, Friends, Outing} from '../models/API';
import auth from '@react-native-firebase/auth';

const outdatesNetworking = () => {
  const userID = auth().currentUser?.uid || 'uwWlD7rfu7fSuWTZN6bd3mBgBvw1';
  const outdates = firestore().collection('outdates');
  const locations = firestore().collection('locations');
  const friends = firestore().collection('users');

  //   const createOutDate = async form => {
  //     try {
  //       const outDateID = uuid.v4();
  //       const unKnownLocations: Destination[] = form.destinations.filter(
  //         location => typeof location !== 'string',
  //       );
  //       const knownLocations: string[] = form.destinations.filter(
  //         location => typeof location === 'string',
  //       );

  //       let destinations = [...knownLocations];

  //       for (const location of unKnownLocations) {
  //         const newLocationID = uuid.v4();
  //         await locations.doc(newLocationID).set(location);
  //         destinations.push(newLocationID);
  //       }

  //       const outdate: Outing = {
  //         creatorId: userID!,
  //         date: (form.date as Date).getTime(),
  //         description: form.description,
  //         status: 'P',
  //         time: form.time,
  //         title: form.title,
  //         destinations,
  //         attendees: form.attendees,
  //       };
  //       const result = await outdates.doc(outDateID).set(outdate);
  //     } catch (error) {
  //       console.log({error});
  //     }
  //   };

  const getFriends = async () => {
    let documents: Partial<Friends>[] = [];
    const result = await friends
      .where('friends', 'array-contains', userID)
      .get({source: 'cache'});
    result.forEach(document => {
      documents.push({
        id: document.id,
        ...document.data(),
      });
    });
    return documents as Friends[];
  };

  return {
    // create: createOutDate,
    findFriends: getFriends,
  };
};

export default outdatesNetworking;
