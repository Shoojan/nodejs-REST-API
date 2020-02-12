# nodejs-REST-API

A RESTful API using nodejs express with mongodb as NoSQL database and authenticate with JWT.

<p>
<b>Planning:</b>
Creating API (CRUD operation) for simple model named "Employee" which shall contain fields (_id, name, position)
</p>

<table>
<th>
  <td>Code</td>
  <td>Description</td>
</th>
<tr>
  <td>1.</td>
  <td>npm init</td>
  <td>Initialize package.json file</td>
</tr>
<tr>
  <td>2.</td>
  <td>npm i --save express</td>
  <td>Install express as web application framework for Node.js</td>
</tr>
<tr>
  <td>3.</td>
  <td>npm i --save-dev nodemon</td>
  <td>Install nodemon inside development server to let the nodejs server deploy automatically</td>
</tr>
<tr>
  <td>4.</td>
  <td>npm run devStart</td>
  <td>Run the development server</td>
</tr>
<tr>
  <td>5.</td>
  <td>npm i --save-dev dotenv</td>
  <td>Install dotenv to load environment variables from .env file into process.env</td>
</tr>
<tr>
  <td>6.</td>
  <td>npm i --save mongoose</td>
  <td>Install ODM(Object Data Modeling) library for MongoDB and Node.js</td>
</tr>
<tr>
  <td>7.</td>
  <td>npm i --save morgan</td>
  <td>Install logging tool that works with HTTP servers.</td>
</tr>
<tr>
  <td>8.</td>
  <td>npm i --save body-parser</td>
  <td>Install middleware module to handle HTTP POST request (parses JSON, buffer, string & URL encoded data).</td>
</tr>
<tr>
  <td>9.</td>
  <td>npm i joi</td>
  <td>used for server side data validation.</td>
</tr>
<tr>
  <td>10.</td>
  <td>npm i bcrypt</td>
  <td>used to hash and compare passwords in nodejs.</td>
</tr>
<tr>
  <td>11.</td>
  <td>npm i jsonwebtoken</td>
  <td>used for JWT authentication.</td>
</tr>
</table>

<p>
 <b> Heroku Deployment git commands </b>
  <li>heroku login</li>
  <li>heroku git:remote -a [project-App-Name] </li>
  <li>git push heroku master</li>
</p>
