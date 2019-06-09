# Routing Basics

Goals

- rewrite to use the name in the URL parameter to store info about who to look up
- display the list of actors who can be clicked to show their photo
- the list should still be displayed when showing the actor's name and photo
- it should indicate which actor is being currently displayed:

```  
  
          Home - Actors - About
    Actors
    Cage       |  Bill Murray
    Murray 👈  |    [image]
    Segal      |
```

- on [Actors] route, allow toggling between showing a regular or greyscale photo: `www.[domain].com/200/300` vs `www.[domain].com/g/200/300`. Track this using a query parameter.


🤯 CHALLENGE MODE 🏅

- Write tests
