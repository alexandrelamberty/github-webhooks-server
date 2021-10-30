# Github Webhooks Server

Local server that expose a payload url for Github Webhook requests.
Ngrok is used to expose the local server to the internet. There is
no security system implemented.

## Requirements

- [Github](https://github.com/)
- [Ngrok](https://ngrok.com/)
- [Node.js](https://nodejs.org/)

## Setting-up

### Node Server

Install the dependencies

```bash
npm install
```

Start the Node.js server

```bash
npm start
```

### Ngrok tunnel

Start a tunnel session to forward a public ip to your
local machine on port 8080.

```bash
./ngrok http 8080
```

You will see something like this

```bash
ngrok by @inconshreveable                                                                                          (Ctrl+C to quit)

Session Status                online
Session Expires               1 hour, 59 minutes
Version                       2.3.40
Region                        United States (us)
Web Interface                 http://127.0.0.1:4040
Forwarding                    http://42b7-2a02-a03f-c95e-8d00-7fb5-9a63-5577-e6f9.ngrok.io -> http://localhost:8080
Forwarding                    https://42b7-2a02-a03f-c95e-8d00-7fb5-9a63-5577-e6f9.ngrok.io -> http://localhost:8080

Connections                   ttl     opn     rt1     rt5     p50     p90
                              0       0       0.00    0.00    0.00    0.00
```

Grab your public ip from one of thoses two lines. ie: `http(s)://42b7-2a02-a03f-c95e-8d00-7fb5-9a63-5577-e6f9.ngrok.io`

```bash
Forwarding                    http://42b7-2a02-a03f-c95e-8d00-7fb5-9a63-5577-e6f9.ngrok.io -> http://localhost:8080
Forwarding                    https://42b7-2a02-a03f-c95e-8d00-7fb5-9a63-5577-e6f9.ngrok.io -> http://localhost:8080
```

You can check out the Ngrok interface at <http://127.0.0.1:4040>

### Github

Add a webhook to a repository and set the payload url to your public ngrok url.

## References

[Webhooks and events - Github Docs](https://docs.github.com/en/developers/webhooks-and-events)
