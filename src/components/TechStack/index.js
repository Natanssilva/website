const TechStack = () => {
  const icons = [
    { name: "React.JS", icon: "/icons8-react-60.png" },
    { name: "Next.JS", icon: "/icons8-nextjs-48.png" },
    { name: "Javascript", icon: "/icons8-javascript-50.png" },
    { name: "jQuery", icon: "/icons8-jquery-50.png" },
    { name: "Tailwind CSS", icon: "/icons8-tailwindcss-48.png" },
    { name: "HTML5", icon: "/icons8-html5-50.png" },
    { name: "CSS3", icon: "/icons8-css3-50.png" },
    { name: "PHP", icon: "/icons8-php-logo-50.png" },
    { name: "Laravel", icon: "/icons8-laravel-48.png" },
    { name: "MySQL", icon: "/icons8-mysql-48.png" },
    { name: "AWS", icon: "/icons8-aws-48.png" },
    { name: "Postman", icon: "/icons8-postman-api-64.png" },
    { name: "Bitbucket", icon: "/icons8-bitbucket-is-a-web-based-version-control-repository-hosting-service-48.png" },
    { name: "Github", icon: "/icons8-github-60.png" },
    { name: "Git", icon: "/icons8-git-50.png" },
  ];
  
  return (
    <div className="bg-indigo-50 p-4 md:p-8 flex items-center justify-center">
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4 w-full max-w-3xl mx-auto">
        {icons.map((icon, index) => (
          <div key={index} className="bg-indigo-100 rounded-lg p-3 md:p-4 flex flex-col items-center justify-center shadow-md hover:scale-[1.05] cursor-pointer">
            <img src={icon.icon} alt={icon.name} className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
            <span className="mt-2 text-xs md:text-sm text-center font-medium text-gray-500">{icon.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;