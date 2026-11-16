import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import MovieCard from '../components/MovieCard';
import CustomButton from '../components/CustomButton';

const MOVIES_DATA = [
  { id: '1', title: 'Inception', genre: 'Ficção Científica', rating: '8.8', description: 'Um ladrão que rouba segredos corporativos através do uso da tecnologia de compartilhamento de sonhos.' },
  { id: '2', title: 'Interstellar', genre: 'Ficção Científica', rating: '8.6', description: 'Uma equipe de exploradores viaja através de um buraco de minhoca no espaço para garantir a sobrevivência da humanidade.' },
  { id: '3', title: 'The Dark Knight', genre: 'Ação', rating: '9.0', description: 'Quando a ameaça conhecida como Coringa surge, Batman deve aceitar um dos maiores testes psicológicos e físicos.' },
];

export default function HomeScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const filteredMovies = MOVIES_DATA.filter(movie => 
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#6200ee" />
        <Text style={{ marginTop: 10 }}>Carregando catálogo...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar filme..."
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredMovies}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <MovieCard
            title={item.title}
            genre={item.genre}
            rating={item.rating}
            onSelect={() => navigation.navigate('Details', { movie: item })}
          />
        )}
        ListEmptyComponent={<Text style={styles.empty}>Nenhum filme encontrado.</Text>}
      />

      <CustomButton 
        title="Sobre o Aplicativo" 
        onPress={() => navigation.navigate('About')} 
        color="#03dac6"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 16,
  },
  empty: {
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
  },
});