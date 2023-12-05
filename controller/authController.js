const User = require('../models/user');
const Document = require('../models/document');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
	return jwt.sign({ _id }, process.env.SECRET ?? 'secret123', {
		expiresIn: '3d',
	});
};

// registering a new user
const registerUser = async (req, res) => {
	const user = req.body;

	try {
		// all fields must be filled
		if (!user.name || !user.email || !user.password) {
			console.log(user);
			return res.status(400).json({ message: 'All field must be filled' });
		}

		// validating user data

		// checking for existing user
		const existingUser = await User.findOne({ email: user.email });

		if (existingUser) {
			return res.status(409).json({ message: 'User already exists' });
		}

		// checking if email is in correct format
		// correct format of email should have '@' and '.com'
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(user.email)) {
			return res.status(409).json({ message: 'Invalid email' });
		}

		// checking if password length is atleast 5
		const passwordLength = user.password.length;
		if (passwordLength < 5) {
			return res.status(409).json({ message: 'Password too small' });
		}

		// password hashed
		const hashedPassword = await bcrypt.hash(user.password, 10);

		// no problems found in user data
		// proceed to save data in database

		// saving data in database
		const newUser = new User({
			name: user.name,
			email: user.email,
			password: hashedPassword,
		});
		await newUser.save();

		// create token
		const token = createToken(newUser._id);

		res.status(201).send({ newUser, token }); // data saved successfully
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

// login an existing user
const loginUser = async (req, res) => {
	const user = req.body;

	try {
		// login form fields are empty
		if (!user.email || !user.password) {
			return res.status(400).json({ message: 'All fields must be filled' });
		}

		// finding user with given email
		const checkUser = await User.findOne({ email: user.email });

		// if user is not present in database
		if (!checkUser) {
			return res.status(400).json({ message: 'Invalid email or password' });
		}

		// comparing passwords
		const isPasswordValid = await bcrypt.compare(
			user.password,
			checkUser.password,
		);

		// passwords do not match
		if (!isPasswordValid) {
			return res.status(400).json({ message: 'Invalid email or password' });
		}

		// if password is correct
		// generate a JWT token with user's ID as the payload
		const token = createToken(checkUser._id);

		// return token to client
		res.json({ checkUser, token });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// deleting user from database
const deleteUser = async (req, res) => {
	try {
		// getting user id of the user
		const userId = req.user._id;

		// delete all document that have been created by the user
		const deleteUserDocuments = await Document.deleteMany({ user_id: userId });

		// deleting user from database
		const deleteUserDetails = await User.deleteOne({ _id: userId });

		res.status(200).json({ message: 'User Deleted Succesfully' });
	} catch (error) {
		// error in deleting user
		res.status(500).json({ message: error.message });
	}
};

module.exports = { registerUser, loginUser, deleteUser };
