import { ScrollView, Button, Text } from 'native-base';
import { useState } from 'react';
import { Dimensions } from 'react-native';
import { FilmList } from '../../components/FilmList';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { films } from '../../mocks/filmeList';

export function Home() {
  const [inputValue, setInputValue] = useState('');

  return (
    <ScrollView
      flex={1}
      backgroundColor='primary.500'
      contentContainerStyle={{ paddingBottom: 32 }}
      showsVerticalScrollIndicator={false}
      pt={6}
      pl={4}
      pr={4}
    >
      <Header />
      <Input
        placeholder='Search by movie'
        mt={8}
        maxLength={25}
        autoCorrect={false}
        icon='search'
        value={inputValue}
        onChangeText={setInputValue}
      />
      <FilmList title='Mais assistidos' data={films} />
      <FilmList title='Top Rated' data={films} />
      <FilmList title='Upcoming' data={films} />
    </ScrollView>
  );
}
