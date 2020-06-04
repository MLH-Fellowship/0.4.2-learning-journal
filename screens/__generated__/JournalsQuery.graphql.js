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
  +demoJournals: $ReadOnlyArray<?{|
    +_id: ?any,
    +title: ?string,
    +description: ?string,
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
  demoJournals {
    _id
    title
    description
    ...JournalPost_journal
  }
}

fragment JournalPost_journal on DemoJournal {
  _id
  title
  description
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "_id",
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
        "concreteType": "DemoJournal",
        "kind": "LinkedField",
        "name": "demoJournals",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "JournalPost_journal"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
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
        "concreteType": "DemoJournal",
        "kind": "LinkedField",
        "name": "demoJournals",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/)
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
    "text": "query JournalsQuery {\n  demoJournals {\n    _id\n    title\n    description\n    ...JournalPost_journal\n  }\n}\n\nfragment JournalPost_journal on DemoJournal {\n  _id\n  title\n  description\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6099f75ed52f767d03b11115cfd5e147';

module.exports = node;
