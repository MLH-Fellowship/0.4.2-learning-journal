/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type JournalPost_journal$ref: FragmentReference;
declare export opaque type JournalPost_journal$fragmentType: JournalPost_journal$ref;
export type JournalPost_journal = {|
  +id: any,
  +title: string,
  +description: string,
  +date_created: ?any,
  +$refType: JournalPost_journal$ref,
|};
export type JournalPost_journal$data = JournalPost_journal;
export type JournalPost_journal$key = {
  +$data?: JournalPost_journal$data,
  +$fragmentRefs: JournalPost_journal$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JournalPost_journal",
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "date_created",
      "storageKey": null
    }
  ],
  "type": "journal"
};
// prettier-ignore
(node/*: any*/).hash = '3a0ef53680b16c780060e9669dc435b0';

module.exports = node;
