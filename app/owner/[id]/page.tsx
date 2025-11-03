import DeviceDetailClient from "../DeviceDetailClient";

type Props = { params: Promise<{ id: string }> };

export default async function DeviceDetail({ params }: Props) {
  // `params` can be a Promise in some Next.js configurations — await it first
  const { id } = await params;

  // Example static data for preview — replace with fetch when API is ready
  const device = {
    id,
    name: `Device ${id}`,
    price: "$15/day",
    lesseeName: "Nut",
    avatar: "/vercel.svg",
  };

  // Small related/second device for preview purposes
  const device2 = {
    id: `${id}-2`,
    name: `Related ${id}`,
    price: "$10/day",
    lesseeName: "Thank",
    avatar: "/vercel.svg",
  };

  // Small related/second device for preview purposes
  const device3 = {
    id: `${id}-3`,
    name: `Related ${id}`,
    price: "$10/day",
    lesseeName: "Mek",
    avatar: "/vercel.svg",
  };

  // Render a client wrapper that manages the review popup for cards
  return <DeviceDetailClient device={device} related={[device2, device3]} />;
}