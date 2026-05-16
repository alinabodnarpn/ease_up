export const initialState = {
  user: {
    name: 'Karina',
    avatar: '/images/avatar.svg',
    bio: '20 y.o. Art/sport/active lifestyle.',
  },
  likedPublicationIds: [],
  signedApplicationIds: [],
  applicationDraft: {
    step1: {},
    step2: {},
    step3: {},
  },
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

    case 'save_application_step':
      return {
        ...state,
        applicationDraft: {
          ...state.applicationDraft,
          [action.step]: action.payload,
        },
      };

    case 'clear_application_draft':
      return {
        ...state,
        applicationDraft: {
          step1: {},
          step2: {},
          step3: {},
        },
      };

    default:
      return state;
  }
}