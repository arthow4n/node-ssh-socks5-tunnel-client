var socks = require('socksv5'),
    Client = require('ssh2').Client,
    config = require('./config');

socks.createServer(function(info, accept, deny) {
    var conn = new Client();
    conn.on('ready', function() {
        conn.forwardOut(info.srcAddr,
            info.srcPort,
            info.dstAddr,
            info.dstPort,
            function(err, stream) {
                if (err) {
                    conn.end();
                    return deny();
                }

                var clientSocket;
                if (clientSocket = accept(true)) {
                    stream.pipe(clientSocket).pipe(stream).on('close', function() {
                        conn.end();
                    });
                } else
                    conn.end();
            });
    }).on('error', function(err) {
        deny();
    }).connect(config.sshConfig);
}).listen(config.localProxy.port, config.localProxy.host, function() {
    console.log('SOCKSv5 proxy server started on ' + config.localProxy.host + ':' + config.localProxy.port);
}).useAuth(socks.auth.None());
