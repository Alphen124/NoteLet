"use client";

import React, { useState } from "react";
import DeviceCard from "./components/DeviceCard";
import Image from "next/image";

type Device = { id: string; name: string; price: string; lesseeName: string; avatar?: string };

export default function DeviceDetailClient({ device, related }: { device: Device; related: Device[] }) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<Device | null>(null);
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");

  function openReview(d: Device) {
    setCurrent(d);
    setRating(5);
    setText("");
    setOpen(true);
  }

  function close() {
    setOpen(false);
    setCurrent(null);
  }

  function confirm() {
    // Replace with API call when backend exists
    console.log("submitReview", { for: current?.id, rating, text });
    close();
  }

  return (
    <main style={{ padding: 48, display: "flex", justifyContent: "center" }}>
      <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
        <div style={{ maxWidth: 360 }}>
          <DeviceCard
            id={device.id}
            name={device.name}
            price={device.price}
            lesseeName={device.lesseeName}
            avatar={device.avatar}
            onReview={() => openReview(device)}
          />
        </div>

        {related.map((r) => (
          <div key={r.id} style={{ maxWidth: 360 }}>
            <DeviceCard id={r.id} name={r.name} price={r.price} lesseeName={r.lesseeName} avatar={r.avatar} onReview={() => openReview(r)} />
          </div>
        ))}
      </div>

      {open && current && (
        <div style={{ position: "fixed", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 60 }}>
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.35)" }} onClick={close} />

          <div style={{ width: 680, background: "#fff", borderRadius: 8, boxShadow: "0 10px 30px rgba(2,6,23,0.2)", padding: 20, zIndex: 70 }}>
            <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700 }}>รีวิวผู้ใช้</h3>
            <div style={{ height: 1, background: "#e6e9ef", margin: "12px 0 18px" }} />

            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 56, height: 56, borderRadius: 9999, overflow: "hidden" }}>
                {current.avatar ? (
                  <Image src={current.avatar} alt={current.lesseeName} width={56} height={56} style={{ objectFit: "cover" }} />
                ) : (
                  <div style={{ width: 56, height: 56, background: "#fde68a" }} />
                )}
              </div>

              <div style={{ fontWeight: 700 }}>{current.lesseeName}</div>
            </div>

            <div style={{ marginTop: 12 }}>
              <div style={{ display: "flex", gap: 8 }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setRating(s)}
                    style={{
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      fontSize: 24,
                      color: s <= rating ? "#f59e0b" : "#cbd5e1",
                    }}
                    aria-label={`${s} star`}
                  >
                    ★
                  </button>
                ))}
              </div>

              <div style={{ marginTop: 12 }}>
                <textarea
                  placeholder="Write your review"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  style={{ width: "100%", minHeight: 120, borderRadius: 6, border: "1px solid #e6e9ef", padding: 12 }}
                />
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 12 }}>
                <button type="button" onClick={close} style={{ padding: "8px 12px", borderRadius: 6, background: "#eef2ff", border: "none", cursor: "pointer" }}>
                  Cancel
                </button>

                <button type="button" onClick={confirm} style={{ padding: "8px 14px", borderRadius: 6, background: "#3b82f6", color: "white", border: "none", cursor: "pointer" }}>
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}