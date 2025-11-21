export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps {
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
}

export interface PostProps {
  title: string;
  content: string;
  body: string;
  userId: Number;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
  };
}
