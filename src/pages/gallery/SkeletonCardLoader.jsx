import Skeleton from '@mui/material/Skeleton';
import { Stack } from '@mui/material';

const SkeletonCardLoader = () => {
  return (
    <Stack height={400} maxWidth={300}>
      <Skeleton variant="rectangular" height={180} />
      <Skeleton variant="text" height={80} />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
    </Stack>
  );
};

export default SkeletonCardLoader;
