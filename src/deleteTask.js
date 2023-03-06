const { default: jsonBodyParser } = require("@middy/http-json-body-parser");
const AWS = require("aws-sdk");

const deleteTask = async (event) => {
  
        try {

              const dynamodb = new AWS.DynamoDB.DocumentClient();
              
              const { id } = event.pathParameters;
            
              await dynamodb.delete({TableName: "TaskTable", Key: {id}}).promise();
            
              return {
                status: 200,
                message: "Task deleted",
                body: {
                  message: 'Deleted Task'
                }
              };
          
        } catch (error) {

              console.log(error);
              
              return {
                  status: 400,
                  message: "Error deleting task",
                  body: {
                    message: jsonBodyParser(error)
                  }
              };
        }

};

module.exports = {
  deleteTask,
};
