import { Text, View } from 'react-native';
import './globals.css';

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      {/* TODO 样式不生效 */}
      <Text className="text-5xl text-blue-500">Welcome!</Text>
    </View>
  );
}
