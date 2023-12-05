const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const authRoute = require('./routes/authRoute');
const documentRoute = require('./routes/documentRoute');

const app = express();

dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(
	cors({
		origin: process.env.ORIGIN ?? 'http://localhost:3000',
		credentials: true,
	}),
);

// connecting database

mongoose
	.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@kodesnip-cluster0.vssfaie.mongodb.net/kodesnip?retryWrites=true&w=majority`, {
		useUnifiedTopology: true,
	})
	.then(() => console.log('DB Connected'))
	.catch((err) => console.log(err));

app.use('/', authRoute);
app.use('/', documentRoute);
app.get('/', (req, res) => res.send('Hello world!'));

app.listen(process.env.PORT ?? 4444, (req, res) => {
	console.log('Server running on port 4444');
});
