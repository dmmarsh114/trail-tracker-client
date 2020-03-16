let APIURL = '';

switch (window.location.host) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3000';
        break;
    case 'dmm-trailtracker-client.herokuapp.com':
        APIURL = 'https://dmm-trailtracker.herokuapp.com';
}

export default APIURL;