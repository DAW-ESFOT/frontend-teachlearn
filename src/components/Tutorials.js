import React from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";

const Tutorials = ({ tutorialId }) => {
  const { data, error } = useSWR(`/my-tutorials`, fetcher);

  if (error) return <div>No se pudo cargar los datos</div>;
  if (!data) return <div>Cargando datos...</div>;
  // render data
  return (
    <table>
      <tbody>
        {data.data.map((tutorial) => (
          <tr key={tutorial.id}>
            <td>{tutorial.date}</td>
            <td>{tutorial.hour}</td>
            <td>{tutorial.topic}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tutorials;
