export const initialState = {
  user: {
    name: 'Karina',
    avatar: '/images/avatar.svg',
  },
  likedPublicationIds: [],
  signedApplicationIds: [],
};

export function appReducer(state, action) {
  switch (action.type) {
    case 'toggle_like':
      return {
        ...state,
        likedPublicationIds: state.likedPublicationIds.includes(action.id)
          ? state.likedPublicationIds.filter((item) => item !== action.id)
          : [...state.likedPublicationIds, action.id],
      };

    case 'sign_application':
      return {
        ...state,
        signedApplicationIds: state.signedApplicationIds.includes(action.id)
          ? state.signedApplicationIds
          : [...state.signedApplicationIds, action.id],
      };

    default:
      return state;
  }
}