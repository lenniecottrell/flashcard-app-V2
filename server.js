const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
import { pool, client } from "./db.js";
let port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

console.log("NODE_ENV: " + process.env.NODE_ENV); // this returns undefined locally
console.log(process.env);
console.log("port: " + port);

//production route to index in server.js
if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

client.connect();
//-- ROUTES --//

//create a topic DONE
app.post("/topics", async (req, res) => {
  try {
    console.log(req.body);
    const { topic } = req.body;
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
app.get("/topics", async (req, res) => {
  try {
    console.log(req.body);
    const allTopics = await client.query("SELECT * FROM public.tbl_topic");
    res.json(allTopics.rows);
    console.log("GET SUCCESS. You got all topics");
  } catch (error) {
    console.log("error: you did not get all topics");
    console.error(error.message);
  }
});

//get a single topic DONE
app.get("/topics/:topic", async (req, res) => {
  try {
    console.log(req.params);
    const { topic } = req.params;
    const singleTopic = await pool.query(
      "SELECT topic FROM public.tbl_topic WHERE topic = $1",
      [topic]
    );
    res.json(singleTopic.rows);
    console.log("GET SUCCESS. You got a single topic");
    client.end();
  } catch (error) {
    console.log("Getting a topic did not succeed");
    console.error(error.message);
  }
});

//update a topic DONE
app.put("/topics/:id_topic", async (req, res) => {
  try {
    console.log(req.params);
    console.log(req.body);
    const { topic } = req.body;
    const { id_topic } = req.params;
    const updateTopic = await pool.query(
      "UPDATE public.tbl_topic SET topic = $1 WHERE id_topic = $2",
      [topic, id_topic]
    );
    console.log(`Success, topic was updated to ${topic}`);
    res.json(updateTopic.rows[0]);
  } catch (error) {
    console.log("Updating a topic did not succeed");
    console.error(error.message);
  }
});

//create a question DONE
app.post("/topics/questions", async (req, res) => {
  try {
    console.log(req.params);
    console.log(req.body);
    const {
      question,
      definition,
      information,
      compare,
      example,
      fk_topic,
    } = req.body;
    const newEntry = await pool.query(
      "INSERT INTO public.tbl_question (question, definition, information, compare, example, fk_topic) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [question, definition, information, compare, example, fk_topic] //these are variables, assigned from destructuring the request body, that go into the $values
    );
    res.json(newEntry.rows[0]);
    console.log("POST success. You created a question");
  } catch (error) {
    console.log("oopsie something went wrong");
    console.error(error.message);
  }
});

//get all questions DONE
app.get("/questions", async (req, res) => {
  try {
    const allQuestions = await pool.query(
      "SELECT * FROM public.tbl_question ORDER BY id_question ASC"
    );
    res.json(allQuestions.rows);
    console.log("GET success. You got all questions");
  } catch (error) {
    console.log("oopsie something went wrong");
    console.error(error.message);
  }
});

// get all questions in a topic DONE
app.get("/topics/:topic/questions", async (req, res) => {
  try {
    console.log(req.params);
    console.log(req.body);
    const { topic } = req.params;
    const allQuestions = await client.query(
      "SELECT * FROM public.tbl_question INNER JOIN public.tbl_topic ON fk_topic = id_topic AND topic = $1 ORDER BY id_question ASC",
      [topic]
    );
    res.json(allQuestions.rows);
    console.log("Here are all of the questions for a specific topic");
    client.end();
  } catch (error) {
    console.log("Getting all questions for a topic did not succeed");
    console.error(error.message);
  }
});

//get a single question and accompanying answers from a topic DONE
app.get("/topics/:topic/questions/:id_question", async (req, res) => {
  try {
    console.log(req.params);
    console.log(req.body);
    const { topic, id_question } = req.params;
    const singleQuestion = await pool.query(
      "SELECT question, id_question, topic FROM public.tbl_question INNER JOIN public.tbl_topic ON fk_topic = id_topic AND id_question = $1 AND topic = $2",
      [id_question, topic]
    );
    if (
      typeof singleQuestion.rows !== "undefined" &&
      singleQuestion.rows.length == 0
    ) {
      res.json("No question was found with those parameters.");
      return;
    }
    //console.log(singleQuestion.rows[0])
    res.json(singleQuestion.rows[0]);
    console.log("Success, you returned a single question");
  } catch (error) {
    console.log("oopsie, something went wrong");
    console.error(error.message);
  }
});

/* I assume there is a clean way to send a single PUT request to a whole table and only update one or two columns. I don't know how to do that yet, so as of now I'll just make a bunch of single PUT requests to update single columns*/

//add a question to a topic DONE
app.put("/topics/questions/:id_question", async (req, res) => {
  try {
    console.log(req.params);
    console.log(req.body);
    const { id_question } = req.params;
    const { fk_topic } = req.body;
    const updateQuestionTopic = await pool.query(
      "UPDATE public.tbl_question SET fk_topic = $1 WHERE id_question = $2",
      [fk_topic, id_question]
    );
    res.json(updateQuestionTopic.rows[0]);
    console.log("Success! Question was updated");
  } catch (error) {
    console.log("oopsie, something went wrong");
    console.error(error.message);
  }
});

//update the body of a question DONE
app.put("/topics/:topic/questions/:id_question/question", async (req, res) => {
  try {
    console.log(req.params);
    console.log(req.body);
    const { topic, id_question } = req.params;
    const { question } = req.body;
    const updateQuestionBody = await pool.query(
      "UPDATE public.tbl_question SET question = $1 FROM public.tbl_topic WHERE id_question = $2 AND topic = $3",
      [question, id_question, topic]
    );
    console.log(updateQuestionBody);
    res.json(`Question was updated: ${question}`);
    console.log(`Question was updated: ${question}`);
  } catch (error) {
    console.log("oopsie, something went wrong");
    console.error(error.message);
  }
});

//update the definition DONE
app.put(
  "/topics/:topic/questions/:id_question/definition",
  async (req, res) => {
    try {
      console.log(req.params);
      console.log(req.body);
      const { topic, id_question } = req.params;
      const { definition } = req.body;
      const updateQuestionDefinition = await pool.query(
        "UPDATE public.tbl_question SET definition = $1 FROM public.tbl_topic WHERE id_question = $2 AND topic = $3",
        [definition, id_question, topic]
      );
      console.log(updateQuestionDefinition);
      res.json(`Definition was updated: ${definition}`);
      console.log(`Definition was updated: ${definition}`);
    } catch (error) {
      console.log("oopsie, something went wrong");
      console.error(error.message);
    }
  }
);

//update the information DONE
app.put(
  "/topics/:topic/questions/:id_question/information",
  async (req, res) => {
    try {
      console.log(req.params);
      console.log(req.body);
      const { topic, id_question } = req.params;
      const { information } = req.body;
      const updateQuestionInformation = await pool.query(
        "UPDATE public.tbl_question SET information = $1 FROM public.tbl_topic WHERE id_question = $2 AND topic = $3",
        [information, id_question, topic]
      );
      console.log(updateQuestionInformation);
      res.json(`Information was updated: ${information}`);
      console.log(`Information was updated: ${information}`);
    } catch (error) {
      console.log("oopsie, something went wrong");
      console.error(error.message);
    }
  }
);

//update the compare DONE
app.put("/topics/:topic/questions/:id_question/compare", async (req, res) => {
  try {
    console.log(req.params);
    console.log(req.body);
    const { topic, id_question } = req.params;
    const { compare } = req.body;
    const updateQuestionCompare = await pool.query(
      "UPDATE public.tbl_question SET compare = $1 FROM public.tbl_topic WHERE id_question = $2 AND topic = $3",
      [compare, id_question, topic]
    );
    console.log(updateQuestionCompare);
    res.json(`Compare was updated: ${compare}`);
    console.log(`Compare was updated: ${compare}`);
  } catch (error) {
    console.log("oopsie, something went wrong");
    console.error(error.message);
  }
});

//update the example DONE
app.put("/topics/:topic/questions/:id_question/example", async (req, res) => {
  try {
    console.log(req.params);
    console.log(req.body);
    const { topic, id_question } = req.params;
    const { example } = req.body;
    const updateQuestionExample = await pool.query(
      "UPDATE public.tbl_question SET example = $1 FROM public.tbl_topic WHERE id_question = $2 AND topic = $3",
      [example, id_question, topic]
    );
    console.log(updateQuestionExample);
    res.json(`Example was updated: ${example}`);
    console.log(`Example was updated: ${example}`);
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
//     const {question:questionUpdate, definition:defUpdate, information:infoUpdate, compare:contUpdate, example:exampUpdate} = req.body;
//     const updateQuestion = await pool.query(
//       "UPDATE public.tbl_question SET (question, definition, information, compare, example) = ($1, $2, $3, $4, $5) WHERE id_question = $6 AND fk_topic = $7",
//       [questionUpdate, defUpdate, infoUpdate, contUpdate, exampUpdate, id_question, id_topic]
//     );
//       res.json("Success! Question was updated")
//   } catch (error) {
//     console.log("oopsie, something went wrong");
//     console.error(error.message);
//   }
// });

//delete a topic DONE
app.delete("/topics/:topic", async (req, res) => {
  try {
    console.log(req.params);
    const { topic } = req.params;
    const deleteTopic = await pool.query(
      "DELETE FROM public.tbl_topic WHERE topic = $1",
      [topic]
    );
    console.log(deleteTopic);
    console.log(`DELETE SUCCESS. You deleted ${topic}`);
    res.json(`Topic was deleted`);
  } catch (error) {
    console.log("oopsie, something went wrong");
    console.error(error.message);
  }
});

//delete a question DONE
app.delete("/topics/:topic/questions/:id_question", async (req, res) => {
  try {
    console.log(req.params);
    const { id_question } = req.params;
    const deleteQuestion = await pool.query(
      "DELETE FROM public.tbl_question WHERE id_question = $1",
      [id_question]
    );
    console.log(deleteQuestion);
    console.log("DELETE SUCCESS. You deleted a question");
    res.json(`Question was deleted`);
  } catch (error) {
    console.log("oopsie, something went wrong");
    console.error(error.message);
  }
});

app.listen(port, () => {
  console.log(`CORS-enabled web server is listening on port ${port}`);
});
