/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type JournalPost_journal$ref = any;
export type JournalsQueryVariables = {||};
export type JournalsQueryResponse = {|
  +journal: $ReadOnlyArray<{|
    +id: any,
    +title: string,
    +description: string,
    +date_created: ?any,
    +$fragmentRefs: JournalPost_journal$ref,
  |}>
|};
export type JournalsQuery = {|
  variables: JournalsQueryVariables,
  response: JournalsQueryResponse,
|};
*/


/*
query JournalsQuery {
  journal(order_by: {date_created: desc_nulls_last}) {
    id
    title
    description
    date_created
    ...JournalPost_journal
  }
}

fragment JournalPost_journal on journal {
  id
  title
  description
  date_created
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "order_by",
    "value": {
      "date_created": "desc_nulls_last"
    }
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "date_created",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "JournalsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "journal",
        "kind": "LinkedField",
        "name": "journal",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "JournalPost_journal"
          }
        ],
        "storageKey": "journal(order_by:{\"date_created\":\"desc_nulls_last\"})"
      }
    ],
    "type": "query_root"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "JournalsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "journal",
        "kind": "LinkedField",
        "name": "journal",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": "journal(order_by:{\"date_created\":\"desc_nulls_last\"})"
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "JournalsQuery",
    "operationKind": "query",
    "text": "query JournalsQuery {\n  journal(order_by: {date_created: desc_nulls_last}) {\n    id\n    title\n    description\n    date_created\n    ...JournalPost_journal\n  }\n}\n\nfragment JournalPost_journal on journal {\n  id\n  title\n  description\n  date_created\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a9e30c5e9e5af5c3a16d3ca2d68009c3';

module.exports = node;
