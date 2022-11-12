import React, {useCallback, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
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

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const styles = useStyles();

  const initTransactionsCatagory = useCallback(
    (transactions: any) => {
      let res = {};
      if (transactions) {
        res = transactions.reduce((acc: any, curr: any) => {
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
    },
    [dispatch],
  );

  useEffect(() => {
    async function fetchData() {
      const res = await getTransactions();
      console.log(res);
      dispatch(setTransactions(res));
      initTransactionsCatagory(res);
    }
    fetchData();
  }, [dispatch, initTransactionsCatagory]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.transactionView}>
        <Transactions />
      </View>
      <AddTransaction />
    </SafeAreaView>
  );
};

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
    transactionView: {
      marginBottom: 60,
    },
  });
}
