import { Environment, Network, RecordSource, Store } from "relay-runtime";

const store = new Store(new RecordSource());

const network = Network.create((operation, variables) => {
  return fetch(`https://stitch.mongodb.com/api/client/v2.0/app/learningjournal-kosdd/graphql`, {
    method: 'POST',
    headers: {
      Authorization:`Bearer ${ACCESSTOKEN}`
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then((response) => {
    return response.json();
  });
});

const environment = new Environment({
  network,
  store,
});

export default environment;
