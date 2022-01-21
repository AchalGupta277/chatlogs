const { chatlogs } = require('../../models');
const { findCount, findMany } = require('../../utils/crud');

module.exports = async (req, res) => {
  try {
    const { start = 0, limit = 10 } = req.query;
    const { userId } = req.params;

    const chats = await getChatlogsForUser(userId, start, limit);
    const totalChatLogs = await getTotalCountForUser();

    return res.status(200).send({
      data: {
        response: chats,
        totalCount: totalChatLogs,
      },
    });
  } catch (err) {
    return res.status(err.code).send({ errors: [{ message: err.message }] });
  }
};

const getChatlogsForUser = async (userId, skip, limit) => {
  const findQuery = {
    userId,
  };
  const options = {
    skip,
    limit,
    sort: { createdAt: -1 }
  };

  const response = await findMany(chatlogs, findQuery, {}, [], options);
  return response;
};

const getTotalCountForUser = async (userId) => {
  const findQuery = {
    userId,
  };
  const count = await findCount(chatlogs, findQuery);
  return count;
};
