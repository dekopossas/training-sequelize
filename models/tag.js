module.exports = (sequelize, DataTypes) => {
  const Tag =sequelize.define('Tag', {
    title: DataTypes.STRING
  });

  Tag.associate = (models) => {
    Post.belongToMany(models.Post, {
      througth: 'tagsPosts',
      as: 'posts',
      foreignKey: 'tagId',
    })
  }

  return Tag;
};
