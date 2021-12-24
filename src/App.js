import styles from './App.module.css';

import Section from './components/Section/Section';
import Profile from './components/Profile/Profile/Profile';
import Statistics from './components/Statistics/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory/TransactionHistory';

import user from './components/Profile/user.json';
import data from './components/Statistics/data.json';
import friends from './components/FriendList/friends.json';
import transactions from './components/TransactionHistory/transactions.json';

function App() {
  return (
    <div className={styles.app}>
      <Section title="Homework 1">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <Section title="Homework 2">
        <Statistics title="Upload stats" stats={data} />
        {/* <Statistics stats={data} /> */}
      </Section>

      <Section title="Homework 3">
        <FriendList friendsData={friends} />
      </Section>

      <Section title="Homework 4">
        <TransactionHistory data={transactions} />
      </Section>
    </div>
  );
}

export default App;
