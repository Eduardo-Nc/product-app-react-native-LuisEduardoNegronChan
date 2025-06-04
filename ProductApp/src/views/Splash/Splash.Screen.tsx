import React from 'react';
import {
  View,
  SafeAreaView,
  ActivityIndicator,
  Text,
  StatusBar,
  Image,
} from 'react-native';

//Languages
import {translate} from '@Languages/I18n';

//Model
import useSplashModel from './Splash.Model';

//Styles
import {styles} from './Splash.Styles';

//Constants
import {COLORS, ICONS} from '@Utils/constants';

const SplashScreen = () => {
  const {} = useSplashModel();

  return (
    <View style={styles.container}>
      <StatusBar translucent />
      <SafeAreaView style={styles.splashContainer}>
        <View style={styles.logoContainer}>
          <Image style={styles.logoImg} source={ICONS.Logo} />
          <Text style={styles.txtSlogan}>{translate('appName')}</Text>
        </View>
        <View style={styles.ActIndiContainer}>
          <ActivityIndicator size={'large'} color={COLORS.primary} />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SplashScreen;
