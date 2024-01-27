##### Deploying to Elastic Beanstalk:

#### Helpful Links:
- [eb-cli-setup](./eb-cli-setup.md)
- [Deploying NodeJs Apps on Elastic Beanstalk | AWS](https://www.youtube.com/watch?v=8EJceIkcRLc)
- https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-getting-started.html#ebcli3-basics-config

---

`$ eb init`

Select a default region
1) us-east-1 : US East (N. Virginia)
2) us-west-1 : US West (N. California)
3) us-west-2 : US West (Oregon)
4) eu-west-1 : EU (Ireland)
5) eu-central-1 : EU (Frankfurt)
6) ap-south-1 : Asia Pacific (Mumbai)
7) ap-southeast-1 : Asia Pacific (Singapore)
8) ap-southeast-2 : Asia Pacific (Sydney)
9) ap-northeast-1 : Asia Pacific (Tokyo)
10) ap-northeast-2 : Asia Pacific (Seoul)
11) sa-east-1 : South America (Sao Paulo)
12) cn-north-1 : China (Beijing)
13) cn-northwest-1 : China (Ningxia)
14) us-east-2 : US East (Ohio)
15) ca-central-1 : Canada (Central)
16) eu-west-2 : EU (London)
17) eu-west-3 : EU (Paris)
18) eu-north-1 : EU (Stockholm)
19) eu-south-1 : EU (Milano)
20) ap-east-1 : Asia Pacific (Hong Kong)
21) me-south-1 : Middle East (Bahrain)
22) il-central-1 : Middle East (Israel)
23) af-south-1 : Africa (Cape Town)
24) ap-southeast-3 : Asia Pacific (Jakarta)
25) ap-northeast-3 : Asia Pacific (Osaka)
(default is 3): `1`

Enter Application Name
(default is "draft-three-filtered"): `tbp-dev`

Select an application to use
1) cld-app
2) [ Create new Application ]
(default is 2): `2`

It appears you are using Node.js. Is this correct?
(Y/n): `Y`

Select a platform branch.
1) Node.js 20 running on 64bit Amazon Linux 2023
2) Node.js 18 running on 64bit Amazon Linux 2023
3) Node.js 18 running on 64bit Amazon Linux 2
4) Node.js 16 running on 64bit Amazon Linux 2 (Deprecated)
5) Node.js 14 running on 64bit Amazon Linux 2 (Deprecated)
(default is 1): `2`

Do you wish to continue with CodeCommit? (Y/n): `n`
Do you want to set up SSH for your instances?
(Y/n): `n`

> Note: You can see the changes reflected, if `.gitignore` file gets modified with exceptions for `elasticbeanstalk` files. and a folder `.elasticbeanstalk/config.yml` with all the selected config listed.


---

`$ eb create`

Enter Environment Name
(default is tbp-dev-dev): `tbp-dev-env`
Enter DNS CNAME prefix
(default is tbp-dev-env): `tbp-dev-env`

Select a load balancer type
1) classic
2) application
3) network
(default is 2): `2`


Would you like to enable Spot Fleet requests for this environment? (y/N): `n`

> Note: Hereafter, the deployment starts and takes around 2-5 minutes to complete, you can check the deployed environments in your `elasticbeanstalk console` and you can test your domain-url there.


2.0+ Platforms require a service role. We will attempt to create one for you. You can specify your own role using the --service-role option.
Type "view" to see the policy, or just press ENTER to continue: 
Creating application version archive "app-8d61-240127_082549725097".
Uploading tbp-dev/app-8d61-240127_082549725097.zip to S3. This may take a while.
Upload Complete.
Environment details for: tbp-dev-env
  Application name: tbp-dev
  Region: us-east-1
  Deployed Version: app-8d61-240127_082549725097
  Environment ID: e-wwmibppvir
  Platform: arn:aws:elasticbeanstalk:us-east-1::platform/Node.js 20 running on 64bit Amazon Linux 2023/6.1.0
  Tier: WebServer-Standard-1.0
  CNAME: tbp-dev-env.us-east-1.elasticbeanstalk.com
  Updated: 2024-01-27 02:55:56.191000+00:00
Printing Status:
2024-01-27 02:55:54    INFO    createEnvironment is starting.
2024-01-27 02:55:56    INFO    Using elasticbeanstalk-us-east-1-506839854184 as Amazon S3 storage bucket for environment data.
2024-01-27 02:56:17    INFO    Created security group named: sg-05815cae9a9cc8b73
2024-01-27 02:56:32    INFO    Created security group named: awseb-e-wwmibppvir-stack-AWSEBSecurityGroup-BIMTN0517TS6
2024-01-27 02:56:32    INFO    Created target group named: arn:aws:elasticloadbalancing:us-east-1:506839854184:targetgroup/awseb-AWSEB-Z51HWC9OZJPX/55488e38ac293241
2024-01-27 02:56:32    INFO    Created Auto Scaling launch configuration named: awseb-e-wwmibppvir-stack-AWSEBAutoScalingLaunchConfiguration-yOpdI7Svhfin
2024-01-27 02:57:19    INFO    Created Auto Scaling group named: awseb-e-wwmibppvir-stack-AWSEBAutoScalingGroup-Zh6tJKshS9Ul
2024-01-27 02:57:19    INFO    Waiting for EC2 instances to launch. This may take a few minutes.
2024-01-27 02:57:19    INFO    Created Auto Scaling group policy named: arn:aws:autoscaling:us-east-1:506839854184:scalingPolicy:c4a71a0a-b23f-4f9b-9a1d-6a48de947f72:autoScalingGroupName/awseb-e-wwmibppvir-stack-AWSEBAutoScalingGroup-Zh6tJKshS9Ul:policyName/awseb-e-wwmibppvir-stack-AWSEBAutoScalingScaleDownPolicy-bykZA4oruikn
2024-01-27 02:57:19    INFO    Created Auto Scaling group policy named: arn:aws:autoscaling:us-east-1:506839854184:scalingPolicy:c600048a-3339-4fa9-b48f-e1e81309f7a4:autoScalingGroupName/awseb-e-wwmibppvir-stack-AWSEBAutoScalingGroup-Zh6tJKshS9Ul:policyName/awseb-e-wwmibppvir-stack-AWSEBAutoScalingScaleUpPolicy-24XRfvJXf1RR
2024-01-27 02:57:34    INFO    Created CloudWatch alarm named: awseb-e-wwmibppvir-stack-AWSEBCloudwatchAlarmLow-6sYudRhhIWyE
2024-01-27 02:57:34    INFO    Created CloudWatch alarm named: awseb-e-wwmibppvir-stack-AWSEBCloudwatchAlarmHigh-MKTg1FiHhLDI
2024-01-27 02:58:54    INFO    Created load balancer named: arn:aws:elasticloadbalancing:us-east-1:506839854184:loadbalancer/app/awseb--AWSEB-fTLbAiYXK9CG/35c165571aca512d
2024-01-27 02:59:09    INFO    Created Load Balancer listener named: arn:aws:elasticloadbalancing:us-east-1:506839854184:listener/app/awseb--AWSEB-fTLbAiYXK9CG/35c165571aca512d/d90cb91464821b0b
2024-01-27 02:59:33    INFO    Instance deployment completed successfully.
2024-01-27 03:00:04    INFO    Application available at tbp-dev-env.us-east-1.elasticbeanstalk.com.
2024-01-27 03:00:05    INFO    Successfully launched environment: tbp-dev-env

---

To deploy the modified changes:

`$ eb deploy`

---

To check last 100 lines of logs:

`$ eb logs`