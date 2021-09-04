

export interface Ship {
  id: string;
  image: string;
  name: string;
}

export interface Launch {
  id: string;
  details: string;
  launch_date_unix: string;
  mission_name: string;
  links: {
    flickr_images: string[];
  };
  ships: Ship[];
}