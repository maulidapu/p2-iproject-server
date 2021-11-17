exports.errorHandler = (err, req, res, next) => {
    let error_code = 'INTERNAL_SERVER_ERROR';
    let status = 500;
    let message = err.message;

    if (err.name === 'SequelizeValidationError') {
        error_code = 'VALIDATION_ERROR';
        status = 400;
        message = err.errors[0].message;
    } else if (err.name === 'NOT_FOUND') {
        error_code = 'NOT_FOUND';
        status = 404;
        message = 'DATA NOT FOUND'
    } else if (err.name === 'PASSWORD_INCORRECT') {
        error_code = 'PASSWORD_INCORRECT';
        status = 401;
        message = 'PASSWORD INCORRECT'
    } else if (err.name === 'TOKEN_NOT_FOUND') {
        error_code = 'TOKEN_NOT_FOUND';
        status = 404;
        message = 'TOKEN NOT FOUND';
    } else if (err.name === 'AUTHENTICATION_ERROR') {
        error_code = 'AUTHENTICATION_ERROR';
        status = 401;
        message = 'AUTHENTICATION ERROR'
    } else if (err.name === 'AUTHORIZATION_ERROR') {
        error_code = 'AUTHORIZATION_ERROR';
        status = 403;
        message = 'AUTHORIZATION ERROR'
    } else if (err.name === 'LOGIN_ERROR') {
        error_code = 'LOGIN_ERROR';
        status = 401;
        message = 'EMAIL OR PASSWORD INVALID'
    }else if (err.name === 'NO_IMAGE') {
        error_code = 'NO_IMAGE';
        status = 400;
        message = 'No files were uploaded.'
    }
    res.status(status).json({ error_code, message });
}