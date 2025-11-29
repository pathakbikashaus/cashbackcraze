import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast"; // Using shadcn/ui toast for feedback

interface TrackLinkClickParams {
  link_url: string;
  link_type: 'coupon' | 'deal' | 'referral';
  item_id: string;
}

export function useLinkTracking() {
  const { toast } = useToast();

  const trackLinkClick = async ({ link_url, link_type, item_id }: TrackLinkClickParams) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      const userId = user?.id || null;

      const { error } = await supabase
        .from('link_clicks')
        .insert({
          link_url,
          link_type,
          item_id,
          user_id: userId,
        });

      if (error) {
        console.error("Error tracking link click:", error.message);
        toast({
          title: "Tracking Error",
          description: "Could not track link click. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error getting user or tracking click:", error);
      toast({
        title: "Tracking Error",
        description: "An unexpected error occurred while tracking.",
        variant: "destructive",
      });
    }
  };

  const copyToClipboard = (text: string, successMessage: string = "Copied to clipboard!") => {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast({
          title: "Success!",
          description: successMessage,
        });
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
        toast({
          title: "Copy Failed",
          description: "Could not copy to clipboard. Please try manually.",
          variant: "destructive",
        });
      });
  };

  return { trackLinkClick, copyToClipboard };
}