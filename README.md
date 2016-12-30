# Getting Started

Demo Site: http://word-web-app.s3-website.ca-central-1.amazonaws.com/

### Back-end

Back-end must be running for front-end to work properly.

```
git clone https://github.com/fjlanasa/word-web-app-back-end.git
cd word-web-app-backend
bundle install
ruby server.rb
```

### Front-end

Make sure you have [Node Package Manager](https://www.npmjs.com/) (npm) installed.

Once npm is set up:

```
git clone https://github.com/fjlanasa/word-web-app-front-end.git
cd word-web-app-front-end
npm install

npm start

open http://localhost:3000  # Make sure back-end is running on port 4567
```

If you are using Chrome, I would recommend installing the [React Dev Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) and [Redux Dev Tools](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwi2gLnI_vHQAhXGbxQKHVSMDZ0QFggaMAA&url=https%3A%2F%2Fchrome.google.com%2Fwebstore%2Fdetail%2Fredux-devtools%2Flmhkpmbekcpmknklioeibfkpmmfibljd%3Fhl%3Den&usg=AFQjCNFg4ldS78uapjCGBaNjL9NvIwZGhg&sig2=BXqmjtkDSQMK4Fr_HggYPg&bvm=bv.141320020,d.cGc).

### Notable Features:
  * In the [SearchPage](/src/components/SearchPage.jsx) component, added some logic to render a loading animation on the initial search (which could be a bit slow), as well as a message when a search returns no results.
  * Added a 404 Not Found page using a [catch-all route](/src/index.js).
  * Set up [programmatic navigation](/src/components/SearchResult.jsx) to SavedPage after clicking to save a definition.
  * Used media queries to optimize display for different screen sizes(see /src/large.css and /src/medium.css)
