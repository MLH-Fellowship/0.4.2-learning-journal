import { Environment, Network, RecordSource, Store } from "relay-runtime";

const ACCESSTOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTEyODkyMDUsImlhdCI6MTU5MTI4NzQwNCwiaXNzIjoiNWVkOTFlNmM3MWQ5MWYzZDBlN2E2YzM4Iiwic3RpdGNoX2RldklkIjoiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwIiwic3RpdGNoX2RvbWFpbklkIjoiNWVkNjU5YTI3MWQ5MWYzZDBlYWNmOWY2Iiwic3ViIjoiNWVkNzcwODg0OThlYmUxMzRlZWEyNGRlIiwidHlwIjoiYWNjZXNzIn0.MuZI3n3OeD9t5rmkCEX17tNValoLNxfD2dAmA_Rjybs"

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
