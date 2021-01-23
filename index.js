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

//create a topic DONE
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

//get all topics DONE
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

//get a single topic DONE
app.get('/topics/:id_topic', async(req,res) => {
  try {
    console.log(req.params);
    const { id_topic } = req.params;
    const singleTopic = await pool.query(
      'SELECT topic FROM public.tbl_topic WHERE id_topic = $1',
      [id_topic]
      );
      res.json(singleTopic.rows);
      console.log("GET SUCCESS. You got a single topic");
    } catch (error) {
      console.log("oopsie, something went wrong");
      console.error(error.message);
    }
});

//update a topic DONE
app.put('/topics/:id_topic', async(req,res) => {
  try {
    console.log(req.params);
    console.log(req.body);
    const { topic } = req.body;
    const { id_topic } = req.params;
    const updateTopic = await pool.query(
      "UPDATE public.tbl_topic SET topic = $1 WHERE id_topic = $2",
      [topic, id_topic]
    );
    res.json(updateTopic.rows[0]);
  } catch (error) {
    console.log("oopsie, something went wrong");
    console.error(error.message);
  }
});

//create a question DONE
app.post('/topics/questions', async(req,res) => {
  try {
    console.log(req.params);
    console.log(req.body);
    const {question, definition, information, context, example, fk_topic} = req.body;
    const newEntry = await pool.query(
      "INSERT INTO public.tbl_question (question, definition, information, context, example, fk_topic) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [question, definition, information, context, example, fk_topic] //these are variables, assigned from destructuring the request body, that go into the $values
      );
      res.json(newEntry.rows[0]);
      console.log("POST success. You created a question");
  } catch (error) {
    console.log("oopsie something went wrong");
    console.error(error.message);
  }
});

// get all questions in a topic
app.get('/topics/:id_topic/questions', async(req,res) => {
  try {
    console.log(req.params);
    console.log(req.body);
    const { id_topic } = req.params;
    const allQuestions = await pool.query(
      "SELECT * FROM public.tbl_question WHERE fk_topic = $1 ORDER BY id_question ASC",
      [id_topic]
    );
    res.json(allQuestions.rows);
    console.log("Here are all of the questions for a specific topic");
  } catch (error) {
    console.log("oopsie, something went wrong");
    console.error(error.message);
  }
});

//get a single question from a topic 
app.get('/topics/:id_topic/questions/:id_question', async(req,res) => {
  try {
    console.log(req.params);
    console.log(req.body);
    const { id_question } = req.params;
    const singleQuestion = await pool.query(
      "SELECT * FROM public.tbl_question WHERE id_question = $1",
      [id_question]
    );
    res.json(singleQuestion.rows[0]);
    console.log("Here is a single question");
  } catch (error) {
    console.log("oopsie, something went wrong");
    console.error(error.message);
  }
});

/* There may be an issue with the way ID's are set up. Should there be a sub ID under topic? so like topic 1, question 1? In that case, the questions need TWO IDs, one unique and one subordinate to the topic */

/* I assume there is a clean way to send a single PUT request to a whole table and only update one or two columns. I don't know how to do that yet, so as of now I'll just make a bunch of single PUT requests to update single columns*/

//add a question to a topic DONE
app.put('/topics/questions/:id_question', async(req,res) => {
  try {
    console.log(req.params);
    console.log(req.body)
    const {id_question} = req.params;
    const { fk_topic } = req.body;
    const updateQuestionTopic = await pool.query(
      "UPDATE public.tbl_question SET fk_topic = $1 WHERE id_question = $2",
      [fk_topic, id_question]
    );
    res.json(updateQuestionTopic.rows[0])
    console.log("Success! Question was updated")
  } catch (error) {
    console.log("oopsie, something went wrong");
    console.error(error.message);
  }
});

//update the body of a question DONE
app.put('/topics/:id_topic/questions/:id_question', async(req,res) => {
  try {
    console.log(req.params);
    console.log(req.body)
    const {id_topic, id_question} = req.params;
    const { question } = req.body;
    const updateQuestionBody = await pool.query(
      "UPDATE public.tbl_question SET question = $1 WHERE id_question = $2",
      [ question, id_question]
    );
    res.json(updateQuestionBody.rows[0])
    console.log("Success! Question was updated")
  } catch (error) {
    console.log("oopsie, something went wrong");
    console.error(error.message);
  }
});

//update the definition
app.put('/topics/:id_topic/questions/:id_question', async(req,res) => {
  try {
    console.log(req.params);
    console.log(req.body)
    const {id_topic, id_question} = req.params;
    const { definition } = req.body;
    const updateQuestionDefinition = await pool.query(
      "UPDATE public.tbl_question SET definition = $1 WHERE id_question = $2",
      [ definition, id_question]
    );
    res.json(updateQuestionDefinition.rows[0])
    console.log("Success! Question was updated")
  } catch (error) {
    console.log("oopsie, something went wrong");
    console.error(error.message);
  }
});

//update the information
app.put('/topics/questions/:id_question', async(req,res) => {
  try {
    console.log(req.params);
    console.log(req.body)
    const {id_question} = req.params;
    const { information } = req.body;
    const updateQuestionInformation = await pool.query(
      "UPDATE public.tbl_question SET information = $1 WHERE id_question = $2",
      [ information, id_question]
    );
    res.json(updateQuestionInformation.rows[0])
    console.log("Success! Question was updated")
  } catch (error) {
    console.log("oopsie, something went wrong");
    console.error(error.message);
  }
});

//update the context
app.put('/topics/questions/:id_question', async(req,res) => {
  try {
    console.log(req.params);
    console.log(req.body)
    const {id_question} = req.params;
    const { context } = req.body;
    const updateQuestionContext = await pool.query(
      "UPDATE public.tbl_question SET context = $1 WHERE id_question = $2",
      [ context, id_question]
    );
    res.json(updateQuestionContext.rows[0])
    console.log("Success! Question was updated")
  } catch (error) {
    console.log("oopsie, something went wrong");
    console.error(error.message);
  }
});

//update the example
app.put('/topics/questions/:id_question', async(req,res) => {
  try {
    console.log(req.params);
    console.log(req.body)
    const {id_question} = req.params;
    const { example } = req.body;
    const updateQuestionExample = await pool.query(
      "UPDATE public.tbl_question SET example = $1 WHERE id_question = $2",
      [ example, id_question]
    );
    res.json(updateQuestionExample.rows[0])
    console.log("Success! Question was updated")
  } catch (error) {
    console.log("oopsie, something went wrong");
    console.error(error.message);
  }
});


//***The below will update all question fields, I'm not sure how to weild this yet */

// app.put('/topics/:id_topic/question/:id_question', async(req,res) => {
//   try {
//     console.log(req.params);
//     const {id_topic, id_question} = req.params;
//     const {question:questionUpdate, definition:defUpdate, information:infoUpdate, context:contUpdate, example:exampUpdate} = req.body;
//     const updateQuestion = await pool.query(
//       "UPDATE public.tbl_question SET (question, definition, information, context, example) = ($1, $2, $3, $4, $5) WHERE id_question = $6 AND fk_topic = $7",
//       [questionUpdate, defUpdate, infoUpdate, contUpdate, exampUpdate, id_question, id_topic]
//     );
//       res.json("Success! Question was updated")
//   } catch (error) {
//     console.log("oopsie, something went wrong");
//     console.error(error.message);
//   }
// });

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