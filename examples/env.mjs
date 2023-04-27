/** InfluxDB v2 URL */
const url = process.env['INFLUX_URL'] || 'https://us-east-1-1.aws.cloud2.influxdata.com'
/** InfluxDB authorization token */
const token = process.env['INFLUX_TOKEN'] || '1fci6fJCufwn8PvTnNxm4ZAVbAghbPlb4VTCOpZn4byuYvMicq9day7a1AHgez6ISKRyoIFE8GvN9udF4HKNpA=='
/** Organization within InfluxDB  */
const org = process.env['INFLUX_ORG'] || 'PadTec'
/**InfluxDB bucket used in examples  */
const bucket = '_monitoring'
// ONLY onboarding example
/**InfluxDB user  */
const username = 'my-user'
/**InfluxDB password  */
const password = 'my-password'

export { url, token, org, bucket, username, password }
