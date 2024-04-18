import { Detail } from "@services/process/processDTO";
import { motion } from "framer-motion";
interface TableProcessProps {
  data: Detail[];
}

export function TableProcess({ data }: TableProcessProps) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.4 }}
      viewport={{ once: true }}
      className="overflow-x-auto rounded-lg max-sm:w-96 max-sm:overflow-x-scroll"
    >
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-primary">
            <th className="text-center border py-3 px-4 uppercase font-semibold text-base text-terciary-light">
              Unidade
            </th>
            <th className="text-center py-3 border  px-4 uppercase font-semibold text-base text-terciary-light">
              Fluxograma
            </th>
            <th className="text-center py-3 border  px-4 uppercase font-semibold text-base text-terciary-light">
              Entrada
            </th>
            <th className="text-center py-3 border  px-4 uppercase font-semibold text-base text-terciary-light">
              Saída
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              <td className="border border-gray-200 py-4 px-6 text-center">
                {item.unidDescription}
              </td>

              <td className="border border-gray-200 py-4 px-6 text-center">
                {item.group === "OUTROS"
                  ? item.group
                  : item.group.replace(/_/g, " ")}
              </td>
              <td className="border border-gray-200 py-4 px-6 text-center">
                {item.start}
              </td>
              <td className="border border-gray-200 py-4 px-6 text-center">
                {item.end}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}
