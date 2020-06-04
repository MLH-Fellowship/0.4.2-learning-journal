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
  +_id: ?any,
  +title: ?string,
  +description: ?string,
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
      "name": "_id",
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
  "type": "DemoJournal"
};
// prettier-ignore
(node/*: any*/).hash = '4eaf3457a039faecfdc632bd3687b484';

module.exports = node;
