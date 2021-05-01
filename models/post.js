module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  });

  return Post;
};
