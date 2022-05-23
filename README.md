# CS Flashcards

## Description

This is a flashcard app to help me (and others eventually!) study programming and computer science concepts. It's made with PostgreSQL, Express, React, and Node.

The flashcard structure if based on a study technique I saw on LinkedIn called the "DICE" method, which stands for Definition, Information, Compare, and Example. If you can describe those four elements for any topic or concept, you probably know it pretty well.

This project is my first solo full-stack project.

## User Story

`AS A junior developer`<br>
`I WANT an app that helps me study programming terminology`<br>
`SO THAT I can deepen my knowledge about programming.`<br>

# Progress

## 4/20/22

Here's an updated list of priorities:
- fix the Add New Topic modal
- fix the Add new question modal
- fix the edit question modal
- Get UI to automatically update when things are added, edited, or deleted
- Handle when a topic is blank
- Handle what happens when a topic is selected with no questions
- Delete topic functionality (what happens to associated questions? Probably delete them all? Check the database.)
- edit topic

## 4/6/22
Added styles for the add/edit/delete buttons. They're not perfect yet, but I'll get another opinion about them and fix them later - ok for now.

## 3/31/22

Time to jump back in. I'd like to hfinish this project! It will be slow going as I re-learn the code I wrote and since my time is limited, but consistency is key.

## 4/24/21

### To Dos

I just wrapped up my first week of work at Optimizely, and also finished #100DaysOfCode on Tuesday. I found that getting the motivation for working on this after work was difficult, but once I was in it I had a good time. Kinda like going to the gym, in many ways.

Now that I'm not working on it every day, I need a system for keeping track of what needs to be done. For now, here's a non-exhaustive list in a loosely prioritized order:

- Fix bug when a topic is selected with no questions
- Delete topic functionality (what happens to associated questions? Probably delete them all? Check the database.)
- edit topic?
- Get rendered data to automatically update when added, edited, or deleted
- Probably have to update state?
- form validation
- ~~Style add/edit/delete buttons~~
- ~~figure out why React keeps telling me I don't have a key prop when I definitely have a key prop~~
- add nice animations
- fix mobile styles
- refactor with a state management library
- deploy a working production version
- address any accessibility issues
- Figure out how to create account authorization and individual instances of a database

## 4/17/21

### No more baby steps

I've been working on this project every day since the last progress update, and I feel like every time I sit down to work on it, I make a significant contribution. Something must have settled in the month I didn't look at it, because I'm so much more confident in how to build out features and fix bugs. Things are moving faster and I'm finding solutions to problems much easier.

I'm having to use google less. I'm drawing on the skills I already have rather than needing to build new ones before I can progress. I feel like I actually kinda know what I'm doing!

## 4/9/21

### Revisiting the app after a month

For most of March, I was preparing for two job interviews (one of which turned into a job!), so I wasn't spending as much time working on this. The time I did spend on it was mostly trying to get the Heroku deployment to work, which still hasn't quite happened.

Getting the local environment working again took some time, since I fussed with it so much for Heroku. For now, I'm going to continue to build it locally, and worry about deployment again when the app is a little more robust.

Next up are create a question/topic and update a question/topic. I have the backends mostly built for this already (though I'll need to tweak it a bit for sure), so it'll mostly be front-end building.

I'm excited to get back to it! I've missed working with React.

## 3/10/21

### More deployment struggles

I tried AWS elastic beanstalk and I wasn't able to get my environment to successfully deploy. I don't know what's wrong with my app that is causing all of these deployment issues, and searching for the problem is a needle in a haystack. I was hoping this wouldn't take more than a day or two, but it's going to be a while it seems.

## 3/8/2021

### Deployment struggles

At the end of last week I was ready to deploy a demo version of this app, and went with Heroku because they offer a managed database service that uses Postgres. I thought it would be simple! Not so. I configured everything for production and no matter what I did I could not get the Heroku database instance to connect to the React app. I got some help from some excellent people at a meetup who helped me identify some issues with my environment variables, but it still doesn't work.

After some significant googling, it appears that this is a Heroku issue, not a me issue, which in one sense is relieving and in another is super frustrating. This is the first and last time I use Heroku (unless I have to on a job)

Version control has been my best friend through all of this, because I've needed to push all of my changes up to test whether it works on Heroku's servers or not. 32 deployments later, it still doesn't work and is somehow more broken than it was yesterday.

I'll do some learning about AWS this week and try to get it going there instead.

## 3/3/2021

I've made significant progress over the past week! I thought it would be harder for me to implement the functionality of the buttons, but I got it worked out in about a day. As of today, I have all of the essential functionality worked out to navigate through existing questions, and basic layout issues resolved for large and small desktop screens. I have some styling to do for mobile devices still, but I'll get there.

I'll look in to deploying on Heroku tomorrow and hopefully have at least a simple public release by the end of the week.

## 2/26/2021

After some thinking and planning over the last couple of days, I realized that I've overcomplicated things a bit. All I really need for this to work is to get a topic, and then get all the questions in that topic. From all of the questions, I need to store each individual piece of information in its own state, but I don't need to make a `fetch()` call for every little thing.

Easier said than done, of course. The implementation was a little trickier for me than I had hoped, but I did get it working eventually! I was successfully getting the list of questions, but for a while the question list wasn't updating with the topic state. I asked a question on Coding Coach and they pointed me to a missing dependency in useEffect. I definitely need to study useEffect closer to understand better how it worked.

### Version control saved me today!

After I connected question state to topic state, I pushed up my changes. Then I started working on making the 'next' and 'previous' buttons work. I made a bunch of changes, including moving the question state back to the top level, and then... everything broke. All the way back to topic state not working. I learned about `git clean` and `git reset` today.

I feel really good about my progress this week. Slow but steady. I'll feel comfortable deploying a production version once I get the navigation buttons working.

Even though I don't need the create edit and delete functionality yet, I'm glad I already have it written out. I'm positive that I'll need to rewrite it, but at least I've tested what I have and know that the skeleton works.

## 2/23/2021

My next task is getting the first question of each topic to render as soon as the topic is selected. This means I need to restructure some of my API calls and figure out the best place to put my state. I know Redux will help with this, but I want to get it to work on its own before I add another tool on top of it.

## 2/22/2021

Today I figured out how to dynamically render a drop down list of topics based on the information in the topics table. I also connected the drop down list selection to the component state, so it updates the title of the flashcard when a new topic is selected

## 2/11/2021

I successfully implemented the fetch method to get data from the backend and render it on the frontend. I also added button functionality to make each button grab the proper answer, and I updated the style in the answer box component.

## 2/8/2021

I've refactored my components again to use Hooks instead of class components, and everything seems to be working. I removed the database information for now, but that's only because I'm going to study the fetch API a little deeper so I really understand it before I try to implement it.

At the moment I'm drilling all of my props from the top down. I know that it's not best practice, but I'm comfortable with it for now and it works. I plan to learn Redux for state management a little bit down the road, and I'll come back and refactor when I'm ready

The gap in my progress was because I took some time to learn more about React. It was worth the break!

## 1/26/2021

I have created the first draft of a UI, created the database and the API routes, and I just rendered database information to the flashcard yesterday. It renders the entire JSON response object, but it renders!

I'll continue to track progress as I go.
