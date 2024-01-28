const sanitizeParams = (params: Record<string, string | string[] | null>) =>
  Object.entries(params).reduce((acc: Record<string, string | string[] | null>, [key, value]) => {
    if (!params[key]) return acc;

    acc[key] = value;

    return acc;
  }, {});

export default sanitizeParams;
