import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../../../redux/configureStore';
import { removeComment } from '../../../../../../../redux/ducks/comments/commentsSlice';
import { updateCurrentPrayers } from '../../../../../../../redux/ducks/prayer/prayerSlice';
import {
  CloseBtnContainer,
  DotMenuContainer,
  DotOptionsContainer,
  DotStyle,
  EditStyle,
  StyledClose,
  StyledDelete,
  StyledMenu,
} from './styles';

type DotOptionsMenuProps = {
  id: number;
  setIsShowInput: React.Dispatch<React.SetStateAction<boolean>>;
  isShowInput: boolean;
};

const DotOptionsMenu: React.FC<DotOptionsMenuProps> = ({
  id,
  setIsShowInput,
  isShowInput,
}) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);

  return (
    <>
      <DotOptionsContainer>
        {!toggleMenu && (
          <TouchableOpacity
            onPress={() => {
              if (isShowInput) {
                return;
              }
              setToggleMenu(!toggleMenu);
            }}
            disabled={isShowInput}>
            {isShowInput ? (
              <EditStyle>&#9997;</EditStyle>
            ) : (
              <DotStyle>...</DotStyle>
            )}
          </TouchableOpacity>
        )}
      </DotOptionsContainer>
      {toggleMenu && (
        <DotMenuContainer
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}>
          <CloseBtnContainer>
            <View>
              <TouchableOpacity
                onPress={() => {
                  setToggleMenu(false);
                }}>
                <StyledClose>&#10150;</StyledClose>
              </TouchableOpacity>
            </View>
          </CloseBtnContainer>
          <TouchableOpacity
            onPress={() => {
              setIsShowInput(true);
              setToggleMenu(false);
            }}>
            <StyledMenu>Update</StyledMenu>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              dispatch(removeComment({ token, id }));
              dispatch(updateCurrentPrayers({ id }));
            }}>
            <StyledDelete>Delete</StyledDelete>
          </TouchableOpacity>
        </DotMenuContainer>
      )}
    </>
  );
};

export default DotOptionsMenu;
