import user from './user.json';
import userData from './data.json';
import friends from './friends.json';
import PropTypes from 'prop-types';
import '../index.css';

import Profile from './Profile';
import Stat from './Stat';
import FriendList from './FriendList';

const App = () => {
  console.log('username', user.username);
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
    </div>
  );
};

// App.propTypes = {
//   username: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
//   stats: PropTypes.shape({
//     followers: PropTypes.number.isRequired,
//     views: PropTypes.number.isRequired,
//     likes: PropTypes.number.isRequired,
//   }),

//   data: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired,
//     percentage: PropTypes.number.isRequired,
//   }),

//   friends: PropTypes.shape({
//     avatar: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     isOnline: PropTypes.bool.isRequired,
//     key: PropTypes.number.isRequired,
//   }),

//   // transactions: PropTypes.shape({
//   //   id: PropTypes.string.isRequired,
//   //   type: PropTypes.string.isRequired,
//   //   amount: PropTypes.bool.isRequired,
//   //   currency: PropTypes.number.isRequired,
//   // }),
// };

export default App;
