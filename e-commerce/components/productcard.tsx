"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ rotate: 1, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link
        href={`/product/${id}`}
        className="flex border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-xl transition duration-300"
      >
        <div className="relative w-32 h-32 flex-shrink-0">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4 flex flex-col justify-center">
          <h3 className="text-base font-semibold text-gray-800">
            {name}
          </h3>
          <p className="text-gray-600 text-sm mt-1">
            ${price.toFixed(2)}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
