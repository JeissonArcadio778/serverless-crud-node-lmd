const AWS = require("aws-sdk");

const getTasks = async (event) => {

  try {
    
        const dynamodb = new AWS.DynamoDB.DocumentClient();
      
        const result = await dynamodb.scan({ TableName: "TaskTable" }).promise();
      
        const tasks = result.Items;
      
        return {
          status: 200,
          message: "Get task by id",
          body: {
            tasks,
          },
        };

  } catch (error) {

        console.log(error);
                      
        return {
            status: 400,
            message: "Error getting task",
            body: {
              message: jsonBodyParser(error)
            }
        };
  }

};

module.exports = {
  getTasks,
};
