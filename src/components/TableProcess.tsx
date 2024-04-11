import { DetailResume } from "@services/process/processDTO";
interface TableProcessProps {
  data: DetailResume[];
}
export function TableProcess({ data }: TableProcessProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm text-gray-700">
              Descrição
            </th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm text-gray-700">
              Tipo
            </th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm text-gray-700">
              Grupo
            </th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm text-gray-700">
              Entrada
            </th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm text-gray-700">
              Saída
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="border-t border-gray-200 py-4 px-6">
                {item.unidDescription}
              </td>
              <td className="border-t border-gray-200 py-4 px-6">
                {item.typeGroup}
              </td>
              <td className="border-t border-gray-200 py-4 px-6">
                {item.group}
              </td>
              <td className="border-t border-gray-200 py-4 px-6">
                {item.start}
              </td>
              <td className="border-t border-gray-200 py-4 px-6">{item.end}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
