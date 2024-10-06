import { useMutation, useQueryClient } from '@tanstack/react-query';

import { addComment, addPost, deletePost, updatePost } from '../api/TimelineApi';

export const usePostMutation = () => {
  const queryClient = useQueryClient();

  const deletePostMutation = useMutation({
    mutationFn: deletePost,
    onMutate: (variables) => {},
    onError: (error, variables, context) => {
      console.log(error);
    },
    onSuccess: (data, variables, context) => {
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ['channel'] });
    },
    onSettled: (data, error, variables, context) => {},
  });

  const addPostMutation = useMutation({
    mutationFn: addPost,

    onError: (error, variables, context) => {
      console.log(error);
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ['channel'] });
      console.log(data);
    },
    onSettled: (data, error, variables, context) => {},
  });

  const updatePostMutation = useMutation({
    mutationFn: updatePost,

    onError: (error, variables, context) => {
      console.log(error);
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ['channel'] });
      console.log(data);
    },
    onSettled: (data, error, variables, context) => {},
  });

  const addCommentMutation = useMutation({
    mutationFn: addComment,

    onError: (error, variables, context) => {
      console.log(error);
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ['channel'] });
      console.log(data);
    },
    onSettled: (data, error, variables, context) => {},
  });

  return { deletePostMutation, addPostMutation, addCommentMutation, updatePostMutation };
};
