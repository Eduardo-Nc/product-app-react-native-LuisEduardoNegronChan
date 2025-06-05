import React from 'react';
import {View, SafeAreaView, Text, TouchableOpacity} from 'react-native';

//Librerias
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

//Model
import useCreateEditProductModel from './CreateEditProduct.Model';

//Styles
import {styles} from './CreateEditProduct.Styles';

//Components
import Loader from '@Components/Loader/Loader';
import Header from '@Components/Header/Header';
import TxtInput from '@Components/TxtInput/TxtInput';
import PopupMessage from '@Components/PopupMessage/PopupMessage';

//Languages
import {translate} from '@Languages/I18n';

//constants
import {ICONS} from '@Utils/constants';

const CreateEditProductScreen = ({route}) => {
  const {
    loading,
    setLoading,
    isCreate,
    productData,
    onChangeTxt,
    saveProduct,
    isError,
    isVisible,
    setIsVisible,
    goToBack,
  } = useCreateEditProductModel({route});

  return (
    <View style={styles.container}>
      <Header
        icon={ICONS.Canasta}
        title={translate('appName')}
        goToBack={true}
      />
      <SafeAreaView style={styles.mainContainer}>
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled"
          style={styles.keyboardContainer}>
          <Text style={styles.txtTitle}>
            {isCreate
              ? translate('products.add')
              : translate('products.update')}
          </Text>

          <TxtInput
            value={productData?.title}
            title={'Titulo'}
            onChangeTxt={onChangeTxt}
            isEditable={!loading}
            field="title"
          />
          <TxtInput
            value={productData?.price}
            title={'Precio'}
            onChangeTxt={onChangeTxt}
            isEditable={!loading}
            field="price"
            type="number-pad"
          />
          <TxtInput
            value={productData?.description}
            title={'Descripción'}
            onChangeTxt={onChangeTxt}
            isEditable={!loading}
            field="description"
          />
          <TxtInput
            value={productData?.category}
            title={'Categoría'}
            onChangeTxt={onChangeTxt}
            isEditable={!loading}
            field="category"
          />

          <TouchableOpacity
            style={styles.containerSave}
            onPress={() => {
              saveProduct();
            }}>
            <Text style={styles.txtSave}>{translate('products.save')}</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </SafeAreaView>

      <Loader visible={loading} setVisible={setLoading} />
      <PopupMessage
        isError={isError}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        action={isError ? setIsVisible(false) : goToBack}
      />
    </View>
  );
};

export default CreateEditProductScreen;
