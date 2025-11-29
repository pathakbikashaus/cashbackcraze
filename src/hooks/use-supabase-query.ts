import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface UseSupabaseQueryOptions<T> {
  queryKey: string[];
  supabaseQuery: any; // Supabase query builder
  staleTime?: number;
  enabled?: boolean;
  select?: (data: any) => T; // Optional selector to transform data
}

export function useSupabaseQuery<T>({
  queryKey,
  supabaseQuery,
  staleTime = 1000 * 60 * 5, // 5 minutes
  enabled = true,
  select,
}: UseSupabaseQueryOptions<T>) {
  return useQuery({
    queryKey,
    queryFn: async () => {
      const { data, error } = await supabaseQuery;
      if (error) {
        throw new Error(error.message);
      }
      return select ? select(data) : data;
    },
    staleTime,
    enabled,
  });
}