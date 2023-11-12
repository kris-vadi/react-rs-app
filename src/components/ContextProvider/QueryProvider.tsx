// import React, { ReactElement, useMemo, useState } from "react";

// type QueryParams = {
//   searchInputValue: string | null;
//   pageLimit: string | null;
//   page: number;
// };

// interface QueryContextParams {
//   query: QueryParams;
//   setQuery: () => {};
// }

// const initQuery: QueryParams = {
//   searchInputValue: '',
//     pageLimit: '10',
//     page: 1,
// };

// const QueryContext = React.createContext<QueryContextParams>({
//     query: initQuery,
//     setQuery: () => {},
// });

// export const QueryProvider = ({children}: { children: ReactElement }) => {
//   const [query, setQuery] = useState<QueryParams>({
//     searchInputValue: localStorage.getItem('search-input')
//       ? localStorage.getItem('search-input')
//       : '',
//     pageLimit: localStorage.getItem('page-limit')
//       ? localStorage.getItem('page-limit')
//       : '10',
//     page: 1,
//   });

//   return <QueryContext.Provider value={{query, setQuery}}>
//     {children}
//   </QueryContext.Provider>

// }

// export default QueryContext;
