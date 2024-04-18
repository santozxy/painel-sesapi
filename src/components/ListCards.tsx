import { Card } from "./Card";
import { Detail } from "@services/process/processDTO";
import { Separator } from "./Separator";
import { motion } from "framer-motion";

interface CardListProps {
  data: Detail[];
  type?: string;
  typeDescription?: string;
  duration?: string;
}

const colors = [
  "bg-red-200",
  "bg-blue-200",
  "bg-green-200",
  "bg-yellow-200",
  "bg-indigo-200",
  "bg-purple-200",
  "bg-pink-200",
  "bg-teal-200",
  "bg-orange-200",
  "bg-cyan-200",
  "bg-gray-200",
  "bg-red-300",
  "bg-blue-300",
  "bg-green-300",
  "bg-yellow-300",
  "bg-indigo-300",
  "bg-purple-300",
  "bg-pink-300",
  "bg-teal-300",
  "bg-orange-300",
  "bg-cyan-300",
  "bg-gray-300",
  "bg-red-400",
  "bg-blue-400",
  "bg-green-400",
  "bg-yellow-400",
  "bg-indigo-400",
  "bg-purple-400",
  "bg-pink-400",
  "bg-teal-400",
  "bg-orange-400",
  "bg-cyan-400",
  "bg-gray-400",
];
export function ListCards({
  data,
  type,
  typeDescription,
  duration,
}: CardListProps) {
  return (
    <div className="flex flex-col gap-2 mx-5">
      {typeDescription && (
        <h1 className="text-xl text-center font-bold text-terciary-dark max-sm:text-sm py-5 border-b">
          {typeDescription}
        </h1>
      )}
      {type && (
        <div className="flex flex-col gap-4 justify-center items-center max-sm:flex-col mt-5">
          <h1 className="text-xl text-center text-terciary-dark font-medium max-sm:text-sm">
            {type}
          </h1>
        </div>
      )}
      <div className="flex mt-5 justify-center items-center">
        <h1 className="text-lg text-primary text-left font-medium max-sm:text-sm border rounded-md p-2">
          Duração: {duration}
        </h1>
      </div>
      <div className="flex flex-wrap mt-5 gap-6 justify-center items-center">
        {data.map((detail, index) => (
          <motion.div
            key={`${detail.unidDescription}-${index}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04, transition: { duration: 0.3 } }}
          >
            <Card
              key={`${detail.unidDescription}-${index}`}
              detail={detail}
              cardColor={colors[index]}
            />
          </motion.div>
        ))}
      </div>
      {data && <Separator />}
    </div>
  );
}
