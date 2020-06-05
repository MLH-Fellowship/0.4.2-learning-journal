import { Environment, Network, RecordSource, Store } from "relay-runtime";

const store = new Store(new RecordSource());

const network = Network.create((operation, variables) => {
  return fetch(`https://learning-jurnal.herokuapp.com/v1/graphql`, {
    method: 'POST',
    // headers: {
    //   Authorization:`Bearer ${ACCESSTOKEN}`
    // },
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
