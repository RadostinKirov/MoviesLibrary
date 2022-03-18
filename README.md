# Movie Library app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The app runs on http://localhost:3000/

## Views
  ### NavBar
    - Search section
    - My Movie collection btn redirecting to Home page

  ### Home page
    - Hero section with Search btn redirecting to Search page
    - Favorites section . Shows all favorite movies choosen by the user
    
    
  ### Search page
    - Search section. Shows top 10 results
    - Each result contain movie details and "Add to Favorite" btn.
    
  ### Details page
    - Movie Details
    - Review Section which includes Rating functionality and Private notes functionality
    
 ## Functional description
    - During search opearion the app uses "https://api.tvmaze.com/search/shows?q=DATA" to collect top 10 results
    - During Details page load the app uses "https://api.tvmaze.com/shows/ID" to collect the requested movie info
    - During Details load the app checks if there is already stored Review information at "http://localhost:3030/reviewById/ID"
    - Once a Rating star is clicked the app adds / updates the rating information at "http://localhost:3030/rating"
    - The private notes uses onChange event for trigger method. 1000ms after stop typing the app send the comment to "http://localhost:3030/rating"
    
    
  ## structutsl description  
    - Each view has its own component. Details component and Home Component consist sub components
    - There are two shared components (MovieCard, SearchBox)
    - For sharing data between the components a Context is used
    - Communication with the server goes through a service located in the service folder
    
    ##### Still TODO 
    //   - Fix the error handling when server error during search
    //   - Display the loaded information for Rating and Comment during Details load
