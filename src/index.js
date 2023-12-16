const app = require('./app');
const setup = require('./models/setupModel');
const host = process.env.HOST;
const port = process.env.PORT;

app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
}
);

setup()

