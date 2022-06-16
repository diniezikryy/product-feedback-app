import { Route, Routes } from "react-router-dom";

import Homepage from "./components/Homepage/Homepage";
import AddFeedbackForm from "./components/AddFeedback/AddFeedbackForm";
import LoginPage from "./components/Login/LoginPage";
import RegisterPage from "./components/Login/RegisterPage";
import FeedbackDetailView from "./components/FeedbackView/FeedbackDetailView";

import { NotificationProvider } from "./contexts/NotificationContext";
import { UserProvider } from "./contexts/UserContext";
import { FeedbackProvider } from "./contexts/FeedbackContext";
import EditFeedbackForm from "./components/EditFeedback/EditFeedbackForm";

const App = () => {
  return (
    <div>
      <FeedbackProvider>
        <UserProvider>
          <NotificationProvider>
            <Routes>
              <Route path="/" element={<Homepage />} exact />
              <Route path="/add-feedback" element={<AddFeedbackForm />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/feedbacks/:id" element={<FeedbackDetailView />} />
              <Route path="/edit-feedback/:id" element={<EditFeedbackForm />} />
            </Routes>
          </NotificationProvider>
        </UserProvider>
      </FeedbackProvider>
    </div>
  );
};

export default App;
