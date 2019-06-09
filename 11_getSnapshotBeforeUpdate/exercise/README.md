# getSnapshotBeforeUpdate && componentDidUpdate

Goals

- This app is constantly adding new content at the top of the feed. It's annoying users because they have to keep scrolling down to keep track of what they were reading.
- Fix the app so that the scroll position stays in place even after a new item is added to the list

🤯 CHALLENGE MODE 🏅

- Implement `PinToBottom`, which keeps scrolling to the bottom as new items are added to the bottom of the feed, unless the user is scrolls away from the bottom, in which case don't move the scroll position
