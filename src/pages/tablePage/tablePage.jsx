import { useState, useEffect } from "react";
import { Form, Input, InputNumber, Popconfirm, Table, Typography } from "antd";
import _ from "lodash";
import { getList } from "./services";
import styles from "./tablePage.less";
import CardItem from "./components/cardItem";
import CardTitle from "./components/Title";

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
const TablePage = () => {
  const originData = [];

  for (let i = 0; i < 10; i++) {
    const aaa = Math.random();
    originData.push({
      key: aaa.toString(),
      name: `Edward ${aaa}`,
      age: 32,
      address: `London Park no. ${aaa}`,
      children: [
        {
          key: aaa.toString() + 1,
          name: `Edward ${aaa + 99}sdwqadawdsss`,
          age: 32,
          address: `London Park no. ${aaa + 99}`,
        },
      ],
    });
  }
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState("");
  const isEditing = (record) => record.key === editingKey;

  const [data2, setData2] = useState([]);

  const initList = async () => {
    const res = await getList();

    console.log("res", res);
    setData2(res.data);
  };

  useEffect(() => {
    initList();
  }, []);

  const edit = (record) => {
    form.setFieldsValue({
      name: "",
      age: "",
      address: "",
      ...record,
    });
    setEditingKey(record.key);
  };
  const cancel = () => {
    setEditingKey("");
  };

  const changeTreePostionData = (tree, key, childrenItem) => {
    if (tree[0].key === key) {
      // 根节点判定
      tree[0].name = childrenItem.name;
      tree[0].age = childrenItem.age;
      tree[0].address = childrenItem.address;
      return tree;
    }
    const searchId = (source, key) => {
      // 开启递归
      for (let i = 0; i < source.length; i++) {
        const item = source[i];
        if (item.key === key) {
          item.name = childrenItem.name;
          item.age = childrenItem.age;
          item.address = childrenItem.address;
          return;
        }
        if (item.children) {
          // 只对非末端节点进行递归
          searchId(item.children, key);
        }
      }
    };
    searchId(tree[0].children, key);
    return tree;
  };

  const addPage = (key, type) => {
    const deepData = _.cloneDeep(data);
    const newItem = {
      key: Math.random(),
      name: "",
      age: "",
      address: "",
    };
    const index = deepData.findIndex((item) => key === item.key);
    deepData[index].children.push(newItem);
    const newData = deepData;
    setData(newData);
    setEditingKey(newItem.key);
  };
  const save = async (key, type) => {
    try {
      const row = await form.validateFields();

      console.log("做的修改", row);
      const deepData = _.cloneDeep(data);

      if (type === "add") {
      } else {
        const newData = changeTreePostionData(deepData, key, row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };
  const columns = [
    {
      title: "name",
      dataIndex: "name",
      width: "25%",
      editable: true,
    },
    {
      title: "age",
      dataIndex: "age",
      width: "15%",
      editable: true,
    },
    {
      title: "address",
      dataIndex: "address",
      width: "40%",
      editable: true,
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) => {
        console.log("record", record);
        const editable = isEditing(record);
        if (record.children) {
          if (editable) {
            return (
              <span>
                <Typography.Link
                  onClick={() => save(record.key, "edit")}
                  style={{
                    marginRight: 8,
                  }}
                >
                  Save
                </Typography.Link>
                <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                  <a>Cancel</a>
                </Popconfirm>
              </span>
            );
          } else {
            return (
              <span>
                <Typography.Link
                  onClick={() => addPage(record.key, "add")}
                  style={{
                    marginRight: 8,
                  }}
                >
                  新增子页面
                </Typography.Link>
                <Typography.Link
                  disabled={editingKey !== ""}
                  onClick={() => edit(record)}
                >
                  Edit
                </Typography.Link>
              </span>
            );
          }
        } else {
          if (editable) {
            return (
              <span>
                <Typography.Link
                  onClick={() => save(record.key, "edit")}
                  style={{
                    marginRight: 8,
                  }}
                >
                  Save
                </Typography.Link>
                <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                  <a>Cancel</a>
                </Popconfirm>
              </span>
            );
          } else {
            return (
              <Typography.Link
                disabled={editingKey !== ""}
                onClick={() => edit(record)}
              >
                Edit
              </Typography.Link>
            );
          }
        }
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "age" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  console.log("data2", data2);
  return (
    <div>
      {/* <Form form={form} component={false} className={styles.formPage}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
          className={styles.table}
        />
      </Form> */}

      <div className={styles.box}>
        {data2?.map((res, index) => {
          return (
            <div key={index} className={styles.cardBox}>
              <div className={styles.title}>我是标题</div>
              <CardItem id={res.title} />
              <CardTitle id={res.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TablePage;
