import css from './Friend.module.css';
import PropTypes from 'prop-types';

const Friend = ({ name, avatar, isOnline, id }) => {
  const statusOnline = css.statusOnline;
  const statusOffline = css.statusOffline;

  const statusClass = isOnline ? statusOnline : statusOffline;
  return (
    <li className={css.friendItem} key={id}>
      <span className={statusClass}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default Friend;
