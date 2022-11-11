// Action Types
export const GET_POSTS = "GET_POSTS";
export const FILTER_POSTS = "FILTER_POSTS";
export const SORT_POSTS = "SORT_POSTS";

// Action Creators
export const getData = (data) => {
  return {
    type: GET_POSTS,
    payload: data,
  };
};

export const filterData = (data) => {
  return {
    type: FILTER_POSTS,
    payload: data,
  };
};

export const sortData = (data) => {
  return {
    type: SORT_POSTS,
    payload: data,
  };
};
