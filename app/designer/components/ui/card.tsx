import "./card.modules.css";

export const Card = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className="card" {...props} />;
};

export const CardHeader = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className="card--header flex bg-opacity-10 border-b border-[#DB27771A]"
      {...props}
    />
  );
};

export const CardTitle = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className="card--title" {...props} />;
};

export const CardContent = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className="card--content h-full flex-1 flex justify-center items-center"
      {...props}
    />
  );
};

export const CardSidebar = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className="card--sidebar flex flex-col gap-4" {...props} />;
};
