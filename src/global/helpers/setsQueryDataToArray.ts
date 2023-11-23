import { QueryData, SetType } from '../types';

const setsQueryDataToArray = (queryData: QueryData): SetType[] => {
  let setArray: SetType[] = [];
  if (!queryData) return [];
  queryData.pages.forEach((responseData) => {
    if (!responseData.data || !Array.isArray(responseData.data)) return;
    responseData.data.forEach((set) => {
      if (!setArray.some((item) => item.id === set.id))
        setArray = [...setArray, set];
    });
  });
  return setArray;
};

export default setsQueryDataToArray;
