const generateError = (message: string, code: number) => {
    throw { errMessage: message, errCode: code };
};

generateError('not working', 300);

//since throwing errors crash our script, it will NEVER return anything
//that's why their return type will be inferred as never, not void
