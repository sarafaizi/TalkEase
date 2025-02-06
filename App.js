import { View, Text } from "react-native";
import { Message } from "./Message/Message";
import { MessageList } from "./MessageList/MessageList";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MessageList />
    </View>
  );
}
