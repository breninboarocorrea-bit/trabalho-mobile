import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function MovieCard({ title, genre, rating, onSelect }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onSelect} activeOpacity={0.8}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.genre}>Gênero: {genre}</Text>
      </View>
      <View style={styles.badge}>
        <Text style={styles.rating}>★ {rating}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  genre: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  badge: {
    backgroundColor: '#fff3cd',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
  },
  rating: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#856404',
  },
});