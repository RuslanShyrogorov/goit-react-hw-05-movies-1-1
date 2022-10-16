import SearchMovie from 'components/SearchMovie/SearchMovie';
import { Box } from 'constants/Box';

export default function MoviesPage() {
  return (
    <Box as="section" backgroundColor="white" widh="100%" p="8px">
      <SearchMovie />
    </Box>
  );
}
