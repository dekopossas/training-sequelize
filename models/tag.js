module.exports = (sequelize, DataTypes) => {
  const Tag =sequelize.define('Tags', {
    title: DataTypes.STRING
  });

  return Tag;
};
