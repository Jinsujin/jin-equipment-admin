import React, { useState } from "react";
import styles from "./work.module.css";
import { useHistory } from "react-router-dom";
import { Button, Badge, Popover, Select } from "antd";
import {
  LeftOutlined,
  MailOutlined,
  FilePdfOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";

const { Option } = Select;

const Work = ({ authService }) => {
  const history = useHistory();
  const historyState = history?.location?.state;
  //   const [userId, setUserId] = useState(historyState && historyState.id);

  const [name, setName] = useState(historyState && historyState.work.name);
  const [createdAt, setCreatedAt] = useState(
    historyState && historyState.work.createdAt
  );
  const [state, setState] = useState(historyState && historyState.work.state);

  const onClickBack = () => {
    history.goBack();
  };
  const onClickSendEmail = (e) => {
    console.log("send email");
  };

  const [showMoreVisible, setShowMoreVisible] = useState(false);

  const hide = () => {
    // this.setState({
    //   visible: false,
    // });

    setShowMoreVisible(false);
  };

  const handleVisibleChange = (visible) => {
    setShowMoreVisible(visible);
  };

  function onChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <div className={styles.wrap}>
      <header className={styles.header}>
        <div className={styles.left_buttons}>
          <Button
            onClick={onClickBack}
            shape="circle"
            style={{ borderWidth: "0" }}
            icon={<LeftOutlined />}
          />
        </div>
        <div className={styles.right_buttons}>
          <Badge dot={false} offset={[-3, 8]}>
            <Button
              onClick={onClickSendEmail}
              shape="circle"
              style={{ borderWidth: "0" }}
              icon={<MailOutlined />}
            />
          </Badge>
          <Badge dot={true} offset={[-3, 8]}>
            <Button
              style={{ borderWidth: "0" }}
              shape="circle"
              icon={<FilePdfOutlined />}
            />
          </Badge>

          <Popover
            content={<a onClick={hide}>Close</a>}
            title="Title"
            trigger="click"
            visible={showMoreVisible}
            onVisibleChange={handleVisibleChange}
          >
            <Button
              style={{ borderWidth: "0" }}
              shape="circle"
              icon={<EllipsisOutlined />}
            />
          </Popover>
        </div>
      </header>
      <h2>{name}</h2>
      <div>
        <Select
          defaultValue={state}
          showSearch
          style={{ width: 200 }}
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={onChange}
          //   onFocus={onFocus}
          //   onBlur={onBlur}
          //   onSearch={onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="todo">ToDo</Option>
          <Option value="working">Working</Option>
          <Option value="worked">Worked</Option>
          <Option value="done">Done</Option>
        </Select>
      </div>
      <div>{createdAt}</div>
    </div>
  );
};

export default Work;
