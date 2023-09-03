export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigInt: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  JSONObject: { input: any; output: any; }
  Time: { input: any; output: any; }
};

export type AirbyteCatalog = {
  __typename?: 'AirbyteCatalog';
  streams: Array<AirbyteStream>;
};

export type AirbyteRecord = {
  __typename?: 'AirbyteRecord';
  data: Scalars['JSON']['output'];
  emittedAt: Scalars['Int']['output'];
  namespace?: Maybe<Scalars['String']['output']>;
  stream: Scalars['String']['output'];
};

export type AirbyteStream = {
  __typename?: 'AirbyteStream';
  default_cursor_field?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  json_schema: JsonSchema;
  name: Scalars['String']['output'];
  namespace?: Maybe<Scalars['String']['output']>;
  source_defined_cursor?: Maybe<Scalars['Boolean']['output']>;
  source_defined_primary_key?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']['output']>>>>>;
  supported_sync_modes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Assistant = {
  __typename?: 'Assistant';
  chats: Array<Maybe<Chat>>;
  createdAt: Scalars['DateTime']['output'];
  datasets: Array<Maybe<AssistantDataset>>;
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  workspace: Workspace;
  workspaceId: Scalars['String']['output'];
};

export type AssistantDataset = {
  __typename?: 'AssistantDataset';
  assistant: Assistant;
  assistantId: Scalars['String']['output'];
  columns: Array<AssistantDatasetColumn>;
  id: Scalars['String']['output'];
  idColumn: Column;
  idColumnId: Scalars['String']['output'];
  name: Scalars['String']['output'];
  resultFunction?: Maybe<Scalars['String']['output']>;
  table: Table;
  tableId: Scalars['String']['output'];
};

export type AssistantDatasetColumn = {
  __typename?: 'AssistantDatasetColumn';
  column: Column;
  columnId: Scalars['String']['output'];
  dataset: AssistantDataset;
  datasetId: Scalars['String']['output'];
  filterable: Scalars['Boolean']['output'];
  searchable: Scalars['Boolean']['output'];
};

export type AssistantDatasetIndexStats = {
  __typename?: 'AssistantDatasetIndexStats';
  totalRowsIndexed: Scalars['Int']['output'];
  totalRowsQueried: Scalars['Int']['output'];
};

export type AssistantDatasetResults = {
  __typename?: 'AssistantDatasetResults';
  results: Array<Scalars['JSON']['output']>;
  totalResults: Scalars['Int']['output'];
};

export type Chat = {
  __typename?: 'Chat';
  clientId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  messages: Array<Maybe<ChatMessage>>;
  parent?: Maybe<ChatParent>;
  parentId?: Maybe<Scalars['String']['output']>;
  parentType?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
  workspace: Workspace;
  workspaceId: Scalars['String']['output'];
};

export type ChatMessage = {
  __typename?: 'ChatMessage';
  chat: Chat;
  chatId: Scalars['String']['output'];
  children: Array<Maybe<ChatMessage>>;
  content: Scalars['String']['output'];
  contentId?: Maybe<Scalars['String']['output']>;
  contentType?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<ChatMessage>;
  parentId?: Maybe<Scalars['String']['output']>;
  role: Scalars['String']['output'];
  tokenCount: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ChatMessageFilterInput = {
  after?: InputMaybe<Scalars['DateTime']['input']>;
  contentId?: InputMaybe<Scalars['String']['input']>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  roles?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ChatParent = Assistant | TextQuery;

export type Column = {
  __typename?: 'Column';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  isNullable: Scalars['Boolean']['output'];
  isPrimary: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  ordinalPos: Scalars['Int']['output'];
  table: Table;
  tableId: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ColumnSearchResult = {
  __typename?: 'ColumnSearchResult';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  rank: Scalars['Float']['output'];
  table: Scalars['String']['output'];
};

export type ColumnSearchResults = {
  __typename?: 'ColumnSearchResults';
  results: Array<ColumnSearchResult>;
};

export type CopySchemaInput = {
  workspaceId: Scalars['String']['input'];
};

export type CreateAssistantDatasetColumnInput = {
  columnId: Scalars['String']['input'];
  filterable: Scalars['Boolean']['input'];
  searchable: Scalars['Boolean']['input'];
};

export type CreateAssistantDatasetInput = {
  assistantId: Scalars['String']['input'];
  columns: Array<CreateAssistantDatasetColumnInput>;
  idColumnId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  resultFunction?: InputMaybe<Scalars['String']['input']>;
  tableId: Scalars['String']['input'];
};

export type CreateAssistantInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  workspaceId: Scalars['String']['input'];
};

export type CreateChatInput = {
  clientId?: InputMaybe<Scalars['String']['input']>;
  introMessage?: InputMaybe<OptionalChatMessageInput>;
  parentId?: InputMaybe<Scalars['String']['input']>;
  parentType?: InputMaybe<Scalars['String']['input']>;
  systemMessage?: InputMaybe<OptionalChatMessageInput>;
  workspaceId: Scalars['String']['input'];
};

export type CreateChatMessageInput = {
  chatId: Scalars['String']['input'];
  clientId?: InputMaybe<Scalars['String']['input']>;
  content: Scalars['String']['input'];
  context?: InputMaybe<Scalars['String']['input']>;
};

export type CreateDestinationInput = {
  auth?: InputMaybe<Scalars['JSON']['input']>;
  config?: InputMaybe<Scalars['JSON']['input']>;
  typeId: Scalars['String']['input'];
  workspaceId: Scalars['String']['input'];
};

export type CreateSchemaInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  namespace: SchemaNamespace;
  namespaceId: Scalars['String']['input'];
  title: Scalars['String']['input'];
  workspaceId: Scalars['String']['input'];
};

export type CreateSourceInput = {
  auth?: InputMaybe<Scalars['JSON']['input']>;
  config?: InputMaybe<Scalars['JSON']['input']>;
  typeId: Scalars['String']['input'];
  workspaceId: Scalars['String']['input'];
};

export type CreateSqlQueryInput = {
  parentId?: InputMaybe<Scalars['String']['input']>;
  sql?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  workspaceId: Scalars['String']['input'];
};

export type CreateSyncInput = {
  destinationId?: InputMaybe<Scalars['String']['input']>;
  destinationTypeId?: InputMaybe<Scalars['String']['input']>;
  schedFreq?: InputMaybe<Scalars['Int']['input']>;
  schedHour?: InputMaybe<Scalars['Int']['input']>;
  schedTz?: InputMaybe<Scalars['String']['input']>;
  schedUtc?: InputMaybe<Scalars['String']['input']>;
  sourceId: Scalars['String']['input'];
  workspaceId: Scalars['String']['input'];
};

export type CreateTextQueryInput = {
  columns?: InputMaybe<Array<TextQueryColumnInput>>;
  sqlQueryId?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  workspaceId: Scalars['String']['input'];
};

export type CreateViewInput = {
  name: Scalars['String']['input'];
  schemaId?: InputMaybe<Scalars['String']['input']>;
  sqlQueryId: Scalars['String']['input'];
  workspaceId: Scalars['String']['input'];
};

export type CreateVisualizationInput = {
  config: Scalars['JSON']['input'];
  sqlQueryId: Scalars['String']['input'];
  textQueryId?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  type: Scalars['String']['input'];
  workspaceId: Scalars['String']['input'];
};

export type CreateWorkspaceInput = {
  name: Scalars['String']['input'];
};

export type Destination = {
  __typename?: 'Destination';
  checkSuccess: Scalars['Boolean']['output'];
  config?: Maybe<Scalars['JSON']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  type: DestinationType;
  typeId: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  workspace: Workspace;
  workspaceId: Scalars['String']['output'];
};

export type DestinationType = {
  __typename?: 'DestinationType';
  config: Scalars['JSON']['output'];
  description?: Maybe<Scalars['String']['output']>;
  destinations: Array<Maybe<Destination>>;
  hasOauth: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  isEnabled: Scalars['Boolean']['output'];
  key?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  object?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  uiSchema?: Maybe<Scalars['JSON']['output']>;
};

export type JsonSchema = {
  __typename?: 'JSONSchema';
  properties: Scalars['JSON']['output'];
  type: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  checkDestination: Destination;
  checkSource: Source;
  copySchema: Schema;
  createAssistant: Assistant;
  createAssistantDataset: AssistantDataset;
  createChat: Chat;
  createChatMessage: ChatMessage;
  createDestination: Destination;
  createSchema: Schema;
  createSource: Source;
  createSqlQuery: SqlQuery;
  createSync: Sync;
  createTextQuery: TextQuery;
  createView: Table;
  createVisualization: Visualization;
  createWorkspace: Workspace;
  deleteAssistant: Assistant;
  deleteAssistantDataset: AssistantDataset;
  deleteChat: Chat;
  deleteChatMessage: ChatMessage;
  deleteDestination: Destination;
  deleteSchema: Schema;
  deleteSource: Source;
  deleteSync: Sync;
  deleteTextQuery: TextQuery;
  deleteView: Table;
  deleteVisualization: Visualization;
  deleteWorkspace: Workspace;
  generateChatMessages: Array<Maybe<ChatMessage>>;
  populateAssistantDatasetIndex: AssistantDatasetIndexStats;
  signIn: User;
  startSync: Sync;
  updateAssistant: Assistant;
  updateAssistantDataset: AssistantDataset;
  updateDestination: Destination;
  updateSource: Source;
  updateSync: Sync;
  updateUser: User;
  updateView: Table;
  updateVisualization: Visualization;
  updateWorkspace: Workspace;
};


export type MutationCheckDestinationArgs = {
  id: Scalars['String']['input'];
  schemaId: Scalars['String']['input'];
};


export type MutationCheckSourceArgs = {
  id: Scalars['String']['input'];
};


export type MutationCopySchemaArgs = {
  id: Scalars['String']['input'];
  input: CopySchemaInput;
};


export type MutationCreateAssistantArgs = {
  input: CreateAssistantInput;
};


export type MutationCreateAssistantDatasetArgs = {
  input: CreateAssistantDatasetInput;
};


export type MutationCreateChatArgs = {
  input: CreateChatInput;
};


export type MutationCreateChatMessageArgs = {
  input: CreateChatMessageInput;
};


export type MutationCreateDestinationArgs = {
  input: CreateDestinationInput;
};


export type MutationCreateSchemaArgs = {
  input: CreateSchemaInput;
};


export type MutationCreateSourceArgs = {
  input: CreateSourceInput;
};


export type MutationCreateSqlQueryArgs = {
  input: CreateSqlQueryInput;
};


export type MutationCreateSyncArgs = {
  input: CreateSyncInput;
};


export type MutationCreateTextQueryArgs = {
  input: CreateTextQueryInput;
};


export type MutationCreateViewArgs = {
  input: CreateViewInput;
};


export type MutationCreateVisualizationArgs = {
  input: CreateVisualizationInput;
};


export type MutationCreateWorkspaceArgs = {
  input: CreateWorkspaceInput;
};


export type MutationDeleteAssistantArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteAssistantDatasetArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteChatArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteChatMessageArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteDestinationArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteSchemaArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteSourceArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteSyncArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteTextQueryArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteViewArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteVisualizationArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteWorkspaceArgs = {
  id: Scalars['String']['input'];
};


export type MutationGenerateChatMessagesArgs = {
  id: Scalars['String']['input'];
};


export type MutationPopulateAssistantDatasetIndexArgs = {
  id: Scalars['String']['input'];
};


export type MutationStartSyncArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateAssistantArgs = {
  deleteMessages: Scalars['Boolean']['input'];
  id: Scalars['String']['input'];
  input: UpdateAssistantInput;
};


export type MutationUpdateAssistantDatasetArgs = {
  id: Scalars['String']['input'];
  input: UpdateAssistantDatasetInput;
};


export type MutationUpdateDestinationArgs = {
  id: Scalars['String']['input'];
  input: UpdateDestinationInput;
};


export type MutationUpdateSourceArgs = {
  id: Scalars['String']['input'];
  input: UpdateSourceInput;
};


export type MutationUpdateSyncArgs = {
  id: Scalars['String']['input'];
  input: UpdateSyncInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['String']['input'];
  input: UpdateUserInput;
};


export type MutationUpdateViewArgs = {
  id: Scalars['String']['input'];
  input: UpdateViewInput;
};


export type MutationUpdateVisualizationArgs = {
  id: Scalars['String']['input'];
  input: UpdateVisualizationInput;
};


export type MutationUpdateWorkspaceArgs = {
  id: Scalars['String']['input'];
  input: UpdateWorkspaceInput;
};

export type OptionalChatMessageInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  context?: InputMaybe<Scalars['String']['input']>;
};

export type PublicSchema = {
  __typename?: 'PublicSchema';
  isEnabled: Scalars['Boolean']['output'];
  schema: Schema;
};

/** About the Redwood queries. */
export type Query = {
  __typename?: 'Query';
  assistant?: Maybe<Assistant>;
  assistantDataset?: Maybe<AssistantDataset>;
  assistantDatasetResults: AssistantDatasetResults;
  assistantDatasets: Array<AssistantDataset>;
  assistants: Array<Assistant>;
  chat?: Maybe<Chat>;
  chatMessageChildren?: Maybe<Array<ChatMessage>>;
  chatMessages: Array<ChatMessage>;
  chats: Array<Chat>;
  destination?: Maybe<Destination>;
  destinationType: DestinationType;
  destinationTypes: Array<DestinationType>;
  destinations: Array<Destination>;
  discoverSource: SourceCatalog;
  publicSchemas?: Maybe<Array<Maybe<PublicSchema>>>;
  /** Fetches the Redwood root schema. */
  redwood?: Maybe<Redwood>;
  schema?: Maybe<Schema>;
  schemas?: Maybe<Array<Maybe<Schema>>>;
  searchColumns: ColumnSearchResults;
  searchSqlQueries: SqlQuerySearchResults;
  searchTables: Array<TableSearchResult>;
  searchTextQueries: TextQuerySearchResults;
  source?: Maybe<Source>;
  sourceType: SourceType;
  sourceTypes: Array<SourceType>;
  sources: Array<Source>;
  sqlQueries?: Maybe<Array<SqlQuery>>;
  sqlQuery?: Maybe<SqlQuery>;
  sqlQueryResult?: Maybe<SqlQueryResult>;
  stripePlans: Array<StripePlan>;
  sync?: Maybe<Sync>;
  syncStatses?: Maybe<Array<SyncStats>>;
  syncs: Array<Sync>;
  table?: Maybe<Table>;
  tables?: Maybe<Array<Maybe<Table>>>;
  textQueries?: Maybe<Array<TextQuery>>;
  textQuery?: Maybe<TextQuery>;
  user?: Maybe<User>;
  visualization?: Maybe<Visualization>;
  visualizations: Array<Visualization>;
  workspace?: Maybe<Workspace>;
  workspaceUsage: WorkspaceUsage;
  workspaces: Array<Workspace>;
};


/** About the Redwood queries. */
export type QueryAssistantArgs = {
  id: Scalars['String']['input'];
  workspaceId: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QueryAssistantDatasetArgs = {
  id: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QueryAssistantDatasetResultsArgs = {
  filters?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  query: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QueryAssistantDatasetsArgs = {
  assistantId: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QueryAssistantsArgs = {
  workspaceId: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QueryChatArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['String']['input']>;
  parentType?: InputMaybe<Scalars['String']['input']>;
  workspaceId: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QueryChatMessageChildrenArgs = {
  chatId: Scalars['String']['input'];
  id: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QueryChatMessagesArgs = {
  chatId: Scalars['String']['input'];
  filter?: InputMaybe<ChatMessageFilterInput>;
};


/** About the Redwood queries. */
export type QueryChatsArgs = {
  clientId?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['String']['input']>;
  parentType?: InputMaybe<Scalars['String']['input']>;
  workspaceId: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QueryDestinationArgs = {
  id: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QueryDestinationTypeArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


/** About the Redwood queries. */
export type QueryDestinationTypesArgs = {
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};


/** About the Redwood queries. */
export type QueryDiscoverSourceArgs = {
  id: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QueryPublicSchemasArgs = {
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  workspaceId: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QuerySchemaArgs = {
  id: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QuerySchemasArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  namespaces?: InputMaybe<Array<InputMaybe<SchemaNamespace>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  workspaceId: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QuerySearchColumnsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  search: Scalars['String']['input'];
  workspaceId: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QuerySearchSqlQueriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  search: Scalars['String']['input'];
  workspaceId: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QuerySearchTablesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  schemaNamespaces?: InputMaybe<Array<InputMaybe<SchemaNamespace>>>;
  search: Scalars['String']['input'];
  workspaceId: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QuerySearchTextQueriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  search: Scalars['String']['input'];
  workspaceId: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QuerySourceArgs = {
  id: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QuerySourceTypeArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


/** About the Redwood queries. */
export type QuerySourceTypesArgs = {
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};


/** About the Redwood queries. */
export type QuerySourcesArgs = {
  sourceTypes?: InputMaybe<Array<Scalars['String']['input']>>;
  workspaceId: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QuerySqlQueriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  roots?: InputMaybe<Scalars['Boolean']['input']>;
  workspaceId: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QuerySqlQueryArgs = {
  id: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QuerySqlQueryResultArgs = {
  id: Scalars['String']['input'];
  jobId?: InputMaybe<Scalars['String']['input']>;
  pageToken?: InputMaybe<Scalars['String']['input']>;
  workspaceId: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QuerySyncArgs = {
  id: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QuerySyncStatsesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  syncId: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QuerySyncsArgs = {
  destinationIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  destinationTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sourceIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sourceTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  workspaceId: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QueryTableArgs = {
  id: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QueryTablesArgs = {
  schemaNamespaces?: InputMaybe<Array<InputMaybe<SchemaNamespace>>>;
  sqlQueryIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  workspaceId: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QueryTextQueriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  schemaPrefix?: InputMaybe<Scalars['String']['input']>;
  workspaceId: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QueryTextQueryArgs = {
  id: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QueryUserArgs = {
  id: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QueryVisualizationArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** About the Redwood queries. */
export type QueryVisualizationsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  schemaPrefix?: InputMaybe<Scalars['String']['input']>;
  sqlQueryId?: InputMaybe<Scalars['String']['input']>;
  textQueryId?: InputMaybe<Scalars['String']['input']>;
  workspaceId: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QueryWorkspaceArgs = {
  id: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QueryWorkspaceUsageArgs = {
  id: Scalars['String']['input'];
};

/**
 * The RedwoodJS Root Schema
 *
 * Defines details about RedwoodJS such as the current user and version information.
 */
export type Redwood = {
  __typename?: 'Redwood';
  /** The current user. */
  currentUser?: Maybe<Scalars['JSON']['output']>;
  /** The version of Prisma. */
  prismaVersion?: Maybe<Scalars['String']['output']>;
  /** The version of Redwood. */
  version?: Maybe<Scalars['String']['output']>;
};

export type Schema = {
  __typename?: 'Schema';
  db: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  namespace: SchemaNamespace;
  namespaceId: Scalars['String']['output'];
  tables: Array<Maybe<Table>>;
  title: Scalars['String']['output'];
  workspace: Workspace;
  workspaceId: Scalars['String']['output'];
};

export enum SchemaNamespace {
  Sync = 'sync',
  View = 'view',
  Workspace = 'workspace'
}

export type Source = {
  __typename?: 'Source';
  assets?: Maybe<Array<SourceAsset>>;
  catalog?: Maybe<AirbyteCatalog>;
  checkSuccess: Scalars['Boolean']['output'];
  config?: Maybe<Scalars['JSON']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  type: SourceType;
  typeId: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  workspace: Workspace;
  workspaceId: Scalars['String']['output'];
};

export type SourceAsset = {
  __typename?: 'SourceAsset';
  data: Scalars['JSON']['output'];
  name: Scalars['String']['output'];
};

export type SourceCatalog = {
  __typename?: 'SourceCatalog';
  catalog: AirbyteCatalog;
};

export type SourceType = {
  __typename?: 'SourceType';
  authProvider?: Maybe<Scalars['String']['output']>;
  config: Scalars['JSON']['output'];
  description?: Maybe<Scalars['String']['output']>;
  hasOauth: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  isEnabled: Scalars['Boolean']['output'];
  key?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  object?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  sources: Array<Maybe<Source>>;
  uiSchema?: Maybe<Scalars['JSON']['output']>;
};

export type SqlQuery = {
  __typename?: 'SqlQuery';
  children?: Maybe<Array<SqlQuery>>;
  columns?: Maybe<Array<SqlQueryColumn>>;
  createdAt: Scalars['DateTime']['output'];
  downvotes: Scalars['Int']['output'];
  fields?: Maybe<Array<SqlQueryField>>;
  id: Scalars['String']['output'];
  occurences: Scalars['Int']['output'];
  sql?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  upvotes: Scalars['Int']['output'];
  view?: Maybe<Table>;
  viewId?: Maybe<Scalars['String']['output']>;
  visualizations?: Maybe<Array<Visualization>>;
};

export type SqlQueryColumn = {
  __typename?: 'SqlQueryColumn';
  columnId: Scalars['String']['output'];
  columnName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  schemaName: Scalars['String']['output'];
  sqlQueryId: Scalars['String']['output'];
  tableName: Scalars['String']['output'];
};

export type SqlQueryField = {
  __typename?: 'SqlQueryField';
  id: Scalars['String']['output'];
  mode: Scalars['String']['output'];
  name: Scalars['String']['output'];
  ordinalPos: Scalars['Int']['output'];
  sqlQueryId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type SqlQueryResult = {
  __typename?: 'SqlQueryResult';
  data?: Maybe<SqlQueryResultData>;
  error: Scalars['Boolean']['output'];
  message?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<SqlQueryResultMeta>;
};

export type SqlQueryResultData = {
  __typename?: 'SqlQueryResultData';
  rows?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
};

export type SqlQueryResultField = {
  __typename?: 'SqlQueryResultField';
  mode?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type SqlQueryResultMeta = {
  __typename?: 'SqlQueryResultMeta';
  fields?: Maybe<Array<Maybe<SqlQueryResultField>>>;
  nextQuery?: Maybe<SqlQueryResultMetaNextQuery>;
  totalRows?: Maybe<Scalars['Int']['output']>;
};

export type SqlQueryResultMetaNextQuery = {
  __typename?: 'SqlQueryResultMetaNextQuery';
  jobId?: Maybe<Scalars['String']['output']>;
  pageToken?: Maybe<Scalars['String']['output']>;
};

export type SqlQuerySearchResult = {
  __typename?: 'SqlQuerySearchResult';
  rank: Scalars['Float']['output'];
  sqlQuery: SqlQuery;
};

export type SqlQuerySearchResults = {
  __typename?: 'SqlQuerySearchResults';
  results: Array<SqlQuerySearchResult>;
};

export type StripePlan = {
  __typename?: 'StripePlan';
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  prices: Array<StripePrice>;
};

export type StripePrice = {
  __typename?: 'StripePrice';
  trialPeriodDays?: Maybe<Scalars['Int']['output']>;
  unitAmount: Scalars['Int']['output'];
  unitInterval: Scalars['String']['output'];
};

export type Sync = {
  __typename?: 'Sync';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  destination: Destination;
  destinationId: Scalars['String']['output'];
  error?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  lastSyncStats?: Maybe<SyncStats>;
  schedFreq: Scalars['Int']['output'];
  schedHour: Scalars['Int']['output'];
  schedTz: Scalars['String']['output'];
  schedUtc: Scalars['String']['output'];
  schema: Schema;
  schemaId: Scalars['String']['output'];
  source: Source;
  sourceId: Scalars['String']['output'];
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  state?: Maybe<Scalars['JSON']['output']>;
  status: SyncStatus;
  syncedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  workspace: Workspace;
  workspaceId: Scalars['String']['output'];
};

export type SyncStats = {
  __typename?: 'SyncStats';
  duration: Scalars['Float']['output'];
  endAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  maxCPU: Scalars['Float']['output'];
  maxMem: Scalars['Float']['output'];
  startAt: Scalars['DateTime']['output'];
  sync: Sync;
  syncId: Scalars['String']['output'];
  totalBytes: Scalars['BigInt']['output'];
  totalRecords: Scalars['BigInt']['output'];
};

export enum SyncStatus {
  Error = 'ERROR',
  Pending = 'PENDING',
  Running = 'RUNNING',
  Scheduled = 'SCHEDULED',
  Success = 'SUCCESS'
}

export type Table = {
  __typename?: 'Table';
  columns: Array<Maybe<Column>>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  schema: Schema;
  schemaId: Scalars['String']['output'];
  sqlQuery?: Maybe<SqlQuery>;
  updatedAt: Scalars['DateTime']['output'];
};

export type TableSearchResult = {
  __typename?: 'TableSearchResult';
  rank: Scalars['Float']['output'];
  table: Table;
};

export type TextQuery = {
  __typename?: 'TextQuery';
  chats: Array<Maybe<Chat>>;
  columns?: Maybe<Array<TextQueryColumn>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  occurences: Scalars['Int']['output'];
  sqlQueries?: Maybe<Array<SqlQuery>>;
  text: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TextQueryColumn = {
  __typename?: 'TextQueryColumn';
  columnId: Scalars['String']['output'];
  columnName: Scalars['String']['output'];
  idx?: Maybe<Scalars['Int']['output']>;
  schemaPrefix?: Maybe<Scalars['String']['output']>;
  tableName: Scalars['String']['output'];
  textQueryId: Scalars['String']['output'];
  word?: Maybe<Scalars['String']['output']>;
};

export type TextQueryColumnInput = {
  columnId: Scalars['String']['input'];
  idx: Scalars['Int']['input'];
  word: Scalars['String']['input'];
};

export type TextQuerySearchResult = {
  __typename?: 'TextQuerySearchResult';
  id: Scalars['String']['output'];
  rank: Scalars['Float']['output'];
  text: Scalars['String']['output'];
};

export type TextQuerySearchResults = {
  __typename?: 'TextQuerySearchResults';
  results: Array<TextQuerySearchResult>;
};

export type UpdateAssistantDatasetColumnInput = {
  columnId: Scalars['String']['input'];
  filterable: Scalars['Boolean']['input'];
  searchable: Scalars['Boolean']['input'];
};

export type UpdateAssistantDatasetInput = {
  columns?: InputMaybe<Array<UpdateAssistantDatasetColumnInput>>;
  idColumnId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  resultFunction?: InputMaybe<Scalars['String']['input']>;
  tableId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAssistantInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  workspaceId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateDestinationInput = {
  auth?: InputMaybe<Scalars['JSON']['input']>;
  config?: InputMaybe<Scalars['JSON']['input']>;
  workspaceId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSourceInput = {
  auth?: InputMaybe<Scalars['JSON']['input']>;
  catalog?: InputMaybe<Scalars['JSON']['input']>;
  config?: InputMaybe<Scalars['JSON']['input']>;
  workspaceId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSyncInput = {
  schedFreq?: InputMaybe<Scalars['Int']['input']>;
  schedHour?: InputMaybe<Scalars['Int']['input']>;
  schedTz?: InputMaybe<Scalars['String']['input']>;
  schedUtc?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  acceptTerms?: InputMaybe<Scalars['Boolean']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  signedInAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateViewInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  sqlQueryId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateVisualizationInput = {
  config: Scalars['JSON']['input'];
  sqlQueryId?: InputMaybe<Scalars['String']['input']>;
  textQueryId?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
  workspaceId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateWorkspaceInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  acceptTerms: Scalars['Boolean']['output'];
  company?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  customerId?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  signedInAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Visualization = {
  __typename?: 'Visualization';
  config: Scalars['JSON']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  sqlQuery: SqlQuery;
  sqlQueryId: Scalars['String']['output'];
  textQuery?: Maybe<TextQuery>;
  textQueryId?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  workspace: Workspace;
  workspaceId: Scalars['String']['output'];
};

export type Workspace = {
  __typename?: 'Workspace';
  assistants?: Maybe<Array<Assistant>>;
  chats?: Maybe<Array<Chat>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  schemata?: Maybe<Array<Schema>>;
  syncs?: Maybe<Array<Sync>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<Array<WorkspaceUser>>;
};

export type WorkspaceUsage = {
  __typename?: 'WorkspaceUsage';
  id: Scalars['String']['output'];
  queryBytes: Scalars['BigInt']['output'];
  queryDuration: Scalars['Float']['output'];
  queryRecords: Scalars['BigInt']['output'];
  syncBytes: Scalars['BigInt']['output'];
  syncDuration: Scalars['Float']['output'];
  syncRecords: Scalars['BigInt']['output'];
};

export type WorkspaceUser = {
  __typename?: 'WorkspaceUser';
  role: Scalars['String']['output'];
  user: User;
};
