# Github Webhooks Server

Local server that expose a payload url for Github Webhook requests.
Ngrok is used to expose the local server to the internet.

## Requirements

- [Github](https://github.com/)
- [Ngrok](https://ngrok.com/)
- [Node.js](https://nodejs.org/)

## Setting-up

### Node Server

```bash
npm start
```

### Ngrok tunnel

```bash
./ngrok http 8080
```

### Github

Add a webhook to a repository and set the payload url to your public ngrok url.

## References

[Webhooks and events - Github Docs](https://docs.github.com/en/developers/webhooks-and-events)