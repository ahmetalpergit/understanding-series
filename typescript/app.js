var generateError = function (message, code) {
    throw { errMessage: message, errCode: code };
};
generateError('not working', 300);
