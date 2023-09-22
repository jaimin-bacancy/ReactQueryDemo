import { useFocusEffect } from '@react-navigation/native';
import { QueryKey, useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';

export function useOnLeave(queries: QueryKey) {
  const queryClient = useQueryClient();

  useFocusEffect(
    useCallback(() => {
      return () => {
        // Called when the screen is blurred or navigated away from
        // Cancel ongoing queries here
        queryClient.cancelQueries(queries, { exact: true });
      };

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );
}
