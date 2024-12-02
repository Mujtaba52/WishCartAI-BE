#!/bin/bash

aws cloudformation deploy --template-file resources/networking/VPC.yml --stack-name MyAuroraVPCStack

# Deploy networking stack (VPC, Subnets, Security Groups)
npx serverless deploy --config serverless-networking.yml --stage dev

# Deploy Aurora stack (Aurora DB, Secrets, Subnet Groups)
npx serverless deploy --config serverless-aurora.yml --stage dev

# Deploy application stack (Lambda functions)
npx serverless deploy --config serverless.yml --stage dev
