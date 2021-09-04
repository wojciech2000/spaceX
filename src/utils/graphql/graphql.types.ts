export interface Launch {
  id: string;
  details: string;
  launch_date_unix: string;
  mission_name: string;
  links: {
    flickr_images: string[];
  };
}

export interface LaunchDetails extends Launch {
  ships: {
    id: string;
    image: string;
    name: string;
  };
}
