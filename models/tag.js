module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    title: DataTypes.STRING
  });

  Tag.associate = (models) => {
    Post.belongsToMany(models.Post, {
      througth: 'tagsPosts',
      as: 'posts',
      foreignKey: 'tagId',
    })
  }

  return Tag;
};
