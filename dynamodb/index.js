// const AWS = require('aws-sdk');
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { CreateTableCommand } = require('@aws-sdk/client-dynamodb');

const dynamodbClient = new DynamoDBClient({ region: process.env.AWS_REGION });

/* 
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});
*/

const tableName = 'tickets';

const ticketSchema = {
    // TODO: use 'AttributeName' as constants, so in other files you will not be mis-spell or easy to change
    TableName: tableName,
    KeySchema: [
        { AttributeName: 'ticketId', KeyType: 'HASH' },
    ],
    AttributeDefinitions: [
        { AttributeName: 'ticketId', AttributeType: 'S' },
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5,
    },
};

async function createDynamoDBTicketTable() {
    // https://stackoverflow.com/questions/41620437/how-to-continue-deploy-if-dynamodb-table-already-exists
    try {
        const command = new CreateTableCommand(ticketSchema);
        const response = await dynamodbClient.send(command);

        console.log('DynamoDB table created successfully:', response);
    } catch (err) {
        console.error('Error creating DynamoDB table:', err);
    }
}

createDynamoDBTicketTable();

module.exports = { dynamodbClient, tableName};