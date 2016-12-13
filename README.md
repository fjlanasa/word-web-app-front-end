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

### Questions:
1. I ended up using Redux to manage application state, mostly because I've been wanting to try it out. In reality, it's probably not worth the time it takes to set up Redux to manage three pieces of state, and I would probably stick to using only React if I were building something of this scale in the real world.

2. I probably spent a greater amount of time learning new concepts than actually setting up the core functionality and design of the app, though it's a little hard to say since the two were intertwined. Writing the react components and the necessary CSS probably took 2-3 hours each, and were pretty simple. The pieces that took the most time were:
  * Incorporating Redux. Like I said, this was my first time, so I took the time to go through a few tutorials during the early stages of setup and had to play around for a while until I felt really comfortable.
  * Cross domain resource sharing. I had never run into this issue before (I realized I've pretty much always made API calls from the server) and wasted a huge amount of time trying to stubbornly figure out how to make the Dictionary API work with CORS. Ultimately I ended up hosting a Sinatra API on Heroku to proxy requests to between my App and the Dictionary API, which was pretty simple. Would love to know if there is a better solution.
  * Testing. I'm just getting to know Jest and in general could use a little guidance on React/Redux testing conventions, which I don't have a ton of experience with.

3. I tend to gravitate more towards online classes and tutorials rather than books. Some of the most recent things I've gone through:
  * Udacity's course on [Responsive Web Design](https://www.udacity.com/course/responsive-web-design-fundamentals--ud893), which helped me dig deeper into some design concepts I started to explore through my breakable toy.

  * Udacity's course on [Front-end Frameworks](https://www.udacity.com/course/front-end-frameworks--ud894), specifically the lesson on Angular, just to get an idea about the differences between the frameworks and why one might choose one over another.

  * [Learn Python the Hard Way](https://learnpythonthehardway.org/book/), as I want to try to learn to build apps using another language and framework.

4. Immediately prior to starting this challenge, I was planning to build a simple note-taking app using a Rails API, mainly for practice using Redux, as well as to try implementing Angular. I'm definitely excited to pick that back up now that I've actually gotten my hands dirty with redux.

5. I'm pretty new to the community and it's hard for me to point to a specific person who inspires me, but in general, I've found myself inspired by 'Civic Hackers' and people who give back through teaching, mentoring, etc. For example, I really loved this story in [NYT Magazine](http://www.nytimes.com/interactive/2016/11/13/magazine/design-issue-code-for-america.html?_r=0) about Code for America's efforts to build a user-friendly app that would increase food stamp enrollment in San Francisco. I'm definitely hoping to get involved with similar projects as I increase my skill.
