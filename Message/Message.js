import { View, Text, Image } from 'react-native'
import React from 'react'

export const Message = (props) => {
    const { name, avatar, news, message, online } = props;
    return (
        <View style={{
            width: "100%", height: 80,
            flexDirection: "row",
            padding: 13,
            margin: 2,
            borderBottomWidth: 1,
            borderColor: "#E5E4E2"

        }}>
            <View style={{ flex: 1 }} >
                <Image source={{ uri: avatar }}
                    style={{
                        width: 70, height: 70, borderRadius: 40, borderWidth: 2,

                        bottom: 12
                    }}
                />
                {
                    online &&
                    <View style={{
                        backgroundColor: "#50C878", width: 13, height: 13,
                        position: "absolute",
                        bottom: 0,
                        borderRadius: 15,
                        right: 10
                    }}>

                    </View>
                }

            </View>
            <View style={{ flex: 3, }}>
                <Text style={{
                    fontSize: 15, fontWeight: "bold", paddingLeft: 5,
                    bottom: 0
                }}>{name}</Text>
                <Text style={{
                    bottom: 0,
                    paddingLeft: 8,
                    color: "gray"
                }}>
                    {message}
                </Text>

            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                {
                    news > 0 &&
                    <View style={{
                        backgroundColor: "#E0FFFF", width: 35, height: 35, borderRadius: 25,
                        bottom: -7,
                        paddingLeft: 15,
                        margin: 9,
                        justifyContent: "center",
                        alignItems: "center"

                    }}>
                        <Text style={{
                            fontWeight: "bold", fontSize: 15, paddingRight: 27, justifyContent: "center",
                            alignItems: "center"

                        }}>{news}</Text>
                    </View>
                }

            </View>

        </View>
    )
}