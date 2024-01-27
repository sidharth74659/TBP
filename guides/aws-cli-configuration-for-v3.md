
### Installing aws-cli (for mac):

#### Helpful Links
- [Install or update the latest version of the AWS CLI - AWS Command Line Interface (amazon.com)](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html#getting-started-install-instructions)
- [What is the AWS Command Line Interface? - AWS Command Line Interface (amazon.com)](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html)

#### Commands
`$ curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg"`

`$ sudo installer -pkg AWSCLIV2.pkg -target /`

`$ aws --version`
> aws-cli/2.15.15 Python/3.11.6 Darwin/23.0.0 exe/x86_64 prompt/off

`$ aws configure`
>   AWS Access Key ID [None]: AKIAXMAQCNRUNXNNGOGM
>   AWS Secret Access Key [None]: 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
>   Default region name [None]: us-east-1
>   Default output format [None]: json


`$ aws sts get-caller-identity`
> ```json
> {
>    "UserId": "AIDAXMAQCNRUAT2Y642OS",
>     "Account": "506839854184",
>     "Arn": "arn:aws:iam::506839854184:user/user_dynamo"
> }
