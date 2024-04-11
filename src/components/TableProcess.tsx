import { DetailResume } from "@services/process/processDTO";
interface TableProcessProps {
  data: DetailResume[];
}
export function TableProcess({ data }: TableProcessProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
              Descrição
            </th>

            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
              Tipo
            </th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
              Grupo
            </th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
              Entrada
            </th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
              Saída
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border-t border-gray-200">
                {item.unidDescription}
              </td>
              <td className="border-t border-gray-200">{item.typeGroup}</td>
              <td className="border-t border-gray-200">{item.group}</td>
              <td className="border-t border-gray-200">{item.start}</td>
              <td className="border-t border-gray-200">{item.end}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
