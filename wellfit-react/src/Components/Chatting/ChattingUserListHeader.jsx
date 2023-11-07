import React from 'react';
import MainHeader from '../common/Header/MainHeader';

export default function ChattingUserListHeader({ isModal, onModalClick }) {
  return <MainHeader isModal={isModal} onModalClick={onModalClick} />;
}
