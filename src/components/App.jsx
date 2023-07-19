import '../index.css';

import user from './user.json';
import userData from './data.json';
import friends from './friends.json';
import trans from './transactions.json';

import Profile from './Profile';
import Stat from './Stat';
import FriendList from './FriendList';
import TransactionHistory from './TransactionsHistory';

const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Stat data={userData} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory items={trans} />
    </div>
  );
};

export default App;
