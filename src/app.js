const app = require("../src/server");
const port = 3000; //.env

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
