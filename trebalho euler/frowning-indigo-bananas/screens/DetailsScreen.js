import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function DetailsScreen({ route, navigation }) {
  const { movie } = route.params || {};

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{movie?.title}</Text>
        <Text style={styles.genre}>Gênero: {movie?.genre}</Text>
        <Text style={styles.rating}>Avaliação: ★ {movie?.rating}</Text>
        <Text style={styles.description}>{movie?.description}</Text>
      </View>

      <CustomButton 
        title="Voltar" 
        onPress={() => navigation.goBack()} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  genre: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  rating: {
    fontSize: 16,
    color: '#d97706',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
  },
});