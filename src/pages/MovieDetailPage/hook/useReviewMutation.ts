import { useMutation } from '@tanstack/react-query';

import { deleteReview, postReview } from '../api/reviewApi';

export const useReviewMutation = () => {
  const addReviewMutation = useMutation({
    mutationFn: postReview,
    // onMutate: (variables) => {
    //   // A mutation is about to happen!

    //   // Optionally return a context containing data to use when for example rolling back
    //   return { id: 1 };
    // },
    onError: (error, variables, context) => {
      console.log(error);
      // An error happened!
      //   console.log(`rolling back optimistic update with id ${context.id}`)
    },
    onSuccess: (data, variables, context) => {
      // Boom baby!
      console.log(data);
    },
    onSettled: (data, error, variables, context) => {
      // Error or success... doesn't matter!
    },
  });
  const deleteReviewMutation = useMutation({
    mutationFn: deleteReview,
    onMutate: (variables) => {
      // A mutation is about to happen!

      // Optionally return a context containing data to use when for example rolling back
      return { id: 1 };
    },
    onError: (error, variables, context) => {
      console.log(error);
      // An error happened!
      //   console.log(`rolling back optimistic update with id ${context.id}`)
    },
    onSuccess: (data, variables, context) => {
      // Boom baby!
      console.log(data);
    },
    onSettled: (data, error, variables, context) => {
      // Error or success... doesn't matter!
    },
  });
  return { addReviewMutation, deleteReviewMutation };
};
