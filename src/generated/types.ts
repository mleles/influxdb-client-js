// This file is generated by [oats][0] and should not be edited by hand.
//
// [0]: https://github.com/influxdata/oats

export interface Error {
  readonly code:
    | 'internal error'
    | 'not found'
    | 'conflict'
    | 'invalid'
    | 'unprocessable entity'
    | 'empty value'
    | 'unavailable'
    | 'forbidden'
    | 'too many requests'
    | 'unauthorized'
    | 'method not allowed'
  readonly message: string
}

export interface Routes {
  authorizations?: string
  buckets?: string
  dashboards?: string
  external?: {
    statusFeed?: string
  }
  variables?: string
  me?: string
  orgs?: string
  query?: {
    self?: string
    ast?: string
    analyze?: string
    suggestions?: string
  }
  setup?: string
  signin?: string
  signout?: string
  sources?: string
  system?: {
    metrics?: string
    debug?: string
    health?: string
  }
  tasks?: string
  telegrafs?: string
  users?: string
  write?: string
}

export interface IsOnboarding {
  allowed?: boolean
}

export interface OnboardingRequest {
  username: string
  password: string
  org: string
  bucket: string
  retentionPeriodHrs?: number
}

export interface OnboardingResponse {
  user?: User
  org?: Organization
  bucket?: Bucket
  auth?: Authorization
}

export interface User {
  readonly id?: string
  oauthID?: string
  name: string
  status?: 'active' | 'inactive'
  readonly links?: {
    self?: string
    logs?: string
  }
}

export interface Organization {
  readonly links?: {
    self?: Link
    members?: Link
    owners?: Link
    labels?: Link
    secrets?: Link
    buckets?: Link
    tasks?: Link
    dashboards?: Link
    logs?: Link
  }
  readonly id?: string
  name: string
  description?: string
  readonly createdAt?: string
  readonly updatedAt?: string
  status?: 'active' | 'inactive'
}

export type Link = string

export interface Bucket {
  readonly links?: {
    labels?: Link
    logs?: Link
    members?: Link
    org?: Link
    owners?: Link
    self?: Link
    write?: Link
  }
  readonly id?: string
  readonly type?: 'user' | 'system'
  name: string
  description?: string
  orgID?: string
  rp?: string
  readonly createdAt?: string
  readonly updatedAt?: string
  retentionRules: RetentionRules
  labels?: Labels
}

export type RetentionRules = RetentionRule[]

export interface RetentionRule {
  type: 'expire'
  everySeconds: number
}

export type Labels = Label[]

export interface Label {
  readonly id?: string
  readonly orgID?: string
  name?: string
  properties?: any
}

export type Authorization = AuthorizationUpdateRequest & {
  readonly createdAt?: string
  readonly updatedAt?: string
  orgID?: string
  permissions?: Permission[]
  readonly id?: string
  readonly token?: string
  readonly userID?: string
  readonly user?: string
  readonly org?: string
  readonly links?: {
    readonly self?: Link
    readonly user?: Link
  }
}

export interface AuthorizationUpdateRequest {
  status?: 'active' | 'inactive'
  description?: string
}

export interface Permission {
  action: 'read' | 'write'
  resource: {
    type:
      | 'authorizations'
      | 'buckets'
      | 'dashboards'
      | 'orgs'
      | 'sources'
      | 'tasks'
      | 'telegrafs'
      | 'users'
      | 'variables'
      | 'scrapers'
      | 'secrets'
      | 'labels'
      | 'views'
      | 'documents'
      | 'notificationRules'
      | 'notificationEndpoints'
      | 'checks'
    id?: string
    name?: string
    orgID?: string
    org?: string
  }
}

export interface Documents {
  documents?: DocumentListEntry[]
}

export interface DocumentListEntry {
  readonly id: string
  meta: DocumentMeta
  labels?: Labels
  readonly links?: {
    self?: Link
  }
}

export interface DocumentMeta {
  name: string
  type?: string
  templateID?: string
  description?: string
  version: string
  readonly createdAt?: string
  readonly updatedAt?: string
}

export interface DocumentCreate {
  meta: DocumentMeta
  content: any
  org?: string
  orgID?: string
  labels?: string[]
}

export interface Document {
  readonly id: string
  meta: DocumentMeta
  content: any
  labels?: Labels
  readonly links?: {
    self?: Link
  }
}

export interface DocumentUpdate {
  meta?: DocumentMeta
  content?: any
}

export interface LabelsResponse {
  labels?: Labels
  links?: Links
}

export interface Links {
  next?: Link
  self: Link
  prev?: Link
}

export interface LabelMapping {
  labelID?: string
}

export interface LabelResponse {
  label?: Label
  links?: Links
}

export interface Telegrafs {
  configurations?: Telegraf[]
}

export type Telegraf = TelegrafRequest & {
  readonly id?: string
  readonly links?: {
    self?: Link
    labels?: Link
    members?: Link
    owners?: Link
  }
  readonly labels?: Labels
}

export interface TelegrafRequest {
  name?: string
  description?: string
  agent?: {
    collectionInterval?: number
  }
  plugins?: TelegrafRequestPlugin[]
  orgID?: string
}

export type TelegrafRequestPlugin =
  | TelegrafPluginInputCpu
  | TelegrafPluginInputDisk
  | TelegrafPluginInputDiskio
  | TelegrafPluginInputDocker
  | TelegrafPluginInputFile
  | TelegrafPluginInputKubernetes
  | TelegrafPluginInputLogParser
  | TelegrafPluginInputProcstat
  | TelegrafPluginInputPrometheus
  | TelegrafPluginInputRedis
  | TelegrafPluginInputSyslog
  | TelegrafPluginOutputFile
  | TelegrafPluginOutputInfluxDBV2

export interface TelegrafPluginInputCpu {
  name: 'cpu'
  type: 'input'
  comment?: string
}

export interface TelegrafPluginInputDisk {
  name: 'disk'
  type: 'input'
  comment?: string
}

export interface TelegrafPluginInputDiskio {
  name: 'diskio'
  type: 'input'
  comment?: string
}

export interface TelegrafPluginInputDocker {
  name: 'docker'
  type: 'input'
  comment?: string
  config: TelegrafPluginInputDockerConfig
}

export interface TelegrafPluginInputDockerConfig {
  endpoint: string
}

export interface TelegrafPluginInputFile {
  name: 'file'
  type: 'input'
  comment?: string
  config: TelegrafPluginInputFileConfig
}

export interface TelegrafPluginInputFileConfig {
  files?: string[]
}

export interface TelegrafPluginInputKubernetes {
  name: 'kubernetes'
  type: 'input'
  comment?: string
  config: TelegrafPluginInputKubernetesConfig
}

export interface TelegrafPluginInputKubernetesConfig {
  url?: string
}

export interface TelegrafPluginInputLogParser {
  name: 'logparser'
  type: 'input'
  comment?: string
  config: TelegrafPluginInputLogParserConfig
}

export interface TelegrafPluginInputLogParserConfig {
  files?: string[]
}

export interface TelegrafPluginInputProcstat {
  name: 'procstat'
  type: 'input'
  comment?: string
  config: TelegrafPluginInputProcstatConfig
}

export interface TelegrafPluginInputProcstatConfig {
  exe?: string
}

export interface TelegrafPluginInputPrometheus {
  name: 'prometheus'
  type: 'input'
  comment?: string
  config: TelegrafPluginInputPrometheusConfig
}

export interface TelegrafPluginInputPrometheusConfig {
  urls?: string[]
}

export interface TelegrafPluginInputRedis {
  name: 'redis'
  type: 'input'
  comment?: string
  config: TelegrafPluginInputRedisConfig
}

export interface TelegrafPluginInputRedisConfig {
  servers?: string[]
  password?: string
}

export interface TelegrafPluginInputSyslog {
  name: 'syslog'
  type: 'input'
  comment?: string
  config: TelegrafPluginInputSyslogConfig
}

export interface TelegrafPluginInputSyslogConfig {
  server?: string
}

export interface TelegrafPluginOutputFile {
  name: 'file'
  type: 'output'
  comment?: string
  config: TelegrafPluginOutputFileConfig
}

export interface TelegrafPluginOutputFileConfig {
  files: Array<{
    type?: 'stdout' | 'path'
    path?: string
  }>
}

export interface TelegrafPluginOutputInfluxDBV2 {
  name: 'influxdb_v2'
  type: 'output'
  comment?: string
  config: TelegrafPluginOutputInfluxDBV2Config
}

export interface TelegrafPluginOutputInfluxDBV2Config {
  urls: string[]
  token: string
  organization: string
  bucket: string
}

export interface ResourceMembers {
  links?: {
    self?: string
  }
  users?: ResourceMember[]
}

export type ResourceMember = User & {
  role?: 'member'
}

export interface AddResourceMemberRequestBody {
  id: string
  name?: string
}

export interface ResourceOwners {
  links?: {
    self?: string
  }
  users?: ResourceOwner[]
}

export type ResourceOwner = User & {
  role?: 'owner'
}

export interface ScraperTargetResponses {
  configurations?: ScraperTargetResponse[]
}

export type ScraperTargetResponse = ScraperTargetRequest & {
  readonly id?: string
  org?: string
  bucket?: string
  readonly links?: {
    self?: Link
    members?: Link
    owners?: Link
    bucket?: Link
    organization?: Link
  }
}

export interface ScraperTargetRequest {
  name?: string
  type?: 'prometheus'
  url?: string
  orgID?: string
  bucketID?: string
}

export interface Variables {
  variables?: Variable[]
}

export interface Variable {
  readonly links?: {
    self?: string
    org?: string
    labels?: string
  }
  readonly id?: string
  orgID: string
  name: string
  description?: string
  selected?: string[]
  labels?: Labels
  arguments: VariableProperties
  createdAt?: string
  updatedAt?: string
}

export type VariableProperties =
  | QueryVariableProperties
  | ConstantVariableProperties
  | MapVariableProperties

export interface QueryVariableProperties {
  type?: 'query'
  values?: {
    query?: string
    language?: string
  }
}

export interface ConstantVariableProperties {
  type?: 'constant'
  values?: string[]
}

export interface MapVariableProperties {
  type?: 'map'
  values?: any
}

export interface LineProtocolError {
  readonly code:
    | 'internal error'
    | 'not found'
    | 'conflict'
    | 'invalid'
    | 'empty value'
    | 'unavailable'
  readonly message: string
  readonly op: string
  readonly err: string
  readonly line?: number
}

export interface LineProtocolLengthError {
  readonly code: 'invalid'
  readonly message: string
  readonly maxLength: number
}

export interface DeletePredicateRequest {
  start: string
  stop: string
  predicate?: string
}

export interface Ready {
  status?: 'ready'
  started?: string
  up?: string
}

export interface HealthCheck {
  name: string
  message?: string
  checks?: HealthCheck[]
  status: 'pass' | 'fail'
}

export interface Sources {
  links?: {
    self?: string
  }
  sources?: Source[]
}

export interface Source {
  links?: {
    self?: string
    query?: string
    health?: string
    buckets?: string
  }
  id?: string
  orgID?: string
  default?: boolean
  name?: string
  type?: 'v1' | 'v2' | 'self'
  url?: string
  insecureSkipVerify?: boolean
  telegraf?: string
  token?: string
  username?: string
  password?: string
  sharedSecret?: string
  metaUrl?: string
  defaultRP?: string
  readonly languages?: Array<'flux' | 'influxql'>
}

export interface Buckets {
  readonly links?: Links
  buckets?: Bucket[]
}

export interface LabelCreateRequest {
  orgID: string
  name?: string
  properties?: any
}

export interface LabelUpdate {
  name?: string
  properties?: any
}

export interface Dashboards {
  links?: Links
  dashboards?: Dashboard[]
}

export type Dashboard = CreateDashboardRequest & {
  links?: {
    self?: Link
    cells?: Link
    members?: Link
    owners?: Link
    logs?: Link
    labels?: Link
    org?: Link
  }
  readonly id?: string
  meta?: {
    createdAt?: string
    updatedAt?: string
  }
  cells?: Cells
  labels?: Labels
}

export interface CreateDashboardRequest {
  orgID: string
  name: string
  description?: string
}

export type Cells = Cell[]

export interface Cell {
  id?: string
  links?: {
    self?: string
    view?: string
  }
  x?: number
  y?: number
  w?: number
  h?: number
  viewID?: string
}

export type DashboardWithViewProperties = CreateDashboardRequest & {
  links?: {
    self?: Link
    cells?: Link
    members?: Link
    owners?: Link
    logs?: Link
    labels?: Link
    org?: Link
  }
  readonly id?: string
  meta?: {
    createdAt?: string
    updatedAt?: string
  }
  cells?: CellsWithViewProperties
  labels?: Labels
}

export type CellsWithViewProperties = CellWithViewProperties[]

export type CellWithViewProperties = Cell & {
  name?: string
  properties?: ViewProperties
}

export type ViewProperties =
  | LinePlusSingleStatProperties
  | XYViewProperties
  | SingleStatViewProperties
  | HistogramViewProperties
  | GaugeViewProperties
  | TableViewProperties
  | MarkdownViewProperties
  | CheckViewProperties
  | ScatterViewProperties
  | HeatmapViewProperties

export interface LinePlusSingleStatProperties {
  type: 'line-plus-single-stat'
  queries: DashboardQuery[]
  colors: DashboardColor[]
  shape: 'chronograf-v2'
  note: string
  showNoteWhenEmpty: boolean
  axes: Axes
  legend: Legend
  xColumn?: string
  yColumn?: string
  shadeBelow?: boolean
  position: 'overlaid' | 'stacked'
  prefix: string
  suffix: string
  decimalPlaces: DecimalPlaces
}

export interface DashboardQuery {
  text?: string
  editMode?: QueryEditMode
  name?: string
  builderConfig?: BuilderConfig
}

export type QueryEditMode = 'builder' | 'advanced'

export interface BuilderConfig {
  buckets?: string[]
  tags?: BuilderTagsType[]
  functions?: BuilderFunctionsType[]
  aggregateWindow?: {
    period?: string
  }
}

export interface BuilderTagsType {
  key?: string
  values?: string[]
  aggregateFunctionType?: BuilderAggregateFunctionType
}

export type BuilderAggregateFunctionType = 'filter' | 'group'

export interface BuilderFunctionsType {
  name?: string
}

export interface DashboardColor {
  id: string
  type: 'min' | 'max' | 'threshold' | 'scale' | 'text' | 'background'
  hex: string
  name: string
  value: number
}

export interface Axes {
  x: Axis
  y: Axis
}

export interface Axis {
  bounds?: string[]
  label?: string
  prefix?: string
  suffix?: string
  base?: '' | '2' | '10'
  scale?: AxisScale
}

export type AxisScale = 'log' | 'linear'

export interface Legend {
  type?: 'static'
  orientation?: 'top' | 'bottom' | 'left' | 'right'
}

export interface DecimalPlaces {
  isEnforced?: boolean
  digits?: number
}

export interface XYViewProperties {
  timeFormat?: string
  type: 'xy'
  queries: DashboardQuery[]
  colors: DashboardColor[]
  shape: 'chronograf-v2'
  note: string
  showNoteWhenEmpty: boolean
  axes: Axes
  legend: Legend
  xColumn?: string
  yColumn?: string
  shadeBelow?: boolean
  position: 'overlaid' | 'stacked'
  geom: XYGeom
}

export type XYGeom = 'line' | 'step' | 'stacked' | 'bar' | 'monotoneX'

export interface SingleStatViewProperties {
  type: 'single-stat'
  queries: DashboardQuery[]
  colors: DashboardColor[]
  shape: 'chronograf-v2'
  note: string
  showNoteWhenEmpty: boolean
  prefix: string
  suffix: string
  legend: Legend
  decimalPlaces: DecimalPlaces
}

export interface HistogramViewProperties {
  type: 'histogram'
  queries: DashboardQuery[]
  colors: DashboardColor[]
  shape: 'chronograf-v2'
  note: string
  showNoteWhenEmpty: boolean
  xColumn: string
  fillColumns: string[]
  xDomain: number[]
  xAxisLabel: string
  position: 'overlaid' | 'stacked'
  binCount: number
}

export interface GaugeViewProperties {
  type: 'gauge'
  queries: DashboardQuery[]
  colors: DashboardColor[]
  shape: 'chronograf-v2'
  note: string
  showNoteWhenEmpty: boolean
  prefix: string
  suffix: string
  legend: Legend
  decimalPlaces: DecimalPlaces
}

export interface TableViewProperties {
  type: 'table'
  queries: DashboardQuery[]
  colors: DashboardColor[]
  shape: 'chronograf-v2'
  note: string
  showNoteWhenEmpty: boolean
  tableOptions: {
    verticalTimeAxis?: boolean
    sortBy?: RenamableField
    wrapping?: 'truncate' | 'wrap' | 'single-line'
    fixFirstColumn?: boolean
  }
  fieldOptions: RenamableField[]
  timeFormat: string
  decimalPlaces: DecimalPlaces
}

export interface RenamableField {
  readonly internalName?: string
  displayName?: string
  visible?: boolean
}

export interface MarkdownViewProperties {
  type: 'markdown'
  shape: 'chronograf-v2'
  note: string
}

export interface CheckViewProperties {
  type: 'check'
  shape: 'chronograf-v2'
  checkID: string
  check?: Check
  queries: DashboardQuery[]
  colors: string[]
}

export type Check = CheckDiscriminator

export type CheckDiscriminator =
  | (DeadmanCheck & {type: string})
  | (ThresholdCheck & {type: string})

export type DeadmanCheck = CheckBase & {
  type?: 'deadman'
  timeSince?: string
  staleTime?: string
  reportZero?: boolean
  level?: CheckStatusLevel
}

export interface CheckBase {
  readonly id?: string
  name: string
  orgID: string
  readonly ownerID?: string
  readonly createdAt?: string
  readonly updatedAt?: string
  query: DashboardQuery
  status?: TaskStatusType
  every?: string
  offset?: string
  tags?: Array<{
    key?: string
    value?: string
  }>
  description?: string
  statusMessageTemplate?: string
  labels?: Labels
  readonly links?: {
    self?: Link
    labels?: Link
    members?: Link
    owners?: Link
    query?: Link
  }
}

export type TaskStatusType = 'active' | 'inactive'

export type CheckStatusLevel = 'UNKNOWN' | 'OK' | 'INFO' | 'CRIT' | 'WARN'

export type ThresholdCheck = CheckBase & {
  type?: 'threshold'
  thresholds?: Threshold[]
}

export type Threshold =
  | (GreaterThreshold & {type: string})
  | (LesserThreshold & {type: string})
  | (RangeThreshold & {type: string})

export type GreaterThreshold = ThresholdBase & {
  type: 'greater'
  value: number
}

export interface ThresholdBase {
  level?: CheckStatusLevel
  allValues?: boolean
}

export type LesserThreshold = ThresholdBase & {
  type: 'lesser'
  value: number
}

export type RangeThreshold = ThresholdBase & {
  type: 'range'
  min: number
  max: number
  within: boolean
}

export interface ScatterViewProperties {
  timeFormat?: string
  type: 'scatter'
  queries: DashboardQuery[]
  colors: string[]
  shape: 'chronograf-v2'
  note: string
  showNoteWhenEmpty: boolean
  xColumn: string
  yColumn: string
  fillColumns: string[]
  symbolColumns: string[]
  xDomain: number[]
  yDomain: number[]
  xAxisLabel: string
  yAxisLabel: string
  xPrefix: string
  xSuffix: string
  yPrefix: string
  ySuffix: string
}

export interface HeatmapViewProperties {
  timeFormat?: string
  type: 'heatmap'
  queries: DashboardQuery[]
  colors: string[]
  shape: 'chronograf-v2'
  note: string
  showNoteWhenEmpty: boolean
  xColumn: string
  yColumn: string
  xDomain: number[]
  yDomain: number[]
  xAxisLabel: string
  yAxisLabel: string
  xPrefix: string
  xSuffix: string
  yPrefix: string
  ySuffix: string
  binSize: number
}

export interface CreateCell {
  name?: string
  x?: number
  y?: number
  w?: number
  h?: number
  usingView?: string
}

export interface CellUpdate {
  x?: number
  y?: number
  w?: number
  h?: number
}

export interface View {
  readonly links?: {
    self?: string
  }
  readonly id?: string
  name: string
  properties: ViewProperties
}

export interface OperationLogs {
  logs?: OperationLog[]
  links?: Links
}

export interface OperationLog {
  description?: string
  time?: string
  userID?: string
  links?: {
    user?: Link
  }
}

export interface LanguageRequest {
  query: string
}

export interface ASTResponse {
  ast?: Package
}

export interface Package {
  type?: NodeType
  path?: string
  package?: string
  files?: File[]
}

export type NodeType = string

export interface File {
  type?: NodeType
  name?: string
  package?: PackageClause
  imports?: ImportDeclaration[]
  body?: Statement[]
}

export interface PackageClause {
  type?: NodeType
  name?: Identifier
}

export interface Identifier {
  type?: NodeType
  name?: string
}

export interface ImportDeclaration {
  type?: NodeType
  as?: Identifier
  path?: StringLiteral
}

export interface StringLiteral {
  type?: NodeType
  value?: string
}

export type Statement =
  | BadStatement
  | VariableAssignment
  | MemberAssignment
  | ExpressionStatement
  | ReturnStatement
  | OptionStatement
  | BuiltinStatement
  | TestStatement

export interface BadStatement {
  type?: NodeType
  text?: string
}

export interface VariableAssignment {
  type?: NodeType
  id?: Identifier
  init?: Expression
}

export type Expression =
  | ArrayExpression
  | FunctionExpression
  | BinaryExpression
  | CallExpression
  | ConditionalExpression
  | LogicalExpression
  | MemberExpression
  | IndexExpression
  | ObjectExpression
  | ParenExpression
  | PipeExpression
  | UnaryExpression
  | BooleanLiteral
  | DateTimeLiteral
  | DurationLiteral
  | FloatLiteral
  | IntegerLiteral
  | PipeLiteral
  | RegexpLiteral
  | StringLiteral
  | UnsignedIntegerLiteral
  | Identifier

export interface ArrayExpression {
  type?: NodeType
  elements?: Expression[]
}

export interface FunctionExpression {
  type?: NodeType
  params?: Property[]
  body?: Node
}

export interface Property {
  type?: NodeType
  key?: PropertyKey
  value?: Expression
}

export type PropertyKey = Identifier | StringLiteral

export type Node = Expression | Block

export interface Block {
  type?: NodeType
  body?: Statement[]
}

export interface BinaryExpression {
  type?: NodeType
  operator?: string
  left?: Expression
  right?: Expression
}

export interface CallExpression {
  type?: NodeType
  callee?: Expression
  arguments?: Expression[]
}

export interface ConditionalExpression {
  type?: NodeType
  test?: Expression
  alternate?: Expression
  consequent?: Expression
}

export interface LogicalExpression {
  type?: NodeType
  operator?: string
  left?: Expression
  right?: Expression
}

export interface MemberExpression {
  type?: NodeType
  object?: Expression
  property?: PropertyKey
}

export interface IndexExpression {
  type?: NodeType
  array?: Expression
  index?: Expression
}

export interface ObjectExpression {
  type?: NodeType
  properties?: Property[]
}

export interface ParenExpression {
  type?: NodeType
  expression?: Expression
}

export interface PipeExpression {
  type?: NodeType
  argument?: Expression
  call?: CallExpression
}

export interface UnaryExpression {
  type?: NodeType
  operator?: string
  argument?: Expression
}

export interface BooleanLiteral {
  type?: NodeType
  value?: boolean
}

export interface DateTimeLiteral {
  type?: NodeType
  value?: string
}

export interface DurationLiteral {
  type?: NodeType
  values?: Duration[]
}

export interface Duration {
  type?: NodeType
  magnitude?: number
  unit?: string
}

export interface FloatLiteral {
  type?: NodeType
  value?: number
}

export interface IntegerLiteral {
  type?: NodeType
  value?: string
}

export interface PipeLiteral {
  type?: NodeType
}

export interface RegexpLiteral {
  type?: NodeType
  value?: string
}

export interface UnsignedIntegerLiteral {
  type?: NodeType
  value?: string
}

export interface MemberAssignment {
  type?: NodeType
  member?: MemberExpression
  init?: Expression
}

export interface ExpressionStatement {
  type?: NodeType
  expression?: Expression
}

export interface ReturnStatement {
  type?: NodeType
  argument?: Expression
}

export interface OptionStatement {
  type?: NodeType
  assignment?: VariableAssignment | MemberAssignment
}

export interface BuiltinStatement {
  type?: NodeType
  id?: Identifier
}

export interface TestStatement {
  type?: NodeType
  assignment?: VariableAssignment
}

export interface FluxSuggestions {
  funcs?: FluxSuggestion[]
}

export interface FluxSuggestion {
  name?: string
  params?: any
}

export interface Authorizations {
  readonly links?: Links
  authorizations?: Authorization[]
}

export interface Query {
  extern?: File
  query: string
  type?: 'flux' | 'influxql'
  db?: string
  rp?: string
  cluster?: string
  dialect?: Dialect
}

export interface Dialect {
  header?: boolean
  delimiter?: string
  annotations?: Array<'group' | 'datatype' | 'default'>
  commentPrefix?: string
  dateTimeFormat?: 'RFC3339' | 'RFC3339Nano'
}

export interface AnalyzeQueryResponse {
  errors?: Array<{
    line?: number
    column?: number
    character?: number
    message?: string
  }>
}

export interface PostBucketRequest {
  orgID?: string
  name: string
  description?: string
  rp?: string
  retentionRules: RetentionRules
}

export interface Organizations {
  links?: Links
  orgs?: Organization[]
}

export type SecretKeysResponse = SecretKeys & {
  readonly links?: {
    self?: string
    org?: string
  }
}

export interface SecretKeys {
  secrets?: string[]
}

export type Secrets = any

export interface PkgCreate {
  pkgName?: string
  pkgDescription?: string
  pkgVersion?: string
  resources?: {
    id: string
    kind: 'bucket' | 'dashboard' | 'label' | 'variable'
    name?: string
  }
}

export interface Pkg {
  apiVersion?: string
  kind?: 'package'
  meta?: {
    description?: string
    pkgName?: string
    pkgVersion?: string
  }
  spec?: {
    resources?: any[]
  }
}

export interface PkgApply {
  apply?: boolean
  package?: Pkg
}

export interface PkgSummary {
  summary?: {
    buckets?: Array<
      Bucket & {
        labelAssociations?: Label[]
      }
    >
    labels?: Label[]
    dashboards?: Array<{
      id?: string
      orgID?: string
      name?: string
      description?: string
      labelAssociations?: Label[]
      charts?: PkgChart[]
    }>
    labelMappings?: Array<{
      resourceName?: string
      resourceID?: string
      resourceType?: string
      labelName?: string
      labelID?: string
    }>
    telegrafConfigs?: Array<
      TelegrafRequest & {
        labelAssociations?: Label[]
      }
    >
    variables?: Array<
      Variable & {
        labelAssociations?: Label[]
      }
    >
  }
  diff?: {
    buckets?: Array<{
      id?: string
      name?: string
      new?: {
        description?: string
        retentionRules?: RetentionRules
      }
      old?: {
        description?: string
        retentionRules?: RetentionRules
      }
    }>
    dashboards?: Array<{
      name?: string
      description?: string
      charts?: PkgChart[]
    }>
    labels?: Array<{
      id?: string
      name?: string
      new?: {
        color?: string
        description?: string
      }
      old?: {
        color?: string
        description?: string
      }
    }>
    labelMappings?: Array<{
      isNew?: boolean
      resourceType?: string
      resourceID?: string
      resourceName?: string
      labelID?: string
      labelName?: string
    }>
    telegrafConfigs?: TelegrafRequest[]
    variables?: Array<{
      id?: string
      name?: string
      new?: {
        description?: string
        args?: VariableProperties
      }
      old?: {
        description?: string
        args?: VariableProperties
      }
    }>
  }
  errors?: Array<{
    kind?: string
    reason?: string
    fields?: string[]
    indexes?: number[]
  }>
}

export interface PkgChart {
  xPos?: number
  yPos?: number
  height?: number
  width?: number
  properties?: ViewProperties
}

export interface Tasks {
  readonly links?: Links
  tasks?: Task[]
}

export interface Task {
  readonly id: string
  type?: string
  orgID: string
  org?: string
  name: string
  description?: string
  status?: TaskStatusType
  labels?: Labels
  authorizationID?: string
  flux: string
  every?: string
  cron?: string
  offset?: string
  readonly latestCompleted?: string
  readonly lastRunStatus?: 'failed' | 'success' | 'canceled'
  readonly lastRunError?: string
  readonly createdAt?: string
  readonly updatedAt?: string
  readonly links?: {
    self?: Link
    owners?: Link
    members?: Link
    runs?: Link
    logs?: Link
    labels?: Link
  }
}

export interface TaskCreateRequest {
  orgID?: string
  org?: string
  status?: TaskStatusType
  flux: string
  description?: string
}

export interface TaskUpdateRequest {
  status?: TaskStatusType
  flux?: string
  name?: string
  every?: string
  cron?: string
  offset?: string
  description?: string
}

export interface Runs {
  links?: Links
  runs?: Run[]
}

export interface Run {
  readonly id?: string
  readonly taskID?: string
  readonly status?: 'scheduled' | 'started' | 'failed' | 'success' | 'canceled'
  scheduledFor?: string
  readonly log?: Array<{
    runID?: string
    time?: string
    message?: string
  }>
  readonly startedAt?: string
  readonly finishedAt?: string
  readonly requestedAt?: string
  readonly links?: {
    self?: string
    task?: string
    logs?: string
    retry?: string
  }
}

export interface RunManually {
  scheduledFor?: string
}

export interface Logs {
  readonly events?: LogEvent[]
}

export interface LogEvent {
  readonly time?: string
  readonly message?: string
}

export interface PasswordResetBody {
  password: string
}

export interface Users {
  links?: {
    self?: string
  }
  users?: User[]
}

export interface Checks {
  checks?: Check[]
  links?: Links
}

export type PostCheck = CheckDiscriminator

export interface CheckPatch {
  name?: string
  description?: string
  status?: 'active' | 'inactive'
}

export interface NotificationRules {
  notificationRules?: NotificationRule[]
  links?: Links
}

export type NotificationRule = NotificationRuleDiscriminator

export type NotificationRuleDiscriminator =
  | (SlackNotificationRule & {type: string})
  | (SMTPNotificationRule & {type: string})
  | (PagerDutyNotificationRule & {type: string})
  | (HTTPNotificationRule & {type: string})

export type SlackNotificationRule = NotificationRuleBase &
  SlackNotificationRuleBase

export interface NotificationRuleBase {
  readonly id: string
  endpointID: string
  orgID: string
  readonly ownerID?: string
  readonly createdAt?: string
  readonly updatedAt?: string
  status: TaskStatusType
  name: string
  sleepUntil?: string
  every?: string
  offset?: string
  runbookLink?: string
  limitEvery?: number
  limit?: number
  tagRules: TagRule[]
  description?: string
  statusRules: StatusRule[]
  labels?: Labels
  readonly links?: {
    self?: Link
    labels?: Link
    members?: Link
    owners?: Link
    query?: Link
  }
}

export interface TagRule {
  key?: string
  value?: string
  operator?: 'equal' | 'notequal' | 'equalregex' | 'notequalregex'
}

export interface StatusRule {
  currentLevel?: RuleStatusLevel
  previousLevel?: RuleStatusLevel
  count?: number
  period?: string
}

export type RuleStatusLevel =
  | 'UNKNOWN'
  | 'OK'
  | 'INFO'
  | 'CRIT'
  | 'WARN'
  | 'ANY'

export interface SlackNotificationRuleBase {
  type: 'slack'
  channel?: string
  messageTemplate: string
}

export type SMTPNotificationRule = NotificationRuleBase &
  SMTPNotificationRuleBase

export interface SMTPNotificationRuleBase {
  type: 'smtp'
  subjectTemplate: string
  bodyTemplate?: string
  to: string
}

export type PagerDutyNotificationRule = NotificationRuleBase &
  PagerDutyNotificationRuleBase

export interface PagerDutyNotificationRuleBase {
  type: 'pagerduty'
  messageTemplate: string
}

export type HTTPNotificationRule = NotificationRuleBase &
  HTTPNotificationRuleBase

export interface HTTPNotificationRuleBase {
  type: 'http'
  url?: string
}

export type PostNotificationRule = NotificationRuleDiscriminator

export interface FluxResponse {
  flux?: string
}

export interface NotificationRuleUpdate {
  name?: string
  description?: string
  status?: 'active' | 'inactive'
}

export interface NotificationEndpoints {
  notificationEndpoints?: NotificationEndpoint[]
  links?: Links
}

export type NotificationEndpoint = NotificationEndpointDiscrimator

export type NotificationEndpointDiscrimator =
  | (SlackNotificationEndpoint & {type: string})
  | (PagerDutyNotificationEndpoint & {type: string})
  | (HTTPNotificationEndpoint & {type: string})

export type SlackNotificationEndpoint = NotificationEndpointBase & {
  url?: string
  token?: string
}

export interface NotificationEndpointBase {
  id?: string
  orgID?: string
  userID?: string
  readonly createdAt?: string
  readonly updatedAt?: string
  description?: string
  name: string
  status?: 'active' | 'inactive'
  labels?: Labels
  readonly links?: {
    self?: Link
    labels?: Link
    members?: Link
    owners?: Link
  }
  type: NotificationEndpointType
}

export type NotificationEndpointType = 'slack' | 'pagerduty' | 'http'

export type PagerDutyNotificationEndpoint = NotificationEndpointBase & {
  clientURL?: string
  routingKey: string
}

export type HTTPNotificationEndpoint = NotificationEndpointBase & {
  url: string
  username?: string
  password?: string
  token?: string
  method: 'POST' | 'GET' | 'PUT'
  authMethod: 'none' | 'basic' | 'bearer'
  contentTemplate?: string
  headers?: any
}

export type PostNotificationEndpoint = NotificationEndpointDiscrimator

export interface NotificationEndpointUpdate {
  name?: string
  description?: string
  status?: 'active' | 'inactive'
}
