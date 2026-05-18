export const initialState = {
  user: {
    id: 1,
    name: 'Karina',
    avatar: '/images/avatar.svg',
    bio: '20 y.o. Art/sport/active lifestyle.',
  },

  likedPublicationIds: [],

  signedApplicationIds: [],

  publicationComments: {},

  applicationDraft: {
    step1: {},
    step2: {},
    step3: {},
  },
};

export function appReducer(state, action) {
  switch (action.type) {
    case 'toggle_like': {
      const id = action.id;

      if (id === undefined || id === null) {
        return state;
      }

      const isAlreadyLiked = state.likedPublicationIds.includes(id);

      return {
        ...state,
        likedPublicationIds: isAlreadyLiked
          ? state.likedPublicationIds.filter((item) => item !== id)
          : [...state.likedPublicationIds, id],
      };
    }

    case 'toggle_publication_like': {
      const id = action.payload;

      if (id === undefined || id === null) {
        return state;
      }

      const isAlreadyLiked = state.likedPublicationIds.includes(id);

      return {
        ...state,
        likedPublicationIds: isAlreadyLiked
          ? state.likedPublicationIds.filter((item) => item !== id)
          : [...state.likedPublicationIds, id],
      };
    }

    case 'add_publication_comment': {
      const id = action.id;
      const comment = action.comment;

      if (id === undefined || id === null || !comment) {
        return state;
      }

      const currentComments = state.publicationComments[id] || [];

      return {
        ...state,
        publicationComments: {
          ...state.publicationComments,
          [id]: [...currentComments, comment],
        },
      };
    }

    case 'sign_application': {
      const id = action.id ?? action.payload;

      if (id === undefined || id === null) {
        return state;
      }

      const isAlreadySigned = state.signedApplicationIds.includes(id);

      return {
        ...state,
        signedApplicationIds: isAlreadySigned
          ? state.signedApplicationIds
          : [...state.signedApplicationIds, id],
      };
    }

    case 'save_application_step':
      return {
        ...state,
        applicationDraft: {
          ...state.applicationDraft,
          [action.step]: action.payload,
        },
      };

    case 'save_application_draft_step':
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