errorcodes = (errorcode) =>{
    switch (errorcode) {
        case 400:
            return 'Bad Request';
            break;
        case 401:
            return 'Unauthorized';
            break;
        case 403:
            return 'Forbidden';
            break;
        case 404:
            return 'Not Found';
            break;
        case 405:
            return 'Method Not Allowed';
            break;
        case 406:
            return 'Not Acceptable';
            break;
        case 409:
            return 'Conflict';
            break;
        case 410:
            return 'Gone';
            break;
        case 411:
            return 'Length Required';
            break;
        case 412:
            return 'Precondition Failed';
            break;
        case 413:
            return 'Request Entity Too Large';
            break;
        case 414:
            return 'Request-URI Too Long';
            break;
        case 415:
            return 'Unsupported Media Type';
            break;
        case 416:
            return 'Requested Range Not Satisfiable';
            break;
        case 417:
            return 'Expectation Failed';
            break;
        case 418:
            return 'I\'m a teapot';
            break;
        case 422:
            return 'Unprocessable Entity';
            break;
        case 500:
            return 'Internal Server Error';
            break;
        case 501:
            return 'Not Implemented';
            break;
        case 502:
            return 'Bad Gateway';
            break;
        case 503:
            return 'Service Unavailable';
            break;
        case 504:
            return 'Gateway Timeout';
            break;
        case 505:
            return 'HTTP Version Not Supported';
            break;
        default:
            return 'Unknown Error';
    }
}
module.exports = errorcodes;