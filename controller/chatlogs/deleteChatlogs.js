const { chatlogs } = require('../../models');
const { deleteMany } = require('../../utils/crud');

module.exports = async (req, res) => {
  try {
    const { userId } = req.params;

    const query = {
      userId,
    };

    await deleteMany(chatlogs, query);
    return res.status(200).send({
      data: {
        message: 'Deleted successfully',
      },
    });
  } catch (err) {
    return res.status(err.code).send({ errors: [{ message: err.message }] });
  }
};
