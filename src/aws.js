import CloudFront from "aws-sdk/clients/cloudfront"
import CloudFormation from "aws-sdk/clients/cloudformation"
import Redshift from "aws-sdk/clients/redshift"

export default {
  async makeStack(
    access_key,
    secret_key,
    region,
    prefix,
    version,
    redshift_username,
    redshift_password,
    vpc,
    whitelist
  ) {
    const cloudformation = new CloudFormation({
      region,
      credentials: {
        accessKeyId: access_key,
        secretAccessKey: secret_key,
      },
    })

    const params = {
      StackName: `${prefix}-${region}`,
      Capabilities: ["CAPABILITY_NAMED_IAM"],
      TemplateURL: `https://hpx-release-us-west-2.s3.amazonaws.com/${version}/cloudformation/hpx.yaml`,
      Parameters: [
        {
          ParameterKey: "Prefix",
          ParameterValue: prefix,
        },
        {
          ParameterKey: "DistS3Bucket",
          ParameterValue: "hpx-release-us-west-2",
        },
        {
          ParameterKey: "DistS3Key",
          ParameterValue: version,
        },
        {
          ParameterKey: "RedshiftUser",
          ParameterValue: redshift_username,
        },
        {
          ParameterKey: "RedshiftPassword",
          ParameterValue: redshift_password,
        },
        {
          ParameterKey: "VpcCidrBlock",
          ParameterValue: vpc,
        },
        {
          ParameterKey: "WhitelistCidr",
          ParameterValue: whitelist,
        },
      ],
    }
    return cloudformation.createStack(params).promise()
  },

  async checkStack(access_key, secret_key, region, prefix) {
    const config = {
      region,
      credentials: {
        accessKeyId: access_key,
        secretAccessKey: secret_key,
      },
    }

    const cloudformationService = new CloudFormation(config)
    const redshiftService = new Redshift(config)
    const cloudFrontService = new CloudFront(config)

    const cloudformation = new CloudFormation({
      region,
      credentials: {
        accessKeyId: access_key,
        secretAccessKey: secret_key,
      },
    })

    const params = { StackName: `${prefix}-${region}` }
    const stacks = (await cloudformation.describeStacks(params).promise())
      .Stacks
    if (
      stacks[0].StackStatus == "CREATE_COMPLETE" ||
      stacks[0].StackStatus == "UPDATE_COMPLETE"
    ) {
      const resources = (await cloudformationService
        .describeStackResources(params)
        .promise()).StackResources

      const redshift_id = resources.find(
        e => e.LogicalResourceId === "HPXRedshiftCluster"
      ).PhysicalResourceId

      const cloudfront_id = resources.find(
        e => e.LogicalResourceId === "PixelServerCloudfrontDistribution"
      ).PhysicalResourceId

      const [redshift, cloudfront] = await Promise.all([
        redshiftService
          .describeClusters({
            ClusterIdentifier: redshift_id,
          })
          .promise(),
        cloudFrontService
          .getDistribution({
            Id: cloudfront_id,
          })
          .promise(),
      ])

      return [stacks[0], redshift, cloudfront]
    } else {
      return [stacks[0], null, null]
    }
  },
}
