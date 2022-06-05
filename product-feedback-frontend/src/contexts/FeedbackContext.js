import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacksContext, setFeedbacksContext] = useState(null);
  const [selectedSortOption, setSelectedSortOption] = useState("Most Upvotes");

  return (
    <FeedbackContext.Provider
      value={{
        feedbacksContext,
        setFeedbacksContext,
        selectedSortOption,
        setSelectedSortOption,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
