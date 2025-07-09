import { IconCloud } from "@/components/ui/icon-cloud";

// System Design Icon Cloud Background
export const SystemDesignIconCloud = () => {
  const systemDesignSlugs = [
    "postgresql",
    "mongodb",
    "redis",
    "mysql",
    "amazonwebservices",
    "googlecloud",
    "microsoftazure",
    "docker",
    "kubernetes",
    "nginx",
    "apache",
    "elasticsearch",
    "rabbitmq",
    "apachekafka",
    "nodejs",
    "react",
    "nextdotjs",
    "express",
    "fastapi",
    "django",
    "spring",
    "graphql",
    "restapi",
    "microservices",
    "terraform",
    "jenkins",
    "github",
    "git",
    "prometheus",
    "grafana",
  ];

  const images = systemDesignSlugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}.svg`,
  );

  return (
    <div className="absolute right-2 top-4 h-[300px] w-full scale-75 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90">
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
        <IconCloud images={images} />
      </div>
    </div>
  );
};