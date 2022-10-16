import { Box } from 'constants/Box';
import TrendMovies from '../components/TrendMovies/TrendMovies';

export default function HomePage() {
  return (
    <Box as="section" backgroundColor="white" widh="100%" p="8px">
      <TrendMovies />
    </Box>
  );
}
