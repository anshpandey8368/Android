import { Image, StyleSheet, Text, View , SafeAreaView, Button, TouchableOpacity} from 'react-native'
import React from 'react'

const App = () => {
  const [count, setCount] = React.useState(0)

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Tanish ki gaand mei kitne lode hai ?</Text>
      <Text style={styles.text1}>{count}</Text>
      <Image style={styles.img} source={require('./2.jpg')} />
      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <Text style={styles.btn}>Click</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'black'
  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  img: {
    width: 200,
    height: 200,
  },
  btn: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 5
  }
})