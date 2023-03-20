# rn-code-interview-test

Your task is to develop this ReactNative application so that it fetches a list of StackOverflow users and displays it in a list on the screen.

## Requirements

- Please spend no more than 2 hours in total on this, and submit your solution by the deadline given in the email instructions
- When the app is launched, the user should be able to see a list of the top 20 StackOverflow users
- Each list item should contain user's profile image, name and reputation
- If the server is unavailable (e.g. offline), the user should see a list empty state with an error message
- Have cells be expandable (upon tapping the cell), with additional options to 'follow' and 'block' a user
- Follow/block functionality should just be locally simulated, i.e. no actual API call should be made. The meaning of following and blocking is explained in the points below
- Users that are followed should show an indicator in the main part of the list item
- Users that are blocked should show in a disabled greyed-out list item; tapping on the item should not open the details view
- Include the 'unfollow' option in the view when a user is followed
- Write unit tests wherever you see fit
- Emphasise testing and architecture
- Written in either Javascript or Typescript (preferred)
- It should be designed such that the code can bridge to Native
- Explain in a few sentences the design decisions you took developing the above app, and describe anything that you were unable to do due to the time constraint

### GET Users Request
`GET http://api.stackexchange.com/2.2/users?pagesize=20&order=desc&sort=reputation&site=stackoverflow`
