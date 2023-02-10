const omitFields = (obj: any, ...props: string[]) => {
    const result = { ...obj };
    props.forEach(function (prop) {
        delete result[prop];
    });
    return result;
};

export default omitFields;

/**
 usage
response.body = {
      status: "success",
      user: omitFields(user, "password", "verified"),
    };

 */