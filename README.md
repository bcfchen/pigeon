# Pigeon Chat UI
![alt text](https://i.imgur.com/9H8xSO1.png "Project Pigeon")


### Main user workflows:

- User login
- Displays all existing messages in the chatroom
- Add new message(s) by typing in the message box and hitting "enter" or the submit button
- Visualize other users' info by clicking on the __info__ icon on the top right corner
- Return to chat screen from info screen by hitting the __back__ button on the top left

### Feature details

- Hover-over other users' icons to see expanded view of icons
- Immediately upon adding a new message, a small loading icon will appear on the right side of the new message
- Loading icon will disappear once message is added successfully (simulated) on the server side
- Hitting the __play__ button will add multiple messages from other users

### Technical decisions and caveats

- Given the time constaint, uikit design system was adopted to provide basic icons and styling
- API error handling was not implemented (see comments in *messageApi, userInfoApi, or authenticationApi*)
- State is maintained in local storage via redux-persist library, mainly to persist logged in user info

### Next steps

- Unit testing of React components as well as redux actions/reducers etc
- UI automation tests with Selenium
- Improve transition between chat and info screens, potentially with TransitionGroup
- Implement retry mechanism for unsuccessful attempts to add new messages (ex. no connection)
- Visual indicator (ex. "..." in iMessage) while user is typing in the message box

### To install
Clone this repo with 
```
git clone git clone git clone https://github.com/bcfchen/pigeon.git
```

cd into the __pigeon/client__ folder and install npm packages by:
```
npm install
```

### To run
Check that you're in the __pigeon/client__ folder and run the project by
```
npm start
```

The page should automatically open up in your browser at 
```
localhost:3000/chat
```

### Main libraries & services used
- __React/Redux__
- __uikit__ for design system and icons
- __PropTypes__ for component property type checking
