/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type journal_insert_input = {|
  date_created?: ?any,
  description?: ?string,
  id?: ?any,
  likes?: ?number,
  title?: ?string,
|};
export type CreateJournalMutationVariables = {|
  input: journal_insert_input
|};
export type CreateJournalMutationResponse = {|
  +insert_journal_one: ?{|
    +id: any,
    +title: string,
    +description: string,
  |}
|};
export type CreateJournalMutation = {|
  variables: CreateJournalMutationVariables,
  response: CreateJournalMutationResponse,
|};
*/


/*
mutation CreateJournalMutation(
  $input: journal_insert_input!
) {
  insert_journal_one(object: $input) {
    id
    title
    description
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "journal_insert_input!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "object",
        "variableName": "input"
      }
    ],
    "concreteType": "journal",
    "kind": "LinkedField",
    "name": "insert_journal_one",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateJournalMutation",
    "selections": (v1/*: any*/),
    "type": "mutation_root"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateJournalMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "CreateJournalMutation",
    "operationKind": "mutation",
    "text": "mutation CreateJournalMutation(\n  $input: journal_insert_input!\n) {\n  insert_journal_one(object: $input) {\n    id\n    title\n    description\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ec49b6dfc103299255d05397f766653b';

module.exports = node;
