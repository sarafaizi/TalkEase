import { View, FlatList } from 'react-native';
import React from 'react';
import { faker } from '@faker-js/faker';
import { Message } from '../Message/Message';


const Data = Array(30).fill(null).map(() => ({
    id: faker.string.uuid(), 
    avatar: faker.image.avatar(), 
    name: faker.person.fullName(),
    message: faker.lorem.sentence(),
    news: faker.number.int({ min: 0, max: 10 }),
    online: faker.datatype.boolean(),
}));

export const MessageList = () => {
    return (
        <View style={{ width: "100%" }}>
            <FlatList
                data={Data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Message
                        name={item.name}
                        avatar={item.avatar}
                        news={item.news}
                        message={item.message}
                        online={item.online}
                    />
                )}
            />
        </View>
    );
};
