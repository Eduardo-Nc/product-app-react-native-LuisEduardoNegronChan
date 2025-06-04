import React, { useState } from 'react';
import { Text, View, Modal } from 'react-native';
import LottieView from 'lottie-react-native';

//Components
import styles from './styles';
import { ICONS } from '@Utils/constants';

const Loader = ({
  visible = false,
  setVisible,
  principalText = '',
  secondaryText = '',
}) => {
  return (
    <Modal
      style={{ flex: 1 }}
      transparent={true}
      statusBarTranslucent={true}
      visible={visible}
      onRequestClose={() => {
        setVisible(false);
      }}>
      <View style={styles.container}>
        <LottieView
          autoPlay
          loop
          source={ICONS.Loading}
          style={{ width: 320, height: 320 }}
        />
        {principalText && (
          <Text
            style={styles.principalText}
            testID="principalText"
            numberOfLines={1}
            adjustsFontSizeToFit={true}>
            {principalText}
          </Text>
        )}
        {secondaryText && (
          <Text
            style={styles.secondaryText}
            testID="secondaryText"
            numberOfLines={1}
            adjustsFontSizeToFit={true}>
            {secondaryText}
          </Text>
        )}
      </View>
    </Modal>
  );
};

export default Loader;
