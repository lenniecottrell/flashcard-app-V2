# CS Flashcards

## Description

This is a flashcard app to help me (and others eventually!) study programming and computer science concepts. It's made with PostgreSQL, Express, React, and Node.

The flashcard structure if based on a study technique I saw on LinkedIn called the "DICE" method, which stands for Definition, Information, Compare, and Example. If you can describe those four elements for any topic or concept, you probably know it pretty well!

This project is my first solo full-stack project.

## User Story

`AS A junior developer`<br>
`I WANT an app that helps me study programming terminology`<br>
`SO THAT I can deepen my knowledge about programming.`<br>

## Progress

### 3/3/2021

I've made significant progress over the past week! I thought it would be harder for me to implement the functionality of the buttons, but I got it worked out in about a day. As of today, I have all of the essential functionality worked out to navigate through existing questions, and basic layout issues resolved for large and small desktop screens. I have some styling to do for mobile devices still, but I'll get there.

I'll look in to deploying on Heroku tomorrow and hopefully have at least a simple public release by the end of the week.

### 2/26/2021

After some thinking and planning over the last couple of days, I realized that I've overcomplicated things a bit. All I really need for this to work is to get a topic, and then get all the questions in that topic. From all of the questions, I need to store each individual piece of information in its own state, but I don't need to make a `fetch()` call for every little thing.

Easier said than done, of course. The implementation was a little trickier for me than I had hoped, but I did get it working eventually! I was successfully getting the list of questions, but for a while the question list wasn't updating with the topic state. I asked a question on Coding Coach and they pointed me to a missing dependency in useEffect. I definitely need to study useEffect closer to understand better how it worked.

#### Version control saved me today!

After I connected question state to topic state, I pushed up my changes. Then I started working on making the 'next' and 'previous' buttons work. I made a bunch of changes, including moving the question state back to the top level, and then... everything broke. All the way back to topic state not working. I learned about `git clean` and `git reset` today.

I feel really good about my progress this week. Slow but steady. I'll feel comfortable deploying a production version once I get the navigation buttons working.

Even though I don't need the create edit and delete functionality yet, I'm glad I already have it written out. I'm positive that I'll need to rewrite it, but at least I've tested what I have and know that the skeleton works.

### 2/23/2021

My next task is getting the first question of each topic to render as soon as the topic is selected. This means I need to restructure some of my API calls and figure out the best place to put my state. I know Redux will help with this, but I want to get it to work on its own before I add another tool on top of it.

### 2/22/2021

Today I figured out how to dynamically render a drop down list of topics based on the information in the topics table. I also connected the drop down list selection to the component state, so it updates the title of the flashcard when a new topic is selected

### 2/11/2021

I successfully implemented the fetch method to get data from the backend and render it on the frontend. I also added button functionality to make each button grab the proper answer, and I updated the style in the answer box component.

### 2/8/2021

I've refactored my components again to use Hooks instead of class components, and everything seems to be working. I removed the database information for now, but that's only because I'm going to study the fetch API a little deeper so I really understand it before I try to implement it.

At the moment I'm drilling all of my props from the top down. I know that it's not best practice, but I'm comfortable with it for now and it works. I plan to learn Redux for state management a little bit down the road, and I'll come back and refactor when I'm ready

The gap in my progress was because I took some time to learn more about React. It was worth the break!

### 1/26/2021

I have created the first draft of a UI, created the database and the API routes, and I just rendered database information to the flashcard yesterday. It renders the entire JSON response object, but it renders!

I'll continue to track progress as I go.
