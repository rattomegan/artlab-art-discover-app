# ArtLab
-----------
## Overview
-----------
This project consumes the Metropolitan Museum's Open Source API to allow a user to search the collection and save items to their favorite's board. You can currently search by Title, Artist or Culture, Museum Highlights, or items that are currently on view.

Once logged in, you can search by keyword or a category listed above. Each search will return 30 results or less (to limit load on API). You can browse all results by scrolling through each page.



[Click here to view the app!](https://artlab.herokuapp.com/)

[Trello Planning Board](https://trello.com/b/yvHVqPqk/art-lab-art-cart)

## Screenshots
---
|Homepage  |     |
|:------------------------:|:-------------:|
homepage | <img src="https://i.imgur.com/C6sLJt4.png" width="250">
login |  <img src="https://i.imgur.com/4gRT55Z.png" width="250">

|Search Page  |     |  
:-----------:|:----------:|
artist search | <img src="https://i.imgur.com/ujfB8EX.png" width="250"> 
pagination | <img src="https://i.imgur.com/2cQXnbr.png" width="250"> 

|Detail Page  |     |   
:-----------:|:----------:|
item detail | <img src="https://i.imgur.com/t0xA1Uz.png" width="250"> 
item detail | <img src="https://i.imgur.com/lKOzDqT.png" width="250"> 

## Technologies Used
---
- MongoDB/Mongoose
- Express
- React
- Node
- CSS
- [Metropolitan Museum Open Source API](https://metmuseum.github.io/)

---

### To Be Improved
- Better routing.
- Improve responsiveness.
- Create a random array of search words to provide user unique results upon each new login.
- Make item board more responsive. Maybe with a masonry layout.
- Allow for multiple boards, not just favorites.
- More advance search and filter options.
- Add The Art Institue of Chicago API to allow searching by museum collection.
- Fix bugs, clean up and refactor code.

### Known Issues
- Pressing the search button from a page other than 1 causes fetch to run twice, first with the page you are on, secondly as a new search from page 1. I will fix this by incorporating more detailed routes for the search results.
- You currently cannot go back from a detail page to your favorites board. The back button will always return to the search page. This will also be fixed with more detailed routes.
- The detail page photo is not responsive. 

---

