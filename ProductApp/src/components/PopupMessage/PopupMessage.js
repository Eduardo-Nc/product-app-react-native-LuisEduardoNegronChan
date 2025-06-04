import { View, Text, TouchableOpacity, Modal, Image } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

//Components
import styles from './styles';
import { translate } from '@Languages/I18n';
import { ICONS } from '@Utils/constants';

const PopupMessage = ({
  isError = false,
  isVisible = false,
  setIsVisible,
  title = "",
  subtitle = "",
  action,
}) => {
  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="fade"
      onRequestClose={() => {
        action && action();
        setIsVisible(false);
      }}
      statusBarTranslucent={true}>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              action && action();
              setIsVisible(false);
            }}
            style={styles.closeContainer}>
            <Image style={styles.iconClose} source={ICONS.Close} />
          </TouchableOpacity>

          <View style={styles.iconContainer}>
            <LottieView
              autoPlay
              loop
              source={isError ? ICONS.Error : ICONS.Check}
              style={{ flex: 1 }}
            />
          </View>

          <View style={styles.textContainer}>
            <View style={styles.mainTitleSub}>
              <View style={styles.containerTitle}>
                {isError ? (
                  <Text style={styles.txtTitle} numberOfLines={2}>
                    {title ? title : translate('popupMessage.errorTitle')}
                  </Text>
                ) : (
                  <Text style={styles.txtTitle} numberOfLines={2}>
                    {title ? title : translate('popupMessage.acceptTitle')}
                  </Text>
                )}
              </View>

              <View style={styles.containerSubTitle}>
                {isError ? (
                  <Text style={styles.txtSubTitle}>
                    {subtitle
                      ? subtitle
                      : translate('popupMessage.errorSubTitle')}
                  </Text>
                ) : (
                  <Text
                    style={styles.txtSubTitle}
                    numberOfLines={3}
                    adjustsFontSizeToFit={true}>
                    {subtitle
                      ? subtitle
                      : translate('popupMessage.acceptSubTitle')}
                  </Text>
                )}
              </View>
            </View>

            <View style={styles.containerBtn}>
              <TouchableOpacity
                onPress={() => {
                  action && action();
                  setIsVisible(false);
                }}
                style={
                  isError
                    ? styles.containerAcceptBtnErr
                    : styles.containerAcceptBtnAcc
                }>
                <Text style={styles.txtBtn}>
                  {translate('popupMessage.btnAcceptMessage')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PopupMessage;
