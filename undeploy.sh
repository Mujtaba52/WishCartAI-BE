
npx serverless remove --config serverless.yml --stage dev

npx serverless remove --config serverless-aurora.yml --stage dev

npx serverless remove --config serverless-networking.yml --stage dev

aws cloudformation delete-stack --stack-name MyAuroraVPCStack
