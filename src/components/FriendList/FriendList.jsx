import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({friends}) => {
    return (
        <ul className={css.friend_list}>
            {friends.map(({avatar, name, isOnline,}) => (
                <li className={css.item}>
                    <span className={isOnline ? css.status_online : css.status_offline}></span>
                    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{name}</p>
                </li>
            ))}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired).isRequired
}
