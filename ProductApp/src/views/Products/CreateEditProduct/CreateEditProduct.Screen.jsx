import React from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

//Model
import useCreateEditProductModel from './CreateEditProduct.Model';

//Styles
import {styles} from './CreateEditProduct.Styles';

//Components
import Loader from '@Components/Loader/Loader';
import Header from '@Components/Header/Header';

//Languages
import {translate} from '@Languages/I18n';

//constants
import {ICONS} from '@Utils/constants';

const CreateEditProductScreen = ({route}) => {
  const {loading, setLoading} = useCreateEditProductModel({route});

  return (
    <View style={styles.container}>
      <Header
        icon={ICONS.Canasta}
        title={translate('appName')}
        goToBack={true}
      />
      <SafeAreaView style={styles.mainContainer}></SafeAreaView>
      <Loader visible={loading} setVisible={setLoading} />
    </View>
  );
};

export default CreateEditProductScreen;
