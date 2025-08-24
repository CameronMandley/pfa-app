import { View, Text, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={s.container}>
      <Text style={s.title}>Welcome to PFA App</Text>
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: '700' },
});
