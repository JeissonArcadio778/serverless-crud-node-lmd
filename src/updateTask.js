const uuid = require("uuid");
const AWS = require("aws-sdk");

const updateTask = async (event) => {

      try {

              const dynamodb = new AWS.DynamoDB.DocumentClient();

              const { id } = event.pathParameters;

              const { done } = JSON.parse(event.body);

              await dynamodb.update({TableName: "TaskTable", Key: { id },
                  UpdateExpression: "set done = :done", ExpressionAttributeValues: {
                    ":done": done},
                  ReturnValues: "ALL_NEW",
                }).promise();

              return {
                statusCode: 200,
                message: "Task Updated",
                body: JSON.stringify({
                  message: "task updated",
                }),
              };
        
      } catch (error) {

              console.log(error);
              return {
                statusCode: 200,
                message: "Error updating task",
                body: JSON.stringify(error),
              };
      }
 
};

module.exports = {
  updateTask,
};
