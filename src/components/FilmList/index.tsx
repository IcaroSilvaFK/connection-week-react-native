import { Box, FlatList, Heading, Image, Text } from 'native-base';
import { Dimensions } from 'react-native';
import Carousel, { CarouselProps } from 'react-native-snap-carousel';

import reactotron from '../../configs/reactotron-config';
import { MovieListItem } from '../MovieListItem';

interface IFilmListProps {
  title: string;
  data: {
    id: string;
    image_cover: string;
    title: string;
  }[];
}

const screenWidth = Dimensions.get('window').width;
const ITEM_WIDTH = 208;
const MARGIN_BETWEEN_ITEMS = 16;

export function FilmList({ data, title }: IFilmListProps) {
  const ListEmptyComponents = () => (
    <Text color='gray.100' fontSize='md' fontFamily='heading'>
      The list is empty
    </Text>
  );

  return (
    <Box flex={1}>
      <Heading fontFamily='heading' fontWeight='semibold' mt={8}>
        {title}
      </Heading>
      <Box margin={2} />
      <Carousel
        sliderWidth={screenWidth}
        itemWidth={ITEM_WIDTH + MARGIN_BETWEEN_ITEMS}
        data={data}
        activeSlideAlignment='start'
        renderItem={({ item }) => (
          <MovieListItem image_cover={item.image_cover} alt={item.title} />
        )}
        keyExtractor={({ id }) => id}
        ListEmptyComponent={<ListEmptyComponents />}
      />
    </Box>
  );
}
/*

  
*/
