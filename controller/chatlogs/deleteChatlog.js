const { chatlogs } = require('../../models');
const { CustomError } = require('../../helper');
const { findOne } = require('../../utils/crud');

module.exports = async (req, res) => {
  try {
    const { msgId, userId } = req.params;

    const findQuery = {
      _id: msgId,
      userId,
    };

    const isMsgExist = await findOne(chatlogs, findQuery);

    if (isMsgExist) {
      throw new CustomError('Message Not found', 404);
    }

    await deleteMany(chatlogs, findQuery);
    return res.status(200).send({
      data: {
        message: 'Deleted successfully',
      },
    });
  } catch (err) {
    return res.status(err.code).send({ errors: [{ message: err.message }] });
  }
};
