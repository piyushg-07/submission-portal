// server.js
const app = require('./app');
const { port } = require('./config/config');


// Add an empty GET "/" route
app.get('/', (req, res) => {
    res.send('submission-portal is live and running...🚀🚀🚀');
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
