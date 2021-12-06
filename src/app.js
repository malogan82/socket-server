const app = require('express')();
const http = require('http').Server(app);
const bodyParser = require('body-parser');

app.use(bodyParser.json({ type: 'application/*+json' }));

app.get('/dapr/subscribe', (_req, res) => {
  res.json([
      {
          pubsubname: "pubsub",
          topic: "activities",
          route: "activities"
      },
      {
          pubsubname: "pubsub",
          topic: "maneuvers",
          route: "maneuvers"
      }
  ]);
});

app.post('/activities', (req, res) => {
  console.log("activity: ", req.body.data);
  res.sendStatus(200);
});

app.post('/maneuvers', (req, res) => {
  console.log("maneuver: ", req.body.data);
  res.sendStatus(200);
});

app.get('/dapr/config', (_req, res) => {
  console.log("/dapr/config");
  res.sendStatus(200);
});

http.listen(3002, () => {
  console.log('Listening on port 3002');
});

