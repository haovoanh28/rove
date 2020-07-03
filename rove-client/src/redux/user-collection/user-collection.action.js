import userCollectionActionTypes from './user-collection.types';

export const fetchUserCollectionStart = (token) => ({
    type: userCollectionActionTypes.FETCH_USER_COLLECTION_START,
    payload: token,
  });
  
  export const fetchUserCollectionSuccess = (userCollection) => ({
    type: userCollectionActionTypes.FETCH_USER_COLLECTION_SUCCESS,
    payload: userCollection,
  });
  
  export const fetchUserCollectionFailure = (err) => ({
    type: userCollectionActionTypes.FETCH_USER_COLLECTION_FAILURE,
    payload: err,
  });
  