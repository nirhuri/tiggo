import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../../Colors';
import Transaction from './Transaction';
import {TransactionTypeEnum} from '../../screen/Home/type';
import {
  setCategories,
  TransactionsData,
  TransactionsGroupByCategories,
} from '../../store/slices/transactionSlice';
import {useDispatch, useSelector} from 'react-redux';

export const Transactions = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(state => state?.transactions.transactions);
  //prevent alout of rendering
  useEffect(() => {
    console.log('useEffectuseEffectuseEffectuseEffect');
  }, [transactions]);

  const transactionCategory = useSelector(TransactionsGroupByCategories);

  const getTransactionAmount = (transactions: any) => {
    return transactions.TransactionType === TransactionTypeEnum.Income
      ? transactions.TransactionAmount
      : -transactions.TransactionAmount;
  };
  return (
    <ScrollView>
      {/* balnse of all transactions */}
      <View>
        <Text style={styles.balance}>
          Balance:{' '}
          {transactions
            ? transactions.reduce((acc, curr) => {
                return acc + getTransactionAmount(curr);
              }, 0)
            : 0}
        </Text>
      </View>
      {Object.keys(transactionCategory)?.map((key, index) => (
        <View style={styles.container} key={key}>
          <View style={styles.categoryHeader}>
            <Text style={styles.header}>{key}</Text>
            <Text style={styles.header}>{transactionCategory[key].Amount}</Text>
          </View>
          {transactions?.map((item, index) => {
            if (item.Catagory === key) {
              return <Transaction transaction={item} key={index} />;
            }
          })}
        </View>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  balance: {
    textAlign: 'center',
    fontSize: 20,
    color: COLORS.black,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
  },

  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  container: {
    backgroundColor: COLORS.white,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    elevation: 5,
    shadowColor: COLORS.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.Primary,
  },
  amount: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.green,
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  description: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.black,
  },
});
export default Transactions;
