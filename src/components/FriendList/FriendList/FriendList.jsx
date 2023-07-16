import React from 'react';
import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
    return (
      <ul className={css.friend_list}>
        {friends.map((friend) => (
          <FriendListItem key={friend.id} {...friend} />
        ))}
      </ul>
    );
};

export default FriendList;

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired).isRequired
}
