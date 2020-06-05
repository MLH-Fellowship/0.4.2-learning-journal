import * as React from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { createFragmentContainer, graphql } from "react-relay";

import JournalPost from "./JournalPost";

export default JournalList = ({journal}) => {
  return (
    <ScrollView style={styles.container}>
      {journal.map((post) => (
        <JournalPost journal={post} key={post.id} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 24,
    flex: 1,
  },
});

// export default createFragmentContainer(JournalList, {
//   journal: graphql`
//     fragment JournalPostList_journal on DemoJournal {
//       ...JournalPost_journal
//     }
//   `,
// });
