import { reviewAxiosClient } from '../../../shared/utils/axiosClient';
import { MoviePost } from '../../TimelinePage/model/article';

type Review = {
  title: string;
  image: string | null;
  channelId: string;
};

export const postReview = async ({ title, image, channelId }: Review): Promise<Review> => {
  const request = reviewAxiosClient();
  const response = await request.post('/posts/create', {
    title,
    image,
    channelId,
  });
  return response.data;
};

export const getReviewsByMovieTitle = async (title: string): Promise<MoviePost[]> => {
  const request = reviewAxiosClient();
  const response = await request.get(`/search/all/${title}`);
  return response.data;
};

export const deleteReview = async (postId: string): Promise<void> => {
  const request = reviewAxiosClient();
  await request.delete(`/posts/delete`, {
    data: {
      id: postId,
    },
  });
};
