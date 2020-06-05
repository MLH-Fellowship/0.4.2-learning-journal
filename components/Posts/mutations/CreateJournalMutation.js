import { commitMutation, graphql } from 'react-relay'
import environment from '../../../api/Environment'

const mutation = graphql`
    mutation CreateJournalMutation ($input: journal_insert_input!) {
        insert_journal_one (object:$input){
            id
            title
            description
        }
    }
`
const today = new Date();
export default (title, description, callback) => {
    const variables = {
        input: {
            title,
            description,
            date_created: `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
        }
    }

    commitMutation (environment, {
        mutation,
        variables,
        onCompleted: () => {
            console.log('Success')
        },
        onError: err => console.error(err)
    })
}