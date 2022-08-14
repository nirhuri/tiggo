import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../Colors';
import AddTransactionModal from './AddTransactionModal';

//this function is used to open the modal
// this componet is a button with position absolute left down side with circle style.

function AddTransaction(props: any) {
  const [modalVisible, setModalVisible] = useState(false);

  const styles = useStyle();
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.buttonTitle}>Add Transaction</Text>
      </TouchableOpacity>
      {modalVisible && (
        <AddTransactionModal setModalVisible={setModalVisible} />
      )}
    </View>
  );
}
function useStyle() {
  return StyleSheet.create({
    button: {
      position: 'absolute',
      bottom: 10,
      left: '10%',

      backgroundColor: COLORS.Primary,
      borderRadius: 8,
      height: 48,
      justifyContent: 'center',
      alignItems: 'center',
      width: '80%',
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },
    buttonTitle: {
      color: '#FFFFFF',
      fontSize: 19,
      fontWeight: '600',
      lineHeight: 22,
    },
  });
}
export default AddTransaction;
