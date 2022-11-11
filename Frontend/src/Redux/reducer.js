import { FILTER_POSTS, GET_POSTS, SORT_POSTS } from "./actions";

const initState = {
  posts: [],
};

export const Reducer = (store = initState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...store, posts: action.payload };

    case FILTER_POSTS:
      return { ...store, posts: action.payload };

    case SORT_POSTS:
      return { ...store, posts: action.payload };
    default:
      return store;
  }
};
