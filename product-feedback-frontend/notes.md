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

24/02/22

## To-Do

1. Test out some routing (DONE)
