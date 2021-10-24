# Github Webhooks Server

Local server that expose a payload url for Github Webhook requests.
Ngrok is used to expose the local server to the internet. There is
no security system implemented.

## Requirements

- [Github](https://github.com/)
- [Ngrok](https://ngrok.com/) Free tunnel session of 2 hours.
- [Node.js](https://nodejs.org/)

## Setting-up

### Node Server

Install the dependencies

```bash
$ npm install
```

Start the Node.js server

```bash
$ npm start
```

### Ngrok tunnel

Start a tunnel session to forward a public ip to your 
local machine on port 8080.

```bash
$ ./ngrok http 8080
```

You can check out the Ngrok interface at <http://127.0.0.1:4040>

### Github

Add a webhook to a repository and set the payload url to your public ngrok url.

## References

[Webhooks and events - Github Docs](https://docs.github.com/en/developers/webhooks-and-events)