import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const CardQuestion = ({ no, question, answers }) => {
    return (
        <View style={styles.questionContainer}>
            <Text style={styles.questionText}>ข้อที่ {no} {" "}{question}</Text>
            <FlatList
                data={answers}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.optionText}>{item}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item}
                numColumns={2}
                columnWrapperStyle={styles.optionRow}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    questionContainer: {
        marginBottom: 24,
        width: '100%',
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    questionText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#333',
    },
    optionRow: {
        justifyContent: 'space-between',
    },
    optionButton: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 12,
        marginHorizontal: 4,
        borderRadius: 8,
        borderColor: '#ddd',
        borderWidth: 1,
        alignItems: 'center',
        marginBottom: 5,
    },
    optionText: {
        fontSize: 16,
        color: '#333',
    },
});

export default CardQuestion;
