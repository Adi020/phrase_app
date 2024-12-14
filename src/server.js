const app = require('./app');
const db = require('./database/connection');
const { initModelsRelations } = require('./models');

const PORT = process.env.PORT || 3000;

const main = async () => {
  try {
    await db.authenticate();
    console.log('database authenticate successfully');
    initModelsRelations();
    await db.sync();
    console.log('database synchronized successfully');
  } catch (error) {
    console.log(error);
  }
};

main();

app.listen(PORT, () => console.log(`server runing on port ${PORT}`));
