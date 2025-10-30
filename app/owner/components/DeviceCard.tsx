"use client";

import Image from "next/image";

type DeviceCardProps = {
	id?: string;
	name?: string;
	image?: string;
	lesseeName?: string;
	avatar?: string;
	price?: string;
	status?: string;
	startDate?: string;
	location?: string;
	onReview?: () => void;
};

export default function DeviceCard({
	id,
	name = "Device Name",
	image,
	lesseeName = "Lessee Name",
	avatar,
	price = "Total Price",
	status = "Status",
	startDate = "Renting Duration",
	location = "Pick up or return Location",
	onReview,
}: DeviceCardProps) {
	return (
		<article
			aria-labelledby={id ? `device-${id}` : undefined}
			style={{
				background: "#ffffff",
				borderRadius: 10,
				padding: 24,
				boxShadow:
					"0 10px 20px rgba(16,24,40,0.08), 0 2px 6px rgba(16,24,40,0.04)",
				width: 320,
				display: "flex",
				flexDirection: "column",
				gap: 12,
			}}
		>
			<div
				style={{
					height: 120,
					borderRadius: 6,
					background: image ? "transparent" : "#dbeafe",
					overflow: "hidden",
				}}
			>
				{image ? (
					// next/image is fine if the project accepts remote/local images
					<Image src={image} alt={name} width={600} height={240} style={{objectFit: 'cover', width: '100%', height: '100%'}} />
				) : null}
			</div>

			<div style={{ padding: "0 4px" }}>
				<h3 id={id ? `device-${id}` : undefined} style={{ margin: 0, fontSize: 16, fontWeight: 800 }}>
					{name}
				</h3>

				<div style={{ marginTop: 8, fontSize: 12, color: "#374151", lineHeight: 1.4 }}>
					<div>{startDate}</div>
					<div>{status}</div>
					<div>Pick up or return time</div>
					<div>{location}</div>
					<div>{price}</div>
				</div>
			</div>

			<div style={{ borderBottom: "1px solid #e6e9ef", margin: "8px 0" }} />

			<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
				<div style={{ display: "flex", alignItems: "center", gap: 12 }}>
					<div style={{ width: 48, height: 48, borderRadius: 9999, overflow: "hidden", background: "#f3f4f6" }}>
						{avatar ? (
							<Image src={avatar} alt={lesseeName} width={48} height={48} style={{ objectFit: 'cover' }} />
						) : (
							<div style={{ width: 48, height: 48, background: '#fde68a' }} />
						)}
					</div>

					<div style={{ display: "flex", flexDirection: "column" }}>
						<span style={{ fontSize: 14, fontWeight: 700 }}>{lesseeName}</span>
						<button
							type="button"
							onClick={() => onReview?.()}
							style={{
								marginTop: 6,
								padding: "6px 12px",
								borderRadius: 8,
								border: "1px solid #111827",
								background: "transparent",
								fontSize: 12,
								cursor: "pointer",
							}}
						>
							Review
						</button>
					</div>
				</div>
			</div>
		</article>
	);
}