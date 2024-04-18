import { Detail } from "@services/process/processDTO";
interface TableProcessProps {
  data: Detail[];
}

export function TableProcess({ data }: TableProcessProps) {
  function renameGroup(group: string) {
    const formattedGroup = group.replace(/_/g, " ");
    const groupRename =
      formattedGroup === "PAGAMENTO"
        ? "FUNSAUDE"
        : formattedGroup === "GABINETE"
        ? "GAB"
        : formattedGroup === "UNIDADE FISCAL"
        ? "UNIDADE EXECUTANTE"
        : formattedGroup === "GERENCIA CONTRATO"
        ? "GESTÃO DE CONTRATOS"
        : formattedGroup;
    return groupRename;
  }

  return (
    <div className="overflow-x-auto rounded-lg max-sm:w-96 max-sm:overflow-x-scroll">
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
                {item.group === "OUTROS" ? item.group : renameGroup(item.group)}
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
    </div>
  );
}
