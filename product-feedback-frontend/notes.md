# Notes

## Objectives

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, read, update, and delete product feedback requests
- Receive form validations when trying to create/edit feedback requests
- Sort suggestions by most/least upvotes and most/least comments
- Filter suggestions by category
- Add comments and replies to a product feedback request
- Upvote product feedback requests

## Component Hierarchy

App

- SuggestionsContainer
  - SuggestionsNavBar
    - Button (Add Feedback)
  - SuggestionsList
    - FeedbackCard
      - UpvoteBox
      - FeedbackTextContainer
        - FeedbackMain
        - FeedbackSub
        - FeedbackCategory
      - CommentBox
- LoginContainer
  - Logo
  - LoginButton
- FeedbackCategorySelect
  - FeedbackCategory
- RoadmapContainer
  - ViewButton
  - Planned
  - In-Progress
  - Live

FeedbackDetail

- FeedbackCard
  - CommentsContainer
    - ProfilePicture
    - CommentBodyContainer
      - ProfileDetailContainer
        - ReplyButton
      - CommentMain
      - ReplyContainer
        - ReplyInputBox
        - Button (Post Reply)
    - AddCommentContainer
      - CommentInputBox
      - CharacterCount
      - Button (Post Comment)

CreateNewFeedbackForm

- NewFeedbackContainer
  - FeedbackTitleContainer
    - TitleInputBox
  - CategoryContainer
    - CategoryDropDown
  - FeedbackDetailContainer
    - DetailInputBox
  - Button (Cancel)
  - Button (Add Feedback)

EditFeedbackForm

- EditFeedbackContainer
  - FeedbackTitleContainer
  - CategoryContainer
  - UpdateStatusContainer
    - StatusDropDown
  - ButtonContainer
    - Button (Delete)
    - Button (Cancel)
    - Button (Save Changes)

RoadmapDashboard (In Progress...)

23/01/22

### To-Do

1. From the data.json file, write ProductFeedback component and render the data from an API (DONE)
2. Refactor the backend files (NOT DONE)

Each ProductFeedback object has

- id
- title
- category
- upvotes
- status
- description
- comments
  - must be able to contain different comments from different users!

26/02/22

## To-Do

1. Test out some routing (DONE)
2. Use a locally hosted mongoDB and express API to continue building the application (DONE)

Locally hosted mongoDB -> ProductFeedbacks
ProductFeedbacks must have the following collections

1. Users
2. Feedbacks
3. Ideas
4. Comments

Notes:

- When a comment is submitted, the Id of the feedback post must also match the post id

05/03/22

## To-Do

1. Build the homepage of the application

- Style the homepage first (DONE)
- Style the Feedback first (DONE)
- Style the FeedbackNavBar (DONE)
- Style the FeedbackList (DONE)
- Style the CategoryButtonsBox (DONE)

13/03/22

- Finished styling the homepage

14/03/22

## To-Do

- Use redux to update the feedbackList state
- Make the drop down sort options work
- Steps on making the drop-down sort work
  1. Define a filteredList in the feedbackSlice
  2. Write a dispatch action to change the state of the list according to the setting of the dropdown

20/03/22

## To-Do

- Style Feedback Detail
- Be able to add a new feedback Detail

16/04/22

! Need to remember to work on the design of category dropdown

18/04/22

- Plan for this week

1. Refactor the frontend code to make it cleaner !!
2. Write some Jest tests for both the backend and frontend !!
3. Finish designing the addFeedbackPage !!!
4. Change the addFeedback from using redux to useState !
5. Write out the feedbackDetail
6. Write out editFeedback and make it able to delete feedback
7. Add mobile responsiveness
8. Need to rewrite the mongo database to be able to include comments...

30/04/22

Decided to revamp the whole frontend as it was less of headache to build it ground up from scratch than to make the current design mobile responsive

The design is only responsive up to tablet sizes, so the next step is to make it responsive up to desktop sizes, but i decided to stop here to work on other components such as FeedbackList. FeedbackList should show the No Feedback SVG when there are no feedbacks. Another component that should be worked on is the Roadmap and the FeedbackList, as well as the individual Feedback Cards. So can start working on this for tomorrow.

01/05/22

FeedbackRoadmap ✅
FeedbackNavbar ✅
NoFeedbackCard ✅

Worked on the Roadmap component, but just for show, the functionality can be added later, though I did complete the responsive no feedback card, but before I will need to complete the FeedbackCards to finish the FeedbackList, but this brings me to a new issue, which is to redo the backend to send feedbacks + the comments, but for now I will use hardcoded data to frame up the feedback card. After that, feedback list will be completed.

FeedbackList ✅
FeedbackCard ✅

Finished working on the feedback card and the feedback list, even showing the NoFeedbackCard when there are no feedbacks. Now what's left is to make the backend be able to send the data up from mongo to frontend.

02/05/22

Make the mongo atlas work with the comments also and load up some sample data ✅

Finished working on linking the backend to the frontend, but currently thinking to not use redux inside the project because there is absolutely no need. What I plan to work on next is to be able to add a new data into the web app, and subsequently, be able to sort using comments or upvotes.

08/05/22

Managed to be able to add data to the database through Postman, now left to code the adding feedback form, and subsequently add comments as a user.

15/05/22

Managed to build the tablet responsive add feedback form but need to complete the frontend design. The backend works, just need to link the page to the backend and the add feedback page will be good to go.

22/05/22

Finished the frontend portion of the addFeedback form but it needs to be functional and also refactored.

29/05/22

Refactored the addFeedback Page, just need to add form validation! hint: formik yup! Plan to move forward is to include form validation, as well as designing the Feedback Detail Page and also be able to add your own comments. That will be a difficult because im thinking of letting users log in first then they are able to add their own comments but I will need to create a login page as well as create a users page. This is slowly looking like a social media app lmao...

https://betterprogramming.pub/a-step-by-step-guide-to-handle-form-validation-in-react-83232cd52316

30/05/22

Implemented notification feature for all 4 types of alerts.

04/06/22

Can add a feedback linked to the user, later need to populate

Token Auth Steps

1. Users starts by loggin in using a login form implemented w/ React.
2. If username & password are correct, the server generates a token which somehow idenitifies the logged in user.

- Token is signed digitally, making it impossible to falsify.

3. The backend responds with a status code indicating the operation was successful, and returns the token with the response.
4. The browser saves the token, for example, to the state of a React application.
5. When the user creates a new note (or does some other operation requiring identification), the React code sends the token to the server w/ the request.
6. The server uses the token to identify the user.

Goals for 05/06/22

1. Ensure that the user is able to login/logout using Postman
2. Ensure functionality of the login/register form
3. Only allow logged in user to be able to add a feedback ✅
4. Only allow logged in user to delete that feedback
5. Only allow logged in user to upvote & downvote once

use Context to manage User state

scrap the original implementation and redo the login auth...
