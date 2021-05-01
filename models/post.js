module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  });

  Post.associate = (models) => {
    Post.belongsToMany(models.Tag, {
      througth: 'tagsPosts',
      as: 'tags',
      foreignKey: 'postId',
    })
  }

  return Post;
};
