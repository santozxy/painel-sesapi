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

const backgroundColors = [
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
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-indigo-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-teal-500",
  "bg-orange-500",
  "bg-cyan-500",
  "bg-gray-500",
  "bg-red-600",
  "bg-blue-600",
  "bg-green-600",
  "bg-yellow-600",
  "bg-indigo-600",
  "bg-purple-600",
  "bg-pink-600",
  "bg-teal-600",
  "bg-orange-600",
  "bg-cyan-600",
  "bg-gray-600",
  "bg-red-700",
  "bg-blue-700",
  "bg-green-700",
  "bg-yellow-700",
  "bg-indigo-700",
  "bg-purple-700",
  "bg-pink-700",
  "bg-teal-700",
  "bg-orange-700",
  "bg-cyan-700",
  "bg-gray-700",
  "bg-red-800",
  "bg-blue-800",
  "bg-green-800",
  "bg-yellow-800",
  "bg-indigo-800",
  "bg-purple-800",
  "bg-pink-800",
  "bg-teal-800",
  "bg-orange-800",
  "bg-cyan-800",
  "bg-gray-800",
  "bg-red-900",
  "bg-blue-900",
  "bg-green-900",
  "bg-yellow-900",
  "bg-indigo-900",
  "bg-purple-900",
  "bg-pink-900",
  "bg-teal-900",
  "bg-orange-900",
  "bg-cyan-900",
  "bg-gray-900",
];

const textColors = [
  "dark:text-red-200",
  "dark:text-blue-200",
  "dark:text-green-200",
  "dark:text-yellow-200",
  "dark:text-indigo-200",
  "dark:text-purple-200",
  "dark:text-pink-200",
  "dark:text-teal-200",
  "dark:text-orange-200",
  "dark:text-cyan-200",
  "dark:text-gray-200",
  "dark:text-red-300",
  "dark:text-blue-300",
  "dark:text-green-300",
  "dark:text-yellow-300",
  "dark:text-indigo-300",
  "dark:text-purple-300",
  "dark:text-pink-300",
  "dark:text-teal-300",
  "dark:text-orange-300",
  "dark:text-cyan-300",
  "dark:text-gray-300",
  "dark:text-red-400",
  "dark:text-blue-400",
  "dark:text-green-400",
  "dark:text-yellow-400",
  "dark:text-indigo-400",
  "dark:text-purple-400",
  "dark:text-pink-400",
  "dark:text-teal-400",
  "dark:text-orange-400",
  "dark:text-cyan-400",
  "dark:text-gray-400",
  "dark:text-red-500",
  "dark:text-blue-500",
  "dark:text-green-500",
  "dark:text-yellow-500",
  "dark:text-indigo-500",
  "dark:text-purple-500",
  "dark:text-pink-500",
  "dark:text-teal-500",
  "dark:text-orange-500",
  "dark:text-cyan-500",
  "dark:text-gray-500",
  "dark:text-red-600",
  "dark:text-blue-600",
  "dark:text-green-600",
  "dark:text-yellow-600",
  "dark:text-indigo-600",
  "dark:text-purple-600",
  "dark:text-pink-600",
  "dark:text-teal-600",
  "dark:text-orange-600",
  "dark:text-cyan-600",
  "dark:text-gray-600",
  "dark:text-red-700",
  "dark:text-blue-700",
  "dark:text-green-700",
  "dark:text-yellow-700",
  "dark:text-indigo-700",
  "dark:text-purple-700",
  "dark:text-pink-700",
  "dark:text-teal-700",
  "dark:text-orange-700",
  "dark:text-cyan-700",
  "dark:text-gray-700",
  "dark:text-red-800",
  "dark:text-blue-800",
  "dark:text-green-800",
  "dark:text-yellow-800",
  "dark:text-indigo-800",
  "dark:text-purple-800",
  "dark:text-pink-800",
  "dark:text-teal-800",
  "dark:text-orange-800",
  "dark:text-cyan-800",
  "dark:text-gray-800",
  "dark:text-red-900",
  "dark:text-blue-900",
  "dark:text-green-900",
  "dark:text-yellow-900",
  "dark:text-indigo-900",
  "dark:text-purple-900",
  "dark:text-pink-900",
  "dark:text-teal-900",
  "dark:text-orange-900",
  "dark:text-cyan-900",
  "dark:text-gray-900",
];

export default function ListCards({
  data,
  type,
  typeDescription,
  duration,
}: CardListProps) {
  const verifyColorTitleGroups = (group: string, index: number) => {
    //Função que verifica a cor do título do card de acordo com o grupo
    const colorTitleOthers = "dark:text-light text-dark";
    const result = group === "OUTROS" ? colorTitleOthers : textColors[index];
    return result;
  };
  return (
    <div className="flex flex-col gap-2 mx-5">
      {typeDescription && (
        <h1 className="text-xl text-center font-bold text-dark dark:text-light max-sm:text-sm py-5 border-b dark:border-gray-500">
          {typeDescription}
        </h1>
      )}
      {type && (
        <div className="flex flex-col gap-4 justify-center items-center max-sm:flex-col mt-5">
          <h1 className="text-xl text-center text-dark dark:text-light font-medium max-sm:text-sm">
            {type}
          </h1>
        </div>
      )}
      <div className="flex mt-5 justify-center items-center">
        <h1 className="text-lg border dark:border-gray-500 text-primary dark:text-light text-left font-medium max-sm:text-sm  rounded-md p-2">
          Duração:{" "}
          {duration ? duration : "Processo não seguiu o fluxo esperado"}
        </h1>
      </div>
      <div className="flex flex-wrap mt-5 gap-6 justify-center items-center">
        {data.map((detail, index) => (
          <motion.div
            key={`${detail.unidDescription}-${index}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.01 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04, transition: { duration: 0.3 } }}
          >
            <Card
              key={`${detail.unidDescription}-${index}`}
              detail={detail}
              cardColor={backgroundColors[index]}
              titleColor={verifyColorTitleGroups(detail.group, index)}
            />
          </motion.div>
        ))}
      </div>
      {data && <Separator />}
    </div>
  );
}
