import React from "react";
import AppLayout from "../layout/appLayout";
import { Table, Tag, Input, Button, Space } from "antd";
import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";

const Manage = ({ authService }) => {
  const pageTitle = "Manage Order";

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",

      // work 컴포넌트로 선택한 컴포넌트 정보를 함께 보낸다
      render: (text, work) => (
        <Link
          to={{
            pathname: "/work",
            state: { work },
          }}
        >
          {text}
        </Link>
      ),
    },
    {
      title: "State",
      key: "state",
      dataIndex: "state",
      render: (state) => (
        <>
          {state.map((tag) => {
            let color = "green";
            if (tag === "working") {
              color = "geekblue";
            } else if (tag === "worked") {
              color = "volcano";
            } else if (tag === "done") {
              color = "grey";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      address: "address",
      state: ["todo"],
      createdAt: "2016-12-24",
    },
    {
      key: "2",
      name: "Jim Green",
      state: ["working"],
      createdAt: "2020-9-2",
    },
    {
      key: "3",
      name: "Joe Black",
      state: ["done"],
      createdAt: "2021-4-14",
    },
    {
      key: "4",
      name: "Rosa Swan",
      state: ["done"],
      createdAt: "2019-7-1",
    },
    {
      key: "5",
      name: "Wiliam",
      state: ["worked"],
      createdAt: "2012-12-21",
    },
    {
      key: "6",
      name: "Agatha",
      state: ["worked"],
      createdAt: "2015-1-26",
    },
    {
      key: "7",
      name: "Kuma",
      state: ["working"],
      createdAt: "2021-7-13",
    },
    {
      key: "8",
      name: "Devian",
      state: ["done"],
      createdAt: "2019-9-29",
    },
    {
      key: "9",
      name: "Orange",
      state: ["done"],
      createdAt: "2016-3-7",
    },
    {
      key: "10",
      name: "Banana",
      state: ["done"],
      createdAt: "2021-4-1",
    },
    {
      key: "11",
      name: "Amond",
      state: ["working"],
      createdAt: "2021-11-23",
    },
  ];

  return (
    <AppLayout authService={authService} pageTitle={pageTitle}>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </AppLayout>
  );
};

export default Manage;
