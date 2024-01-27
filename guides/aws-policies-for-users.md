
#### AWS Policies for the user:

- [x] **AmazonDynamoDBFullAccess:** Grants full access to all DynamoDB actions for development and testing. Use it cautiously in production, considering more granular permissions.
- [x] **AdministratorAccess-AWSElasticBeanstalk**: Grants full access to Elastic Beanstalk actions for initial setup and testing. Consider more restrictive policies for production environments.

#### Others that I have opted (optional)
- [x] **`AmazonEC2FullAccess`**
- [x] **`AmazonS3FullAccess`**
- [x] **`CloudWatchFullAccess`**
- [x] **`CloudWatchFullAccessV2`**
- [x] **`IAMUserChangePassword`**

#### Optional
- **AmazonDynamoDBReadOnlyAccess:** Restricts access to only read operations (GetItem, Query, Scan). Suitable for users who only need to retrieve data.
- **Custom Policies:** Create tailored policies with specific actions (e.g., dynamodb:CreateTable, dynamodb:PutItem, dynamodb:GetItem) to control access precisely.

#### Policies for errors:

```
User: arn:aws:sts::506839854184:assumed-role/aws-elasticbeanstalk-ec2-role/i-0811644b3017ce3c6 is not authorized to perform: dynamodb:PutItem on resource: arn:aws:dynamodb:us-east-1:506839854184:table/tickets because no identity-based policy allows the dynamodb:PutItem action
```

- Navigate to the [IAM console](https://console.aws.amazon.com/iam/)
- In the left navigation pane, click on **Roles**.
- Find the `aws-elasticbeanstalk-ec2-role` or the specific role used by your Beanstalk environment.
- Click on the role to view its details.
- In the *Permissions* tab, you can see the *policies* that are attached to the role. These policies provide the permissions that allow Elastic Beanstalk to access the required AWS resources to create and manage your environments.
    - I have added `AmazonDynamoDBFullAccess` Permission to that role.

#### **Additional Considerations:**

- **Principle of Least Privilege:** Always grant only the minimum permissions required to perform tasks.
- **Managed Policies vs. Custom Policies:** Use managed policies for common scenarios and create custom policies for specific needs.
- **IAM Roles:** For EC2 instances within Beanstalk, use IAM roles instead of access keys for enhanced security.
- **Security Best Practices:** Regularly review and update policies based on evolving security requirements.