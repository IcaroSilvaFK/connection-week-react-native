import { Image, Pressable } from 'native-base';
import { useMemo } from 'react';

interface IMovieListProps {
  image_cover: string;
  alt: string;
}

export function MovieListItem({ alt, image_cover }: IMovieListProps) {
  const sourceImage = useMemo(() => image_cover, [image_cover]);

  return (
    <Pressable width='208px' height='288px' marginRight={8} onPress={() => {}}>
      <Image
        source={{
          uri: sourceImage,
        }}
        alt={alt}
        width='100%'
        height='100%'
        borderRadius='lg'
      />
    </Pressable>
  );
}
