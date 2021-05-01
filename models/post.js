module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Posts', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  });

  return Post;
};
