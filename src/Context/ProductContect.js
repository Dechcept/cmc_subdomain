import { createContext, useContext, useState } from "react";

const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("home");

  const setPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <PageContext.Provider value={{ currentPage, setPage }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePage = () => {
  return useContext(PageContext);
};
