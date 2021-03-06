var liveServer = require('live-server'),
    params = {
      port: 8181, // Set the server port. Defaults to 8080.
      host: '0.0.0.0', // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
      file: 'index.html', // When set, serve this file for every 404 (useful for single-page applications)
      mount: [ [ '/', 'dist/' ] ],
      wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
      logLevel: 1 // 0 = errors only, 1 = some, 2 = lots
    };

liveServer.start(params);
