<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Useful Read

[Nest](https://github.com/nestjs/nest) framework
[Deploy NestJS API to AWS Lambda with Serverless](https://dev.to/aws-builders/deploy-a-nestjs-api-to-aws-lambda-with-serverless-framework-4poo)

## Description

Currently deployed in:
https://4y0od557fj.execute-api.us-east-1.amazonaws.com/dev/

Routes:
https://4y0od557fj.execute-api.us-east-1.amazonaws.com/dev/example
https://4y0od557fj.execute-api.us-east-1.amazonaws.com/dev/example/first-example
https://4y0od557fj.execute-api.us-east-1.amazonaws.com/dev/example2

## Installation

```bash
$ npm install
$ npm i -g serverless
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# runs lambda offline
$ npm run lambda-offline

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deploy

```bash
$ npm run build
$ serverless deploy
```

## Lambda Metrics

```bash
$ serverless --console
```

## Clean up

```bash
$ serverless remove
$ aws cloudformation delete-stack --stack-name songs-api-db
```
