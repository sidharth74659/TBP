
const { STATUS_CODES } = require('../constants/constants');
const { tableName, dynamodbClient } = require('./index');

const { PutItemCommand, GetItemCommand, UpdateItemCommand, DeleteItemCommand, ScanCommand } = require('@aws-sdk/client-dynamodb');

async function createTicket(req, res) {
  const { ticketId, attribute1 = '', attribute2 = '' } = req.body;

  const params = {
    TableName: tableName,
    Item: {
      'ticketId': { S: ticketId },
      'attribute1': { S: attribute1 },
      'attribute2': { N: attribute2.toString() },
    },
  };

  try {
    // the 'PutItemCommand' constructor expects the attribute values to be strings.
    const command = new PutItemCommand(params);
    await dynamodbClient.send(command);

    res.status(STATUS_CODES.CREATED).json({ message: 'Ticket created successfully!' });
  } catch (err) {
    console.error(err);
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
}

async function getTicket(req, res) {
  const { ticketId } = req.params;

  const params = {
    TableName: tableName,
    Key: {
      'ticketId': { S: ticketId }
    }
  };

  try {
    const command = new GetItemCommand(params);
    const data = await dynamodbClient.send(command);

    if (!data) {
      res.status(STATUS_CODES.NOT_FOUND).json({ message: 'Ticket not found' });
    } else {
      res.json(data);
    }
  } catch (err) {
    console.error(err);
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
}

async function updateTicket(req, res) {
  const { ticketId } = req.params;
  const { attribute1 = '', attribute2 = '' } = req.body;

  const params = {
    TableName: tableName,
    Key: {
      'ticketId': { S: ticketId }
    },
    UpdateExpression: 'SET attribute1 = :attribute1, attribute2 = :attribute2',
    ExpressionAttributeValues: {
      ':attribute1': { S: attribute1.toString() },
      ':attribute2': { N: attribute2.toString() }
    }
  };

  try {
    // the 'UpdateItemCommand' constructor expects the attribute values to be strings.
    const command = new UpdateItemCommand(params);
    await dynamodbClient.send(command);

    res.status(STATUS_CODES.OK).json({ message: 'Ticket updated successfully!' });
  } catch (err) {
    console.error(err);
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
}

async function deleteTicket(req, res) {
  const { ticketId } = req.params;

  const params = {
    TableName: tableName,
    Key: {
      'ticketId': { S: ticketId }
    }
  };

  try {
    const command = new DeleteItemCommand(params);
    await dynamodbClient.send(command);

    res.status(STATUS_CODES.OK).json({ message: 'Ticket deleted successfully!' });;
  } catch (err) {
    console.error(err);
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
}

async function getAllTickets(req, res) {
  const params = {
    TableName: tableName
  };

  try {
    const command = new ScanCommand(params);
    const data = await dynamodbClient.send(command);

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
}

module.exports = { createTicket, getTicket, updateTicket, deleteTicket, getAllTickets }