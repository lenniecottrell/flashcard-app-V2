const express = require("express");
const cors = require('cors');
const app = express();
const pool = require('./db');

app.use(cors());
app.use(express.json());
app.listen(5000, () => {
  console.log('CORS-enabled web server is listening on port 5000')
});


//-- ROUTES --//

//create a topic
app.post('/topics', async(req,res) => {
  try {
    console.log(req.body);
    const {topic} = req.body;
    const newTopic = await pool.query(
      "INSERT INTO public.tbl_topic (topic) VALUES($1) RETURNING *",
      [topic]
    );
    res.json(newTopic.rows[0]);
    console.log("POST SUCCESS. You created a topic");
  } catch (error) {
    console.log("oopsie, something went wrong");
    console.error(error.message);
  }
}); 

//get all topics
app.get('/topics', async(req,res) => {
  try {
    console.log(req.body);
    const allTopics = await pool.query(
      "SELECT * FROM public.tbl_topic"
      );
      res.json(allTopics.rows);
      console.log("GET SUCCESS. You got all topics");
    } catch (error) {
      console.log("oopsie, something went wrong");
      console.error(error.message);
    }
});

//update a topic
app.put('/topics/:id_topic', async(req,res) => {
  try {
    console.log(req.params);
    console.log(req.body);
    const { topicChange } = req.body;
    const { id } = req.params;
    const updateTopic = await pool.query(
      "UPDATE public.tbl_topic SET topic = $1 WHERE id_topic = $2",
      [topicChange, id]
    );
    res.json(updateTopic.rows[0]);
  } catch (error) {
    console.log("oopsie, something went wrong");
    console.error(error.message);
  }
});

//create a question
app.post('/topics/:id_topic/question', async(req,res) => {
  try {
    console.log(req.body);
    const {question, definition, information, context, example} = req.body;
    const newEntry = await pool.query(
      "INSERT INTO public.tbl_question (question, definition, information, context, example) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [question, definition, information, context, example] //these are variables, assigned from destructuring the request body, that go into the $values
      );
      res.json(newEntry.rows[0]);
      console.log("POST success. You created a question");
  } catch (error) {
    console.log("oopsie something went wrong");
    console.error(error.message);
  }
});

//add a question to a topic


// get all questions in a topic
app.get('/topics/:id_topic/question', async(req,res) => {
  try {
    console.lof(req.body);
    const allQuestions = await pool.query(
      "SELECT question FROM public.tbl_question INNER JOIN topic ON public.tbl_question.fk_topic = public.tbl_topic.id_topic"
    )
    res.json(allQuestions.rows);
    console.log("Here are all of the questions for a specific topic");
  } catch (error) {
    console.log("oopsie, something went wrong");
    console.error(error.message);
  }
});


//update a question
app.put('/topics/:id_topic/question/:id_question', async(req,res) => {
  try {
    console.log(req.params);
    const {id} = req.params;
    const {question:questionUpdate, definition:defUpdate, information:infoUpdate, context:contUpdate, example:exampUpdate} = req.body;
    const updateQuestion = await pool.query(
      "UPDATE public.tbl_question SET (question, definition, information, context, example) = ($1, $2, $3, $4, $5) WHERE id_question = $6",
      [questionUpdate, defUpdate, infoUpdate, contUpdate, exampUpdate, id]
    );
      res.json("Success! Question was updated")
  } catch (error) {
    console.log("oopsie, something went wrong");
    console.error(error.message);
  }
});

//delete a topic
app.delete('/topics/:id_topic', async(req,res) => {
  try {
    console.log(req.params);
    const {id} = req.params;
    //this returns 'object Object' as of now
    const selectedTopic = await pool.query(
      "SELECT FROM public.tbl_topic WHERE id_topic = $1",
      [id]
    )
    const deleteTopic = await pool.query(
      "DELETE FROM public.tbl_topic WHERE id_topic = $1",
      [id]
    );
    console.log("DELETE SUCCESS. You deleted a topic");
    res.json(`Sucess, topic ${selectedTopic} was deleted`);
  } catch (error) {
    console.log("oopsie, something went wrong");
    console.error(error.message);
  }
});

//delete a question
app.delete('/topic/:id_topic/question/:id_question', async(req,res) => {
  try {
    console.log(req.params);
    const {id} = req.params;
    const deleteTopic = await pool.query(
      "DELETE FROM public.tbl_question WHERE id_question = $1",
      [id]
    );
    console.log("DELETE SUCCESS. You deleted a question")
    res.json("Sucess, question was deleted");
  } catch (error) {
    console.log("oopsie, something went wrong");
    console.error(error.message);
  }
});