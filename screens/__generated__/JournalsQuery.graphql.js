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
  journal {
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
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v3 = {
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
        "args": null,
        "concreteType": "journal",
        "kind": "LinkedField",
        "name": "journal",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "JournalPost_journal"
          }
        ],
        "storageKey": null
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
        "args": null,
        "concreteType": "journal",
        "kind": "LinkedField",
        "name": "journal",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "JournalsQuery",
    "operationKind": "query",
    "text": "query JournalsQuery {\n  journal {\n    id\n    title\n    description\n    date_created\n    ...JournalPost_journal\n  }\n}\n\nfragment JournalPost_journal on journal {\n  id\n  title\n  description\n  date_created\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '46d6fe45da829acf7f3ae2e28cf6f095';

module.exports = node;
