export default function extract(request, response, next) {
  let data = '';

  request.once('error', (error) => {
    request.removeAllListeners();
    next(error);
  });

  request.on('data', (chunk) => {
    if (typeof chunk === 'string') {
      data += chunk;
    } else {
      data = chunk;
    }
  });

  request.once('end', () => {
    request.removeAllListeners();
    request.data(data);
    next();
  });
}
