#node-ssh-socks5-tunnel-client

A "just-add-water" SSH tunnel as SOCKS5 proxy client based on Node.js, without messing your hand copy and pasting from the example code of https://github.com/mscdex/ssh2 .

## Setup

1. Edit `config.js` to fit your need.

2. `npm i && npm start`

3. Test with something like `curl --socks5 127.0.0.1:8080 http://ifconfig.co` .

4. Have fun.
