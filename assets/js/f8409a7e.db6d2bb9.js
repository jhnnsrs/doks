"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[3206],{1067:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>Xe,contentTitle:()=>Ke,default:()=>Je,frontMatter:()=>Be,metadata:()=>Ve,toc:()=>ze});var o=n(7462),a=n(7294),i=n(3905);const r=e=>{let{children:t,onClick:n}=e;return a.createElement("a",{onClick:n,className:"bg-primary-300 rounded px-3 py-1 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white "},t)};var l=n(7838);const s=a.createContext({setRunState:()=>{console.error("WE ARE LACKING AN ENGINE")}}),d=()=>(0,a.useContext)(s),m={COMPLETE:"rgb(187, 247, 208)",NEXT:"rgb(30 58 138)",ERROR:"#F00",UNKNOWN:"#FFF"},c={COMPLETE:"rgb(187, 247, 208)",NEXT:"rgb(100 100 228)",ERROR:"#F00",UNKNOWN:"#FFF"},u=e=>{var t,n;const{runState:o,run:i}=d(),r=null==o||null==(t=o.events)?void 0:t.find((t=>(null==t?void 0:t.source)===e.source)),s=(e.target,null==o||null==(n=o.events)?void 0:n.sort(((e,t)=>((null==t?void 0:t.t)||0)-((null==e?void 0:e.t)||0))).at(0));let u=r?m[r.type]:"white";u=r&&(null==r?void 0:r.id)==(null==s?void 0:s.id)?c[r.type]:u;const{id:p,sourcePosition:g,targetPosition:h,sourceX:f,sourceY:E,targetX:v,targetY:y,style:w,markerStart:k,markerEnd:C,data:N}=e,[b,P,x]=(0,l.OW)({sourcePosition:g,targetPosition:h,sourceX:f,sourceY:E,targetX:v,targetY:y});return a.createElement(a.Fragment,null,a.createElement("path",{id:p,style:{...w,stroke:u,strokeWidth:(null==r?void 0:r.id)==(null==s?void 0:s.id)?5:1},className:"react-flow__edge-path transition-colors duration-300 "+((null==r?void 0:r.id)==(null==s?void 0:s.id)?"animate-pulse  ":""),d:b}),a.createElement("text",null,a.createElement("textPath",{href:`#${p}`,style:{fontSize:"13px",fill:"white"},startOffset:"50%",textAnchor:"middle",className:"group"})),a.createElement(l.XQ,null,a.createElement("div",{style:{position:"absolute",transform:`translate(-50%, -50%) translate(${P}px,${x}px)`,pointerEvents:"all"},className:((null==r?void 0:r.id)==(null==s?void 0:s.id)?"opacity-100":"opacity-0")+" transition-all duration-500 flex flex-row group m-auto hover:bg-gray-500 bg-gray-800 border-[#555] border rounded-lg shadow-lg p-1 cursor-pointer select-none text-gray-400 left[-75px] hover:text-gray-200 "})))};var p=n(1706);const g=a.createContext({isExpanded:!1,isSelected:!1,isHovered:!1,toggleExpanded:()=>{},width:200,height:70}),h=()=>(0,a.useContext)(g),f=e=>{let{id:t,children:n,expandedHeight:o=200,expandedWidth:i=400,collapsedWidth:r=170,collapsedHeight:l=70}=e;const[s,d]=(0,a.useState)({isExpanded:!1,isSelected:!1,isHovered:!1,width:r,height:l});return a.createElement(p.Resizable,{key:t,height:s.height,width:s.width,onResize:(e,t)=>{let{size:n,handle:o}=t;d((e=>({...e,width:n.width,height:n.height,isExpanded:n.height>200&&n.width>200}))),e.stopPropagation()},resizeHandles:["se"],handleSize:[40,40]},a.createElement(g.Provider,{value:{...s,toggleExpanded:()=>{d((e=>({...e,isExpanded:!e.isExpanded,width:e.isExpanded?r:i,height:e.isExpanded?l:o})))}}},a.createElement("div",{style:{width:s.width+"px",height:s.height+"px"},className:"flex flex-col"},n)))},E=e=>t=>a.createElement(f,{id:t.id},a.createElement(e,t)),v={ERROR:"border-red-900 dark:border-red-900 dark:shadow--200/10 animate-pulse dark:bg-red-800",NEXT:"border-blue-900 dark:border-blue-900 dark:shadow-blue-200/10",COMPLETE:"border-green-900 dark:border-green-900 dark:shadow-green-200/10 dark:bg-slate-800 opacity-0.8"},y=e=>{var t;let{children:n,id:o,color:i="pink"}=e;const{runState:r}=d(),{isExpanded:l}=h();let s=null==r||null==(t=r.events)?void 0:t.find((e=>(null==e?void 0:e.source)===o)),m=s?v[s.type]:"";return a.createElement(a.Fragment,null,a.createElement("div",{className:"px-2 py-2 z-50 shadow-xl rounded-md bg-gray-800 text-white border border-1 flex-grow flex flex-col h-full w-full transition-colors ease-in-out delay-150 "+m},n))},w=E((e=>{var t;let{data:n,id:o}=e;const{runState:i}=d(),{isExpanded:r,toggleExpanded:s}=h(),[m,c]=(0,a.useState)(),u=m||(null==i||null==(t=i.events)?void 0:t.find((e=>(null==e?void 0:e.source)===o)));n.kind;return a.createElement(y,{id:o},n.instream.map(((e,t)=>a.createElement(l.HH,{type:"target",position:l.Ly.Left,id:"arg_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"},"data-tip":e&&e.length>0?e.map((e=>`${null==e?void 0:e.kind} ${null==e?void 0:e.key}`)).join("|"):"Event","data-for":"tooltip"+o}))),n.outstream.map(((e,t)=>a.createElement(l.HH,{type:"source",position:l.Ly.Right,id:"return_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"},"data-tip":e&&e.length>0?e.map((e=>`${null==e?void 0:e.kind} ${null==e?void 0:e.key}`)).join("|"):"Event","data-for":"tooltip"+o}))),a.createElement("div",{className:"flex-initial font-light text-xl mb-1 custom-drag-handle cursor-pointer truncate",onDoubleClick:()=>s()},a.createElement("div",{className:"w-full flex flex-row justify-between"},null==n?void 0:n.name)),a.createElement("p",{className:"flex-initial text-xs font-extralight truncate"},null==n?void 0:n.name),r&&a.createElement(a.Fragment,null,a.createElement("div",{className:"px-2 py-2 flex-grow flex flex-col overflow-hidden"},JSON.stringify(null==u?void 0:u.value))))}));var k=n(3750);const C=E((e=>{var t;let{data:n,id:o}=e;const{runState:i}=d(),{isExpanded:r,toggleExpanded:s}=h(),[m,c]=(0,a.useState)(),u=m||(null==i||null==(t=i.events)?void 0:t.find((e=>(null==e?void 0:e.source)===o)));n.kind;return a.createElement(y,{id:o},n.instream.map(((e,t)=>a.createElement(l.HH,{type:"target",position:l.Ly.Left,id:"arg_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"},"data-tip":e&&e.length>0?e.map((e=>`${null==e?void 0:e.kind} ${null==e?void 0:e.key}`)).join("|"):"Event","data-for":"tooltip"+o}))),n.outstream.map(((e,t)=>a.createElement(l.HH,{type:"source",position:l.Ly.Right,id:"return_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"},"data-tip":e&&e.length>0?e.map((e=>`${null==e?void 0:e.kind} ${null==e?void 0:e.key}`)).join("|"):"Event","data-for":"tooltip"+o}))),a.createElement("div",{className:"flex-initial font-light text-xl mb-1 custom-drag-handle cursor-pointer truncate",onDoubleClick:()=>s()},a.createElement("div",{className:"w-full flex flex-row justify-between"},n.name," ",a.createElement("button",{type:"button",className:"text-md font-light",onClick:()=>c(null==m?u:void 0),title:"Toggle freeze","aria-details":"Toggles freezing the node at the current event"},null==m?a.createElement(k.xO1,null):a.createElement(k.cuI,null)))),a.createElement("p",{className:"flex-initial text-xs font-extralight truncate"},null==n?void 0:n.hash,null==u?void 0:u.value),r&&a.createElement(a.Fragment,null,a.createElement("div",{className:"px-2 py-2 flex-grow flex flex-col overflow-hidden"},u.value)))}));var N=n(1230);let b,P,x,I,S,L,D,R,F;!function(e){e.FlowCondition="FLOW_CONDITION",e.FlowConditionevent="FLOW_CONDITIONEVENT",e.FlowConditionsnapshot="FLOW_CONDITIONSNAPSHOT",e.FlowFlow="FLOW_FLOW",e.FlowReactivetemplate="FLOW_REACTIVETEMPLATE",e.FlowRun="FLOW_RUN",e.FlowRunevent="FLOW_RUNEVENT",e.FlowRunlog="FLOW_RUNLOG",e.FlowSnapshot="FLOW_SNAPSHOT",e.FlowWorkspace="FLOW_WORKSPACE"}(b||(b={})),function(e){e.Active="ACTIVE",e.Inactive="INACTIVE"}(P||(P={})),function(e){e.Complete="COMPLETE",e.Error="ERROR",e.Next="NEXT",e.Unknown="UNKNOWN"}(x||(x={})),function(e){e.AsCompleted="AS_COMPLETED",e.Map="MAP",e.Ordered="ORDERED"}(I||(I={})),function(e){e.Add="ADD",e.All="ALL",e.And="AND",e.BufferComplete="BUFFER_COMPLETE",e.BufferUntil="BUFFER_UNTIL",e.Chunk="CHUNK",e.Combinelatest="COMBINELATEST",e.Divide="DIVIDE",e.Ensure="ENSURE",e.Foreach="FOREACH",e.Gate="GATE",e.If="IF",e.Modulo="MODULO",e.Multiply="MULTIPLY",e.Omit="OMIT",e.Power="POWER",e.Prefix="PREFIX",e.Split="SPLIT",e.Subtract="SUBTRACT",e.Suffix="SUFFIX",e.ToList="TO_LIST",e.Withlatest="WITHLATEST",e.Zip="ZIP"}(S||(S={})),function(e){e.Complete="COMPLETE",e.Error="ERROR",e.Next="NEXT",e.Unknown="UNKNOWN"}(L||(L={})),function(e){e.Global="GLOBAL",e.Local="LOCAL"}(D||(D={})),function(e){e.FlowCondition="FLOW_CONDITION",e.FlowConditionevent="FLOW_CONDITIONEVENT",e.FlowConditionsnapshot="FLOW_CONDITIONSNAPSHOT",e.FlowFlow="FLOW_FLOW",e.FlowReactivetemplate="FLOW_REACTIVETEMPLATE",e.FlowRun="FLOW_RUN",e.FlowRunevent="FLOW_RUNEVENT",e.FlowRunlog="FLOW_RUNLOG",e.FlowSnapshot="FLOW_SNAPSHOT",e.FlowWorkspace="FLOW_WORKSPACE"}(R||(R={})),function(e){e.Bool="BOOL",e.Dict="DICT",e.Enum="ENUM",e.Float="FLOAT",e.Int="INT",e.List="LIST",e.String="STRING",e.Structure="STRUCTURE",e.Unset="UNSET"}(F||(F={}));const $=N.Ps`
  fragment Leaf on Leaf {
    typename: __typename
    bold
    italic
    code
    text
  }
`,W=(N.Ps`
  fragment LevelDownDescendent on Descendent {
    typename: __typename
    ...Leaf
  }
  ${$}
`,N.Ps`
  fragment LevelDownParagraph on ParagraphDescendent {
    size
    untypedChildren
  }
`),T=N.Ps`
  fragment LevelDownMention on MentionDescendent {
    user {
      sub
    }
  }
`,A=N.Ps`
  fragment Node on CommentNode {
    typename: __typename
    children {
      typename: __typename
      ...Leaf
      ...LevelDownParagraph
      ...LevelDownMention
    }
  }
  ${$}
  ${W}
  ${T}
`,O=N.Ps`
  fragment Mention on MentionDescendent {
    user {
      sub
    }
    ...Node
  }
  ${A}
`,q=N.Ps`
  fragment Paragraph on ParagraphDescendent {
    size
    ...Node
  }
  ${A}
`,U=N.Ps`
  fragment Descendent on Descendent {
    typename: __typename
    ...Mention
    ...Paragraph
    ...Leaf
  }
  ${O}
  ${q}
  ${$}
`,Q=N.Ps`
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
  ${U}
`,M=N.Ps`
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
  ${U}
  ${Q}
`,H=N.Ps`
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
  ${U}
  ${Q}
`,j=N.Ps`
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
  ${U}
  ${Q}
`,B=N.Ps`
  fragment ConditionEvent on ConditionEvent {
    id
    source
    createdAt
    value
    state
  }
`,K=N.Ps`
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
  ${B}
`,V=N.Ps`
  fragment ListConditionSnapshot on ConditionSnapshot {
    id
    condition {
      id
      provision
    }
  }
`,X=N.Ps`
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
`,z=N.Ps`
  fragment ReturnWidget on ReturnWidget {
    kind
    query
    choices {
      value
      label
    }
  }
`,G=N.Ps`
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
  ${X}
  ${z}
`,J=N.Ps`
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
  ${X}
  ${z}
  ${G}
`,Y=N.Ps`
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
  ${J}
`,Z=N.Ps`
  fragment RetriableNode on RetriableNode {
    maxRetries
    retryDelay
  }
`,_=N.Ps`
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
  ${Y}
  ${Z}
`,ee=N.Ps`
  fragment ReactiveNode on ReactiveNode {
    ...FlowNodeCommons
    __typename
    implementation
    defaults
  }
  ${Y}
`,te=N.Ps`
  fragment ArgNode on ArgNode {
    ...FlowNodeCommons
    __typename
  }
  ${Y}
`,ne=N.Ps`
  fragment KwargNode on KwargNode {
    ...FlowNodeCommons
    __typename
  }
  ${Y}
`,oe=N.Ps`
  fragment ReturnNode on ReturnNode {
    ...FlowNodeCommons
    __typename
  }
  ${Y}
`,ae=N.Ps`
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
  ${Y}
  ${Z}
`,ie=N.Ps`
  fragment GraphNode on GraphNode {
    ...FlowNodeCommons
    __typename
  }
  ${Y}
`,re=N.Ps`
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
  ${_}
  ${ee}
  ${te}
  ${ne}
  ${oe}
  ${ae}
  ${ie}
`,le=N.Ps`
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
`,se=N.Ps`
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
  ${le}
`,de=N.Ps`
  fragment FlowEdgeCommons on FlowEdgeCommons {
    stream {
      ...StreamItem
    }
  }
  ${se}
`,me=N.Ps`
  fragment LabeledEdge on LabeledEdge {
    ...FlowEdgeCommons
    __typename
  }
  ${de}
`,ce=N.Ps`
  fragment FancyEdge on FancyEdge {
    ...FlowEdgeCommons
    __typename
  }
  ${de}
`,ue=N.Ps`
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
  ${me}
  ${ce}
`,pe=N.Ps`
  fragment Global on Global {
    toKeys
    port {
      ...Port
    }
  }
  ${J}
`,ge=N.Ps`
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
  ${re}
  ${ue}
  ${pe}
  ${J}
`,he=N.Ps`
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
  ${B}
  ${ge}
`,fe=N.Ps`
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
`,Ee=N.Ps`
  fragment ListFlow on Flow {
    id
    name
    screenshot
    createdAt
    workspace {
      id
    }
  }
`,ve=N.Ps`
  fragment ListWorkspace on Workspace {
    id
    name
    latestFlow {
      ...ListFlow
    }
  }
  ${Ee}
`,ye=N.Ps`
  fragment Workspace on Workspace {
    id
    name
    latestFlow {
      ...Flow
    }
  }
  ${ge}
`,we=(N.Ps`
  fragment RunLog on RunLog {
    id
    node
    log
  }
`,N.Ps`
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
  ${J}
`),ke=N.Ps`
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
`,Ce=N.Ps`
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
  ${ke}
`,Ne=N.Ps`
  fragment ListSnapshot on Snapshot {
    id
    run {
      id
      assignation
    }
    t
  }
`,be=N.Ps`
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
  ${ke}
  ${ge}
`,Pe=N.Ps`
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
  ${ke}
  ${ge}
`,xe=N.Ps`
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
`;N.Ps`
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
  ${M}
`;N.Ps`
  mutation ReplyTo($descendents: [DescendendInput]!, $parent: ID!) {
    replyTo(descendents: $descendents, parent: $parent) {
      ...ListComment
    }
  }
  ${M}
`;N.Ps`
  mutation ResolveComment($id: ID!) {
    resolveComment(id: $id) {
      ...ListComment
    }
  }
  ${M}
`;N.Ps`
  mutation DeleteCondition($id: ID!) {
    deleteCondition(id: $id) {
      id
    }
  }
`;N.Ps`
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
`;N.Ps`
  mutation UpdateFlow($id: ID!, $graph: GraphInput!, $screenshot: ImageFile) {
    updateworkspace(id: $id, graph: $graph, screenshot: $screenshot) {
      ...Workspace
    }
  }
  ${ye}
`;N.Ps`
  mutation DeleteFlow($id: ID!) {
    deleteFlow(id: $id) {
      id
    }
  }
`;N.Ps`
  mutation CreateVanillaDiagram($name: String, $restrict: [String]) {
    drawvanilla(name: $name, restrict: $restrict) {
      ...Workspace
    }
  }
  ${ye}
`;N.Ps`
  mutation ImportFlow($name: String, $graph: GraphInput!) {
    importflow(name: $name, graph: $graph) {
      ...Workspace
    }
  }
  ${ye}
`;N.Ps`
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
`;N.Ps`
  mutation DeleteSnapshot($id: ID!) {
    deleteSnapshot(id: $id) {
      id
    }
  }
`;N.Ps`
  mutation DeleteRun($id: ID!) {
    deleteRun(id: $id) {
      id
    }
  }
`;N.Ps`
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
`;N.Ps`
  mutation DeleteWorkspace($id: ID!) {
    deleteWorkspace(id: $id) {
      id
    }
  }
`;N.Ps`
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
`;N.Ps`
  query CommentsFor($id: ID!, $model: CommentableModels!) {
    commentsfor(model: $model, id: $id) {
      ...ListComment
    }
  }
  ${M}
`;N.Ps`
  query MyMentions {
    mymentions {
      ...MentionComment
    }
  }
  ${H}
`;N.Ps`
  query DetailComment($id: ID!) {
    comment(id: $id) {
      ...DetailComment
    }
  }
  ${j}
`;N.Ps`
  query ConditionSnapshots {
    conditionSnapshots {
      ...ListConditionSnapshot
    }
  }
  ${V}
`;N.Ps`
  query DetailConditionSnapshot($id: ID!) {
    conditionSnapshot(id: $id) {
      ...ConditionSnapshot
    }
  }
  ${K}
`;N.Ps`
  query Conditions {
    conditions {
      ...ListCondition
    }
  }
  ${fe}
`;N.Ps`
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
  ${fe}
`;N.Ps`
  query DetailCondition($id: ID, $provision: ID) {
    condition(id: $id, provision: $provision) {
      ...Condition
    }
  }
  ${he}
`;N.Ps`
  query ConditionEventsBetween($id: ID!, $min: DateTime, $max: DateTime) {
    conditionEventsBetween(condition: $id, min: $min, max: $max) {
      ...ConditionEvent
    }
  }
  ${B}
`;N.Ps`
  query Flow($id: ID) {
    flow(id: $id) {
      ...Flow
    }
  }
  ${ge}
`;N.Ps`
  query Workspace($id: ID!) {
    workspace(id: $id) {
      ...Workspace
    }
  }
  ${ye}
`;N.Ps`
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
  ${ve}
`;N.Ps`
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
  ${ve}
`;N.Ps`
  query SearchWorkspaces($name: String) {
    workspaces(name: $name) {
      ...ListWorkspace
    }
  }
  ${ve}
`;N.Ps`
  query SearchFlows($name: String, $workspace: ID) {
    flows(name: $name, workspace: $workspace) {
      ...ListFlow
    }
  }
  ${Ee}
`;N.Ps`
  query Snapshots {
    snapshots {
      ...ListSnapshot
    }
  }
  ${Ne}
`;N.Ps`
  query DetailSnapshot($id: ID!) {
    snapshot(id: $id) {
      ...Snapshot
    }
  }
  ${Ce}
`;N.Ps`
  query Runs {
    runs {
      ...ListRun
    }
  }
  ${xe}
`;N.Ps`
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
  ${xe}
`;N.Ps`
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
  ${xe}
`;N.Ps`
  query DetailRun($id: ID, $assignation: ID) {
    run(id: $id, assignation: $assignation) {
      ...Run
    }
  }
  ${be}
`;N.Ps`
  query ExportRun($id: ID) {
    run(id: $id) {
      ...ExportRun
    }
  }
  ${Pe}
`;N.Ps`
  query EventsBetween($id: ID!, $min: Int, $max: Int) {
    eventsBetween(run: $id, min: $min, max: $max) {
      ...RunEvent
    }
  }
  ${ke}
`;N.Ps`
  query FlussGlobalSearch($search: String) {
    workspaces(search: $search) {
      ...ListWorkspace
    }
  }
  ${ve}
`;N.Ps`
  query ReactiveTemplate(
    $id: ID
    $implementation: ReactiveImplementationModelInput
  ) {
    reactivetemplate(id: $id, implementation: $implementation) {
      ...ReactiveTemplate
    }
  }
  ${we}
`;N.Ps`
  query DetailReactiveTemplate(
    $id: ID
    $implementation: ReactiveImplementationModelInput
  ) {
    reactivetemplate(id: $id, implementation: $implementation) {
      ...ReactiveTemplate
    }
  }
  ${we}
`;N.Ps`
  query ReactiveTemplates($search: String) {
    reactivetemplates(name: $search) {
      ...ReactiveTemplate
    }
  }
  ${we}
`;N.Ps`
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
  ${B}
`;N.Ps`
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
  ${ke}
`;const Ie={ERROR:"rgb(255,0,0)",NEXT:"rgb(0,0,255)",COMPLETE:"rgb(0,255,0)"},Se=E((e=>{var t;let{data:{outstream:n,instream:o},id:i}=e;const{runState:r}=d(),[s,m]=(0,a.useState)(!1),[c,u]=(0,a.useState)(!0),[p,g]=(0,a.useState)();p||null==r||null==(t=r.events)||t.find((e=>(null==e?void 0:e.source)===i));return a.createElement(a.Fragment,null,a.createElement(y,{color:"blue",id:i},a.createElement("div",{className:"px-2 py-2"},a.createElement("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>u(!c)},"Inputs"),a.createElement("p",{className:"text-base"}))),n.map(((e,t)=>a.createElement(l.HH,{type:"source",position:l.Ly.Right,id:"return_"+t,style:{background:"#555"},"data-tip":e&&e.map((e=>null==e?void 0:e.key)).join(" | "),"data-for":"tooltip"+i}))))})),Le=E((e=>{let{data:{constream:t},id:n}=e;const[o,i]=(0,a.useState)(!1),[r,l]=(0,a.useState)(!0);return a.createElement(a.Fragment,null,a.createElement(y,{color:"green",id:n},!r&&a.createElement(a.Fragment,null,a.createElement("div",{className:"flex"},null==t?void 0:t.map(((e,t)=>a.createElement(a.Fragment,null,a.createElement("div",{key:t,className:"flex-1 border m-1 py-0 px-1 rounded border-gray-200","data-tip":e&&e.map((e=>null==e?void 0:e.kind)).join("|"),"data-for":"tooltip_special"+n},a.createElement("div",{className:"flex justify-between"},a.createElement("button",{type:"button",onClick:()=>alert("implement")},a.createElement(k.yvY,null))))))))),a.createElement("div",{className:"px-2 py-2"},a.createElement("div",{className:"font-light text-xl w-full text-center custom-drag-handle cursor-pointer",onDoubleClick:()=>l(!r)},"Constants"," "),a.createElement("p",{className:"text-gray-700 text-base"}))))})),De=E((e=>{let{data:{outstream:t,instream:n},id:o}=e;const[i,r]=(0,a.useState)(!1),[s,d]=(0,a.useState)(!0);return a.createElement(a.Fragment,null,a.createElement(y,{color:"red",id:o},a.createElement("div",{className:"px-2 py-2"},a.createElement("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>d(!s)},"Outputs"),a.createElement("p",{className:"text-gray-700 text-base"},!s&&a.createElement("button",{type:"button",className:"rounded px-2 py-1 text-xs font-semibold border-gray-300",onClick:()=>r(!0)},"Add Documentation")))),n.map(((e,t)=>a.createElement(l.HH,{type:"target",position:l.Ly.Left,id:"arg_"+t,style:{background:"#555"},"data-tip":e&&e.map((e=>null==e?void 0:e.kind)).join(" | "),"data-for":"tooltip"+o}))))}));function Re(e){return null!=e}n(9869);const Fe=e=>console.log("flow loaded:",e),$e=e=>{let{edgeTypes:t,nodeTypes:n,nodes:i,edges:r,children:s,...d}=e;return a.createElement(l.tV,null,a.createElement(l.x$,(0,o.Z)({nodes:i,edges:r,onInit:Fe,nodeTypes:n,edgeTypes:t,fitView:!0,attributionPosition:"top-right"},d),s))};var We=n(6893),Te=n(9352),Ae=n(3649),Oe=n(2738),qe=n.n(Oe);const Ue=e=>{let{run:t}=e;const{setRunState:n}=d(),[i,r]=(0,a.useState)(0),[l,s]=(0,a.useState)(!1),[m,c]=(0,a.useState)({min:0,max:10}),[u,p]=(0,a.useState)({min:0,max:100,marks:[0]}),g=t.events?t.events[0]:null,h=t.events?t.events[t.events.length-1]:null;return(0,a.useEffect)((()=>{var e;let o=null==(e=t.events)?void 0:e.reduce(((e,t)=>{if(t&&t.t<=i){let n=null==e?void 0:e.find((e=>e.source===(null==t?void 0:t.source)));return n?n.t<=t.t?e.map((e=>e.source===t.source?t:e)):e:[...e,t]}return e}),[]);console.log(o),n({t:i,events:o})}),[i]),a.createElement("div",{className:"flex flex-row"},a.createElement("div",{className:"flex-initial my-auto mr-4 dark:text-white cursor-pointer",onClick:()=>s(!l)},l?a.createElement(Te.vJm,{size:"1em"}):a.createElement(We.KCr,{size:"1em"})),a.createElement("div",{className:"flex-grow my-auto"},a.createElement(Ae.Z,{className:"horizontal-slider",thumbClassName:"example-thumb rounded text-white border-[5px] border border-gray-100 transition-all duration-300 ease-linear",markClassName:"example-thumb border border-indigo-700 bg-indigo-500 cursor-pointer rounded-xs ",trackClassName:"example-track bg-gray-700 cursor-pointer",onChange:e=>{r(e),s(!1)},value:i,step:1,renderThumb:(e,n)=>{var i,r;return a.createElement("div",(0,o.Z)({},e,{key:e.key,className:e.className+"group relative"}),a.createElement("div",{className:"absolute bottom-1 group-hover:block -translate-x-[50%] w-[10rem] p-2 text-center  rounded"},a.createElement(qe(),{relative:!0,relativeTo:new Date(null==h?void 0:h.createdAt),date:null==(i=t.events)||null==(r=i.find((e=>(null==e?void 0:e.t)===n.valueNow)))?void 0:r.createdAt})))},max:g.t,min:h.t})),a.createElement("div",{className:"flex-initial my-auto ml-4"},i,"/",g.t))},Qe={ArkitektNode:w,ReactiveNode:e=>{var t;let{data:{outstream:n,instream:o,constream:i,implementation:r},id:s}=e;const m=(0,l.Bn)(),{runState:c}=d(),u=null==c||null==(t=c.events)?void 0:t.find((e=>(null==e?void 0:e.source)===s)),p=u?Ie[u.type]:"var(--color-primary-300)";return(0,a.useEffect)((()=>{console.log("Update node internals",s,r),m(s)}),[n,o,i]),a.createElement(a.Fragment,null,a.createElement("div",{className:"custom-drag-handle"},r&&[S.Combinelatest,S.Withlatest,S.Zip].includes(r)&&a.createElement("svg",{height:"40",width:"40"},a.createElement("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:p}})),r&&[S.Split].includes(r)&&a.createElement("svg",{height:"40",width:"40"},a.createElement("polygon",{points:"0,20 40,40 40,0",style:{strokeWidth:1,stroke:"white",fill:p}})),r&&[S.Chunk,S.BufferComplete].includes(r)&&a.createElement("div",{className:"px-2 py-2  rounded-md bg-gray-800 text-green-200  border-green-500 shadow-green-500/50 border-green-200 shadow-green-200/10"},a.createElement("h1",null,r)),r&&[S.Ensure].includes(r)&&a.createElement("div",{className:"px-2 py-2 z-50 shadow-xl bg-white rounded-md dark:bg-gray-800 text-green-500 dark:text-green-200 text-black border w-full h-full border-green-500 shadow-green-500/50 dark:border-green-200 dark:shadow-green-200/10"},a.createElement("h1",null,"!")),r&&[S.Divide,S.Multiply,S.Modulo,S.Power,S.Subtract,S.Add,S.Prefix,S.Suffix].includes(r)&&a.createElement("div",{className:"px-2 py-2 z-50 shadow-xl bg-white rounded-md dark:bg-gray-800 text-green-500 dark:text-green-200 text-black border w-full h-full border-green-500 shadow-green-500/50 dark:border-green-200 dark:shadow-green-200/10"},a.createElement("h1",null,r)),r&&[S.ToList].includes(r)&&a.createElement("svg",{height:"40",width:"40"},a.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:p}}),a.createElement("text",null,r)),r&&[S.Gate].includes(r)&&a.createElement("svg",{height:"40",width:"40"},a.createElement("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:p}})),r&&[S.Omit].includes(r)&&a.createElement("svg",{height:"40",width:"40"},a.createElement("text",null,a.createElement("textPath",{style:{fill:"var(--color-primary-50)",fontSize:"13px"}},r)),a.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:p}})),r&&[S.If].includes(r)&&a.createElement("svg",{height:"40",width:"40"},a.createElement("text",null,a.createElement("textPath",{style:{fill:p,fontSize:"13px"}},"If")),a.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:p}})),r&&[S.And].includes(r)&&a.createElement("svg",{height:"40",width:"40"},a.createElement("text",null,a.createElement("textPath",{style:{fill:p,fontSize:"13px"}},"And")),a.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:p,fill:p}})),null==i?void 0:i.map(((e,t,n)=>a.createElement(l.HH,{type:"target",position:l.Ly.Bottom,id:`kwarg_${t}`,key:t,style:{background:"#555",marginTop:10,height:"1em"}}))),null==o?void 0:o.map(((e,t,n)=>a.createElement(l.HH,{key:t,type:"target",position:l.Ly.Left,id:`arg_${t}`,style:{top:100/n.length*t+45/n.length+"%",background:"#555",height:"1em"}}))),null==n?void 0:n.map(((e,t,n)=>a.createElement(l.HH,{key:t,type:"source",position:l.Ly.Right,id:`return_${t}`,style:{top:100/n.length*t+46/n.length+"%",background:"#555"}})))))},ArgNode:Se,ReturnNode:De,KwargNode:Le,LocalNode:C,GraphNode:()=>null},Me={LabeledEdge:u,FancyEdge:u},He=e=>{var t;let{run:n}=e;const[o,i]=(0,a.useState)({t:0}),[r,d]=(0,a.useState)(!1);console.log(n);const[m,c,u]=(0,l.Rr)([]),[p,g,h]=(0,l.ll)([]);(0,a.useEffect)((()=>{var e,t,o,a;c((e=>(null==e?void 0:e.map((e=>{if(e){const{id:t,position:n,__typename:o,...a}=e;return{type:o,id:t,position:n,data:{__typename:o,...a},dragHandle:".custom-drag-handle",parentNode:a.parentNode?a.parentNode:void 0}}})).filter(Re))||[])((null==n||null==(e=n.flow)||null==(t=e.graph)?void 0:t.nodes)||[])),g((e=>(null==e?void 0:e.map((e=>{if(e){const{id:t,source:n,sourceHandle:o,target:a,targetHandle:i,__typename:r,...l}=e;return{id:t,type:r,source:n,sourceHandle:o,target:a,targetHandle:i,data:{__typename:r,...l}}}})).filter(Re))||[])((null==n||null==(o=n.flow)||null==(a=o.graph)?void 0:a.edges)||[]))}),[null==n||null==(t=n.flow)?void 0:t.graph]);const[f,E]=(0,a.useState)(null);return a.createElement(s.Provider,{value:{flow:null==n?void 0:n.flow,runState:o,selectedNode:f,setRunState:i,run:n}},a.createElement("div",{className:"relative flex flex-grow flex-col"},a.createElement("div",{className:"absolute p-2 top-0 left-0"},n.flow.name),a.createElement("div",{className:"flex-grow p-2"},a.createElement($e,{nodes:m,edges:p,onNodesChange:u,onEdgesChange:h,elementsSelectable:!0,nodeTypes:Qe,edgeTypes:Me,onNodeClick:(e,t)=>E(t),onPaneClick:e=>E(null),fitView:!0,attributionPosition:"top-right"})),a.createElement("div",{className:"flex-initial py-1 px-3 bg-slate-800"},a.createElement(Ue,{run:n}))))},je=e=>{const[t,n]=(0,a.useState)(null);return(0,a.useEffect)((()=>{fetch(e.url).then((e=>e.json())).then((e=>{n(e.run)}))}),[e.url]),a.createElement(a.Fragment,null,t&&a.createElement("div",{className:"flex w-full h-[400px] flex-col border border-1 rounded border-gray-300 opverflow-hidden"},a.createElement(He,{run:t})))},Be={id:"intro",title:"Intro",sidebar_label:"Intro",slug:"/intro",sidebar_position:1},Ke=void 0,Ve={unversionedId:"intro",id:"intro",title:"Intro",description:"Good to know",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/doks/docs/intro",draft:!1,editUrl:"https://github.com/jhnnsrs/doks/edit/master/docs/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"intro",title:"Intro",sidebar_label:"Intro",slug:"/intro",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Design",permalink:"/doks/docs/category/design"}},Xe={},ze=[{value:"Good to know",id:"good-to-know",level:3},{value:"The Easy Way",id:"the-easy-way",level:3},{value:"The Hard Way",id:"the-hard-way",level:3},{value:"Build on the Shoulder of Giants",id:"build-on-the-shoulder-of-giants",level:3},{value:"What is a Platform",id:"what-is-a-platform",level:3}],Ge={toc:ze};function Je(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},Ge,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"good-to-know"},"Good to know"),(0,i.kt)("p",null,"Arkitekt was envisioned as a complete platform to streamline analysis processes in your lab environment. As such it has to encompass\na lot of different features that might be overkill for your specific needs. However as your needs might grow we would like you to\neasily integrate more of the advanced features in your environment. We therefore provide you with different configurations to choose\nfrom how to deploy the platform in your lab."),(0,i.kt)(je,{url:"/doks/runs/2832.json",mdxType:"DisplayRun"}),(0,i.kt)("h3",{id:"the-easy-way"},"The Easy Way"),(0,i.kt)("p",null,"Download the Configuration Software:"),(0,i.kt)(r,{mdxType:"DownloadButton"},"Download Jio"),(0,i.kt)("p",null,"It will guide you through the installation process and the deployment of the software package on your specific hardware. It will\nalso give you a rough estimate of the resources you will need for the installation."),(0,i.kt)("h3",{id:"the-hard-way"},"The Hard Way"),(0,i.kt)("p",null,"Arkitekt as a platform consists of many submodules (microservices) that have their own responsiblities and can be deployed from\na single computer to a complete kubernetes multi-node cluster on the cloud. In this preview we support a docker deployment through\ndocker-compose and provide different configurations depending if you have a multi docker machine. We also provide helm-charts for a kubernetes\ndeployment."),(0,i.kt)("h3",{id:"build-on-the-shoulder-of-giants"},"Build on the Shoulder of Giants"),(0,i.kt)("p",null,"Arkitekt stitches together a plethora of open-source projects and tries to make them accessible, here is just some of them"),(0,i.kt)("div",{className:"container"},(0,i.kt)("div",{className:"row"},(0,i.kt)("div",{className:"col col--2"},(0,i.kt)("img",{src:"https://python.doctor/images/django-python.png"})),(0,i.kt)("div",{className:"col col--2"},(0,i.kt)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"})),(0,i.kt)("div",{className:"col col--2"},(0,i.kt)("img",{src:"https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg"})),(0,i.kt)("div",{className:"col col--2"},(0,i.kt)("img",{src:"data:image/png;base64,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"})),(0,i.kt)("div",{className:"col col--1"},(0,i.kt)("img",{src:"https://dask.readthedocs.io/en/latest/_images/dask_horizontal.svg"})))),(0,i.kt)("h3",{id:"what-is-a-platform"},"What is a Platform"),(0,i.kt)("p",null,"We choose the term platform deliberatily to seperate it from the common term software. As Arkitekt"))}Je.isMDXComponent=!0}}]);