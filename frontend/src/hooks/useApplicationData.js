import { useReducer, useEffect } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA:'SET_TOPIC_DATA',
  GET_PHOTO_BY_TOPIC:'GET_PHOTO_BY_TOPIC'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favoritePhotos: [...state.favoritePhotos, action.payload.id],
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favoritePhotos: state.favoritePhotos.filter((photoId) => photoId !== action.payload.id),
      };
    case ACTIONS.OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
        selectedPhoto: action.payload.selectedPhoto,
      };
    case ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
        selectedPhoto: null,
      };

      case ACTIONS.SET_PHOTO_DATA:
        return {
          ...state,
          photoData: action.payload,
        };
        case ACTIONS.SET_TOPIC_DATA:
          return {
            ...state,
            topicData: action.payload,
          };
          case ACTIONS.GET_PHOTO_BY_TOPIC:
            return{
              ...state,
              photoData:action.payload
            }
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
}

const initialState = {
  isModalOpen: false,
  favoritePhotos: [],
  selectedPhoto: null,
  photoData:[],
  topicData:[]
  // Add other initial state properties
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);


  const updateFavPhotoIds = (id) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id } });
  };

  const removeFavPhotoIds = (id) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id } });
  };

  const openModal = (photo) => {
    dispatch({ type: ACTIONS.OPEN_MODAL, payload: { selectedPhoto: photo } });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });

  };
  useEffect(()=>{

    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the fetched data to the console
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      })
  },[])

  useEffect(()=>{

    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the fetched data to the console
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
      })
  },[])
  const fetchPhotosByTopic = (topicId) => {
     fetch(`/api/topics/photos/${topicId}`)
      .then((response) => response.json())
      .then((data) => {

        return dispatch({ type: ACTIONS.GET_PHOTO_BY_TOPIC, payload: data });

      })
      .catch((error) => console.error('Error:', error));
  };
  
  // Add other actions

  return {
    state,
    actions: {
      updateFavPhotoIds,
      removeFavPhotoIds,
      openModal,
      closeModal,
      fetchPhotosByTopic
      
    },
  };
};

export default useApplicationData;

