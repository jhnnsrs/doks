"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[8804],{2813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>ke,contentTitle:()=>Pe,default:()=>Fe,frontMatter:()=>we,metadata:()=>Ce,toc:()=>Ne});var o=n(7462),i=n(7294),a=n(4137);const r=i.createContext({setRunState:()=>{console.error("WE ARE LACKING AN ENGINE")}}),s=()=>(0,i.useContext)(r);var d=n(7838);var l=n(1706);const m=i.createContext({isExpanded:!1,isSelected:!1,isHovered:!1,toggleExpanded:()=>{},width:200,height:70}),c=()=>(0,i.useContext)(m),u=e=>{let{id:t,children:n,expandedHeight:o=200,expandedWidth:a=400,collapsedWidth:r=170,collapsedHeight:s=70}=e;const[d,c]=(0,i.useState)({isExpanded:!1,isSelected:!1,isHovered:!1,width:r,height:s});return i.createElement(l.Resizable,{key:t,height:d.height,width:d.width,onResize:(e,t)=>{let{size:n,handle:o}=t;c((e=>({...e,width:n.width,height:n.height,isExpanded:n.height>200&&n.width>200}))),e.stopPropagation()},resizeHandles:["se"],handleSize:[40,40]},i.createElement(m.Provider,{value:{...d,toggleExpanded:()=>{c((e=>({...e,isExpanded:!e.isExpanded,width:e.isExpanded?r:a,height:e.isExpanded?s:o})))}}},i.createElement("div",{style:{width:d.width+"px",height:d.height+"px"},className:"flex flex-col"},n)))},p=e=>t=>i.createElement(u,{id:t.id},i.createElement(e,t)),$={ERROR:"border-red-900 dark:border-red-900 dark:shadow--200/10 animate-pulse dark:bg-red-800",NEXT:"border-blue-900 dark:border-blue-900 dark:shadow-blue-200/10",COMPLETE:"border-green-900 dark:border-green-900 dark:shadow-green-200/10 dark:bg-slate-800 opacity-0.8"},g=e=>{var t;let{children:n,id:o,color:a="pink"}=e;const{runState:r}=s(),{isExpanded:d}=c();let l=null==r||null==(t=r.events)?void 0:t.find((e=>(null==e?void 0:e.source)===o)),m=l?$[l.type]:"";return i.createElement(i.Fragment,null,i.createElement("div",{className:"px-2 py-2 z-50 shadow-xl rounded-md bg-gray-800 text-white border border-1 flex-grow flex flex-col h-full w-full transition-colors ease-in-out delay-150 "+m},n))};p((e=>{var t;let{data:n,id:o}=e;const{runState:a}=s(),{isExpanded:r,toggleExpanded:l}=c(),[m,u]=(0,i.useState)(),p=m||(null==a||null==(t=a.events)?void 0:t.find((e=>(null==e?void 0:e.source)===o)));n.kind;return i.createElement(g,{id:o},n.instream.map(((e,t)=>i.createElement(d.HH,{type:"target",position:d.Ly.Left,id:"arg_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"},"data-tip":e&&e.length>0?e.map((e=>`${null==e?void 0:e.kind} ${null==e?void 0:e.key}`)).join("|"):"Event","data-for":"tooltip"+o}))),n.outstream.map(((e,t)=>i.createElement(d.HH,{type:"source",position:d.Ly.Right,id:"return_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"},"data-tip":e&&e.length>0?e.map((e=>`${null==e?void 0:e.kind} ${null==e?void 0:e.key}`)).join("|"):"Event","data-for":"tooltip"+o}))),i.createElement("div",{className:"flex-initial font-light text-xl mb-1 custom-drag-handle cursor-pointer truncate",onDoubleClick:()=>l()},i.createElement("div",{className:"w-full flex flex-row justify-between"},null==n?void 0:n.name)),i.createElement("p",{className:"flex-initial text-xs font-extralight truncate"},null==n?void 0:n.name),r&&i.createElement(i.Fragment,null,i.createElement("div",{className:"px-2 py-2 flex-grow flex flex-col overflow-hidden"},JSON.stringify(null==p?void 0:p.value))))}));var f=n(3750);p((e=>{var t;let{data:n,id:o}=e;const{runState:a}=s(),{isExpanded:r,toggleExpanded:l}=c(),[m,u]=(0,i.useState)(),p=m||(null==a||null==(t=a.events)?void 0:t.find((e=>(null==e?void 0:e.source)===o)));n.kind;return i.createElement(g,{id:o},n.instream.map(((e,t)=>i.createElement(d.HH,{type:"target",position:d.Ly.Left,id:"arg_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"},"data-tip":e&&e.length>0?e.map((e=>`${null==e?void 0:e.kind} ${null==e?void 0:e.key}`)).join("|"):"Event","data-for":"tooltip"+o}))),n.outstream.map(((e,t)=>i.createElement(d.HH,{type:"source",position:d.Ly.Right,id:"return_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"},"data-tip":e&&e.length>0?e.map((e=>`${null==e?void 0:e.kind} ${null==e?void 0:e.key}`)).join("|"):"Event","data-for":"tooltip"+o}))),i.createElement("div",{className:"flex-initial font-light text-xl mb-1 custom-drag-handle cursor-pointer truncate",onDoubleClick:()=>l()},i.createElement("div",{className:"w-full flex flex-row justify-between"},n.name," ",i.createElement("button",{type:"button",className:"text-md font-light",onClick:()=>u(null==m?p:void 0),title:"Toggle freeze","aria-details":"Toggles freezing the node at the current event"},null==m?i.createElement(f.xO1,null):i.createElement(f.cuI,null)))),i.createElement("p",{className:"flex-initial text-xs font-extralight truncate"},null==n?void 0:n.hash,null==p?void 0:p.value),r&&i.createElement(i.Fragment,null,i.createElement("div",{className:"px-2 py-2 flex-grow flex flex-col overflow-hidden"},p.value)))}));var h=n(1230);let E,v,y,w,P,C,k,N,D;!function(e){e.FlowCondition="FLOW_CONDITION",e.FlowConditionevent="FLOW_CONDITIONEVENT",e.FlowConditionsnapshot="FLOW_CONDITIONSNAPSHOT",e.FlowFlow="FLOW_FLOW",e.FlowReactivetemplate="FLOW_REACTIVETEMPLATE",e.FlowRun="FLOW_RUN",e.FlowRunevent="FLOW_RUNEVENT",e.FlowRunlog="FLOW_RUNLOG",e.FlowSnapshot="FLOW_SNAPSHOT",e.FlowWorkspace="FLOW_WORKSPACE"}(E||(E={})),function(e){e.Active="ACTIVE",e.Inactive="INACTIVE"}(v||(v={})),function(e){e.Complete="COMPLETE",e.Error="ERROR",e.Next="NEXT",e.Unknown="UNKNOWN"}(y||(y={})),function(e){e.AsCompleted="AS_COMPLETED",e.Map="MAP",e.Ordered="ORDERED"}(w||(w={})),function(e){e.Add="ADD",e.All="ALL",e.And="AND",e.BufferComplete="BUFFER_COMPLETE",e.BufferUntil="BUFFER_UNTIL",e.Chunk="CHUNK",e.Combinelatest="COMBINELATEST",e.Divide="DIVIDE",e.Ensure="ENSURE",e.Foreach="FOREACH",e.Gate="GATE",e.If="IF",e.Modulo="MODULO",e.Multiply="MULTIPLY",e.Omit="OMIT",e.Power="POWER",e.Prefix="PREFIX",e.Split="SPLIT",e.Subtract="SUBTRACT",e.Suffix="SUFFIX",e.ToList="TO_LIST",e.Withlatest="WITHLATEST",e.Zip="ZIP"}(P||(P={})),function(e){e.Complete="COMPLETE",e.Error="ERROR",e.Next="NEXT",e.Unknown="UNKNOWN"}(C||(C={})),function(e){e.Global="GLOBAL",e.Local="LOCAL"}(k||(k={})),function(e){e.FlowCondition="FLOW_CONDITION",e.FlowConditionevent="FLOW_CONDITIONEVENT",e.FlowConditionsnapshot="FLOW_CONDITIONSNAPSHOT",e.FlowFlow="FLOW_FLOW",e.FlowReactivetemplate="FLOW_REACTIVETEMPLATE",e.FlowRun="FLOW_RUN",e.FlowRunevent="FLOW_RUNEVENT",e.FlowRunlog="FLOW_RUNLOG",e.FlowSnapshot="FLOW_SNAPSHOT",e.FlowWorkspace="FLOW_WORKSPACE"}(N||(N={})),function(e){e.Bool="BOOL",e.Dict="DICT",e.Enum="ENUM",e.Float="FLOAT",e.Int="INT",e.List="LIST",e.String="STRING",e.Structure="STRUCTURE",e.Unset="UNSET"}(D||(D={}));const F=h.Ps`
  fragment Leaf on Leaf {
    typename: __typename
    bold
    italic
    code
    text
  }
`,I=(h.Ps`
  fragment LevelDownDescendent on Descendent {
    typename: __typename
    ...Leaf
  }
  ${F}
`,h.Ps`
  fragment LevelDownParagraph on ParagraphDescendent {
    size
    untypedChildren
  }
`),L=h.Ps`
  fragment LevelDownMention on MentionDescendent {
    user {
      sub
    }
  }
`,R=h.Ps`
  fragment Node on CommentNode {
    typename: __typename
    children {
      typename: __typename
      ...Leaf
      ...LevelDownParagraph
      ...LevelDownMention
    }
  }
  ${F}
  ${I}
  ${L}
`,x=h.Ps`
  fragment Mention on MentionDescendent {
    user {
      sub
    }
    ...Node
  }
  ${R}
`,b=h.Ps`
  fragment Paragraph on ParagraphDescendent {
    size
    ...Node
  }
  ${R}
`,S=h.Ps`
  fragment Descendent on Descendent {
    typename: __typename
    ...Mention
    ...Paragraph
    ...Leaf
  }
  ${x}
  ${b}
  ${F}
`,T=h.Ps`
  fragment SubthreadComment on Comment {
    user {
      sub
    }
    parent {
      id
    }
    createdAt
    descendents {
      ...Descendent
    }
  }
  ${S}
`,W=h.Ps`
  fragment ListComment on Comment {
    user {
      sub
    }
    parent {
      id
    }
    descendents {
      ...Descendent
    }
    resolved
    resolvedBy {
      sub
    }
    id
    createdAt
    children {
      ...SubthreadComment
    }
  }
  ${S}
  ${T}
`,O=h.Ps`
  fragment MentionComment on Comment {
    user {
      sub
    }
    parent {
      id
    }
    descendents {
      ...Descendent
    }
    id
    createdAt
    children {
      ...SubthreadComment
    }
    mentions {
      id
      sub
    }
    resolved
    resolvedBy {
      sub
    }
    objectId
    contentType
  }
  ${S}
  ${T}
`,_=h.Ps`
  fragment DetailComment on Comment {
    user {
      sub
    }
    parent {
      id
    }
    descendents {
      ...Descendent
    }
    id
    resolved
    resolvedBy {
      sub
    }
    createdAt
    children {
      ...SubthreadComment
    }
    mentions {
      sub
    }
    objectId
    contentType
  }
  ${S}
  ${T}
`,A=h.Ps`
  fragment ConditionEvent on ConditionEvent {
    id
    source
    createdAt
    value
    state
  }
`,M=h.Ps`
  fragment ConditionSnapshot on ConditionSnapshot {
    id
    condition {
      id
      provision
    }
    status
    events {
      ...ConditionEvent
    }
  }
  ${A}
`,q=h.Ps`
  fragment ListConditionSnapshot on ConditionSnapshot {
    id
    condition {
      id
      provision
    }
  }
`,U=h.Ps`
  fragment Widget on Widget {
    kind
    query
    hook
    ward
    min
    placeholder
    max
    choices {
      value
      label
    }
    asParagraph
  }
`,H=h.Ps`
  fragment ReturnWidget on ReturnWidget {
    kind
    query
    choices {
      value
      label
    }
  }
`,B=h.Ps`
  fragment PortChild on PortChild {
    identifier
    kind
    scope
    nullable
    assignWidget {
      ...Widget
    }
    returnWidget {
      ...ReturnWidget
    }
    child {
      scope
      identifier
      kind
      nullable
      assignWidget {
        ...Widget
      }
      returnWidget {
        ...ReturnWidget
      }
      child {
        identifier
        scope
        kind
        nullable
        assignWidget {
          ...Widget
        }
        returnWidget {
          ...ReturnWidget
        }
      }
    }
  }
  ${U}
  ${H}
`,G=h.Ps`
  fragment Port on Port {
    key
    label
    identifier
    scope
    kind
    description
    assignWidget {
      ...Widget
    }
    returnWidget {
      ...ReturnWidget
    }
    child {
      ...PortChild
    }
    nullable
  }
  ${U}
  ${H}
  ${B}
`,j=h.Ps`
  fragment FlowNodeCommons on FlowNodeCommons {
    instream {
      ...Port
    }
    outstream {
      ...Port
    }
    constream {
      ...Port
    }
    constants
  }
  ${G}
`,z=h.Ps`
  fragment RetriableNode on RetriableNode {
    maxRetries
    retryDelay
  }
`,K=h.Ps`
  fragment ArkitektNode on ArkitektNode {
    ...FlowNodeCommons
    ...RetriableNode
    __typename
    name
    description
    hash
    kind
    defaults
    mapStrategy
    allowLocal
    binds {
      clients
      templates
    }
    assignTimeout
    yieldTimeout
    reserveTimeout
    maxRetries
  }
  ${j}
  ${z}
`,V=h.Ps`
  fragment ReactiveNode on ReactiveNode {
    ...FlowNodeCommons
    __typename
    implementation
    defaults
  }
  ${j}
`,X=h.Ps`
  fragment ArgNode on ArgNode {
    ...FlowNodeCommons
    __typename
  }
  ${j}
`,Z=h.Ps`
  fragment KwargNode on KwargNode {
    ...FlowNodeCommons
    __typename
  }
  ${j}
`,Y=h.Ps`
  fragment ReturnNode on ReturnNode {
    ...FlowNodeCommons
    __typename
  }
  ${j}
`,J=h.Ps`
  fragment LocalNode on LocalNode {
    ...FlowNodeCommons
    ...RetriableNode
    __typename
    name
    description
    interface
    hash
    kind
    defaults
    mapStrategy
    allowLocal
    assignTimeout
    yieldTimeout
    maxRetries
  }
  ${j}
  ${z}
`,Q=h.Ps`
  fragment GraphNode on GraphNode {
    ...FlowNodeCommons
    __typename
  }
  ${j}
`,ee=h.Ps`
  fragment FlowNode on FlowNode {
    id
    position {
      x
      y
    }
    typename
    parentNode
    ...ArkitektNode
    ...ReactiveNode
    ...ArgNode
    ...KwargNode
    ...ReturnNode
    ...LocalNode
    ...GraphNode
  }
  ${K}
  ${V}
  ${X}
  ${Z}
  ${Y}
  ${J}
  ${Q}
`,te=h.Ps`
  fragment StreamItemChild on StreamItemChild {
    kind
    identifier
    scope
    nullable
    child {
      scope
      kind
      nullable
      identifier
    }
  }
`,ne=h.Ps`
  fragment StreamItem on StreamItem {
    key
    kind
    identifier
    scope
    nullable
    child {
      ...StreamItemChild
    }
  }
  ${te}
`,oe=h.Ps`
  fragment FlowEdgeCommons on FlowEdgeCommons {
    stream {
      ...StreamItem
    }
  }
  ${ne}
`,ie=h.Ps`
  fragment LabeledEdge on LabeledEdge {
    ...FlowEdgeCommons
    __typename
  }
  ${oe}
`,ae=h.Ps`
  fragment FancyEdge on FancyEdge {
    ...FlowEdgeCommons
    __typename
  }
  ${oe}
`,re=h.Ps`
  fragment FlowEdge on FlowEdge {
    id
    source
    sourceHandle
    target
    targetHandle
    typename
    ...LabeledEdge
    ...FancyEdge
  }
  ${ie}
  ${ae}
`,se=h.Ps`
  fragment Global on Global {
    toKeys
    port {
      ...Port
    }
  }
  ${G}
`,de=h.Ps`
  fragment Flow on Flow {
    __typename
    id
    graph {
      nodes {
        ...FlowNode
      }
      edges {
        ...FlowEdge
      }
      globals {
        ...Global
      }
      args {
        ...Port
      }
      returns {
        ...Port
      }
    }
    restrict
    name
    screenshot
    createdAt
    workspace {
      id
    }
  }
  ${ee}
  ${re}
  ${se}
  ${G}
`,le=h.Ps`
  fragment Condition on Condition {
    id
    snapshots {
      id
      status
      createdAt
    }
    provision
    createdAt
    latestSnapshot {
      createdAt
      events {
        ...ConditionEvent
      }
    }
    flow {
      ...Flow
    }
  }
  ${A}
  ${de}
`,me=h.Ps`
  fragment ListCondition on Condition {
    id
    provision
    createdAt
    flow {
      id
      name
      workspace {
        name
      }
    }
  }
`,ce=h.Ps`
  fragment ListFlow on Flow {
    id
    name
    screenshot
    createdAt
    workspace {
      id
    }
  }
`,ue=h.Ps`
  fragment ListWorkspace on Workspace {
    id
    name
    latestFlow {
      ...ListFlow
    }
  }
  ${ce}
`,pe=h.Ps`
  fragment Workspace on Workspace {
    id
    name
    latestFlow {
      ...Flow
    }
  }
  ${de}
`,$e=(h.Ps`
  fragment RunLog on RunLog {
    id
    node
    log
  }
`,h.Ps`
  fragment ReactiveTemplate on ReactiveTemplate {
    constream {
      ...Port
    }
    instream {
      ...Port
    }
    outstream {
      ...Port
    }
    name
    implementation
    description
    id
    constants {
      ...Port
    }
  }
  ${G}
`),ge=h.Ps`
  fragment RunEvent on RunEvent {
    id
    source
    handle
    type
    createdAt
    value
    t
    causedBy
  }
`,fe=h.Ps`
  fragment Snapshot on Snapshot {
    id
    run {
      id
      assignation
    }
    status
    events {
      ...RunEvent
    }
    t
  }
  ${ge}
`,he=h.Ps`
  fragment ListSnapshot on Snapshot {
    id
    run {
      id
      assignation
    }
    t
  }
`,Ee=h.Ps`
  fragment Run on Run {
    id
    status
    assignation
    snapshots {
      id
      status
      t
      createdAt
    }
    createdAt
    latestSnapshot {
      createdAt
      events {
        ...RunEvent
      }
      t
    }
    flow {
      ...Flow
    }
  }
  ${ge}
  ${de}
`,ve=h.Ps`
  fragment ExportRun on Run {
    id
    status
    assignation
    snapshots {
      id
      status
      t
      createdAt
    }
    createdAt
    events {
      ...RunEvent
    }
    flow {
      ...Flow
    }
  }
  ${ge}
  ${de}
`,ye=h.Ps`
  fragment ListRun on Run {
    id
    status
    assignation
    createdAt
    flow {
      id
      name
      workspace {
        name
      }
    }
  }
`;h.Ps`
  mutation CreateComment(
    $id: ID!
    $model: CommentableModels!
    $descendents: [DescendendInput]!
    $parent: ID
  ) {
    createComment(
      object: $id
      type: $model
      descendents: $descendents
      parent: $parent
    ) {
      ...ListComment
    }
  }
  ${W}
`;h.Ps`
  mutation ReplyTo($descendents: [DescendendInput]!, $parent: ID!) {
    replyTo(descendents: $descendents, parent: $parent) {
      ...ListComment
    }
  }
  ${W}
`;h.Ps`
  mutation ResolveComment($id: ID!) {
    resolveComment(id: $id) {
      ...ListComment
    }
  }
  ${W}
`;h.Ps`
  mutation DeleteCondition($id: ID!) {
    deleteCondition(id: $id) {
      id
    }
  }
`;h.Ps`
  mutation pinCondition($id: ID!, $pin: Boolean!) {
    pinCondition(id: $id, pin: $pin) {
      id
      pinnedBy {
        id
        email
      }
      pinned
    }
  }
`;h.Ps`
  mutation UpdateFlow($id: ID!, $graph: GraphInput!, $screenshot: ImageFile) {
    updateworkspace(id: $id, graph: $graph, screenshot: $screenshot) {
      ...Workspace
    }
  }
  ${pe}
`;h.Ps`
  mutation DeleteFlow($id: ID!) {
    deleteFlow(id: $id) {
      id
    }
  }
`;h.Ps`
  mutation CreateVanillaDiagram($name: String, $restrict: [String]) {
    drawvanilla(name: $name, restrict: $restrict) {
      ...Workspace
    }
  }
  ${pe}
`;h.Ps`
  mutation ImportFlow($name: String, $graph: GraphInput!) {
    importflow(name: $name, graph: $graph) {
      ...Workspace
    }
  }
  ${pe}
`;h.Ps`
  mutation pinFlow($id: ID!, $pin: Boolean!) {
    pinFlow(id: $id, pin: $pin) {
      id
      pinnedBy {
        id
        email
      }
      pinned
    }
  }
`;h.Ps`
  mutation DeleteSnapshot($id: ID!) {
    deleteSnapshot(id: $id) {
      id
    }
  }
`;h.Ps`
  mutation DeleteRun($id: ID!) {
    deleteRun(id: $id) {
      id
    }
  }
`;h.Ps`
  mutation PinRun($id: ID!, $pin: Boolean!) {
    pinRun(id: $id, pin: $pin) {
      id
      pinnedBy {
        id
        email
      }
      pinned
    }
  }
`;h.Ps`
  mutation DeleteWorkspace($id: ID!) {
    deleteWorkspace(id: $id) {
      id
    }
  }
`;h.Ps`
  mutation PinWorkspace($id: ID!, $pin: Boolean!) {
    pinWorkspace(id: $id, pin: $pin) {
      id
      pinnedBy {
        id
        email
      }
      pinned
    }
  }
`;h.Ps`
  query CommentsFor($id: ID!, $model: CommentableModels!) {
    commentsfor(model: $model, id: $id) {
      ...ListComment
    }
  }
  ${W}
`;h.Ps`
  query MyMentions {
    mymentions {
      ...MentionComment
    }
  }
  ${O}
`;h.Ps`
  query DetailComment($id: ID!) {
    comment(id: $id) {
      ...DetailComment
    }
  }
  ${_}
`;h.Ps`
  query ConditionSnapshots {
    conditionSnapshots {
      ...ListConditionSnapshot
    }
  }
  ${q}
`;h.Ps`
  query DetailConditionSnapshot($id: ID!) {
    conditionSnapshot(id: $id) {
      ...ConditionSnapshot
    }
  }
  ${M}
`;h.Ps`
  query Conditions {
    conditions {
      ...ListCondition
    }
  }
  ${me}
`;h.Ps`
  query MyConditions(
    $limit: Int
    $offset: Int
    $order: String
    $createdDay: DateTime
  ) {
    myconditions(
      limit: $limit
      offset: $offset
      order: $order
      createdDay: $createdDay
    ) {
      ...ListCondition
    }
  }
  ${me}
`;h.Ps`
  query DetailCondition($id: ID, $provision: ID) {
    condition(id: $id, provision: $provision) {
      ...Condition
    }
  }
  ${le}
`;h.Ps`
  query ConditionEventsBetween($id: ID!, $min: DateTime, $max: DateTime) {
    conditionEventsBetween(condition: $id, min: $min, max: $max) {
      ...ConditionEvent
    }
  }
  ${A}
`;h.Ps`
  query Flow($id: ID) {
    flow(id: $id) {
      ...Flow
    }
  }
  ${de}
`;h.Ps`
  query Workspace($id: ID!) {
    workspace(id: $id) {
      ...Workspace
    }
  }
  ${pe}
`;h.Ps`
  query MyWorkspaces(
    $limit: Int
    $offset: Int
    $order: String
    $createdDay: DateTime
  ) {
    myworkspaces(
      limit: $limit
      offset: $offset
      order: $order
      createdDay: $createdDay
    ) {
      ...ListWorkspace
    }
  }
  ${ue}
`;h.Ps`
  query PinnedWorkspaces(
    $limit: Int
    $offset: Int
    $order: String
    $createdDay: DateTime
  ) {
    workspaces(
      limit: $limit
      offset: $offset
      order: $order
      pinned: true
      createdDay: $createdDay
    ) {
      ...ListWorkspace
    }
  }
  ${ue}
`;h.Ps`
  query SearchWorkspaces($name: String) {
    workspaces(name: $name) {
      ...ListWorkspace
    }
  }
  ${ue}
`;h.Ps`
  query SearchFlows($name: String, $workspace: ID) {
    flows(name: $name, workspace: $workspace) {
      ...ListFlow
    }
  }
  ${ce}
`;h.Ps`
  query Snapshots {
    snapshots {
      ...ListSnapshot
    }
  }
  ${he}
`;h.Ps`
  query DetailSnapshot($id: ID!) {
    snapshot(id: $id) {
      ...Snapshot
    }
  }
  ${fe}
`;h.Ps`
  query Runs {
    runs {
      ...ListRun
    }
  }
  ${ye}
`;h.Ps`
  query MyRuns(
    $limit: Int
    $offset: Int
    $order: String
    $createdDay: DateTime
  ) {
    myruns(
      limit: $limit
      offset: $offset
      order: $order
      createdDay: $createdDay
    ) {
      ...ListRun
    }
  }
  ${ye}
`;h.Ps`
  query PinnedRuns(
    $limit: Int
    $offset: Int
    $order: String
    $createdDay: DateTime
  ) {
    runs(
      limit: $limit
      offset: $offset
      order: $order
      pinned: true
      createdDay: $createdDay
    ) {
      ...ListRun
    }
  }
  ${ye}
`;h.Ps`
  query DetailRun($id: ID, $assignation: ID) {
    run(id: $id, assignation: $assignation) {
      ...Run
    }
  }
  ${Ee}
`;h.Ps`
  query ExportRun($id: ID) {
    run(id: $id) {
      ...ExportRun
    }
  }
  ${ve}
`;h.Ps`
  query EventsBetween($id: ID!, $min: Int, $max: Int) {
    eventsBetween(run: $id, min: $min, max: $max) {
      ...RunEvent
    }
  }
  ${ge}
`;h.Ps`
  query FlussGlobalSearch($search: String) {
    workspaces(search: $search) {
      ...ListWorkspace
    }
  }
  ${ue}
`;h.Ps`
  query ReactiveTemplate(
    $id: ID
    $implementation: ReactiveImplementationModelInput
  ) {
    reactivetemplate(id: $id, implementation: $implementation) {
      ...ReactiveTemplate
    }
  }
  ${$e}
`;h.Ps`
  query DetailReactiveTemplate(
    $id: ID
    $implementation: ReactiveImplementationModelInput
  ) {
    reactivetemplate(id: $id, implementation: $implementation) {
      ...ReactiveTemplate
    }
  }
  ${$e}
`;h.Ps`
  query ReactiveTemplates($search: String) {
    reactivetemplates(name: $search) {
      ...ReactiveTemplate
    }
  }
  ${$e}
`;h.Ps`
  subscription ConditionEvents($id: ID!) {
    conditionevents(id: $id) {
      deleted
      create {
        ...ConditionEvent
      }
      update {
        ...ConditionEvent
      }
    }
  }
  ${A}
`;h.Ps`
  subscription Events($id: ID!) {
    events(id: $id) {
      deleted
      create {
        ...RunEvent
      }
      update {
        ...RunEvent
      }
    }
  }
  ${ge}
`;p((e=>{var t;let{data:{outstream:n,instream:o},id:a}=e;const{runState:r}=s(),[l,m]=(0,i.useState)(!1),[c,u]=(0,i.useState)(!0),[p,$]=(0,i.useState)();p||null==r||null==(t=r.events)||t.find((e=>(null==e?void 0:e.source)===a));return i.createElement(i.Fragment,null,i.createElement(g,{color:"blue",id:a},i.createElement("div",{className:"px-2 py-2"},i.createElement("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>u(!c)},"Inputs"),i.createElement("p",{className:"text-base"}))),n.map(((e,t)=>i.createElement(d.HH,{type:"source",position:d.Ly.Right,id:"return_"+t,style:{background:"#555"},"data-tip":e&&e.map((e=>null==e?void 0:e.key)).join(" | "),"data-for":"tooltip"+a}))))})),p((e=>{let{data:{constream:t},id:n}=e;const[o,a]=(0,i.useState)(!1),[r,s]=(0,i.useState)(!0);return i.createElement(i.Fragment,null,i.createElement(g,{color:"green",id:n},!r&&i.createElement(i.Fragment,null,i.createElement("div",{className:"flex"},null==t?void 0:t.map(((e,t)=>i.createElement(i.Fragment,null,i.createElement("div",{key:t,className:"flex-1 border m-1 py-0 px-1 rounded border-gray-200","data-tip":e&&e.map((e=>null==e?void 0:e.kind)).join("|"),"data-for":"tooltip_special"+n},i.createElement("div",{className:"flex justify-between"},i.createElement("button",{type:"button",onClick:()=>alert("implement")},i.createElement(f.yvY,null))))))))),i.createElement("div",{className:"px-2 py-2"},i.createElement("div",{className:"font-light text-xl w-full text-center custom-drag-handle cursor-pointer",onDoubleClick:()=>s(!r)},"Constants"," "),i.createElement("p",{className:"text-gray-700 text-base"}))))})),p((e=>{let{data:{outstream:t,instream:n},id:o}=e;const[a,r]=(0,i.useState)(!1),[s,l]=(0,i.useState)(!0);return i.createElement(i.Fragment,null,i.createElement(g,{color:"red",id:o},i.createElement("div",{className:"px-2 py-2"},i.createElement("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>l(!s)},"Outputs"),i.createElement("p",{className:"text-gray-700 text-base"},!s&&i.createElement("button",{type:"button",className:"rounded px-2 py-1 text-xs font-semibold border-gray-300",onClick:()=>r(!0)},"Add Documentation")))),n.map(((e,t)=>i.createElement(d.HH,{type:"target",position:d.Ly.Left,id:"arg_"+t,style:{background:"#555"},"data-tip":e&&e.map((e=>null==e?void 0:e.kind)).join(" | "),"data-for":"tooltip"+o}))))}));n(6180);n(2738);const we={title:"Worfklows",sidebar_label:"Workflows",sidebar_position:1},Pe=void 0,Ce={unversionedId:"features/workflows",id:"features/workflows",title:"Worfklows",description:"Workflows are a core feature of the arkitekt platform",source:"@site/docs/features/workflows.mdx",sourceDirName:"features",slug:"/features/workflows",permalink:"/doks/docs/features/workflows",draft:!1,editUrl:"https://github.com/jhnnsrs/doks/edit/master/docs/features/workflows.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Worfklows",sidebar_label:"Workflows",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Live Queries",permalink:"/doks/docs/features/live_queries"}},ke={},Ne=[],De={toc:Ne};function Fe(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},De,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Workflows are a core feature of the arkitekt platform"))}Fe.isMDXComponent=!0}}]);