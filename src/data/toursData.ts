export interface Tour {
  title: string;
  caption: string;
  img: string;
}

export const toursData: { [key: string]: Tour[] } = {
  morning: [
    { title: 'Rayta Hills', caption: 'Serene mountain curves and sunrise panoramas.', img: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/C35817/FFF8E7/png?text=Rayta+Hills' },
    { title: 'Secret Waterfall', caption: 'Hidden oasis surrounded by lush greenery.', img: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/0A1D37/FFF8E7/png?text=Waterfall' },
    { title: 'Badi Lake', caption: 'Calm waters reflecting the Aravallis.', img: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/F4B400/0A1D37/png?text=Badi+Lake' },
    { title: 'Bahubali Hills', caption: 'Udaipur’s most Instagrammed hilltop view.', img: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/C35817/FFF8E7/png?text=Bahubali+Hills' },
    { title: 'Fateh Sagar', caption: 'Classic lakeside beauty.', img: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/0A1D37/FFF8E7/png?text=Fateh+Sagar' },
  ],
  evening: [
    { title: 'Karni Mata Temple', caption: 'Ropeway view and divine sunset.', img: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/F4B400/0A1D37/png?text=Karni+Mata' },
    { title: 'City Wall', caption: 'Panoramic skyline of old Udaipur.', img: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/C35817/FFF8E7/png?text=City+Wall' },
    { title: '360° Viewpoint (Toy Train Ride)', caption: 'Breathtaking aerial perspective.', img: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/0A1D37/FFF8E7/png?text=360+View' },
    { title: 'Toy Train Ride', caption: 'Scenic route through the Aravalli foothills.', img: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/0A1D37/FFF8E7/png?text=Toy+Train' },
  ],
  day: [
    { title: 'City Palace', caption: 'Grandeur and royal heritage.', img: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/F4B400/0A1D37/png?text=City+Palace' },
    { title: 'Jagdish Temple', caption: '1651 marvel with divine charm.', img: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/C35817/FFF8E7/png?text=Jagdish+Temple' },
    { title: 'Lal Ghat', caption: 'Calm waterfront for peace and reflection.', img: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/0A1D37/FFF8E7/png?text=Lal+Ghat' },
    { title: 'Gangaur Ghat', caption: 'Iconic lakeside photo spot.', img: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/F4B400/0A1D37/png?text=Gangaur+Ghat' },
    { title: 'Bagore Ki Haveli', caption: '18th-century palace turned museum.', img: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/F4B400/0A1D37/png?text=Bagore+Ki+Haveli' },
    { title: 'Amrai Ghat', caption: 'Peaceful sunset view of palaces.', img: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/C35817/FFF8E7/png?text=Amrai+Ghat' },
  ],
};
