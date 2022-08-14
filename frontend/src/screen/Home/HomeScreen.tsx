import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {getTransactions} from '../../api/transactions';
import {COLORS} from '../../Colors';
import AddTransaction from '../../Components/Transactions/AddTransaction';
import {Transactions} from '../../Components/Transactions/Transactions';
import {
  setCategories,
  setTransactions,
} from '../../store/slices/transactionSlice';
import {TransactionTypeEnum} from './type';

const styles = useStyles();
export const HomeScreen = (Props: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const res = await getTransactions();
      console.log(res);
      dispatch(setTransactions(res));
      initTransactionsCatagory(res);
    }
    fetchData();
  }, []);
  const initTransactionsCatagory = (transactions: any) => {
    let res = {};
    if (transactions) {
      res = transactions.reduce((acc, curr) => {
        if (!acc[curr.Catagory]) {
          acc[curr.Catagory] = {
            Catagory: curr.Catagory,
            Amount: 0,
          };
        }
        acc[curr.Catagory].Amount +=
          curr.TransactionType === TransactionTypeEnum.Income
            ? curr.TransactionAmount
            : -curr.TransactionAmount;
        return acc;
      }, {});
    }
    dispatch(setCategories(res));

    return res;
  };
  return (
    <View style={styles.container}>
      <View style={{marginBottom: 60}}>
        <Transactions />
      </View>
      <AddTransaction />
    </View>
  );
};
{
  /* <View style={styles.button}>
<Transactions/>
<Text style={styles.buttonTitle}>Continue</Text>
</View> */
}
function useStyles() {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: COLORS.white,
    },

    button: {
      alignItems: 'center',
      backgroundColor: COLORS.Primary,
      borderRadius: 8,
      height: 48,
      justifyContent: 'center',
    },
    buttonTitle: {
      color: '#FFFFFF',
      fontSize: 19,
      fontWeight: '600',
      lineHeight: 22,
    },
  });
}
