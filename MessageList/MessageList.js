import { View, FlatList } from 'react-native';
import React from 'react';
import { faker } from '@faker-js/faker';
import { Message } from '../Message/Message';

// Rastgele veri oluşturma
const Data = Array(30).fill(null).map(() => ({
    id: faker.string.uuid(), // Benzersiz ID
    avatar: faker.image.avatar(), // Profil resmi
    name: faker.person.fullName(), // Tam ad
    message: faker.lorem.sentence(), // Rastgele cümle
    news: faker.number.int({ min: 0, max: 10 }), // 0 ile 4 arasında rastgele bir sayı
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
