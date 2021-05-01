module.exports = (sequelize, DataTypes) => {
  const Tag =sequelize.define('Tag', {
    title: DataTypes.STRING
  });

  return Tag;
};
