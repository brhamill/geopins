const user = {
  _id: 1,
  name: 'Brad',
  email: 'brad@hamill.com',
  picture: 'https://cloudinary.com/asdf'
};

module.exports = {
  Query: {
    me: () => user
  }
};
