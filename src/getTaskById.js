const AWS = require("aws-sdk");

const getTask = async (event) => {

        try {

              const dynamodb = new AWS.DynamoDB.DocumentClient();
            
              const { id } = event.pathParameters;
            
              const result = await dynamodb.get({TableName: "TaskTable",Key:{ id },}).promise();
            
              const task = result.Item;
            
              return {
                status: 200,
                message: "Get task by id",
                body: task,
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
  getTask,
};
