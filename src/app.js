const app = require("../src/server");
const port = 3000;

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
