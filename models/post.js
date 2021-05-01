module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Posts', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  });

  Post.associate = (models) => {
    Post.belongToMany(models.Tag, {
      througth: 'tagsPosts',
      as: 'tags',
      foreignKey: 'postId',
    })
  }

  return Post;
};
