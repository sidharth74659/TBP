
#### Doubt:
- What if I want to make the capacity units dynamic and scale automatically based on demand?

### TODO:
- implement proper *status-codes*, *error-handling*(unexpected errors) and *validation*(input-data) throughout the code.
- look for *test-scripts/test-cases*(unit and integration) to ensure functionality and stability.
- *Response format*: sefine a consistent response format for your API endpoints to deliver structured data and error messages.

### Check:
- [ ] *User Authentication*: Integrate a user authentication system for secure access to tickets and prevent unauthorized actions.
- [ ] *Middleware*: Utilize middleware functions for tasks like logging, throttling, or handling specific request types.
- [ ] *Monitoring*: Set up monitoring tools to track application health, performance, and resource usage.
- [ ] *Logging*: log detailed error information for debugging and monitoring purposes.
- [ ] *Continuous Integration/Deployment (CI/CD)*

---

### Helpful Links:

##### Guides:
- [aws-cli-configuration-for-v3](./guides/aws-cli-configuration-for-v3.md)
- [aws-policies-for-users](./guides/aws-policies-for-users.md)
- [obtaining-aws-credentials](./guides/obtaining-aws-credentials.md)
- [eb-cli-setup](./guides/eb-cli-setup.md)
- [deploying-to-elastic-beanstalk](./guides/deploying-to-elastic-beanstalk.md)

##### DynamoDB:
- https://aws.amazon.com/dynamodb/
- https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/nodejs-dynamodb-tutorial.html
- https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-started.html
- https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/dynamodb-examples-using-tables.html
- https://www.datacamp.com/tutorial/introduction-to-dynamodb
- https://dev.to/aws-builders/dynamodb-using-aws-sdk-for-javascriptnodejs-43j1

##### AWS SDK v2-to-v3 migration:
- (node:63078) Warning: NodeDeprecationWarning: The AWS SDK for JavaScript (v3) will
no longer support Node.js 14.x on May 1, 2024.
- To continue receiving updates to AWS services, bug fixes, and security
updates please upgrade to an active Node.js LTS version.
    - https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/migrating-to-v3.html
    - https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/javascript_dynamodb_code_examples.html
    - https://github.com/awsdocs/aws-doc-sdk-examples/tree/main/javascriptv3/example_code/dynamodb#code-examples

### Others:
- https://stackoverflow.com/questions/45854169/how-can-i-use-an-es6-import-in-node-js/45854500#45854500
- https://stackoverflow.com/a/55530228