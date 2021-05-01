const express = require('express');
const app = express();

const { posts, tags } = require('./models');

app.use(express.json());

app.get('/posts', (_req, res) => {
  try {
    const post = await Post.findAll({
      include: [
        {
          model: Tag,
          as: 'tags',
          througth : { attributes: [] },
        },
      ],
    });

    return res.status(200).json(posts);
  } catch (err) {
    return res.status(500).json({ err });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Port: ${PORT}`));
