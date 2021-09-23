import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from '@expo/vector-icons'

type CardProps = {
  title: string,
  centerIcon?: string,
  bottomIcon?: string,
  colors: string[],
  text: React.ReactNode,
  width?: string | number,
}

export function Card(props: CardProps) {
  return (
    <LinearGradient
          style={[styles.card, { width: props.width }]}
          colors={props.colors}
          end={{ x: 0.9, y: 0 }}
        >
      <View style={styles.cardInside}>
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>
            {props.title}
          </Text>
          <Text style={styles.cardAddress}>
            {props.text}
          </Text>
        </View>
        {props.centerIcon && (
          <View style={styles.cardRightCenterIcon}>
            <Feather name={props.centerIcon as any} size={36} color="#fff" />
          </View>
        )}
        {props.bottomIcon && (
          <View style={styles.cardRightBottomIcon}>
            <Feather name={props.bottomIcon as any} size={28} color="#fff" />
          </View>
        )}
      </View>
    </LinearGradient>
  )
}

export const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: 20,
    height: 150,
    backgroundColor: '#191929',
    marginBottom: 24,
  },
  cardInside: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  cardText: {
    width: '70%',
    justifyContent: "space-between"
  },
  cardTitle: {
    fontSize: 21,
    color: '#fff',
    fontFamily: 'Ubuntu_700Bold',
  },
  cardRightCenterIcon: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardRightBottomIcon: {
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cardAddress: {
    fontSize: 17,
    color: '#fff',
    fontFamily: 'SourceSansPro_600SemiBold',
  },
});