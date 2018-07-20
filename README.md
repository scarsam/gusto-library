# Library Site React/Redux
Check out the hosted version on heroku: [Library Site](https://gusto-library.herokuapp.com/login)

This is my first React/Redux application with an Rails powered API to persist and fetch data. It was made as an idea to create an digital library for the design team over at Gusto. The application will let the user search for books from Google Books API and add those to the library, from the library you can rent/return books you've added. The application is using an JWT token authentication system together with SSO.

### System dependencies
  - Postgres to manage and store data
  - React to handle DOM manipulation and event actions
  - Redux to handle state changes
  - Redux-thunk to handle asynchronous data fetching
  - Axios to fetch data from Google API and Rails API
  - react-google-login to handle login with Google
  - Bootstrap for basic layout and styling
  - Dotenv to store environment keys

### Configuration
Change the current working directory to the location where you want the cloned directory to be made and then type:
```
git clone https://github.com/scarsam/gusto-library.git
```
Once you have cloned all the files type:
```
bundle install
yarn install
```
to install all the project dependencies and follow the database steps below in order to get the application up and running. To start your server type `rails s` and in another tab run `./bin/webpack-dev-server` to get your webpack server up and running, but make sure you finish the database creation steps first.
  
### Database initialization and creation
In order to run the application correctly you first need to seed the database with data from the API, run:
```
rake db:create
rake db:migrate
rake db:seed
```

### Contribute to Library Site React/Redux
A contributor can be anyone! It could be you. Continue reading this section if
you wish to get involved and contribute back to the Library Site.
- Ensure the bug was not already reported by searching on GitHub under Issues.
- If you're unable to find an open issue addressing the problem, open a new one. Be sure to include a title and clear description, as much relevant information as possible, and a code sample or an executable test case demonstrating the expected behavior that is not occurring.

### Credit
Icons designed by [Freepik](https://www.flaticon.com/packs/education-elements-3) from Flaticon


Thanks! :heart: