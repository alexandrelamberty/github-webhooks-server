[![Node.js CI](https://github.com/alexandrelamberty/github-webhooks-server/actions/workflows/nodejs.yaml/badge.svg)](https://github.com/alexandrelamberty/github-webhooks-server/actions/workflows/nodejs.yaml)

# GitHub Webhooks Server

This project sets up a local server to receive GitHub Webhook requests, using
Ngrok to expose the local server to the internet.

## Requirements

- [GitHub](https://github.com/)
- [Ngrok](https://ngrok.com/)
- [Node.js](https://nodejs.org/)

## Setup Instructions

### Node.js Server

1. **Install the dependencies**:

   ```bash
   npm install
   ```

2. **Start the Node.js server**:

   ```bash
   npm start
   ```

### Ngrok Tunnel

1. **Start a tunnel session**:

   ```bash
   ./ngrok http 8080
   ```

2. **Note the forwarding URLs**:
   After starting Ngrok, you will see output similar to the following:

   ```plaintext
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

3. **Copy your public URL**:
   Use the URL from the `Forwarding` line, such as `http(s)://42b7-2a02-a03f-c95e-8d00-7fb5-9a63-5577-e6f9.ngrok.io`.

4. **Access the Ngrok web interface**:
   You can monitor traffic and session details at <http://127.0.0.1:4040>.

### GitHub Webhook Configuration

1. **Add a webhook to your repository**:
   - Go to your repository on GitHub.
   - Navigate to **Settings** > **Webhooks** > **Add webhook**.
   - Set the **Payload URL** to your Ngrok URL (e.g.,
   `http(s)://42b7-2a02-a03f-c95e-8d00-7fb5-9a63-5577-e6f9.ngrok.io`).

2. **Configure the webhook settings**:
   - Choose the content type as `application/json`.
   - Select the events you want to receive payloads for.
   - Click **Add webhook**.

## Additional Information

- **Security Note**: This setup does not implement any security mechanisms. Use
it cautiously, especially for sensitive projects.
- **Ngrok Sessions**: Ngrok sessions expire after a certain period, requiring
you to restart the session and update the GitHub webhook URL.

## References

- [Webhooks and Events - GitHub Docs](https://docs.github.com/en/developers/webhooks-and-events)
- [Ngrok Documentation](https://ngrok.com/docs)
- [Node.js Documentation](https://nodejs.org/en/docs/)

Feel free to contribute to this project by submitting issues or pull requests.
