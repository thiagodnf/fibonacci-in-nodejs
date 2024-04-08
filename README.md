# Fibonacci in Nodejs

An API in Node.js to return the fibonacci numbers

## Running

First off, install all dependencies:

```shell
npm install
```

Then, type the following command to run the app:

```shell
npm start
```

Done. Open your browser and access `http://localhost:3000`.

## Changing Port

By default, this app runs on port 3000. If you would like to run it in a different port, type the following

```shell
node server.js --port 3000
```

## Using REST API

If you would like to use the built-in REST API, you send a request to the following endpoint:

##### Example cURL

<details>
 <summary><code>GET</code> <code><b>/api/fibonacci</b></code></summary>

##### Parameters

> | name              |  type     | data type      | description                         |
> |-------------------|-----------|----------------|-------------------------------------|
> | `index` |  required | int | The index |

##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" -G -d "index=20" http://localhost:3000/api/fibonacci
> ```

</details>
