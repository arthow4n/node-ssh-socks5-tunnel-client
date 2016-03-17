module.exports = {
        //The socks5 proxy will listen on host:port
        localProxy: {
            host: '127.0.0.1',
            port: 8080
        },
        //Settings used to connect remote SSH server.
        sshConfig: {
            host: 'remote.domain.name.or.ip.address',
            port: 22,
            username: 'username',
            privateKey: require('fs').readFileSync('./id_rsa'),
            passphrase: 'your_as_long_as_cat_passphrase_to_the_private_key'
        }
        // Password only authentication example:
        // sshConfig: {
        //     host: 'remote.domain.name.or.ip.address',
        //     port: 22,
        //     username: 'username',
        //     password: 'password'
        // }
}
