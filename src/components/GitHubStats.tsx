
import { useQuery } from "@tanstack/react-query";
import { Github, Star } from "lucide-react";
import { Button } from "./ui/button";

const GitHubStats = () => {
  const { data } = useQuery({
    queryKey: ["github-stats"],
    queryFn: async () => {
      const response = await fetch("https://api.github.com/repos/lifeodyssey/japan-visa-calculator");
      return response.json();
    },
    refetchInterval: 30000, // Refetch every 30 seconds
  });

  return (
    <a 
      href="https://github.com/lifeodyssey/japan-visa-calculator"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex no-underline"
    >
      <Button
        variant="outline"
        size="sm"
        className="gap-2"
      >
        <Github className="h-4 w-4" />
        <Star className="h-4 w-4" />
        <span>{data?.stargazers_count || 0}</span>
      </Button>
    </a>
  );
};

export default GitHubStats;
