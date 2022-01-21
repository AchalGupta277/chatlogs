const { chatlogs } = require('../../models');
const { CustomError } = require('../../helper');
const { createOne } = require('../../utils/crud');

module.exports = async (req, res) => {
  try {
    const { message, isSent } = req.body;
    const { userId } = req.params;

    const createQuery = {
      userId,
      message,
      isSent,
    };

    const newChatlog = await createOne(chatlogs, createQuery);

    if (!newChatlog) {
      throw new CustomError('Request can not be processed by server.', 500);
    }

    return res.status(200).send({
      data: {
        id: newChatlog.id,
      },
    });
  } catch (err) {
    return res.status(err.code).send({ errors: [{ message: err.message }] });
  }
};
