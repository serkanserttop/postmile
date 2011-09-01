// Product Configuration

exports.product = {

    name: 'Postmile'
};


// Server Configuration

exports.host = {

    web: {

        domain: 'postmile.net',
        port: 8000,
        scheme: 'http'
    },

    api: {

        domain: 'postmile.net',
        port: 8001,
        scheme: 'http'
    },

    uri: function (type) {

        var set = (type === 'web' ? exports.host.web : exports.host.api);
        return set.scheme + '://' + set.domain + (set.port ? ':' + set.port : '');
    },

    authority: function (type) {

        var set = (type === 'web' ? exports.host.web : exports.host.api);
        return set.domain + (set.port ? ':' + set.port : '');
    }
};


// Process Configuration

exports.process = {

    web: {

        // runAs: 'www-data',

        // tls: {
        //
        //     key: 'cert/postmile.net.key',
        //     cert: 'cert/postmile.net.crt'
        // }
    },

    api: {

        // runAs: 'www-data',
    }
};


// Database Configuration

exports.database = {

    host: '127.0.0.1',
    port: 27017,
    db: 'postmile'
};


// Email Configuration

exports.email = {

    fromName: 'Postmile.net',
    replyTo: 'no-reply@postmile.net',
    admin: 'admin@postmile.net',
    feedback: 'admin@postmile.net',

    server: {

//      port: 25,
//      user: '',
//      password: '',
//      host: 'localhost',
//      ssl: false
    }
};




