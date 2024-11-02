import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { technicals } from '@/storage/technical'

export default function TechnicalScreen() {

  const {id} = useLocalSearchParams()

  const technical = technicals.find( (item) => item.id === id)

  if (!technical) {
    return <Redirect href="/home" />
  }

  return (
    <View className='px-5 mt-10'>
      <Text className=''>{technical.name}</Text>
      <Text className=''>{technical.sector}</Text>
      <Text className=''>{technical.description}</Text>
      <Text className=''>{technical.skills}</Text>
      <Text className=''>{technical.email}</Text>
    </View>
  )
}