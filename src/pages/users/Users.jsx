import { useEffect, useState } from "react";
import { DataTable } from "./payments/DataTable";
import { columns } from "./payments/columns";

const getData = async () => {
  return [
    {
      id: "728Ed521",
      amount: 134,
      status: "pending",
      username: "John Doe",
      email: "johndoe@gmail.com",
    },
    {
      id: "728Ed522",
      amount: 124,
      status: "success",
      username: "Jane Doe",
      email: "janedoe@gmail.com",
    },
    {
      id: "728Ed523",
      amount: 167,
      status: "success",
      username: "Mike Galloway",
      email: "mikegalloway@gmail.com",
    },
    {
      id: "728Ed524",
      amount: 156,
      status: "failed",
      username: "Minerva Robinson",
      email: "minervarobinson@gmail.com",
    },
    {
      id: "728Ed525",
      amount: 145,
      status: "success",
      username: "Alice Smith",
      email: "alicesmith@gmail.com",
    },
    {
      id: "728Ed526",
      amount: 182,
      status: "pending",
      username: "Bob Johnson",
      email: "bobjohnson@gmail.com",
    },
    {
      id: "728Ed527",
      amount: 119,
      status: "failed",
      username: "Carol White",
      email: "carolwhite@gmail.com",
    },
    {
      id: "728Ed528",
      amount: 173,
      status: "success",
      username: "David Brown",
      email: "davidbrown@gmail.com",
    },
    {
      id: "728Ed529",
      amount: 138,
      status: "pending",
      username: "Eve Black",
      email: "eveblack@gmail.com",
    },
    {
      id: "728Ed52A",
      amount: 161,
      status: "success",
      username: "Frank Green",
      email: "frankgreen@gmail.com",
    },
  ];
};

export default function Users() {
  const [data, setData] = useState(null);

  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      const transactionData = await getData();
      setData(transactionData);
    };

    fetchData();
  }, []);

  if (!data) return <h1>Loading...</h1>;
  return (
    <div>
      <DataTable data={data} columns={columns} />
    </div>
  );
}
