import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../Colors';
import {TransactionTypeEnum} from '../../screen/Home/type';

const Transaction = (props: any) => {
  const formatDate = (date: any) => {
    const dateObj = new Date(date);
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    const minutes = dateObj.getMinutes();
    const hours = dateObj.getHours();
    return `${month}/${day}/${year} `;
  };

  const {transaction} = props;
  const {
    AccountId,
    Title,
    Catagory,
    TransactionType,

    TransactionId,
    TransactionDate,
    TransactionUpdate,
    TransactionAmount,
    TransactionDescription,
  } = transaction;
  const {container} = styles;
  return (
    <View style={container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <Text style={styles.title}>{Title}</Text>
        {/* <Text style={styles.description}>{TransactionDescription}</Text> */}
        <Text
          style={
            TransactionType === TransactionTypeEnum.Income
              ? styles.Income
              : styles.Expense
          }>
          {TransactionAmount}
        </Text>
        <Text style={styles.samlldownDate}>{formatDate(TransactionDate)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  samlldownDate: {
    fontSize: 12,
    color: COLORS.gray,
    textAlign: 'auto',
  },
  Income: {
    color: COLORS.green,
    fontSize: 20,
    fontWeight: 'bold',
  },
  Expense: {
    color: COLORS.red,
    fontSize: 20,
    fontWeight: 'bold',
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
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  amount: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.green,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  description: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.black,
  },
});
export default Transaction;
