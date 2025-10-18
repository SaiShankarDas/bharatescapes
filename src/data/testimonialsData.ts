export interface Testimonial {
  name: string;
  quote: string;
  rating: number;
  image: string;
  location: string;
}

export const testimonialsData: Testimonial[] = [
  {
    name: "Priya & Rohan",
    location: "Mumbai, India",
    quote: "Bharatescapes didn’t just show us Udaipur, they made us feel its soul. The morning tour was magical, and every detail was perfectly planned. Unforgettable!",
    rating: 5,
    image: "https://img-wrapper.vercel.app/image?url=https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400"
  },
  {
    name: "Emily Carter",
    location: "London, UK",
    quote: "The most authentic travel experience I've ever had. The team's passion is infectious. Staying at Whereabout Hostel was the highlight—such a vibrant community!",
    rating: 5,
    image: "https://img-wrapper.vercel.app/image?url=https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400"
  },
  {
    name: "Liam Chen",
    location: "Sydney, Australia",
    quote: "From the stunning views at Bahubali Hills to the serene boat rides, every moment felt like a scene from a movie. 24/7 support was a huge plus. Highly recommend!",
    rating: 5,
    image: "https://img-wrapper.vercel.app/image?url=https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=400"
  }
];
