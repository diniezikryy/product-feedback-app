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
