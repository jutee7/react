import { Table } from "antd"
import { ColumnsType } from "antd/es/table";

interface DataType {
    key: String,
    name: String,
    lastName: String,
    age: number,
    address: String,
    tags: String[],
}

const dataSource: DataType[] = [
    {
        key: '1',
        name: "Миша",
        lastName: "Рязанцев",
        age: 19,
        address: "Свиблово",
        tags: ["музыка ", "танцы"],
    },
    {
        key: '2',
        name: 'Иван',
        lastName: "Кулаков",
        age: 19,
        address: 'Преображенская площадь',
        tags: ["прогер ", "кот василий"],
    },
    {
        key: '3',
        name: "Никита",
        lastName: "Пич",
        age: 20,
        address: "где-то в Балашихе",
        tags: ["прогер ", "ПВЗ"],
    },
];

const columns: ColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Last name',
        dataIndex: 'lastName',
        key: 'lastName',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        dataIndex: 'tags',
        key: 'tags',
    },
];


const Data = () => {
    return (
        <Table dataSource={dataSource} columns = {columns} />
    )
};

export default Data;