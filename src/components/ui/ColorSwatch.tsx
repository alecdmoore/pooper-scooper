// src/components/ui/ColorSwatch.tsx
import React from "react";

interface ColorSwatchProps {
  color: string;
  name: string;
}

export default function ColorSwatch({ color, name }: ColorSwatchProps) {
  return (
    <div className="flex flex-col">
      <div
        className={`h-20 w-full rounded-md mb-2`}
        style={{ backgroundColor: `var(--${color.replace("-", "-")})` }}
      >
        <div className={`h-full w-full bg-${color} rounded-md`}></div>
      </div>
      <div className="text-xs text-gray-700">{name}</div>
      <div className="text-xs text-gray-500">bg-{color}</div>
    </div>
  );
}
