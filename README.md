## KodeSnip - Backend

![](https://github.com/fallen-ecstasy/KodeSnip-frontend/blob/main/cover.png)

### FRONTEND REPO : [KodeSnip-frontend](https://github.com/fallen-ecstasy/KodeSnip-frontend)

**KodeSnip empowers developers to effortlessly create and share code snippets, and this backend is the backbone of it all!**

Built with Node.js, Express, and Mongoose, this robust backend seamlessly manages user data and code snippets within the secure embrace of MongoDB.

### Features

* **Code Snippet Management:**

    * Create snippets with ease using a simple and intuitive API.
    * Read, update, and delete snippets to keep your coding insights organized and accessible.
    * Share snippets with colleagues or the community through unique shareable links.
    * Search for snippets based on keywords, tags, or even code content itself.

* **User Authentication:**

    * Secure user accounts with JWT-based authentication, ensuring only authorized users can access and manage their data.
    * Login conveniently with email and password or through social login integrations.
    * Manage user roles and permissions for granular control over access and actions.

* **CORS Configuration:**

    * Enable controlled API access from specific origins, such as your frontend application.
    * Configure CORS settings for optimal security and prevent unauthorized requests.

### Technologies

* **Node.js:** Provides a powerful and efficient server-side environment, perfect for handling concurrent requests and real-time interactions.
* **Express:** Offers a robust framework for building APIs, handling routes, and middleware for a clean and organized codebase.
* **Mongoose:** Simplifies data interaction with MongoDB, acting as an Object Data Modeling (ODM) for streamlined CRUD operations and complex queries.
* **jsonwebtoken (JWT):** Enables secure user authentication through token-based authorization, ensuring only authorized users can access sensitive data.
* **cors:** Configures Cross-Origin Resource Sharing (CORS), allowing controlled API access from specific origins, such as your frontend application, while preventing unauthorized requests from other domains.

### Environment Variables

* USERNAME: MongoDB username
* PASSWORD: MongoDB password
* SECRET: JWT secret key
* PORT: Server port (default: 5000)
* ORIGIN: Allowed origin for CORS requests (e.g., "http://localhost:3000")

### Setup

1. Clone the repository:

```bash
git clone <url-to-your-repo> kodesnip-backend
cd kodesnip-backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:

```
USERNAME=<your_mongodb_username>
PASSWORD=<your_mongodb_password>
SECRET=<your_jwt_secret>
PORT=<your_desired_port>
ORIGIN=<your_allowed_origin>
```

4. Start the server:

```bash
npm start
```

5. The server will start on the specified port (default: 5000).

### Contributing

We welcome contributions from the community! Please refer to the CONTRIBUTING.md file for guidelines and details on how to get involved.

### License

This project is licensed under the MIT License. See the LICENSE file for more information.

**KodeSnip's backend is ready to empower your code sharing vision with its secure, efficient, and scalable architecture. Dive in and start building!**

Feel free to customize this further by adding specific details about your backend functionalities, deployment instructions, and more!

### Stay Connected

* Follow me on GitHub: [Harsh Misra](https://github.com/fallen-ecstasy)

We're excited to see what you create with KodeSnip!



Feel free to customize this further by adding more details or sections as needed!